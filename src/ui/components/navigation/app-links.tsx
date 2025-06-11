import { AppLinks, FooterLinks } from "@/types/app-links";

export const footerApplicationLinks: AppLinks[] = [
  {
    label: "accueil",
    baseUrl: "/",
    type: "internal",
  },
  {
    label: "settings",
    baseUrl: "/settings",
    type: "internal",
  },
  {
    label: "projects",
    baseUrl: "/projects",
    type: "internal",
  },
];

export const footerUserLinks: AppLinks[] = [
  {
    label: "mon espace",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "connexion",
    baseUrl: "/login",
    type: "internal",
  },
  {
    label: "inscription",
    baseUrl: "/register",
    type: "internal",
  },
  {
    label: "reset mot de passe",
    baseUrl: "/resetPassword",
    type: "internal",
  },
];

export const footerSocialNetworkLinks: AppLinks[] = [
  {
    label: "instagram",
    baseUrl:
      "https://www.instagram.com/_warhammer_community?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    type: "external",
  },
  {
    label: "youtube",
    baseUrl: "https://youtube.com/@officialwarhammer?si=mRaUmyKSZK_D7czJ",
    type: "external",
  },
  {
    label: "facebook",
    baseUrl: "https://www.facebook.com/groups/416641585058414/",
    type: "external",
  },
];

export const footerLinks: FooterLinks[] = [
  {
    label: "App",
    links: footerApplicationLinks,
  },
  {
    label: "Utilisateurs",
    links: footerUserLinks,
  },
  {
    label: "Réseaux",
    links: footerSocialNetworkLinks,
  },
];
