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
        <div className={"flex flex-wrap justify-center items-center gap-4 w-full"}>
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={dhcp} alt={"dhcp"} />
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={gns3} alt={"gns3"} />
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={http} alt={"http"} />
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={ipv4} alt={"ipv4"} />
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={ipv6} alt={"ipv6"} />
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={ospf} alt={"ospf"} />
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={tcpip} alt={"tcpip"} />
            <Image className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain" src={wireshark} alt={"wireshark"} />
        </div>
    );
}
