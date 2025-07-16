import UserAccountContainer from "@/ui/modules/user-profile/user-account/user-account.container";

export const metadata = {
  title: "mon espace | Layer by Layer",
  description: "Mon espace Layer by layer",
  icons: {
    icon: "/assets/images/favicon.png",
  },
};

const UserAccount = () => {
  return <UserAccountContainer />;
};

export default UserAccount;
