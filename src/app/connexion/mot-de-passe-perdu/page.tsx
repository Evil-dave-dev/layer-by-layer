import Seo from "@/ui/components/seo/seo";
import ForgetPasswordContainer from "@/ui/modules/authentification/forget-password/forget-password.container";

const ForgetPassword = () => {
  return (
    <>
      <Seo
        title="layer by layer"
        description="venez peindre vos figurines de warhammer"
      />
      <ForgetPasswordContainer />
    </>
  );
};

export default ForgetPassword;
