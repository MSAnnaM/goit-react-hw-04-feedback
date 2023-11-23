import React from 'react';
import styles from './FeedbackOptions.module.css';

export class FeedbackOptions extends React.Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div className={styles.buttonContainer}>
        {options.map(option => {
          return (
            <button key={option} className={styles.button} onClick={() => onLeaveFeedback(option)}>
              {option}
            </button>
          );
        })}
      </div>
    );
  }
}
