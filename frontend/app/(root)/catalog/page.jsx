'use client';
import dynamic from 'next/dynamic';
import { active_listings } from '@/data/active_listings';
import React, { useRef } from 'react';

import styles from './catalog.module.css';
import SingleProduct from '@/components/SingleProduct';

const MyAwesomeMap = dynamic(() => import('@/components/Map'), { ssr: false });

export default function Catalog() {
  const mapRef = useRef(null);

  const handleClick = (coords) => {
    if (mapRef.current && Array.isArray(coords) && coords.length === 2) {
      mapRef.current.setView(coords, 15); // zoom in when selecting a listing
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.map}>
          <MyAwesomeMap
            data={active_listings}
            mapRef={mapRef}
          />
        </div>

        <div className={styles.data}>
          <div className={styles.info}>
            <h1 className="uppercase">Find your future home</h1>
          </div>

          <div className={styles.products}>
            {active_listings.map((d) => (
              <SingleProduct
                key={d.id}
                title={d.title}
                image={d.image}
                number={d.number}
                desc={d.desc}
                time={d.time}
                code={d.coordinates} // <-- pass coords to your card
                handleClick={handleClick} // <-- will setView on click
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
