import { House, LogOut, Settings, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Button from "@/ui/design-system/button/button";
import Link from "next/link";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import styles from "./styles.module.scss";

const Navbar = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsUserMenuOpen(false);
      }
    };

    if (isUserMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isUserMenuOpen]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsUserMenuOpen(false);
    } catch (error) {
      console.error("erreur deconnexion " + error);
    }
  };

  return (
    <nav className={styles.container}>
      <ul className={styles.links}>
        <li>
          <Link href="/" className={styles.link}>
            <House className={styles.icon} />
            home
          </Link>
        </li>
      </ul>
      <div ref={menuRef} className={styles.user__container}>
        {currentUser ? (
          <button
            className={styles.user__button}
            onClick={() => setIsUserMenuOpen((prev) => !prev)}
          >
            {currentUser.displayName}
            <User className={styles.icon} />
          </button>
        ) : (
          <>
            <Button variant="outline">
              <Link href="RegisterPage">inscrivez-vous</Link>
            </Button>
            <Button>
              <Link href="/LoginPage">connectez-vous</Link>
            </Button>
          </>
        )}
        {isUserMenuOpen && (
          <div className={styles.user__menu}>
            <Link href="/SettingsPage" className={styles.user__item}>
              <Settings className={styles.icon} />
              settings
            </Link>
            <button onClick={handleLogout} className={styles.user__item}>
              <LogOut className={styles.icon} /> deconnexion
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
