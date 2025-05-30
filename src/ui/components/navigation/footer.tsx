import React from "react";
import Container from "../container/container";
import Typography from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { footerApplicationLinks } from "./app-links";
import { v4 as uuidv4 } from "uuid";
import ActiveLink from "./active-link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  console.log(uuidv4);
  const footerNavigationList = footerApplicationLinks.map((item, id) => (
    <div key={uuidv4()}>{item.label}</div>
  ));

  return (
    <div className="bg-gray-900">
      <Container className="flex justify-between py-10">
        <div className="flex flex-col items-center gap-1">
          <Typography variant="h4" theme="white">
            peintures
          </Typography>
          <Typography variant="body-base" theme="gray">
            jetez un coup d&apos;oeil à des tutoriels de peintures
          </Typography>
          <a
            href="https://youtu.be/eziozJC3euU?si=xu7ZNMBtG6xwIIJf"
            target="_blank"
          >
            <Image
              src="/assets/svg/youtube.svg"
              width={351}
              height={240}
              alt="tuto peintures | youtube"
            />
          </a>
        </div>
        <div className="">
          <FooterLink />
        </div>
      </Container>
      <Container className="pt-9 pb-11 space-y-11">
        <hr className="text-gray-500"></hr>
        <div className="flex items-center justify-between">
          <Typography variant="caption3" theme="gray">
            {`Copyright @ ${currentYear} | Propulsed by David Stevenoot - Layer by Layer`}
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export default Footer;

const FooterLink = () => {
  const LinksList = footerApplicationLinks.map((link) => (
    <div key={uuidv4()}>
      {link.type === "internal" && (
        <ActiveLink href={link.baseUrl}>{link.label}</ActiveLink>
      )}
      {link.type === "external" && (
        <a href={link.baseUrl} target="_blank">
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
        titre
      </Typography>
      <Typography theme="gray" variant="caption3" classname="space-y-4">
        {LinksList}
      </Typography>
    </div>
  );
};
