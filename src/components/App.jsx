import { useState } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export function App() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
  const { good, neutral, bad } = feedback;

  const handleClick = evt => {
    const optionName = evt.currentTarget.dataset.name;
    setFeedback(prevState => {
      const updatedFeedback = {
        [optionName]: Number(prevState[optionName]) + 1,
      };
      return {
        ...prevState,
        ...updatedFeedback,
      };
    });
  };

  const countTotalFeedback = () => {
    return Object.values(feedback).reduce((acc, value) => {
      return acc + value;
    }, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <>
      <Section title="Please leave feadback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={handleClick}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}
