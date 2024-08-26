"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getActualSituation, getAllSkills } from "@/db/queries/select";
import ThirdSectionContainer from "@/components/home/ThirdSectionContainer";
import bg_first_sec from "../../public/assets/bg-trou-noir2.png";
import bg_third_sec from "../../public/assets/planet-icon.png";
import FifthSection from "@/components/home/FifthSection";

interface Skill {
  id: number;
  title: string;
  content: string;
  image: string;
}

export default function HomePage() {
  const [actualSituation, setActualSituation] = useState('');
  const [loading, setLoading] = useState(true);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getActualSituation();
        if (data && data.content) {
          setActualSituation(data.content);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération ou de la création de la situation actuelle :', error);
      } finally {
        setLoading(false);
      }
    };

    const fetchSkills = async () => {
      try {
        const skillsData = await getAllSkills();
        setSkills(skillsData);
      } catch (error) {
        console.error('Erreur lors de la récupération des compétences :', error);
      }
    };

    fetchSkills();
    fetchData();
  }, []);

  const handleNavClick = (targetId: string) => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="w-full">
      <section
        className="min-h-[105vh] flex flex-col justify-center items-start w-full pl-4 md:pl-[5%] bg-primary relative first-section"
        style={{ background: `url(${bg_first_sec.src}) no-repeat center center/cover` }}
        id="top"
      >
        <div className="flex items-center border-secondary p-4 md:p-7">
          {isMobile ? (
            <div className="flex items-center justify-center w-full mb-2">
              <h3 className="text-white text-xl md:text-2xl">Bienvenue sur mon portfolio</h3>
              <Image src='assets/leo-photo2.svg' alt="Photo de Léo" width={60} height={60} className="rounded-full ml-12 border-[3px] object-cover object-center border-white" style={{ objectFit: 'contain' }} />
            </div>
          ) : (
            <h3 className="text-white text-xl md:text-2xl">Bienvenue sur mon portfolio</h3>
          )}
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-primary font-erasbold text-stroke w-full md:w-3/4 pt-6 md:pt-9">
          Salut je suis Léo Full Stack Developer
        </h1>
        <p className="text-lg md:text-xl text-primary text-stroke pt-4 md:pt-[5%] w-full md:w-1/2">
          {loading ? 'Chargement...' : actualSituation}
        </p>
        <div className="absolute bottom-10 left-0 p-4">
          <button className="text-primary text-lg md:text-xl p-2 rounded flex items-center" onClick={() => handleNavClick("contactUs")}>
            Nous connecter
            <Image src="/assets/special-arrow-icon.svg" alt="special arrow icon" width={32} height={32} className="pl-2" style={{ objectFit: 'contain' }} />
          </button>
        </div>
        <div className="absolute bottom-0 right-0 hidden md:block">
          <div className="overflow-hidden">
            <div className="animate-slide-in-from-right">
              <Image src='/assets/leo-photo.svg' alt="Photo de Léo" width={700} height={949} style={{ objectFit: 'contain' }} />
            </div>
          </div>
        </div>
      </section>
      <div id="skills"></div>
      <section className="min-h-screen relative z-10 mt-[-15px] second-section">
        <div className="bg-tertiary py-12 w-full md:w-3/4 mx-auto flex flex-col items-center rounded-3xl">
          <h2 className="text-3xl md:text-4xl text-secondary font-bold mb-4">Compétences</h2>
          <p className="mb-8 text-tertiary text-center w-full md:w-2/3">
            Un aperçu de mon expertise dans le domaine :
          </p>
          <div className="skills flex flex-wrap justify-center gap-12">
            {skills.map(skill => (
              <SkillCard key={skill.id} title={skill.title} content={skill.content} image={skill.image} id={0} />
            ))}
          </div>
          <div className="tools pt-16 w-full md:w-3/4 mx-auto">
            <h4 className="text-xl md:text-2xl text-tertiary font-normal">Outils :</h4>
            <div className="flex flex-wrap items-start justify-start gap-4 pt-4 ml-14">
              <Image src="/assets/git-icon.svg" alt="git icon" width={40} height={40} style={{ objectFit: 'contain' }} />
              <Image src="/assets/burp-icon.svg" alt="burp icon" width={40} height={40} style={{ objectFit: 'contain' }} />
              <Image src="/assets/docker-icon.svg" alt="docker icon" width={40} height={40} style={{ objectFit: 'contain' }} />
              <Image src="/assets/apache-icon.svg" alt="apache icon" width={40} height={40} style={{ objectFit: 'contain' }} />
              <Image src="/assets/scrum-icon.svg" alt="scrum icon" width={40} height={40} style={{ objectFit: 'contain' }} />
              <Image src="/assets/oracle-server-icon.svg" alt="oracle server icon" width={40} height={40} style={{ objectFit: 'contain' }} />
              <Image src="/assets/windows-server-icon.svg" alt="windows server icon" width={40} height={40} style={{ objectFit: 'contain' }} />
              <Image src="/assets/linux-icon.svg" alt="linux icon" width={40} height={40} style={{ objectFit: 'contain' }} />
              <Image src="/assets/wireshark-icon.svg" alt="wireshark icon" width={40} height={40} style={{ objectFit: 'contain' }} />
            </div>
          </div>
          <div className="protocols pt-16 w-full md:w-3/4 mx-auto">
            <h4 className="text-xl md:text-2xl text-tertiary font-normal">Protocoles :</h4>
            <p className="text-tertiary text-center w-full pr-40 mt-2 md:w-3/4">
              tcp/ip, POST, GET, DELETE, PUT, HEAD, csma/cd, DNS, DHCP, ARP, OSPF, UDP, Proxy
            </p>
          </div>
        </div>
      </section>
      <section className="min-h-screen relative third-section" id="projects">
        <div className="absolute inset-0 overflow-hidden">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full md:max-w-screen-lg max-h-fit overflow-hidden">
                <Image
                  src={bg_third_sec}
                  alt="Planet"
                  fill
                  style={{ objectFit: 'cover', filter: 'blur(3px)', opacity: '0.5' }}
                  className="absolute inset-0 -z-10"
                />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-primary bg-opacity-40 backdrop-blur-sm -z-20" />
        </div>
        <div className="relative h-full z-10 text-center">
          <h2 className="text-3xl md:text-4xl text-primary font-bold mb-4">Projets</h2>
          <p className="mb-8 text-primary max-w-3xl mx-auto">
            Découvrez une sélection de mes réalisations, incluant des sites web hébergés sur mon GitHub,
            des projets développés pour des clients, ainsi que diverses contributions à des initiatives collaboratives.
          </p>
          <ThirdSectionContainer />
        </div>
      </section>

      <div id="company"></div>
      <section className="py-8 mt-5 fourth-section">
        <div className="flex items-center md:flex-row md:items-center justify-center w-full mb-12">
          <h2 className="text-3xl md:text-4xl text-primary font-bold mb-4">FLEO-Web</h2>
          <Image src="/assets/fleo-logo.svg" alt="FLEO-Web" width={80} height={80} style={{ objectFit: 'contain' }} />
        </div>
        <div className="flex flex-col md:flex-row w-full mx-auto">
          <div className="flex justify-center md:justify-start w-full md:w-1/2 relative">
            <Image src="/assets/rocket-icon.svg" alt="Rocket" width={300} height={600} className="relative z-0 left-0 md:left-40 bottom-0 md:bottom-32" style={{ objectFit: 'contain' }} />
            <Image
              src="/assets/cloud-icon.svg"
              alt="Cloud"
              width={300}
              height={300}
              className="absolute left-1/5 bottom-0 lg:left-1/3 xl:left-1/3 md:bottom-16 md:left-1/3 -translate-x-10 md:translate-x-0 z-10 float-animation"
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className="flex flex-col items-center md:items-start w-full md:w-1/2">
            <p className="text-center md:text-left w-full md:w-3/4 px-4 md:px-0">
              Durant l&apos;été 2023, mon ami Florian et moi avons décidé de nous lancer dans l&apos;entrepreneuriat,
              plus précisément dans le domaine du dropshipping. Nous avons réussi à faire cinq ventes sans trop d&apos;efforts
              grâce à la publicité, la création d&apos;un site de vente et le design d&apos;un logo. Nous avons aussi mis en place
              une campagne publicitaire pour la promotion de nos produits. Nous avons constitué un capital de départ de 1500€ et visons
              des ventes importantes avec des prévisions de bénéfices substantiels.
            </p>
          </div>
        </div>
      </section>
      <FifthSection />
    </main>
  );
}

function SkillCard({ title, content, image }: Skill) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex justify-center rounded-lg items-center w-[100px] h-[100px] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute flex justify-center items-center p-4 bg-secondary rounded-lg text-center transition-transform duration-300 ease-in-out
        ${isHovered ? 'translate-y-[-50%]' : 'translate-y-0'}`}
        style={{ width: '100%', height: '100%' }}
      >
        <Image src={image} alt={title} width={80} height={80} />
      </div>

      <div
        className={`absolute flex justify-center items-center bg-white border-2 rounded-lg border-black transition-opacity duration-300 ease-in-out
        ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        style={{ width: '100%', height: '100%', top: 0, left: 0 }}
      >
        <p className="text-tertiary text-center">{content}</p>
      </div>
    </div>
  );
}
