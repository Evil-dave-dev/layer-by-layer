import { useAuth } from "@/context/AuthUserContext";
import ScreenSpinner from "@/ui/design-system/spinner/screen-spinner";

interface Props {
  children: React.ReactNode;
}

const Session = ({ children }: Props) => {
  const { authUserIsLoading, authUser } = useAuth();
  console.log("authUser : ", authUser);
  console.log("authUserIsLoading : ", authUserIsLoading);

  if (!authUserIsLoading) {
    return <>{children}</>;
  }

  return <ScreenSpinner />;
};

export default Session;
