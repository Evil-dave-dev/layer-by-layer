import Avatar from "@/ui/design-system/avatar/avatar";
import Button from "@/ui/design-system/button/button";
import Logo from "@/ui/design-system/logo/logo";
import Spinner from "@/ui/design-system/spinner/spinner";
import Typography from "@/ui/design-system/typography/typography";
import Container from "@/ui/components/container/container";

const Settings = () => {
  return (
    <Container className="py-10 space-y-20">
      <section>
        <Typography variant="h1">Typography</Typography>
        <Typography variant="h2">Typography</Typography>
        <Typography variant="h3">Typography</Typography>
      </section>
      <section className="flex gap-2">
        <Avatar src="/assets/images/krok gar.png" alt="krok gar" size="large" />
        <Avatar src="/assets/images/archaon.png" alt="archaon" />
        <Avatar src="/assets/images/thorgrim.png" alt="thorgrim" size="small" />
      </section>
      <section className="flex gap-2">
        <Spinner size="large" />
        <Spinner />
        <Spinner size="small" />
      </section>
      <section className="flex gap-2">
        <Logo size="large" />
        <Logo />
        <Logo size="small" />
        <Logo size="very-small" />
      </section>
    </Container>
  );
};

export default Settings;
