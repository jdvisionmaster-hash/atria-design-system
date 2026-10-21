// FaqAccordion.jsx — native <details> accordion. Native is enough; the
// styling carries the brand.

function FaqAccordion({ items }) {
  return (
    <div className="mk-faq">
      {items.map((it, i) => (
        <details className="mk-faq__item" key={i} open={i === 0}>
          <summary>{it.q}</summary>
          <p>{it.a}</p>
        </details>
      ))}
    </div>
  );
}
window.FaqAccordion = FaqAccordion;
