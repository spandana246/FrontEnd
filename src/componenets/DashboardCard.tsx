// src/components/DashboardCard.tsx
import React from 'react';

const DashboardCard: React.FC<{ title: string; value: number | string }> = ({ title, value }) => (
  <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '0.5rem' }}>
    <h4>{title}</h4>
    <p>{value}</p>
  </div>
);

export default DashboardCard;
