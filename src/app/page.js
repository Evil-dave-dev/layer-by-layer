"use client";
import Container from "@/ui/components/container/container";
import Seo from "@/ui/components/seo/seo";
import Layout from "@/ui/components/layout/layout";
import LandingPageContainer from "@/ui/modules/landing-page/landing-page.container";

const HomePage = () => {
  return (
    <>
      <Seo
        title="layer by layer"
        description="venez peindre vos figurines de warhammer"
      />
      <Layout>
        <LandingPageContainer />
      </Layout>
    </>
  );
};

export default HomePage;
