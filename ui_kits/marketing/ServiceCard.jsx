// ServiceCard.jsx — light card on the services row.

function ServiceCard({ num, title, body }) {
  return (
    <article className="mk-service">
      <div className="mk-service__num">{num}</div>
      <h3>{title}</h3>
      <p>{body}</p>
      <a className="mk-service__more" href="#">Saber más →</a>
    </article>
  );
}
window.ServiceCard = ServiceCard;
