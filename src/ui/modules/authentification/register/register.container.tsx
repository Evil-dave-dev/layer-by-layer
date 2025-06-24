"use client";
import { RegisterFormFieldsType } from "@/types/forms";
import { SubmitHandler, useForm } from "react-hook-form";
import RegisterView from "./register.view";
import { firebaseCreateUser } from "@/api/authentication";
import { toast } from "react-toastify";
import { useToggle } from "@/hooks/use-toggle";

const RegisterContainer = () => {
  const { value: isLoading, setValue: setIsLoading } = useToggle();

  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<RegisterFormFieldsType>();

  const handleCreateUserAuthentication = async ({
    email,
    password,
    how_did_hear,
  }: RegisterFormFieldsType) => {
    const { error, data } = await firebaseCreateUser(email, password);
    if (error) {
      setIsLoading(false);
      toast.error(error.message);
      return;
    }
    // @todo creat user document
    toast.success("Incription réussie");
    setIsLoading(false);
    reset();
  };

  const onSubmit: SubmitHandler<RegisterFormFieldsType> = async (formData) => {
    setIsLoading(true);

    const { email, password } = formData;

    if (password.length <= 5) {
      setError("password", {
        type: "manual",
        message: "mot de passe minimum 6 caractères",
      });
      setIsLoading(false);
      return;
    }
    handleCreateUserAuthentication(formData);
  };

  return (
    <RegisterView
      form={{ errors, register, handleSubmit, onSubmit, isLoading }}
    />
  );
};

export default RegisterContainer;
