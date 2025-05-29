"use client";
import Typography from "@/ui/design-system/typography/typography";
import { Plus } from "lucide-react";
import Button from "@/ui/design-system/button/button";
import Container from "@/ui/components/container/container";

const HomePage = () => {
  return (
    <Container className="py-10 space-y-20">
      <section>
        <Typography component="h1" variant="h1" theme="primary">
          Layer by Layer
        </Typography>
      </section>
      <section>
        <Typography component="h3" variant="h3" theme="primary">
          Projets
        </Typography>
        <Button variant="outline" iconPosition="right" icon={{ icon: Plus }}>
          nouveau projet
        </Button>
      </section>
      <section>
        <Typography component="h3" variant="h3" theme="primary">
          Peintures
        </Typography>
      </section>
    </Container>
  );
};

export default HomePage;
