import Container from "@/ui/components/container/container";
import SocialNetworkButtons from "@/ui/components/navigation/social-network-buttons";
import Button from "@/ui/design-system/button/button";
import Typography from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

interface FeaturesListInterface {
  imagePath: string;
  imageAlt: string;
  title: string;
  description: string;
}

const featuresData: FeaturesListInterface[] = [
  {
    imagePath: "/assets/svg/document.svg",
    imageAlt: "illustration",
    title: "Projets",
    description:
      "Consulte la liste de tous les projets que tu as pu faire jusqu'à maintenant",
  },
  {
    imagePath: "/assets/svg/pie-chart.svg",
    imageAlt: "illustration",
    title: "Peintures",
    description:
      "Consulte la liste des peintures que tu peux trouver sur l'application",
  },
  {
    imagePath: "/assets/svg/creativity.svg",
    imageAlt: "illustration",
    title: "Tutoriels",
    description:
      "Va sur youtube, tu trouveras des tonnes de tutoriels pour peindre tes skinks de la meilleure des façons",
  },
  {
    imagePath: "/assets/svg/user.svg",
    imageAlt: "illustration",
    title: "Profil",
    description: "Accès à tes données et modifie ton profil à loisir",
  },
];

const FeaturedView = () => {
  const featuredList = featuresData.map((feature) => (
    <div
      key={uuidv4()}
      className="flex flex-col items-center justify-center bg-white rounded p-7"
    >
      <div className="relative w-[130px] h-[130px] rounded-full mb-6 p-10 overflow-hidden">
        <Image
          fill
          src={feature.imagePath}
          alt={feature.imageAlt}
          className="object-scale-down blur-2xl"
        />
        <Image
          fill
          src={feature.imagePath}
          alt={feature.imageAlt}
          className="object-scale-down"
        />
      </div>
      <Typography
        variant="h6"
        component="h3"
        weight="medium"
        className="text-center"
      >
        {feature.title}
      </Typography>
      <Typography
        variant="body-base"
        component="p"
        theme="gray"
        className="text-center"
      >
        {feature.description}
      </Typography>
    </div>
  ));
  return (
    <div className="bg-gray-300">
      <Container className="grid grid-cols-12 gap-24 py-24">
        <div className="grid grid-cols-2 gap-7 col-span-7">{featuredList}</div>
        <div className="flex flex-col justify-between gap-10 col-span-5">
          <div>
            <Typography variant="h2" component="h2" className="mb-5">
              Application de peinture au top la famille
            </Typography>
            <Typography
              variant="body-lg"
              component="p"
              theme="gray"
              className="mb-8"
            >
              Conçue à Lille par un développeur de renom, cette application de
              peinture permettra de garde en mémoire les teintes que vous avez
              utilisées pour vos orks, guerriers du Chaos, nains ou
              hommes-lézards et vous les restituera fidèlement.
            </Typography>
            <Button
              variant="secondary"
              baseUrl="/login"
              icon={{ icon: FaChevronRight }}
              iconPosition="right"
            >
              Commencer
            </Button>
          </div>
          <div>
            <Typography
              variant="body-lg"
              component="p"
              theme="gray"
              className="mb-4"
            >
              Nos réseaux sociaux
            </Typography>
            <SocialNetworkButtons theme="gray" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FeaturedView;
