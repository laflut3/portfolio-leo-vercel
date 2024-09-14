import mongodb from "../../../../../public/assets/image/logoDev/baseData/mongodb.png"
import phpMyAdmin from "../../../../../public/assets/image/logoDev/baseData/phpMyAdmin.png"
import plsql from "../../../../../public/assets/image/logoDev/baseData/plsql-icon.svg"
import postgres from "../../../../../public/assets/image/logoDev/baseData/postgres.png"
import nosql from "../../../../../public/assets/image/logoDev/baseData/nosql.png"
import sql from "../../../../../public/assets/image/logoDev/baseData/sql.png"
import oracle from "../../../../../public/assets/image/logoDev/baseData/oracle.png"

import Image from "next/image";

export default function BDDiv() {
    return (
        <div className={"flex flex-wrap justify-center items-center gap-4 w-full"}>
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={mongodb} alt={"mongodb"}/>
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={postgres} alt={"postgres"}/>
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={phpMyAdmin} alt={"phpMyAdmin"}/>
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={oracle} alt={"oracle"}/>
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={sql} alt={"sql"}/>
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={plsql} alt={"plsql"}/>
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={nosql} alt={"nosql"}/>
        </div>
    )
}