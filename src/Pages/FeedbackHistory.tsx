import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { getMyFeedback } from "../services/feedbackService";
import FeedbackList from "../components/FeedbackList";

interface FeedbackItem {
  id: number;
  category: string;
  text: string;
  sentiment: string;
  createdAt: string;
}

export default function FeedbackHistory() {
  const { token } = useContext(AuthContext);
  const [feedbacks, setFeedbacks] = useState<FeedbackItem[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await getMyFeedback(token!);
      setFeedbacks(res.data as FeedbackItem[]);
    };
    fetch();
  }, [token]);

  return (
    <div>
      <h2>My Feedback</h2>
      <FeedbackList feedbacks={feedbacks} />
    </div>
  );
}
