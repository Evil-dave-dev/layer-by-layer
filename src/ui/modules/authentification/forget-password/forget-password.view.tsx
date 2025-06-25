import Container from "@/ui/components/container/container";
import Box from "@/ui/design-system/box/box";
import Typography from "@/ui/design-system/typography/typography";
import Image from "next/image";
import ForgetPasswordForm from "./forget-password.form";
import { FormsType } from "@/types/forms";
import Link from "next/link";

interface Props {
  form: FormsType;
}

const ForgetPasswordView = ({ form }: Props) => {
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
        <Box padding_y="py-5">
          <div className="flex items-center justify-between">
            <Typography variant="h5" component="h2" weight="semibold">
              Mot de passe perdu
            </Typography>
            <Typography
              variant="caption3"
              component="span"
              theme="primary"
              weight="semibold"
            >
              <Link href="/connexion/inscription">Connexion</Link>
            </Typography>
          </div>
          <ForgetPasswordForm form={form} />
        </Box>
      </div>
    </Container>
  );
};

export default ForgetPasswordView;
