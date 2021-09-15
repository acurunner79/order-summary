
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="main-container">
        <img id="hero-image" src="https://res.cloudinary.com/acurunner79/image/upload/v1631730294/illustration-hero_wcngjy.svg" alt="hero"/>
        <h2>Order Summary</h2>
        <div id="description">
          <h4 className="text-color-change">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</h4>
        </div>
        <div id="mid-container">
          <img id="music-icon" src="https://res.cloudinary.com/acurunner79/image/upload/v1631730491/icon-music_unjcof.svg" alt="music-icon"/>
          <div id="plan-content">
            <h4>Annual Plan</h4>
            <h4 className="text-color-change">$59.99/year</h4>
          </div>
          <h4><a target="_blank" rel="noreferrer" href="https://jorgesotocoder.com">Change</a></h4>
        </div>
        <div id="button-container">
          <button className="button">Proceed to Payment</button><br/>
          <button className="button">Cancel Order</button>
        </div>
      </div>
    </div>
  );
}

export default App;
