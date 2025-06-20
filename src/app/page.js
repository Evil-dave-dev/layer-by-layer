"use client";
import Seo from "@/ui/components/seo/seo";
import LandingPageContainer from "@/ui/modules/landing-page/landing-page.container";

const HomePage = () => {
  return (
    <>
      <Seo
        title="layer by layer"
        description="venez peindre vos figurines de warhammer"
      />
      <LandingPageContainer />
    </>
  );
};

export default HomePage;
