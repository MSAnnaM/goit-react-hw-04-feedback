import React from 'react';
import styles from './Message.module.css';

export const Message = ({ message }) => {
  return <p className={styles.message}>{message}</p>;
};
