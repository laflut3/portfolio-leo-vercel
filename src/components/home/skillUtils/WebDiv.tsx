import css from "@/../public/assets/image/logoDev/web/css.png";
import html from "@/../public/assets/image/logoDev/web/html.png";
import js from "@/../public/assets/image/logoDev/web/js-icon.svg";
import next from "@/../public/assets/image/logoDev/web/nextjs.png";
import node from "@/../public/assets/image/logoDev/web/node.png";
import php from "@/../public/assets/image/logoDev/web/php-icon.svg";
import react from "@/../public/assets/image/logoDev/web/react.png";
import tailwind from "@/../public/assets/image/logoDev/web/tailwind.png";
import ts from "@/../public/assets/image/logoDev/web/ts-icon.svg";
import Image from "next/image";

export default function WebDiv() {
    return (
        <div className={"flex flex-wrap justify-center items-center gap-4 w-full"}>
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={css} alt={"css"} />
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={html} alt={"html"} />
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={js} alt={"js"} />
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={next} alt={"next"} />
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={node} alt={"node"} />
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={php} alt={"php"} />
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={react} alt={"react"} />
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={tailwind} alt={"tailwind"} />
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={ts} alt={"ts"} />
        </div>
    );
}
