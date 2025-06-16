"use client";
import Typography from "@/ui/design-system/typography/typography";
import Button from "@/ui/design-system/button/button";

const LoginPage = () => {
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("submit");
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
            <Button size="small" variant="secondary">
              register
            </Button>
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
