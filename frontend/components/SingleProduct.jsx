"use client"
import React from 'react'
import styles from "./sproduct.module.css"
import Image from 'next/image'
import {FaPlus} from "react-icons/fa"
const SingleProduct = ({title,desc,image,number,time,handleClick,code}) => {
  return (
    <div className={styles.container} onClick={()=>handleClick(code)}>
      <Image src={image} width={290} height={200} alt='img' />
      <div className={styles.img_data}>
        <h3>{title}</h3>
        <p>{number}</p>
        <p>{desc}</p>
      </div>
      <div className={styles.img_time}>
        <h3>DAILY TIMES</h3>
        <p>{time}</p>
        <FaPlus/>
      </div>
    </div>
  );
}

export default SingleProduct