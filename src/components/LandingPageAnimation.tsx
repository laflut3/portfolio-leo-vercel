// components/LandingPageAnimation.tsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useRouter } from 'next/navigation';

const LandingPageAnimation = () => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const bannerRefs = useRef<HTMLDivElement[]>([]);
  const router = useRouter();

  useEffect(() => {
    const animatePageIn = () => {
      const [bannerOne, bannerTwo, bannerThree, bannerFour] = bannerRefs.current;

      if (bannerOne && bannerTwo && bannerThree && bannerFour) {
        const tl = gsap.timeline();

        tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
          yPercent: 0,
        }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
          yPercent: 100,
          stagger: 0.2,
        });
      }
    };

    animatePageIn();
  }, []);

  const handleEnterSite = () => {
    const animatePageOut = () => {
      const [bannerOne, bannerTwo, bannerThree, bannerFour] = bannerRefs.current;

      if (bannerOne && bannerTwo && bannerThree && bannerFour) {
        const tl = gsap.timeline();

        tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
          yPercent: -100,
        }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
          yPercent: 0,
          stagger: 0.2,
          onComplete: () => {
            router.push('/home');
          },
        });
      }
    };

    animatePageOut();
  };

  return (
    <div className="landing-page">
      <div className="overlay" ref={overlayRef}>
        <div className="banner" ref={el => { if (el) bannerRefs.current[0] = el; }} id="banner-1"></div>
        <div className="banner" ref={el => { if (el) bannerRefs.current[1] = el; }} id="banner-2"></div>
        <div className="banner" ref={el => { if (el) bannerRefs.current[2] = el; }} id="banner-3"></div>
        <div className="banner" ref={el => { if (el) bannerRefs.current[3] = el; }} id="banner-4"></div>
        <button className="enter-button" onClick={handleEnterSite}>
          Enter the Site
        </button>
      </div>
    </div>
  );
};

export default LandingPageAnimation;
