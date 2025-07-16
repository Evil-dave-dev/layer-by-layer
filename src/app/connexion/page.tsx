import LoginContainer from "@/ui/modules/authentification/login/login.container";

export const metadata = {
  title: "connexion | Layer by Layer",
  description: "Connectez-vous à Layer by layer",
  icons: {
    icon: "/assets/images/favicon.png",
  },
};

const Connexion = () => {
  return <LoginContainer />;
};

export default Connexion;
