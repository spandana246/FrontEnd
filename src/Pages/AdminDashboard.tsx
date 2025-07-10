// src/pages/AdminDashboard.tsx
import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import feedbackService from '../services/feedbackService';

const AdminDashboard: React.FC = () => {
  const [analytics, setAnalytics] = useState<any>({});

  useEffect(() => {
    const fetchAnalytics = async () => {
      const data = await feedbackService.getAnalytics();
      setAnalytics(data);
    };
    fetchAnalytics();
  }, []);

  const pieData = {
    labels: Object.keys(analytics.sentiments || {}),
    datasets: [{
      data: Object.values(analytics.sentiments || {}),
      backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56']
    }]
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <div style={{ width: 300 }}>
        <Pie data={pieData} />
      </div>
    </div>
  );
};

export default AdminDashboard;
