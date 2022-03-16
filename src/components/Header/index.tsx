import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/images/logo.svg";
import styles from "./styles.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={logo} alt="Ig.news" />
        <nav>
          <Link href="/">
            <a className={styles.active}>Home</a>
          </Link>
          <Link href="/posts">
            <a>Posts</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
