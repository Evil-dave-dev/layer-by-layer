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
          Arrêtes de jouer avec des bouts de papiers et sers toi de tes
          figurines magnifiquement peintes par tes soins. Utilise Layer by Layer
          pour enregistrer tes combinaisons de peintures et tu pourras revenir
          dessus une fois tout les 6 mois (même si t&apos;es bourré), tout sera
          gardé en mémoire.
        </Typography>
        <div className="space-x-5 pt-2">
          <Button baseUrl="/parametres">Commencer</Button>
          <Button baseUrl="/peintures" variant="secondary">
            Liste des peintures
          </Button>
        </div>
      </div>
      <Image
        src="/assets/images/goldendemon.jpg"
        alt="goldendemon"
        width={400}
        height={400}
        className="absolute top-0 right-0 z-0 h-auto"
        priority
      />
    </Container>
  );
};

export default HeroTopView;
