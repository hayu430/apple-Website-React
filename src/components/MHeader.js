import images from "../images/mac-laptop.jpg";
import "./Header.css";
function Header() {
  return (
    <section class="macbook pt-5 text-center">
      <p className="inch  pt-3">16-inch mode</p>

      <h1 className="mac">MacBook Pro</h1>
      <p>
        <b className="best">The best for the brightest.</b>
      </p>
      <p>
        <a className="link" href="#">
          Learn more{" "}
        </a>

        <a className="link" href="#">
          {" "}
          Buy{" "}
        </a>
      </p>
      <img src={images} alt="" />
    </section>
  );
}

export default Header;
