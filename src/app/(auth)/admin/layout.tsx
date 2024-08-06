import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin - LEO TORRES",
  description: "Section d'administration du portfolio",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
        {children}
      </>
  );
}
