import burp from "@/../public/assets/image/logoDev/outilsDev/burp-icon.svg";
import docker from "@/../public/assets/image/logoDev/outilsDev/docker-icon.svg";
import figma from "@/../public/assets/image/logoDev/outilsDev/figma.png";
import git from "@/../public/assets/image/logoDev/outilsDev/git-icon.svg";
import github from "@/../public/assets/image/logoDev/outilsDev/github.png";
import gitlab from "@/../public/assets/image/logoDev/outilsDev/gitlab.png";
import googleCloud from "@/../public/assets/image/logoDev/outilsDev/google cloud.png";
import jdea from "@/../public/assets/image/logoDev/outilsDev/jdea.png";
import phpStorm from "@/../public/assets/image/logoDev/outilsDev/phpStorm.png";
import vscode from "@/../public/assets/image/logoDev/outilsDev/vscode.png";
import webStorm from "@/../public/assets/image/logoDev/outilsDev/webstorm.png";

import Image from "next/image";

export default function OutilsDevDiv() {
    return (
        <div className={"flex flex-wrap justify-center items-center gap-4 w-full"}>
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={burp} alt="burp"/>
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={docker} alt="docker"/>
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={figma} alt="figma"/>
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={git} alt="git"/>
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={github} alt="github"/>
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={gitlab} alt="gitlab"/>
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={googleCloud} alt="google cloud"/>
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={jdea} alt="idea"/>
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={phpStorm} alt="phpStorm"/>
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={vscode} alt="vscode"/>
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={webStorm} alt="webStorm"/>
        </div>
    );
}
