import React from 'react'

import * as styles from './easing.module.css'

export const Easing: React.FC = () => (
  <div className={styles.easing}>
    <div className={styles.functions}>
      <div className={styles.functionBlock}>
        <div className={styles.label}>
          <div>
            Use <b>ease-in-out</b> for moving point to point.
          </div>
          <div className={`${styles.dotContainer} ${styles.dotContainer1}`}>
            <div className={styles.dot} />
          </div>
        </div>
        <div className={styles.graphic}>
          <svg
            width="151"
            height="103"
            viewBox="0 0 151 103"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <path
                d="M1 100h149"
                stroke="#AAA"
                strokeWidth="2"
                opacity=".54"
              />
              <path
                d="M76.12 2v98"
                stroke="#979797"
                strokeWidth="2"
                opacity=".54"
                strokeDasharray="4,4"
              />
              <path
                d="M2 100.117s53.59 4.667 73.973-49.437C96.357-3.424 148.567 2.164 148.567 2.164"
                stroke="#8FC4E9"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </g>
          </svg>
        </div>
      </div>
      <div className={styles.functionBlock}>
        <div className={styles.label}>
          <div>
            Use <b>ease-out</b> for entering elements.
          </div>
          <div className={`${styles.dotContainer} ${styles.dotContainer2}`}>
            <div className={styles.dot} />
          </div>
        </div>
        <div className={styles.graphic}>
          <svg
            width="151"
            height="102"
            viewBox="0 0 151 102"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <path
                d="M1 100h149"
                stroke="#AAA"
                strokeWidth="2"
                opacity=".54"
              />
              <path
                d="M76.12 2v98"
                stroke="#979797"
                strokeWidth="2"
                opacity=".54"
                strokeDasharray="4,4"
              />
              <path
                d="M2 99.953S56.412 2 148.567 2"
                stroke="#8FC4E9"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </g>
          </svg>
        </div>
      </div>
      <div className={styles.functionBlock}>
        <div className={styles.label}>
          <div>
            Use <b>ease-in</b> for exiting elements.
          </div>
          <div className={`${styles.dotContainer} ${styles.dotContainer3}`}>
            <div className={styles.dot} />
          </div>
        </div>
        <div className={styles.graphic}>
          <svg
            width="151"
            height="102"
            viewBox="0 0 151 102"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <path
                d="M1 100h149"
                stroke="#AAA"
                strokeWidth="2"
                opacity=".54"
              />
              <path
                d="M76.12 2v98"
                stroke="#979797"
                strokeWidth="2"
                opacity=".54"
                strokeDasharray="4,4"
              />
              <path
                d="M2 99.953S133.785 68.603 148.567 2"
                stroke="#8FC4E9"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </g>
          </svg>
        </div>
      </div>
      <div className={styles.functionBlock}>
        <div className={styles.label}>
          <div>
            Use <b>linear</b> for opacity or color changes.
          </div>
          <div className={styles.dotContainer}>
            <div className={`${styles.dot} ${styles.dot4}`} />
          </div>
        </div>
        <div className={styles.graphic}>
          <svg
            width="151"
            height="103"
            viewBox="0 0 151 103"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fillRule="evenodd">
              <path
                d="M1 100h149H1z"
                stroke="#AAA"
                strokeWidth="2"
                opacity=".54"
              />
              <path
                d="M76.12 2v98"
                stroke="#979797"
                strokeWidth="2"
                opacity=".54"
                strokeDasharray="4,4"
              />
              <path
                d="M2 100.218L148.567 2"
                stroke="#8FC4E9"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
    <div className={styles.defaultFunction}>
      When in doubt, use <b>ease-in-out</b>.
    </div>
  </div>
)
