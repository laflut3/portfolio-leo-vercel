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
        <div className={"flex flex-wrap justify-center items-center gap-4 w-full"}>
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={windows} alt={"windows"} />
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain bg-white" src={winServ} alt={"winServ"} />
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={linux} alt={"linux"} />
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={virtualBox} alt={"virtualBox"} />
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={hyperV} alt={"hyperV"} />
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={apache} alt={"apache"} />
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={nginx} alt={"nginx"} />
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain bg-white rounded-full p-2" src={vercel} alt={"vercel"} />
        </div>
    )
}
