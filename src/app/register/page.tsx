"use client";
import Typography from "@/ui/design-system/typography/typography";
import Button from "@/ui/design-system/button/button";

const RegisterPage = () => {
  const handleRegister = () => {
    console.log("submit");
  };

  return (
    <section>
      <div>
        <div>
          <Typography component="h2" variant="h2">
            Register
          </Typography>
          <Typography component="p" variant="body-base">
            Vous avez déjà un compte ?{" "}
            <Button size="small" variant="secondary">
              login
            </Button>
          </Typography>
        </div>
        <form onSubmit={handleRegister} noValidate>
          <Button>register</Button>
        </form>
      </div>
    </section>
  );
};

export default RegisterPage;
