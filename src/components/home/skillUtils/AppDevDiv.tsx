import c from "@/../public/assets/image/logoDev/appLanguage/c-icon.svg"
import cpp from "@/../public/assets/image/logoDev/appLanguage/cpp-icon.svg"
import java from "@/../public/assets/image/logoDev/appLanguage/java-icon.png"
import python from "@/../public/assets/image/logoDev/appLanguage/python.png"
import kotlin from "@/../public/assets/image/logoDev/appLanguage/kotlin.png"

import Image from "next/image";

export default function AppDevDiv() {
    return (
        <div className={"flex justify-center text-center items-center space-x-3 w-full"}>
            <Image className={"w-28 h-28"} src={c} alt={"c"}/>
            <Image className={"w-28 h-28"} src={cpp} alt={"cpp"}/>
            <Image className={"w-28 h-28"} src={java} alt={"java"}/>
            <Image className={"w-28 h-28"} src={python} alt={"python"}/>
            <Image className={"w-28 h-28"} src={kotlin} alt={"kotlin"}/>
        </div>
    )
}