import windows from "@/../public/assets/image/logoDev/systeme/windows.png"
import winServ from "@/../public/assets/image/logoDev/systeme/win serveur.png"
import linux from "@/../public/assets/image/logoDev/systeme/linux-icon.svg"
import virtualBox from "@/../public/assets/image/logoDev/systeme/virtualBox.svg"
import hyperV from "@/../public/assets/image/logoDev/systeme/hyperV.png"
import apache from "@/../public/assets/image/logoDev/systeme/apache.png"
import nginx from "@/../public/assets/image/logoDev/systeme/nginx.png"
import vercel from "@/../public/assets/image/logoDev/systeme/vercel.png"

import Image from "next/image";

export default function SystemDiv() {
    return (
        <div className={"flex justify-center text-center items-center space-x-4 w-full"}>
            <Image className={"w-28 h-28"} src={windows} alt={"windows"}/>
            <Image className={"w-28 h-28 bg-white"} src={winServ} alt={"winServ"}/>
            <Image className={"w-28 h-28"} src={linux} alt={"linux"}/>
            <Image className={"w-28 h-28"} src={virtualBox} alt={"virtualBox"}/>
            <Image className={"w-28 h-28"} src={hyperV} alt={"hyperV"}/>
            <Image className={"w-28 h-28"} src={apache} alt={"apache"}/>
            <Image className={"w-28 h-28"} src={nginx} alt={"nginx"}/>
            <Image className={"w-28 h-28 bg-white rounded-full p-2"} src={vercel} alt={"vercel"}/>
        </div>
    )
}