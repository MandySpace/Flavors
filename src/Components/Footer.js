function Footer() {
  return (
    <section className="footer">
      <div className="container max-width">
        <div className="links">
          <ul className="list">
            <li className="list-item">HOME</li>
            <li className="list-item">RECIPES</li>
            <li className="list-item">ABOUT US</li>
          </ul>
        </div>
        <div className="contact">
          <h3>Contact Us</h3>
          <form>
            <input type="text" className="name" placeholder="Name" />
            <input type="email" className="email" placeholder="Email" />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              className="message"
              placeholder="Message..."
            ></textarea>
          </form>
          <button className="btn-square white">Submit</button>
        </div>
      </div>
      <p className="copyright">Copyright &#169; 2022 All rights reserved.</p>
    </section>
  );
}

export default Footer;
