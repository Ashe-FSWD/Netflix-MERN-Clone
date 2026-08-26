import React, { useState, useEffect } from "react";
import logo from "../../assets/image/logo.png";
import { Link } from "react-router-dom";
import { Search, Bell, User, ChevronDown } from "lucide-react";
import styles from "./Header.module.css";

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={isScrolled ? styles.headerScrolled : styles.header}>
      <div className={styles.container}>
        {/* logo */}
        <img className={styles.logo} src={logo} alt="React logo" />

        {/* navigation */}
        <nav className={styles.nav}>
          <Link className={styles.navLink} to="/">
            Home
          </Link>
          <Link className={styles.navLink} to="/tv-shows">
            TV Shows
          </Link>
          <Link className={styles.navLink} to="/movies">
            Movies
          </Link>
          <Link className={styles.navLink} to="/new-popular">
            New & Popular
          </Link>
          <Link className={styles.navLink} to="/my-list">
            My List
          </Link>
          <Link className={styles.navLink} to="/browse-language">
            Browse by language
          </Link>
        </nav>

        {/* search, notification, profile */}
        <div className={styles.rightSection}>
          {/* search */}
          <div className={styles.searchContainer}>
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={styles.searchButton}
            >
              <Search size={20} />
            </button>
            {isSearchOpen && (
              <input
                type="text"
                placeholder="movie title"
                className={styles.searchInput}
                autoFocus
              />
            )}
          </div>

          {/* notification */}
          <button className={styles.iconButton}>
            <Bell size={20} />
            <span className={styles.notificationBadge}>3</span>
          </button>

          {/* profile */}
          <div className={styles.profileContainer}>
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className={styles.profileButton}
            >
              <User size={20} />
              <ChevronDown size={20} />
            </button>
            {isProfileOpen && (
              <div className={styles.profileMenu}>
                <button className={styles.profileMenuItem}>Account</button>
                <button className={styles.profileMenuItem}>Settings</button>
                <hr className={styles.profileMenuDivider} />
                <button className={styles.profileMenuItem}>Sign out</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
