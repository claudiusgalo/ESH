import React from 'react'
import styles from "./leatherfeature.module.css"
import { Newsreader } from "next/font/google";
import Underlined from "./Underlined";
import Image from 'next/image';
const newspaper = Newsreader({
  subsets: ["latin"],
  weight: ["300"],
  display: "swap",
});
const LeatherFeatures = () => {
  return (
    <div className={styles.page}>
      <h3 className={`${newspaper.className} ${styles.head}`}>
        LE CHIC DU CHIEN
      </h3>
      <div className={styles.image_container}>
        <div className={styles.image}>
          <Image src={"/dog1.webp"} width={300} height={400} alt="dog" />
          <div className={styles.data}>
          <Underlined text={"Elcy Sells Homes"} color="black" />
          </div>
        </div>
        <div className={styles.image}>
          <Image src={"/strips.webp"} width={300} height={450} alt="dog" />
          <div className={styles.data}>
          <Underlined text={"Discover"} color="black" />
          </div>
        </div>
      </div>
      <Image className={styles.dog} src="/hulot.webp" width={100} height={100} alt='hulot'/>
    </div>
  );
}
export default LeatherFeatures