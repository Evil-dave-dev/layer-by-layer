import Container from "@/ui/components/container/container";
import Box from "@/ui/design-system/box/box";
import Typography from "@/ui/design-system/typography/typography";
import Image from "next/image";
import Link from "next/link";
import RegisterForm from "./register.form";
import { FormsType } from "@/types/forms";

interface Props {
  form: FormsType;
}

const RegisterView = ({ form }: Props) => {
  return (
    <Container className="grid grid-cols-2 gap-20 mb-32">
      <div className="flex items-center">
        <div className="relative w-full h-[400px]">
          <Image
            fill
            src="/assets/svg/register.svg"
            alt="description"
            className="object-scale-down"
          />
        </div>
      </div>
      <div className="flex items-center">
        <Box padding_y="py-4">
          <div className="flex items-center justify-between">
            <Typography variant="h5" component="h2">
              Inscription
            </Typography>
            <div className="flex items-center gap-2">
              <Typography variant="caption2" component="span" theme="gray">
                Tu as déjà un compte ?
              </Typography>
              <Typography variant="caption2" component="span" theme="primary">
                <Link href="/connexion">Connexion</Link>
              </Typography>
            </div>
          </div>
          <RegisterForm form={form} />
        </Box>
      </div>
    </Container>
  );
};

export default RegisterView;
