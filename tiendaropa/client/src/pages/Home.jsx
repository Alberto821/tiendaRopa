import React from "react";
import { useState, useEffect } from "react";
import { shoping } from "../api/shoping.api";
import Ropas from "../components/ropa.jsx";

function Home() {
  const [ropitas, setRopas] = useState([]);
  useEffect(() => {
    loadRopas();
  }, []);

  async function loadRopas() {
    const response = await shoping();
    setRopas(response.data);
  }
  function renderMain() {
    if (ropitas.length === 0) return <h1>no se tienen ropas</h1>
    return ropitas.map((ropa) => <Ropas ropas={ropa} key={ropa.cod} />);
  }
 
  return (
    <div>
      <header>
        <a href="#" class="logo"><p>Ropas</p></a>
        <ul className="navbar">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="h-icons">
          <a href="#"><i class='bx bx-search' ></i></a>
          <a href="#"><i class='bx bx-cart' ></i></a>
          <div class="bx bx-menu" id="menu-icon"></div>
        </div>
      </header>
      <section>
          <div>{renderMain()}</div>
      </section>
      <section className="contact" id="contact">
        <div className="main-contact">
          <div className="contact-content">
            <h4>Services</h4>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#contact">Contact</a></li>
          </div>

          <div className="contact-content">
            <h4>Delivery</h4>
            <li><a href="#home">Uber Eats</a></li>
            <li><a href="#about">DoorDash</a></li>
            <li><a href="#menu">ChowNow</a></li>
            <li><a href="#contact">Toast TakeOut</a></li>
          </div>

          <div className="contact-content">
            <h4>Contacto</h4>
            <li><a href="#home">Contact Us</a></li>
            <li><a href="#about">Press Center</a></li>
            <li><a href="#menu">Careers</a></li>
            <li><a href="#contact">FAQ</a></li>
          </div>

          <div className="contact-content">
            <h4>Follow Us</h4>
            <li><a href="#home">TikTok</a></li>
            <li><a href="#about">Twitter</a></li>
            <li><a href="#menu">Facebook</a></li>
            <li><a href="#menu">Instagramm</a></li>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
