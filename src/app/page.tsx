import Image from "next/image";
import Link from "next/link"
import Styles from "./page.module.scss";
import Login from "./login/page"
import React from "react";
import Principal from "./principal"

export default function Home () {
  return (

    <main className={Styles.main}>
    
      <nav className={Styles.navbar}>
      <Link href="/login">
        Login
      </Link>
      <Link href="/login">
        Login
      </Link>
      <Link href="/login">
        Login
      </Link>
      <Link href="/login">
        Login
      </Link>
      </nav>
      <Principal />
      
      
    </main>
      
    
  );
};
