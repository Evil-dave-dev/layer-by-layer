"use client";
import { RegisterFormFieldsType } from "@/types/forms";
import { SubmitHandler, useForm } from "react-hook-form";
import RegisterView from "./register.view";
import { useState } from "react";

const RegisterContainer = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
    reset,
  } = useForm<RegisterFormFieldsType>();

  const onSubmit: SubmitHandler<RegisterFormFieldsType> = async (formData) => {
    setIsLoading(true);
    console.log("formData : ", formData);
  };

  return (
    <RegisterView
      form={{ errors, register, handleSubmit, onSubmit, isLoading }}
    />
  );
};

export default RegisterContainer;
