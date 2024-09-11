import css from "@/../public/assets/image/logoDev/web/css.png"
import html from "@/../public/assets/image/logoDev/web/html.png"
import js from "@/../public/assets/image/logoDev/web/js-icon.svg"
import next from "@/../public/assets/image/logoDev/web/nextjs.png"
import node from "@/../public/assets/image/logoDev/web/node.png"
import php from "@/../public/assets/image/logoDev/web/php-icon.svg"
import react from "@/../public/assets/image/logoDev/web/react.png"
import tailwind from "@/../public/assets/image/logoDev/web/tailwind.png"
import ts from "@/../public/assets/image/logoDev/web/ts-icon.svg"
import Image from "next/image";

export default function WebDiv() {
    return (
        <div className={"flex justify-center text-center items-center space-x-3 w-full"}>
            <Image className={"w-28 h-28"} src={css} alt={"css"}/>
            <Image className={"w-28 h-28"} src={html} alt={"html"}/>
            <Image className={"w-28 h-28"} src={js} alt={"js"}/>
            <Image className={"w-28 h-28"} src={next} alt={"next"}/>
            <Image className={"w-44 h-28"} src={node} alt={"node"}/>
            <Image className={"w-28 h-28"} src={php} alt={"php"}/>
            <Image className={"w-28 h-28"} src={react} alt={"react"}/>
            <Image className={"w-28 h-28"} src={tailwind} alt={"tailwind"}/>
            <Image className={"w-28 h-28"} src={ts} alt={"ts"}/>
        </div>
    )
}