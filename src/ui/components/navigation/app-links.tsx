import { AppLinks } from "@/types/app-links";

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
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "inscription",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "reset mot de passe",
    baseUrl: "/#",
    type: "internal",
  },
];

export const footerSocialNetworkLinks: AppLinks[] = [
  {
    label: "instagram",
    baseUrl: "/#",
    type: "external",
  },
  {
    label: "youtube",
    baseUrl: "/#",
    type: "external",
  },
  {
    label: "facebook",
    baseUrl: "/#",
    type: "external",
  },
];
