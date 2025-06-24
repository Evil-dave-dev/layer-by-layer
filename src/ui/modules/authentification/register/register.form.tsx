import { FormsType } from "@/types/forms";
import Button from "@/ui/design-system/button/button";
import Input from "@/ui/design-system/forms/input";

interface Props {
  form: FormsType;
}

const RegisterForm = ({ form }: Props) => {
  const { onSubmit, errors, isLoading, register, handleSubmit } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pt-8 pb-5 space-y-4">
      <Input
        isLoading={isLoading}
        placeholder="email"
        type="email"
        register={register}
        errors={errors}
        errorMessage="ce champs est requis"
        id="email"
      />
      <Input
        isLoading={isLoading}
        placeholder="mot de passe"
        type="password"
        register={register}
        errors={errors}
        errorMessage="ce champs est requis"
        id="password"
      />
      <Input
        isLoading={isLoading}
        placeholder="Comment nous as tu connu ?"
        register={register}
        errors={errors}
        errorMessage="ce champs est requis"
        id="how_did_hear"
      />
      <Button isLoading={isLoading} type="submit" widthFull>
        s&apos;inscrire
      </Button>
    </form>
  );
};

export default RegisterForm;
