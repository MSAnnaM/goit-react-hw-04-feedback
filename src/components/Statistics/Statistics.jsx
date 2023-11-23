import React from 'react';
import styles from './Statistics.module.css';

export class Statistics extends React.Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <div className={styles.statistics}>
        <p className={styles.text}>Good:{good}</p>
        <p className={styles.text}>Neutral:{neutral}</p>
        <p className={styles.text}>Bad:{bad}</p>
        <p className={styles.total}>Total:{total}</p>
        <p className={styles.positive}>Positive Feedback:{positivePercentage}%</p>
      </div>
    );
  }
}
