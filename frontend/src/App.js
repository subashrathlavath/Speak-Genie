import './App.css';

function App() {
  return (
    <div className="App">
      <div className="logo-top-left">
        <img src="https://speakgenie.com/images/logo/logo.png" class= "App-logo"  alt="logo" />
      </div>
      <header className="App-header">
        <h1>Hi!, Buddy</h1>
        <p>SpeakGenie is a platform for learning languages.</p>
        <p>It is a platform for learning languages.</p>
        <p>It is a platform for learning languages.</p>
      </header>
      <div className="bottom-center-input">
        <input type="text" placeholder="Type your message..." />
        <button className="mic-btn" type="button" aria-label="Record">
          {/* ChatGPT-style mic icon SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 16a4 4 0 0 0 4-4V7a4 4 0 0 0-8 0v5a4 4 0 0 0 4 4zm5-4a1 1 0 1 0-2 0 5 5 0 0 1-10 0 1 1 0 1 0-2 0 7 7 0 0 0 6 6.92V21a1 1 0 1 0 2 0v-2.08A7 7 0 0 0 17 12z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default App;
