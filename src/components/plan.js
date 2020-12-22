export default function Plan() {
  return (
    <section className="plan">
      <p className="plan-select-text">
        Select your preferred package below
      </p>
      <div className="plan-container">
        <div className="plan-premium">
          <h6 className="plan-premium-start-from">Starts From</h6>
          <h6 className="plan-premium-currency">NGN</h6>
          <h4 className="plan-premium-balance">5,999,999.99</h4>
          <h6 className="plan-premium-annum">per annum</h6>
          <h3 className="plan-premium-title">Premium</h3>
          <p className="plan-premium-users">
            100 users
            <span>.</span>
            All Modules
          </p>
        </div>
        <div className="plan-basic">
          <i
            className="fa fa-check plan-basic-selected"
            aria-hidden="true"></i>
          <h3 className="plan-basic-title">Basic</h3>
          <h6>
            <b>30 days trails</b> on our premium app features and
            features
          </h6>
          <h5>
            <span>INCLUDES</span> <hr />
          </h5>
          <p> - 25 Users </p>
          <p> - All modules & features </p>
          <p> - Unlimited commitees </p>
          <p> - Unlimited roles creation </p>
        </div>
      </div>
    </section>
  );
}
