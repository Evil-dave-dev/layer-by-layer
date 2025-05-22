"use client";
import Link from "next/link";
import { useState } from "react";
import { auth } from "@/app/lib/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useRouter } from "next/navigation";
import { CustomButton, CustomInput } from "@/app/ui/components/index";
import styles from "./styles.module.scss";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrors({});

    const newErrors = {};
    if (!username) newErrors.username = "veuillez entrer un nom";
    if (!email) newErrors.email = "veuillez entrer un email";
    if (!password && password.length < 6)
      newErrors.password = "6 caracterez minimum";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await updateProfile(user, {
        displayName: username,
      });
      router.push("/");
    } catch (error) {
      console.error("Erreur d'inscription :", error);
      const newErrors = {};
      switch (error.code) {
        case "auth/email-already-in-use":
          newErrors.email = "email déjà utilisé";
          break;
        case "auth/invalid-email":
          newErrors.email = "email invalide";
          break;
        case "auth/weak-password":
          newErrors.password = "mot de passe invalide";
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
        <div>
          <h2>Register</h2>
          <p>
            Vous avez déjà un compte ?{" "}
            <Link href="/LoginPage" className={styles.link}>
              Connectez-vous
            </Link>
          </p>
        </div>
        <form className={styles.form} onSubmit={handleRegister} noValidate>
          <CustomInput
            label="nom"
            onChange={(val) => setUsername(val)}
            type="text"
            error={errors.username}
          />
          <CustomInput
            label="email"
            onChange={(val) => setEmail(val)}
            type="email"
            error={errors.email}
          />
          <CustomInput
            label="password"
            onChange={(val) => setPassword(val)}
            type="password"
            error={errors.password}
          />
          <CustomButton children="register" type="submit" />
        </form>
      </div>
    </section>
  );
};

export default RegisterPage;
