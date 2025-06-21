import Seo from "@/ui/components/seo/seo";
import RegisterContainer from "@/ui/modules/authentification/register/register.container";

const Register = () => {
  return (
    <>
      <Seo
        title="layer by layer"
        description="venez peindre vos figurines de warhammer"
      />
      <RegisterContainer />
    </>
  );
};

export default Register;
