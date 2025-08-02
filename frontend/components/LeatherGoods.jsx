"use client"
import React from 'react'
import styles from "./leather.module.css" 
import { Newsreader } from "next/font/google";
import Underlined from './Underlined';
const newspaper = Newsreader({
  subsets: ["latin"],
  weight: ["300"],
  display: "swap",
});
const LeatherGoods = () => {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          THE ART <br />
          OF <br /> LEATHER GOODS
        </h2>
        <p className={`${newspaper.className} ${styles.desc}`}>
          A TIMELESS <br /> AND AUTHENTIC <br /> REFINEMENT
        </p>
        <Underlined text={"discover our bags"}/>
      </div>
    </div>
  );
}

export default LeatherGoods