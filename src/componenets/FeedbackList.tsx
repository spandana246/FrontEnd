// src/components/FeedbackList.tsx
import React from 'react';

interface Feedback {
  id: string;
  category: string;
  comment: string;
  sentimentScore: number;
  createdAt: string;
}

const FeedbackList: React.FC<{ feedbacks: Feedback[] }> = ({ feedbacks }) => (
  <ul>
    {feedbacks.map(fb => (
      <li key={fb.id}>
        <strong>{fb.category}</strong> – {fb.comment} (Score: {fb.sentimentScore})
      </li>
    ))}
  </ul>
);

export default FeedbackList;
