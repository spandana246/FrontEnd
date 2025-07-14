import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { submitFeedback } from "../services/feedbackService";

export default function FeedbackForm() {
  const [category, setCategory] = useState("");
  const [text, setText] = useState("");
  const { token } = useContext(AuthContext);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitFeedback({ category, text }, token!);
    alert("Feedback submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Submit Feedback</h2>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        <option value="HR">HR</option>
        <option value="IT">IT</option>
        <option value="Events">Events</option>
      </select>
      <textarea placeholder="Your feedback" onChange={(e) => setText(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}
