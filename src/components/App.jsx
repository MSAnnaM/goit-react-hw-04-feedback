// import React from 'react';
// import { Section } from './Section/Section';
// import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
// import { Statistics } from './Statistics/Statistics';
// import { Message } from './Message/Message';
// import styles from './App.module.css';

// export class App extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleButtonClick = option => {
//     this.setState(prevState => ({ [option]: prevState[option] + 1 }));
//   };

//   countTotalFeedback = () => {
//     return Object.values(this.state).reduce((val, total) => total + val, 0);
//   };

//   countPositiveFeedbackPercentage = () => {
//     const total = this.countTotalFeedback();
//     return total === 0 ? 0 : Math.round((this.state.good / total) * 100);
//   };

//   render() {
//     const { good, bad, neutral } = this.state;
//     const totalFeedback = this.countTotalFeedback();
//     const percentage = this.countPositiveFeedbackPercentage();
//     return (
//       <div className={styles.container}>
//         <Section title="Please, leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.handleButtonClick}
//           />
//         </Section>
//         <Section title="Statistics">
//           {this.countTotalFeedback() > 0 ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={totalFeedback}
//               positivePercentage={percentage}
//             />
//           ) : (
//             <Message message="No feedback" />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }
import React, { useState, useEffect } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Message } from './Message/Message';
import styles from './App.module.css';

export const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleButtonClick = (option) => {
    setFeedback((prevFeedback) => ({ ...prevFeedback, [option]: prevFeedback[option] + 1 }));
  };

  const countTotalFeedback = () => {
    return Object.values(feedback).reduce((val, total) => total + val, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total === 0 ? 0 : Math.round((feedback.good / total) * 100);
  };

  useEffect(() => {
    document.title = `Feedback App - Total: ${countTotalFeedback()}`;
  }, [feedback]);

  const totalFeedback = countTotalFeedback();
  const percentage = countPositiveFeedbackPercentage();

  return (
    <div className={styles.container}>
      <Section title="Please, leave feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={handleButtonClick}
        />
      </Section>
      <Section title="Statistics">
        {totalFeedback > 0 ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={totalFeedback}
            positivePercentage={percentage}
          />
        ) : (
          <Message message="No feedback" />
        )}
      </Section>
    </div>
  );
};