export default function form() {
  return (
    <>
      <section className="form-section" id="formSection">
        <h2 className="form-title">Get Your Airtime Here</h2>
        <form>
          <div className="form-group">
            <label htmlFor="country">Country:</label>
            <select id="countrySelect" name="country" title="country">
              <option value="">Select a country</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="number">Phone Number:</label>
            <input type="tel" id="number" name="number" disabled />
          </div>
          <div className="form-group">
            <label htmlFor="provider">Service Provider:</label>
            <select id="provider" name="provider">
              <option value="">Select provider</option>
              <option>MTN NG</option>
              <option>GLO</option>
              <option>Airtel</option>
              <option>9Mobile</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount:</label>
            <input type="number" id="amount" name="amount" />
          </div>
          <button type="submit">Purchase</button>
        </form>
      </section>
    </>
  );
}
