import "./styles/globals.scss";
import RootLayoutClient from "./RootLayoutClient";

// fonctionnalité côté serveur, donc incompatible avec les composants clients
// contient metadata, pas de hooks.
export const metadata = {
  title: "layer by Layer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
