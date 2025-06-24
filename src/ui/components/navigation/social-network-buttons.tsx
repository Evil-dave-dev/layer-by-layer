import Button from "@/ui/design-system/button/button";
import { footerSocialNetworkLinks } from "./app-links";
import { v4 as uuidv4 } from "uuid";
import { FaFacebook } from "react-icons/fa";
import clsx from "clsx";

interface Props {
  theme?: "gray" | "accent" | "secondary";
  className?: string;
}

const SocialNetworkButtons = ({ className, theme = "accent" }: Props) => {
  const iconList = footerSocialNetworkLinks.map((socialNetwork) => (
    <Button
      key={uuidv4()}
      variant="icon"
      iconTheme={theme}
      icon={{ icon: socialNetwork.icon ? socialNetwork.icon : FaFacebook }}
      baseUrl={socialNetwork.baseUrl}
      linkType={socialNetwork.type}
    />
  ));

  return (
    <div className={clsx(className, "flex item-center gap-2.5")}>
      {iconList}
    </div>
  );
};

export default SocialNetworkButtons;
