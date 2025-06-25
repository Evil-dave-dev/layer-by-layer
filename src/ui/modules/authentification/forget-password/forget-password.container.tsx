"use client";
import ForgetPasswordView from "./forget-password.view";
import { SubmitHandler, useForm } from "react-hook-form";
import { ForgetPasswordFormFieldsType } from "@/types/forms";
import { useToggle } from "@/hooks/use-toggle";
import { sendEmailToResetPassword } from "@/api/authentication";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const ForgetPasswordContainer = () => {
  const router = useRouter();
  const { value: isLoading, setValue: setIsLoading } = useToggle();

  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm<ForgetPasswordFormFieldsType>();

  const handleResetPassword = async ({
    email,
  }: ForgetPasswordFormFieldsType) => {
    const { error } = await sendEmailToResetPassword(email);
    if (error) {
      setIsLoading(false);
      toast.error(error.message);
      return;
    }
    toast.success(`un email a été expédié à l'adresse ${email}`);
    setIsLoading(false);
    reset();
    router.push("/connexion");
  };

  const onSubmit: SubmitHandler<ForgetPasswordFormFieldsType> = async (
    formData
  ) => {
    setIsLoading(true);
    handleResetPassword(formData);
  };

  return (
    <ForgetPasswordView
      form={{ errors, register, handleSubmit, onSubmit, isLoading }}
    />
  );
};

export default ForgetPasswordContainer;
