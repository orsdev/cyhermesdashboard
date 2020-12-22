export default function Buttons() {
  return (
    <section className="button">
      <hr />
      <div className="button-container">
        <button type="button" className="button-back" disabled>
          Go Back
        </button>
        <button type="button" className="button-continue">
          Continue
        </button>
      </div>
    </section>
  );
}
