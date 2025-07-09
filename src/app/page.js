import LandingPageContainer from "@/ui/modules/landing-page/landing-page.container";

export const metadata = {
  title: "Layer by Layer",
  description: "Venez peindre vos figurines de Warhammer",
  icons: {
    icon: "/assets/images/favicon.png",
  },
};

const HomePage = () => {
  return (
    <>
      <LandingPageContainer />
    </>
  );
};

export default HomePage;
