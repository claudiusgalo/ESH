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
    body: 'Elcy was an invaluable resource during my move from Hawaii to Virginia. Elcy was always available and went above and beyond to ensure our questions were addressed. Highly recommend Elcy Pereira to anyone moving to the Winchester area.',
  },
  {
    id: 2,
    name: 'maw187',
    date: '2016-06-09',
    avatar: '/avatar-18.svg',
    local_knowledge: '5/5',
    process_expertise: '5/5',
    responsiveness: '5/5',
    negotiation_skills: '5/5',
    title: 'Bought a Single Family home in 2012 in Winchester, VA',
    body: 'Very attentive, knows the ins and outs of the business, answers all the questions promptly. Will take her time to show you all the houses you want, very patient.',
  },
  {
    id: 3,
    name: 'joelmita',
    date: '2016-06-09',
    avatar: '/avatar-18.svg',
    local_knowledge: '5/5',
    process_expertise: '5/5',
    responsiveness: '5/5',
    negotiation_skills: '5/5',
    title: 'Bought a Single Family home in 2015 in Winchester, VA',
    body: 'I’ve known Elcy for many years and have sought her assistance on a number of occasions. Her attention to detail makes her an exceptional agent in her market. Always providing an excellent service—highly recommend her to anyone selling, buying, or renting.',
  },
  {
    id: 4,
    name: 'direxpo',
    date: '2016-06-09',
    avatar: '/avatar-18.svg',
    local_knowledge: '5/5',
    process_expertise: '5/5',
    responsiveness: '5/5',
    negotiation_skills: '5/5',
    title: 'Bought a Single Family home in 2013 in Winchester, VA',
    body: 'Elcy has helped us for a few years with all our real estate needs. She impressed us with her local market knowledge and professionalism. She keeps her appointments, goes the extra mile, and genuinely cares. Highly recommend!',
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
  size = 16, // slightly smaller for phones; still crisp on Pro Max
  className,
}) => {
  const v = roundHalf(Math.max(0, Math.min(5, value)));
  const full = Math.floor(v);
  const half = v - full >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;

  return (
    <div
      className={`flex items-center justify-center gap-1 text-yellow-400 ${
        className ?? ''
      }`}
    >
      {Array.from({ length: full }).map((_, i) => (
        <StarFill
          key={`f-${i}`}
          size={size}
        />
      ))}
      {half === 1 && (
        <StarHalf
          key="half"
          size={size}
        />
      )}
      {Array.from({ length: empty }).map((_, i) => (
        <Star
          key={`e-${i}`}
          size={size}
        />
      ))}
    </div>
  );
};

const Testimonial: React.FC = () => {
  const testimonials = useMemo(
    () => [...rawTestimonials].sort((a, b) => toTime(b.date) - toTime(a.date)), // newest → oldest
    []
  );
  const [current, setCurrent] = useState(0);

  const overall = (t: TestimonialItem) =>
    (
      [
        'local_knowledge',
        'process_expertise',
        'responsiveness',
        'negotiation_skills',
      ] as const
    )
      .map((k) => toScore(t[k]))
      .reduce((a, b) => a + b, 0) / 4;

  useEffect(() => {
    const id = setInterval(
      () => setCurrent((i) => (i + 1) % testimonials.length),
      6000
    );
    return () => clearInterval(id);
  }, [testimonials.length]);

  return (
    <div className={`${styles.page} text-white px-4 sm:px-6`}>
      <h2
        className={`${reader.className} text-[18px] sm:text-[20px] text-white mb-3 sm:mb-4`}
      >
        Client Testimonials
      </h2>

      <section
        className={`${styles.slider_container} relative overflow-hidden`}
        aria-roledescription="carousel"
      >
        {testimonials.map((t, idx) => (
          <article
            key={t.id}
            className={`${styles.slide} text-white text-center`}
            aria-hidden={idx !== current}
            style={{
              transform: `translateX(${100 * (idx - current)}%)`,
              opacity: idx === current ? '1' : '0',
              visibility: idx === current ? 'visible' : 'hidden',
            }}
          >
            {/* Avatar → Name → Overall stars */}
            <div className="flex flex-col items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Image
                src={t.avatar}
                alt={`${t.name} avatar`}
                width={56}
                height={56}
                className="rounded-full object-cover w-12 h-12 sm:w-14 sm:h-14 mx-auto block"
              />
              <span className="font-medium leading-tight text-sm sm:text-base">
                {t.name}
              </span>
              <Stars value={overall(t)} />
            </div>

            {/* Title & Body */}
            <h3 className="text-base sm:text-lg font-semibold leading-snug">
              {t.title}
            </h3>
            <p className="text-sm sm:text-base leading-relaxed max-w-prose mx-auto mt-2">
              &ldquo;{t.body}&rdquo;
            </p>

            {/* Category ratings */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mt-4">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span>Local Knowledge</span>
                <Stars value={toScore(t.local_knowledge)} />
              </div>
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span>Process Expertise</span>
                <Stars value={toScore(t.process_expertise)} />
              </div>
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span>Responsiveness</span>
                <Stars value={toScore(t.responsiveness)} />
              </div>
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span>Negotiation Skills</span>
                <Stars value={toScore(t.negotiation_skills)} />
              </div>
            </div>
          </article>
        ))}

        {/* Mobile-friendly nav buttons */}
        <button
          type="button"
          className={`${styles.prev} text-white h-10 w-10 sm:h-12 sm:w-12 rounded-full grid place-items-center active:scale-95 touch-manipulation`}
          onClick={() =>
            setCurrent((i) => (i === 0 ? testimonials.length - 1 : i - 1))
          }
          aria-label="Previous testimonial"
        >
          <FiChevronLeft className="h-6 w-6 sm:h-7 sm:w-7" />
        </button>
        <button
          type="button"
          className={`${styles.next} text-white h-10 w-10 sm:h-12 sm:w-12 rounded-full grid place-items-center active:scale-95 touch-manipulation`}
          onClick={() => setCurrent((i) => (i + 1) % testimonials.length)}
          aria-label="Next testimonial"
        >
          <FiChevronRight className="h-6 w-6 sm:h-7 sm:w-7" />
        </button>
      </section>
    </div>
  );
};

export default Testimonial;
