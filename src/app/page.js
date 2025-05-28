"use client";
import Link from "next/link";
import { auth } from "@/lib/firebase";
import { useEffect, useRef, useState } from "react";
import { CustomButton, CustomInput, ProjectThumbnail } from "@/ui/components";
import Typography from "@/ui/design-system/typography/typography";
import { createProject, readProjects } from "@/services/projectService";
import { readAllPaintings } from "@/services/paintingService";
import {
  CircleDollarSign,
  Euro,
  Plus,
  PoundSterling,
  RotateCw,
  SkipBack,
  SkipForward,
} from "lucide-react";
import styles from "@/styles/styles.module.scss";
import Button from "@/ui/design-system/button/button";
import Spinner from "@/ui/design-system/spinner/spinner";

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
        <Typography component="h1" variant="h1" theme="white">
          Layer by Layer
        </Typography>
        <CustomButton>
          <Link href="/ProjectsPage">créer un nouveau projet</Link>
        </CustomButton>
      </section>
      <section className={styles.projects}>
        <Typography component="h3" variant="h3">
          Projets
        </Typography>
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
                <Typography component="h3" variant="h3">
                  Nouveau projet
                </Typography>
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
                  <CustomButton type="button" onClick={handlecreateProject}>
                    register
                  </CustomButton>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
      <section className={styles.paintings}>
        <Typography component="h3" variant="h3">
          Peintures
        </Typography>
        <div>
          <Button
            size="large"
            icon={{ icon: SkipForward }}
            variant="icon"
            iconTheme="accent"
          />
          <Button
            variant="icon"
            icon={{ icon: SkipBack }}
            iconTheme="secondary"
            isLoading
          />
          <Button
            variant="icon"
            size="small"
            icon={{ icon: RotateCw }}
            iconTheme="gray"
          />
        </div>
      </section>
    </>
  );
};

export default HomePage;
