"use client";
import LoginView from "./login.view";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFormFieldsType } from "@/types/forms";
import { useToggle } from "@/hooks/use-toggle";
import { firebaseSigninUser } from "@/api/authentication";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const LoginContainer = () => {
  const router = useRouter();
  const { value: isLoading, setValue: setIsLoading } = useToggle();

  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<LoginFormFieldsType>();

  const handleSigninUser = async ({ email, password }: LoginFormFieldsType) => {
    const { error } = await firebaseSigninUser(email, password);
    if (error) {
      setIsLoading(false);
      toast.error(error.message);
      return;
    }
    toast.success("bienvenue truc");
    setIsLoading(false);
    reset();
    router.push("/mon-espace");
  };

  const onSubmit: SubmitHandler<LoginFormFieldsType> = async (formData) => {
    setIsLoading(true);
    const { password } = formData;
    if (password.length <= 5) {
      setError("password", {
        type: "manual",
        message: "6 caractères minimum",
      });
      setIsLoading(false);
      return;
    }
    handleSigninUser(formData);
  };
  return (
    <LoginView form={{ errors, register, handleSubmit, onSubmit, isLoading }} />
  );
};

export default LoginContainer;
