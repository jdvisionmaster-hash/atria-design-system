// ProcessSteps.jsx — 4 numbered steps on the navy section.

function ProcessSteps({ items }) {
  return (
    <div className="mk-steps">
      {items.map((it, i) => (
        <div className="mk-step" key={i}>
          <div className="mk-step__num">{String(i + 1).padStart(2, "0")}</div>
          <h4>{it.title}</h4>
          <p>{it.body}</p>
        </div>
      ))}
    </div>
  );
}
window.ProcessSteps = ProcessSteps;
