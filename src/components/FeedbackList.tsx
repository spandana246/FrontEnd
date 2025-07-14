export default function FeedbackList({ feedbacks }: { feedbacks: any[] }) {
  return (
    <div>
      {feedbacks.map((f) => (
        <div key={f.id} className="feedback-card">
          <p><strong>Category:</strong> {f.category}</p>
          <p><strong>Feedback:</strong> {f.text}</p>
          <p><strong>Sentiment:</strong> {f.sentiment}</p>
          <p><strong>Submitted:</strong> {new Date(f.createdAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}
