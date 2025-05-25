import { Pencil } from "lucide-react";
import styles from "./styles.module.scss";
import Link from "next/link";
import Typography from "@/ui/design-system/typography";

const ProjectThumbnail = (image, name, description) => {
  return (
    <button className={styles.container}>
      <Link href="/ProjectsPage" className={styles.edit}>
        <Pencil />
      </Link>
      <img src="nains.jpg" alt="nains" className={styles.image} />
      <div className={styles.text}>
        <Typography component="h2" variant="h2">
          {name}
        </Typography>
        <Typography component="body-base" variant="body-base">
          {description}
        </Typography>
      </div>
    </button>
  );
};

export default ProjectThumbnail;
