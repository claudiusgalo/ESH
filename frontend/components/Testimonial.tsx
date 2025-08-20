'use client';
import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import styles from './testimonial.module.css';
import { Newsreader } from 'next/font/google';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { StarFill, StarHalf, Star } from 'react-bootstrap-icons';

const reader = Newsreader({
  subsets: ['latin'],
  weight: '300',
  display: 'swap',
});

type TestimonialItem = {
  id: number;
  name: string;
  date: string;
  avatar: string;
  local_knowledge: string;
  process_expertise: string;
  responsiveness: string;
  negotiation_skills: string;
  title: string;
  body: string;
};

const rawTestimonials: TestimonialItem[] = [

  {
    id: 1,
    name: 'Charles Carter',
    date: '2016-08-07',
    avatar: '/avatar-18.svg',
    local_knowledge: '5/5',
    process_expertise: '5/5',
    responsiveness: '5/5',
    negotiation_skills: '5/5',
    title: 'Helped me rent a Single Family home in Winchester, VA',
    body:
      'Elcy was an invaluable resource during my move from Hawaii to Virginia. Elcy was always available and went above and beyond to ensure our questions were addressed. Highly recommend Elcy Pereira to anyone moving to the Winchester area.',
  },
  {
    id: 2,
    name: 'maw187',
    date: '2016-6-9',
    avatar: '/avatar-18.svg',
    local_knowledge: '5/5',
    process_expertise: '5/5',
    responsiveness: '5/5',
    negotiation_skills: '5/5',
    title: 'Bought a Single Family home in 2012 in Winchester,VA',
    body:
      'Very attentive, knows the ins and outs of the business, answer all the questions promptly Will take her time to show you all the houses you want, very patient',
  },
  {
    id: 3,
    name: 'joelmita',
    date: '2016-6-9',
    avatar: '/avatar-18.svg',
    local_knowledge: '5/5',
    process_expertise: '5/5',
    responsiveness: '5/5',
    negotiation_skills: '5/5',
    title: 'Bought a Single Family home in 2015 in Winchester,VA',
    body:
      'I’ve known Elcy for many years and have sought her assistance on a number of occasions. Her attention to details makes her an exceptional agent in her market. Always providing an excellent service, I would definitely refer her to anyone looking into selling, buying or renting.',
  },
  {
    id: 4,
    name: 'direxpo',
    date: '2016-6-9',
    avatar: '/avatar-18.svg',
    local_knowledge: '5/5',
    process_expertise: '5/5',
    responsiveness: '5/5',
    negotiation_skills: '5/5',
    title: 'Bought a Single Family home in 2013 in Winchester,VA',
    body:
      'Elcy has helped us for a few years with all our real estate needs. We selected her because she impressed us with her knowledge of the local market and of the real estate business. But in addition to this knowledge, she has shown us a very high degree of professionalism. She keeps her appointments, she goes the extra mile, and she has a personal interest in us as a family. I highly recommend Elcy!',
  },

];

const toTime = (d: string) => new Date(d).getTime() || 0;
const toScore = (val: string): number => {
  if (!val) return 0;
  if (val.includes('/')) {
    const [num, den] = val.split('/').map((s) => Number(s.trim()));
    return den ? (num / den) * 5 : num;
  }
  return Number(val) || 0;
};
const roundHalf = (n: number) => Math.round(n * 2) / 2;

// ⭐ Center-capable Stars
const Stars: React.FC<{ value: number; size?: number; className?: string }> = ({
  value,
  size = 18,
  className,
}) => {
  const v = roundHalf(Math.max(0, Math.min(5, value)));
  const full = Math.floor(v);
  const half = v - full >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;

  return (
    <div className={`flex items-center justify-center gap-1 text-yellow-400 ${className ?? ''}`}>
      {Array.from({ length: full }).map((_, i) => <StarFill key={`f-${i}`} size={size} />)}
      {half === 1 && <StarHalf key="half" size={size} />}
      {Array.from({ length: empty }).map((_, i) => <Star key={`e-${i}`} size={size} />)}
    </div>
  );
};

const Testimonial: React.FC = () => {
  const testimonials = useMemo(
    () => [...rawTestimonials].sort((a, b) => toTime(b.date) - toTime(a.date)),
    []
  );
  const [current, setCurrent] = useState(0);

  const overall = (t: TestimonialItem) =>
    (['local_knowledge', 'process_expertise', 'responsiveness', 'negotiation_skills'] as const)
      .map((k) => toScore(t[k]))
      .reduce((a, b) => a + b, 0) / 4;

  useEffect(() => {
    const id = setInterval(() => setCurrent((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, [testimonials.length]);

  return (
    <div className={`${styles.page} text-white`}>
      <h2 className={`${reader.className} text-[20px] text-white`}>Client Testimonials</h2>

      <section className={styles.slider_container} aria-roledescription="carousel">
        {testimonials.map((t, idx) => (
          <article
            key={t.id}
            className={`${styles.slide} text-white`}
            aria-hidden={idx !== current}
            style={{
              transform: `translateX(${100 * (idx - current)}%)`,
              opacity: idx === current ? '1' : '0',
              visibility: idx === current ? 'visible' : 'hidden',
            }}
          >
            {/* Avatar on top → Name → Stars (all centered) */}
            <div className="flex flex-col items-center text-center gap-2 mb-4">
              <Image
                src={t.avatar}
                alt={`${t.name} avatar`}
                width={56}
                height={56}
                className="rounded-full object-cover w-14 h-14 mx-auto self-center block"
              />
              <span className="font-medium text-white leading-tight">{t.name}</span>
              <Stars value={overall(t)} />
            </div>

            {/* Title & Body */}
            <h3 className="text-lg font-semibold text-white">{t.title}</h3>
            <p className="text-white">&ldquo;{t.body}&rdquo;</p>

            {/* Category ratings */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 text-white">
              <div className="flex items-center justify-between">
                <span>Local Knowledge</span>
                <Stars value={toScore(t.local_knowledge)} />
              </div>
              <div className="flex items-center justify-between">
                <span>Process Expertise</span>
                <Stars value={toScore(t.process_expertise)} />
              </div>
              <div className="flex items-center justify-between">
                <span>Responsiveness</span>
                <Stars value={toScore(t.responsiveness)} />
              </div>
              <div className="flex items-center justify-between">
                <span>Negotiation Skills</span>
                <Stars value={toScore(t.negotiation_skills)} />
              </div>
            </div>
          </article>
        ))}

        <button
          type="button"
          className={`${styles.prev} text-white`}
          onClick={() => setCurrent((i) => (i === 0 ? testimonials.length - 1 : i - 1))}
          aria-label="Previous testimonial"
        >
          <FiChevronLeft />
        </button>
        <button
          type="button"
          className={`${styles.next} text-white`}
          onClick={() => setCurrent((i) => (i + 1) % testimonials.length)}
          aria-label="Next testimonial"
        >
          <FiChevronRight />
        </button>
      </section>
    </div>
  );
};

export default Testimonial;

