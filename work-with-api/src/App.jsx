import "./App.css";

export default function App() {
  return (
    <div className="home-wrapper">
      <div className="home-container">
        <div className="left">
          <h3 className="subtitle">WE ARE</h3>
          <h1 className="title">
            Modern <span>Furniture</span> Center
          </h1>
          <p className="desc">
            We help you to create organize your room to be more cozy, design by
            professional interior designer
          </p>
          <button className="green-btn">See Our Product</button>
        </div>

        <div className="right">
          <img src="/sofa.jpg" alt="Modern sofa" className="hero-img" />
          <div className="slider-btns">
            <button>{'<'}</button>
            <button>{'>'}</button>
          </div>
        </div>
      </div>
    </div>
  );
}