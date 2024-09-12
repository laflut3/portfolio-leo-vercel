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
        <div className={"flex justify-center text-center items-center space-x-4 w-full"}>
            <Image className={"w-24 h-24"} src={burp} alt={"burp"} />
            <Image className={"w-24 h-24"} src={docker} alt={"docker"} />
            <Image className={"w-24 h-24"} src={figma} alt={"figma"} />
            <Image className={"w-24 h-24"} src={git} alt={"git"} />
            <Image className={"w-24 h-24"} src={github} alt={"github"} />
            <Image className={"w-24 h-24"} src={gitlab} alt={"gitlab"} />
            <Image className={"w-24 h-24"} src={googleCloud} alt={"google cloud"} />
            <Image className={"w-24 h-24"} src={jdea} alt={"idea"} />
            <Image className={"w-24 h-24"} src={phpStorm} alt={"phpStorm"} />
            <Image className={"w-24 h-24"} src={vscode} alt={"vscode"} />
            <Image className={"w-24 h-24"} src={webStorm} alt={"webStorm"} />
        </div>
    );
}
