// src/pages/FeedbackHistory.tsx
import React, { useEffect, useState } from 'react';
import feedbackService from '../services/feedbackService';

const FeedbackHistory: React.FC = () => {
  const [feedbackList, setFeedbackList] = useState<any[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await feedbackService.getMyFeedback();
      setFeedbackList(data);
    };
    loadData();
  }, []);

  return (
    <div>
      <h2>My Feedback</h2>
      <ul>
        {feedbackList.map(fb => (
          <li key={fb.id}>
            <strong>{fb.category}</strong>: {fb.comment} | Sentiment: {fb.sentimentScore}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackHistory;
