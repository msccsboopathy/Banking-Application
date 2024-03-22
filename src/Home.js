import "./pagestyle.css";
//import "./background.css";
//import logo from "./logo.png";
import "./Animate.css";

export default function Home() {
  return (
    <div className="Home-page">
      <center>
        <svg viewBox="0 0 920 200">
          <text x="50%" y="50%" dy=".35em" textAnchor="middle">
            TNB Bank
          </text>
        </svg>
        {/* <img src={logo} alt="#" style={{ maxWidth: "100%" }} /> */}
        <br />
        <br />
        <div class="marquee-container">
          <h4>Small steps to a better future</h4>
          <h6>The bank for a changing world.</h6>
        </div>
        
        <p>
          We are dedicated to providing our customers with the best possible
          banking experience. Whether you're looking to open a new account,
          apply for a loan, or simply manage your finances online, we have you
          covered.
        </p>

       <ul className="services-list">
          <li className="service-item">Savings accounts</li>
          <li className="service-item">Personal and business loans</li>
          <li className="service-item">Credit cards</li>
          <li className="service-item">Mobile banking</li>
        </ul>
        <br />
      </center>
      <footer>
        <p>&copy; TNB BANK 2024 | All Rights Reserved.</p>
        <center>
          <p>Contact Us - 0421 2323 4322</p>
        </center>
      </footer>
    </div>
  );
}
