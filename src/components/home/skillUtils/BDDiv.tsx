import mongodb from "@/../public/assets/image/logoDev/baseData/mongodb.png"
import phpMyAdmin from "@/../public/assets/image/logoDev/baseData/phpMyAdmin.png"
import plsql from "@/../public/assets/image/logoDev/baseData/plsql-icon.svg"
import postgres from "@/../public/assets/image/logoDev/baseData/postgres.png"
import nosql from "@/../public/assets/image/logoDev/baseData/nosql.png"
import sql from "@/../public/assets/image/logoDev/baseData/sql.png"
import oracle from "@/../public/assets/image/logoDev/baseData/oracle.png"

import Image from "next/image";

export default function BDDiv() {
    return (
        <div className={"flex justify-center text-center items-center space-x-3 w-full"}>
            <Image className={"w-24 h-24"} src={mongodb} alt={"mongodb"}/>
            <Image className={"w-28 h-28"} src={postgres} alt={"postgres"}/>
            <Image className={"w-28 h-28"} src={phpMyAdmin} alt={"phpMyAdmin"}/>
            <Image className={"w-28 h-28"} src={oracle} alt={"oracle"}/>
            <Image className={"w-28 h-28"} src={sql} alt={"sql"}/>
            <Image className={"w-28 h-28"} src={plsql} alt={"plsql"}/>
            <Image className={"w-28 h-28"} src={nosql} alt={"nosql"}/>
        </div>
    )
}