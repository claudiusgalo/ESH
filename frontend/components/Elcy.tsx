'use client';
import React from 'react';
import Image from 'next/image';
import styles from './elcy.module.css';
import { Newsreader } from 'next/font/google';
import { elcy_profile } from '@/data/elcy_profile';

const newspaper = Newsreader({
  subsets: ['latin'],
  weight: ['300'],
  display: 'swap',
});

type Profile = {
  image: string;
  name: string;
  phone: string;
  email: string;
  synopsis: string;
};

const Elcy = ({ profile = elcy_profile }: { profile?: Profile }) => {
  const { image, name, phone, email, synopsis } = profile;

  return (
    <section className={styles.elcy_container}>
      <div className={styles.elcy_inner}>
        {/* Always two columns: small image (left) + text (right) */}
        <div className={styles.elcy_grid}>
          <div className={styles.image_wrap}>
            <Image
              src={image}
              alt={`${name} headshot`}
              fill
              sizes="(max-width: 480px) 18vw, (max-width: 768px) 16vw, 120px"
              className={styles.image}
              priority
            />
          </div>

          <div className={styles.bio}>
            <h1 className={`${newspaper.className} ${styles.name}`}>{name}</h1>

            <div className={` ${newspaper.className} ${styles.contact}`}>
              {phone && (
                <a
                  href={`tel:${phone.replace(/\D/g, '')}`}
                  className={styles.link}
                >
                  {phone}
                </a>
              )}
              {phone && email && (
                <span
                  className={styles.dot}
                  aria-hidden
                >
                  •
                </span>
              )}
              {email && (
                <a
                  href={`mailto:${email}`}
                  className={styles.link}
                >
                  {email}
                </a>
              )}
            </div>

            <p className={`${newspaper.className} ${styles.synopsis}`}>
              {synopsis}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Elcy;
