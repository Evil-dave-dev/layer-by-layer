import Container from "@/ui/components/container/container";
import Button from "@/ui/design-system/button/button";
import Typography from "@/ui/design-system/typography/typography";
import Image from "next/image";

const HeroTopView = () => {
  return (
    <Container className="relative pt-10 pb-5 overflow-hidden">
      <div className="w-full max-w-2xl space-y-5">
        <Typography variant="h1" component="h1" className="max-w-lg">
          Peins tes warhammer
        </Typography>
        <Typography variant="body-base" component="p" theme="gray">
          Arrêtes de jouer avec des bouts de papiers et joue avec des figurines
          magnifiquement peintes par tes soins. Enregistre les peintures que tu
          utilises et reviens dessus dès que l&apos;occasion se présente.
        </Typography>
        <div className="space-x-5 pt-2">
          <Button baseUrl="">Commencer</Button>
          <Button baseUrl="" variant="secondary">
            Liste des peintures
          </Button>
        </div>
      </div>
      <Image
        src="/assets/svg/planet.svg"
        alt="planet"
        width={400}
        height={400}
        className="absolute top-0 right-0 z-0"
      />
    </Container>
  );
};

export default HeroTopView;
