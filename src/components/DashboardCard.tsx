export default function DashboardCard({ title, value }: { title: string; value: string | number }) {
  return (
    <div className="dashboard-card">
      <h4>{title}</h4>
      <p style={{ fontSize: "24px", margin: 0 }}>{value}</p>
    </div>
  );
}
