import React from "react";
import Container from "../container/container";
import Typography from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { footerLinks } from "./app-links";
import { v4 as uuidv4 } from "uuid";
import ActiveLink from "./active-link";
import { FooterLinks } from "@/types/app-links";
import { LinkTypes } from "@/lib/link-type";
import SocialNetworkButtons from "./social-network-buttons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerNavigationList = footerLinks.map((column) => (
    <FooterLink key={uuidv4()} data={column} />
  ));

  return (
    <div className="bg-gray-900">
      <Container className="flex justify-between py-10">
        <div className="flex flex-col items-center gap-1">
          <Typography component="h4" variant="h4" theme="white">
            peintures
          </Typography>
          <Typography component="p" variant="body-base" theme="gray">
            jetez un coup d&apos;oeil à des tutoriels de peintures
          </Typography>
          <a
            href="https://youtu.be/eziozJC3euU?si=xu7ZNMBtG6xwIIJf"
            target="_blank"
          >
            <Image
              src="/assets/svg/youtube.svg"
              width={251}
              height={240}
              alt="tuto peintures | youtube"
            />
          </a>
        </div>
        <div className="flex gap-7">{footerNavigationList}</div>
      </Container>
      <Container className="pt-9 pb-11 space-y-11">
        <hr className="text-gray-500"></hr>
        <div className="flex items-center justify-between">
          <Typography variant="caption3" theme="gray">
            {`Copyright @ ${currentYear} | Propulsed by David Stevenoot - Layer by Layer`}
          </Typography>
          <div>
            <SocialNetworkButtons theme="gray" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;

interface footerLinksProps {
  data: FooterLinks;
}

const FooterLink = ({ data }: footerLinksProps) => {
  const linksList = data.links.map((link) => (
    <div key={uuidv4()}>
      {link.type === LinkTypes.INTERNAL && (
        <ActiveLink href={link.baseUrl}>{link.label}</ActiveLink>
      )}
      {link.type === LinkTypes.EXTERNAL && (
        <a target="_blank" href={link.baseUrl}>
          {link.label}
        </a>
      )}
    </div>
  ));

  return (
    <div className="min-w-[190px]">
      <Typography
        theme="white"
        variant="caption2"
        weight="medium"
        classname="pb-5"
      >
        {data.label}
      </Typography>
      <Typography theme="gray" variant="caption3" classname="space-y-4">
        {linksList}
      </Typography>
    </div>
  );
};
