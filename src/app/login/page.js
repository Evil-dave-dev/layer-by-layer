"use client";
import Link from "next/link";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import Typography from "@/ui/design-system/typography/typography";
import Button from "@/ui/design-system/button/button";

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
    <section>
      <div>
        <div>
          <Typography component="h2" variant="h2">
            Login
          </Typography>
          <Typography component="h3" variant="body-base">
            Vous n&#39;avez pas encore de compte ?{" "}
            <Link href="/RegisterPage">Inscrivez-vous</Link>
          </Typography>
        </div>
        <form onSubmit={handleLogin} noValidate>
          <Button>login</Button>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
