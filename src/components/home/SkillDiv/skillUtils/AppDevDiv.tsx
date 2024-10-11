import c from "@/../public/assets/image/logoDev/appLanguage/c-icon.svg"
import cpp from "@/../public/assets/image/logoDev/appLanguage/cpp-icon.svg"
import java from "@/../public/assets/image/logoDev/appLanguage/java-icon.png"
import python from "@/../public/assets/image/logoDev/appLanguage/python.png"
import maeven from "@/../public/assets/image/logoDev/appLanguage/maeven.png"
import spring from "@/../public/assets/image/logoDev/appLanguage/spring.png"
import swagger from "@/../public/assets/image/logoDev/appLanguage/swagger.png"

import Image from "next/image";

export default function AppDevDiv() {
    return (
        <div className={"flex flex-wrap justify-center items-center gap-4 w-full"}>
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={c} alt={"c"}/>
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={cpp} alt={"cpp"}/>
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={java} alt={"java"}/>
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={python} alt={"python"}/>
            <Image className="bg-white rounded-full p-2 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={maeven} alt={"maeven"}/>
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={spring} alt={"spring"}/>
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={swagger} alt={"swagger"}/>
        </div>
    )
}