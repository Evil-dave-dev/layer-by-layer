import RegisterContainer from "@/ui/modules/authentification/register/register.container";

export const metadata = {
  title: "Inscription | Layer by Layer",
  description: "Créez un compte pour commencer à peindre vos figurines.",
  icons: {
    icon: "/assets/images/favicon.png",
  },
};

const Register = () => {
  return <RegisterContainer />;
};

export default Register;
