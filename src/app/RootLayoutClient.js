"use client";
// fonctionnalité côté client, contient Navbar + usePathname().
import { usePathname } from "next/navigation";
import Navbar from "./ui/components/Navbar/Navbar";

const noNavbarRoutes = ["/LoginPage", "/RegisterPage", "/ResetPasswordPage"];

const RootLayoutClient = ({ children }) => {
  const pathname = usePathname();
  const hideNavbar = !noNavbarRoutes.includes(pathname);
  return (
    <>
      {hideNavbar && <Navbar />}
      <main className="page-wrapper">{children}</main>
    </>
  );
};

export default RootLayoutClient;
