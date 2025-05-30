"use client";
// fonctionnalité côté client, contient Navigation + usePathname().
import { usePathname } from "next/navigation";
import Navigation from "@/ui/components/navigation/navigation";
import Footer from "@/ui/components/navigation/footer";

const noNavigationRoutes = [
  "/LoginPage",
  "/RegisterPage",
  "/ResetPasswordPage",
];

const RootLayoutClient = ({ children }) => {
  const pathname = usePathname();
  const hideNavigation = !noNavigationRoutes.includes(pathname);
  return (
    <>
      {hideNavigation && <Navigation />}
      {children}
      {hideNavigation && <Footer />}
    </>
  );
};

export default RootLayoutClient;
