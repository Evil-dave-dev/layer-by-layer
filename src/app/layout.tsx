"use client";
import Navigation from "@/ui/components/navigation/navigation";
import Breadcrumbs from "@/ui/components/breadcrumbs/breadcrumbs";
import Footer from "@/ui/components/navigation/footer";
import { usePathname } from "next/navigation";
import "@/app/globals.css";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <html lang="fr">
      <body>
        <Navigation />
        {!isHome && <Breadcrumbs />}
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
