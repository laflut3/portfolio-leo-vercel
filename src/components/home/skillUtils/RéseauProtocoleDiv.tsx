import dhcp from "@/../public/assets/image/logoDev/reseau/dhcp.png";
import gns3 from "@/../public/assets/image/logoDev/reseau/gns3.png";
import http from "@/../public/assets/image/logoDev/reseau/http.png";
import ipv4 from "@/../public/assets/image/logoDev/reseau/ipV4.png";
import ipv6 from "@/../public/assets/image/logoDev/reseau/ipV6.png";
import ospf from "@/../public/assets/image/logoDev/reseau/ospf.png";
import tcpip from "@/../public/assets/image/logoDev/reseau/tcpip.png";
import wireshark from "@/../public/assets/image/logoDev/reseau/wireshark.png";

import Image from "next/image";

export default function ReseauDiv() {
    return (
        <div className={"flex justify-center text-center items-center space-x-4 w-full mt-10"}>
            <Image className={"w-28 h-28"} src={dhcp} alt={"dhcp"} />
            <Image className={"w-28 h-28"} src={gns3} alt={"gns3"} />
            <Image className={"w-28 h-28"} src={http} alt={"http"} />
            <Image className={"w-28 h-28"} src={ipv4} alt={"ipv4"} />
            <Image className={"w-28 h-28"} src={ipv6} alt={"ipv6"} />
            <Image className={"w-28 h-28"} src={ospf} alt={"ospf"} />
            <Image className={"w-28 h-28"} src={tcpip} alt={"tcpip"} />
            <Image className={"w-28 h-28"} src={wireshark} alt={"wireshark"} />
        </div>
    );
}
