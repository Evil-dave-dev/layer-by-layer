import { firebaseLogoutUser } from "@/api/authentication";
import Box from "@/ui/design-system/box/box";
import Button from "@/ui/design-system/button/button";
import Typography from "@/ui/design-system/typography/typography";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import ActiveLink from "./active-link";

const UserAccountNavigation = () => {
  const router = useRouter();

  const handleLogoutUser = async () => {
    const { error } = await firebaseLogoutUser();
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("a bientôt sur layer by layer");
    router.push("/connexion");
  };

  return (
    <Box className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <Typography variant="caption2" weight="semibold">
          <ActiveLink href="/mon-espace">mon compte</ActiveLink>
        </Typography>
        <Typography variant="caption2" weight="semibold">
          <ActiveLink href="/projets">mes projets</ActiveLink>
        </Typography>
      </div>
      <div>
        <Button variant="danger" action={handleLogoutUser}>
          déconnexion
        </Button>
      </div>
    </Box>
  );
};

export default UserAccountNavigation;
