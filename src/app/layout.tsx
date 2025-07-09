"use client";
import Navigation from "@/ui/components/navigation/navigation";
import Breadcrumbs from "@/ui/components/breadcrumbs/breadcrumbs";
import Footer from "@/ui/components/navigation/footer";
import { usePathname } from "next/navigation";
import "@/styles/globals.css";
import { Flip, ToastContainer } from "react-toastify";
import Container from "@/ui/components/container/container";
import UserAccountNavigation from "@/ui/components/navigation/user-account-navigation";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const withSidebar = pathname === "/mon-espace";
  let view: React.ReactElement = <></>;

  if (withSidebar) {
    view = (
      <Container className="mb-14">
        <div className="grid grid-cols-12 gap-7">
          <div className="col-span-3">
            <UserAccountNavigation />
          </div>
          <div className="col-span-9">{children}</div>
        </div>
      </Container>
    );
  } else {
    view = <>{children}</>;
  }

  return (
    <html lang="fr">
      <body>
        <Navigation />
        <ToastContainer autoClose={8000} transition={Flip} />
        {!isHome && <Breadcrumbs />}
        {view}
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
