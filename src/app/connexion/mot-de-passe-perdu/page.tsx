import ForgetPasswordContainer from "@/ui/modules/authentification/forget-password/forget-password.container";

export const metadata = {
  title: "mot de passe perdu | Layer by Layer",
  description: "Créez un nouveau mot de passe",
  icons: {
    icon: "/assets/images/favicon.png",
  },
};

const ForgetPassword = () => {
  return (
    <>
      <ForgetPasswordContainer />
    </>
  );
};

export default ForgetPassword;
