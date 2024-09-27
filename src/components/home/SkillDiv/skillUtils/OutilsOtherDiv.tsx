import canva from "@images/logoDev/AutreOutils/canva.png";
import sharepoint from "@images/logoDev/AutreOutils/sharepoint.png";
import word from "@images/logoDev/AutreOutils/word.png";
import excel from "@images/logoDev/AutreOutils/excel.png";
import powerpoint from "@images/logoDev/AutreOutils/powerpoint.png";

import Image from "next/image";

export default function OutilsOtherDiv() {
    return (
        <div className={"flex flex-wrap justify-center items-center gap-4 w-full"}>
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={canva}
                   alt="canva"/>
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={word}
                   alt="word"/>
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={excel}
                   alt="excel"/>
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={powerpoint}
                   alt="powerpoint"/>
        </div>
    );
}
