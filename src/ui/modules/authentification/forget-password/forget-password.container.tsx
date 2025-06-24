"use client";
import { useState } from "react";
import ForgetPasswordView from "./forget-password.view";
import { SubmitHandler, useForm } from "react-hook-form";
import { ForgetPasswordFieldsType } from "@/types/forms";

const ForgetPasswordContainer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<ForgetPasswordFieldsType>();

  const onSubmit: SubmitHandler<ForgetPasswordFieldsType> = async (
    formData
  ) => {
    setIsLoading(true);
    console.log("formData : ", formData);
  };
  return (
    <ForgetPasswordView
      form={{ errors, register, handleSubmit, onSubmit, isLoading }}
    />
  );
};

export default ForgetPasswordContainer;
