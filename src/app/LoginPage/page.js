"use client";
import { useState } from "react";
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import CustomButton from "../../../components/CustomButton/CustomButton";
import CustomInput from "../../../components/CustomInput/CustomInput";
import styles from "./styles.module.scss";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrors({});

    const newErrors = {};
    if (!email) newErrors.email = "Veuillez entrer un email";
    if (!password && password.length < 6)
      newErrors.password = "6 caractères minimum";

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      router.push("/");
    } catch (error) {
      console.error("Erreur de connexion :", error);
      const newErrors = {};
      switch (error.code) {
        case "auth/user-not-found":
          newErrors.email = "email non enregistré";
          break;
        case "auth/invalid-email":
          newErrors.email = "email invalide";
          break;
        case "auth/wrong-password":
          newErrors.password = "mot de passe incorrect";
          break;
        case "auth/missing-password":
          newErrors.password = "Veuillez entrer un mot de passe";
          break;
        default:
          newErrors.general = "erreur inconnue. Réessayez";
          break;
      }
      setErrors(newErrors);
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2>Login</h2>
        <form className={styles.form} onSubmit={handleLogin} noValidate>
          <CustomInput
            label="email"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            error={errors.email}
          />
          <CustomInput
            label="password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            error={errors.password}
          />
          <CustomButton children="login" type="submit" />
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
