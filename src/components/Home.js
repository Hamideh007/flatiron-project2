import React from "react";
import img1 from "../assets/img1.jpg"; 
import img5 from "../assets/img5.jpg"; 
import img3 from "../assets/img3.jpg"; 
import img6 from "../assets/img6.jpg"; 

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-details">
          <h1>Explore the World of Orchids</h1>
          <p>
            Welcome to My Orchid Garden, where you can immerse yourself in the
            captivating beauty of Orchids. Orchids are not just flowers; they
            are exquisite works of art in nature.
          </p>
        </div>
        <div className="hero-img">
          <img
            className="orchid-image"
            src={img5} // Updated image file name
            alt="Orchid Garden"
          />
        </div>
      </div>
      <h2>Orchid Care Essentials</h2>
      <h3>Discover Different Orchid Varieties</h3>
      <img
        className="orchid-image"
        src={img6} // Updated image file name
        alt="Orchid Varieties"
      />
      <p>
        Orchids come in a stunning array of varieties, each with its unique
        colors and shapes. Learn about popular Orchid types like Phalaenopsis,
        Cymbidium, and Dendrobium.
      </p>
      <p>
        Explore the diversity of Orchids and find the perfect variety to grace
        your Orchid Garden.
      </p>
      <h3>Caring for Your Orchids</h3>
      <img
        className="orchid-image"
        src={img3} 
        alt="Orchid Care"
      />
      <p>
        Orchids are known for their elegance but require special care. Learn
        the art of Orchid care, from watering and humidity control to the
        optimal lighting conditions for these exquisite plants.
      </p>
      <p>
        Keep your Orchids thriving, and they will reward you with their
        breathtaking blooms.
      </p>
      <h3>Create Your Orchid Haven</h3>
      <img
        className="orchid-image"
        src={img1} 
        alt="Orchid Haven"
      />
      <p>
        Whether you have a green thumb or are just starting, discover how to
        create a beautiful Orchid haven at home. Explore Orchid potting
        techniques, suitable containers, and ideal growing conditions.
      </p>
      <p>
        Transform your space into an Orchid paradise that soothes the soul and
        inspires wonder.
      </p>
    </div>
  );
}

export default Home;
