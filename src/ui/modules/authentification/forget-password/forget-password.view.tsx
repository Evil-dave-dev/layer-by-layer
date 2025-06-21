import Container from "@/ui/components/container/container";
import Box from "@/ui/design-system/box/box";
import Typography from "@/ui/design-system/typography/typography";
import Image from "next/image";
import Link from "next/link";
import ForgetPasswordForm from "./forget-password.form";

const ForgetPasswordView = () => {
  return (
    <Container className="grid grid-cols-2 gap-20 mb-32">
      <div className="flex items-center">
        <div className="relative w-full h-[400px]">
          <Image
            fill
            src="/assets/svg/mot-de-passe-perdu.svg"
            alt="description"
            className="object-scale-down"
          />
        </div>
      </div>
      <div className="flex items-center">
        <Box padding_y="px-5">
          <div className="flex items-center justify-between">
            <Typography variant="h5" component="h1">
              Mot de passe perdu
            </Typography>
            <div className="flex items-center gap-2">
              <Typography variant="caption3" component="span" theme="primary">
                <Link href="/connexion">Connexion</Link>
              </Typography>
            </div>
            <div></div>
          </div>
          <ForgetPasswordForm />
        </Box>
      </div>
    </Container>
  );
};

export default ForgetPasswordView;
