"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit() {
    if (selectedRating === null) return;
    setIsSubmitted(true);
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <article className={styles.card}>
          {isSubmitted ? (
            <section className={styles.thankYou}>
              <Image
                src="/illustration-thank-you.svg"
                alt=""
                width={162}
                height={108}
              />
              <p className={styles.result}>
                You selected {selectedRating} out of 5
              </p>
              <h1>Thank you!</h1>
              <p>
                We appreciate you taking the time to give a rating. If you ever
                need more support, don’t hesitate to get in touch!
              </p>
            </section>
          ) : (
            <>
              <div className={styles.starWrapper}>
                <Image src="/icon-star.svg" alt="" width={17} height={16} />
              </div>
              <h1>How did we do?</h1>
              <p>
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
              </p>
              <div className={styles.pointsContainer}>
                <button
                  type="button"
                  className={`${styles.ratingButton} ${
                    selectedRating === 1 ? styles.selected : ""
                  }`}
                  onClick={() => setSelectedRating(1)}
                  aria-pressed={selectedRating === 1}
                >
                  1
                </button>
                <button
                  type="button"
                  className={`${styles.ratingButton} ${
                    selectedRating === 2 ? styles.selected : ""
                  }`}
                  onClick={() => setSelectedRating(2)}
                  aria-pressed={selectedRating === 2}
                >
                  2
                </button>
                <button
                  type="button"
                  className={`${styles.ratingButton} ${
                    selectedRating === 3 ? styles.selected : ""
                  }`}
                  onClick={() => setSelectedRating(3)}
                  aria-pressed={selectedRating === 3}
                >
                  3
                </button>
                <button
                  type="button"
                  className={`${styles.ratingButton} ${
                    selectedRating === 4 ? styles.selected : ""
                  }`}
                  onClick={() => setSelectedRating(4)}
                  aria-pressed={selectedRating === 4}
                >
                  4
                </button>
                <button
                  type="button"
                  className={`${styles.ratingButton} ${
                    selectedRating === 5 ? styles.selected : ""
                  }`}
                  onClick={() => setSelectedRating(5)}
                  aria-pressed={selectedRating === 5}
                >
                  5
                </button>
              </div>
              <button
                type="button"
                className={`${styles.submitButton} `}
                onClick={handleSubmit}
              >
                Submit
              </button>
            </>
          )}
        </article>
      </main>
    </div>
  );
}
