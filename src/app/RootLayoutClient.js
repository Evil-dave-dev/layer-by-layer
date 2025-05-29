"use client";
// fonctionnalité côté client, contient Navigation + usePathname().
import { usePathname } from "next/navigation";
import Navigation from "@/ui/components/navigation/navigation";

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
    </>
  );
};

export default RootLayoutClient;
