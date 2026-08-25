import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import styles from "./Footer.module.css";

const footerColumns = [
  [
    "Audio Description",
    "Investor Relations",
    "Legal Notices",
  ],
  [
    "Help Centre",
    "Jobs",
    "Cookie Preferences",
  ],
  [
    "Gift Cards",
    "Terms of Use",
    "Corporate Information",
  ],
  [
    "Media Centre",
    "Privacy",
    "Contact Us",
  ],
];

function Footer() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      url: "#",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "#",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      url: "#",
    },
    {
      name: "YouTube",
      icon: <FaYoutube />,
      url: "#",
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Social Media Icons */}
        <div className={styles.socialLinks}>
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              aria-label={social.name}
              className={styles.socialIcon}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Footer Links */}
        <div className={styles.linksGrid}>
          {footerColumns.map((column, index) => (
            <div className={styles.linkColumn} key={index}>
              {column.map((link) => (
                <a href="#" key={link} className={styles.footerLink}>
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Copyright */}
        <p className={styles.copyright}>
          © 1997-2026 Netflix, Inc.
        </p>
      </div>
    </footer>
  );
}

export default Footer;