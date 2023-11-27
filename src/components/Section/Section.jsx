import React from 'react';
import styles from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <div className={styles.title}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};
