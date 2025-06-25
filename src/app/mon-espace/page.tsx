import Seo from "@/ui/components/seo/seo";
import UserAccountContainer from "@/ui/modules/user-profile/user-account/user-account.container";

const UserAccount = () => {
  return (
    <>
      <Seo
        title="layer by layer"
        description="venez peindre vos figurines de warhammer"
      />
      <UserAccountContainer />
    </>
  );
};

export default UserAccount;
