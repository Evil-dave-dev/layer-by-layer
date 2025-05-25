"use client";
import Link from "next/link";
import { auth } from "@/lib/firebase";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useRouter } from "next/navigation";
import { CustomButton, CustomInput } from "@/ui/components/index";
import styles from "./styles.module.scss";
import Typography from "@/ui/design-system/typography";

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
          <Typography component="h2" variant="h2">
            Register
          </Typography>
          <Typography component="body-base" variant="body-base">
            Vous avez déjà un compte ?{" "}
            <Link href="/LoginPage" className={styles.link}>
              Connectez-vous
            </Link>
          </Typography>
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
          <CustomButton type="submit">register</CustomButton>
        </form>
      </div>
    </section>
  );
};

export default RegisterPage;
