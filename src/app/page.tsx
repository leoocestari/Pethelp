'use client';
import Image from "next/image";
import styles from "./page.module.css";
import Login from "./components/login"
import React from "react";

export default function Home () {
  return (
    <main className={styles.main}>
      <Login />
      
    </main>
      
    
  );
}
