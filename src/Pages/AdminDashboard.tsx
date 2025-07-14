import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { getAllFeedback } from "../services/feedbackService";
import DashboardCard from "../components/DashboardCard";
import PieChart from "../components/PieChart";

interface FeedbackItem {
  id: number;
  category: string;
  text: string;
  sentiment: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const { token } = useContext(AuthContext);
  const [feedbacks, setFeedbacks] = useState<FeedbackItem[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await getAllFeedback(token!);
      setFeedbacks(res.data as FeedbackItem[]);
    };
    fetch();
  }, [token]);

  const categoryCounts: { [key: string]: number } = {};
  feedbacks.forEach((f) => {
    categoryCounts[f.category] = (categoryCounts[f.category] || 0) + 1;
  });

  const pieData = {
    labels: Object.keys(categoryCounts),
    datasets: [
      {
        data: Object.values(categoryCounts),
        backgroundColor: ["red", "blue", "green", "orange"],
      },
    ],
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <DashboardCard title="Total Feedback" value={feedbacks.length} />
      <PieChart data={pieData} />
    </div>
  );
}
