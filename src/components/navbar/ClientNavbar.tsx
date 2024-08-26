"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar/Navbar";
import NavbarAdmin from "@/components/navbar/NavbarAdmin";

export default function ClientNavbar() {
  const pathname = usePathname();
  const isAdminPath = pathname.includes("/admin");
  return isAdminPath ? <NavbarAdmin /> : <Navbar />;
}
