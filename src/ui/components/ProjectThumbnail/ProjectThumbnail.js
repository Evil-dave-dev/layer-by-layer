import { Pencil } from "lucide-react";
import styles from "./styles.module.scss";
import Link from "next/link";

const ProjectThumbnail = (image, name, description) => {
  return (
    <button className={styles.container}>
      <Link href="/ProjectsPage" className={styles.edit}>
        <Pencil />
      </Link>
      <img src="nains.jpg" alt="nains" className={styles.image} />
      <div className={styles.text}>
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
    </button>
  );
};

export default ProjectThumbnail;
