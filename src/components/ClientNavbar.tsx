"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import NavbarAdmin from "@/components/NavbarAdmin";

export default function ClientNavbar() {
  const pathname = usePathname();
  const isAdminPath = pathname.includes("/admin");
  return isAdminPath ? <NavbarAdmin /> : <Navbar />;
}
