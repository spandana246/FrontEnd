// src/pages/FeedbackForm.tsx
import React, { useState } from 'react';
import feedbackService from '../services/feedbackService';

const FeedbackForm: React.FC = () => {
  const [category, setCategory] = useState('General');
  const [comment, setComment] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await feedbackService.submitFeedback({ category, comment, image });
      alert('Feedback submitted');
      setComment('');
    } catch {
      alert('Error submitting feedback');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Submit Feedback</h2>
      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option>General</option>
        <option>UI</option>
        <option>Bug</option>
        <option>Suggestion</option>
      </select>
      <textarea placeholder="Your feedback" value={comment} onChange={e => setComment(e.target.value)} />
      <input type="file" accept="image/*" onChange={e => setImage(e.target.files?.[0] || null)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;
