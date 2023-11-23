import React from 'react';
import styles from './Message.module.css';

export class Message extends React.Component {
  render() {
    const { message } = this.props;
    return <p className={styles.message}>{message}</p>;
  }
}
