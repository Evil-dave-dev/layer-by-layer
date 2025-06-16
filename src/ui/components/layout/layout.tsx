"use client";
import Footer from "../navigation/footer";
import Navigation from "../navigation/navigation";
import "@/app/globals.css";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <html lang="fr">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
