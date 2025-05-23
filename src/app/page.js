"use client";
import Link from "next/link";
import { auth } from "@/lib/firebase";
import { useEffect, useRef, useState } from "react";
import { CustomButton, CustomInput, ProjectThumbnail } from "@/ui/components";
import Typography from "@/ui/design-system/typography";
import { createProject, readProjects } from "@/services/projectService";
import { readAllPaintings } from "@/services/paintingService";
import { Plus } from "lucide-react";
import styles from "@/styles/styles.module.scss";

const HomePage = () => {
  const [projects, setProjects] = useState([]);
  const [paintings, setPaintings] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isCreateProjectMenuOpen, setIsCreateProjectMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // ouverture/fermeture de la modale
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsCreateProjectMenuOpen(false);
      }
    };

    if (isCreateProjectMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCreateProjectMenuOpen]);

  // affichage des projets en temps réel
  useEffect(() => {
    const fetchProjects = async () => {
      const user = auth.currentUser;
      if (!user) return;
      const data = await readProjects(user.uid);
      setProjects(data);
    };
    fetchProjects();
  }, []);

  // affichage des peintures
  useEffect(() => {
    readAllPaintings().then(setPaintings);
  }, []);

  const handlecreateProject = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    const ownerId = user.uid;
    const id = await createProject(name, description, ownerId);
    const updatedProjects = await readProjects(ownerId);
    setProjects(updatedProjects);
  };

  return (
    <>
      <section className={styles.banner}>
        <h1>Layer by Layer</h1>
        <CustomButton>
          <Link href="/ProjectsPage">créer un nouveau projet</Link>
        </CustomButton>
      </section>
      <section className={styles.projects}>
        <h2 className={styles.projects__title}>Projets</h2>
        <div className={styles.projects__grid}>
          {projects.map((project) => (
            <div key={project.id}>
              <ProjectThumbnail
                name={project.name}
                description={project.description}
              />
            </div>
          ))}
          <button
            className={styles.projects__add}
            onClick={() => setIsCreateProjectMenuOpen((prev) => !prev)}
          >
            nouveau projet
            <Plus />
          </button>
          {isCreateProjectMenuOpen && (
            <div className={styles.overlay}>
              <div ref={menuRef} className={styles.modal}>
                <h3>Nouveau projet</h3>
                <form noValidate>
                  <CustomInput
                    label="name"
                    onChange={(e) => setName(e)}
                    type="text"
                  />
                  <CustomInput
                    label="description"
                    onChange={(e) => setDescription(e)}
                    type="text"
                  />
                  <CustomButton
                    children="register"
                    type="button"
                    onClick={handlecreateProject}
                  />
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
      <section className={styles.paintings}>
        <h2 className={styles.projects__title}>Peintures</h2>
        <Typography>Texte</Typography>
        <div className={styles.projects__grid}>
          {paintings.map((painting) => (
            <div key={painting.id}>{painting.name}</div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
