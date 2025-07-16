import Logo from "@/ui/design-system/logo/logo";
import Container from "../container/container";
import Typography from "@/ui/design-system/typography/typography";
import Button from "@/ui/design-system/button/button";
import Link from "next/link";
import ActiveLink from "./active-link";
import { useAuth } from "@/context/AuthUserContext";

interface Props {}

const Navigation = ({}: Props) => {
  const { authUser, authUserIsLoading } = useAuth();

  return (
    <div className="border-b-2 border-gray-400">
      <Container className="flex items-center justify-between gap-7 py-1.5">
        <Link href="/">
          <div className="flex items-center gap-2.5">
            <Logo size="small" />
            <div className="flex flex-col">
              <div className="text-gray-900 font-extrabold text-[24px]">
                Layer by Layer
              </div>
              <Typography variant="body-base" component="span" theme="gray">
                Peignez vos Warhammer de manière efficace
              </Typography>
            </div>
          </div>
        </Link>
        <div className="flex items-center gap-7">
          <Typography
            variant="body-base"
            component="div"
            className="flex items-center gap-7"
          >
            <ActiveLink href="/parametres">Paramètres</ActiveLink>
            <Link href="/projets">Projets</Link>
            <Link href="/peintures">Peintures</Link>
          </Typography>
          <div className="flex items-center gap-2">
            <Button size="small" baseUrl="/connexion">
              Connexion
            </Button>
            <Button
              size="small"
              variant="secondary"
              baseUrl="/connexion/inscription"
            >
              Inscription
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navigation;
