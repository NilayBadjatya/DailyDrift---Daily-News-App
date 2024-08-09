import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Updated import
import LoadingBar from "react-top-loading-bar";
// This Is React Class Based Component
export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color="#f11946"
            height={4}
            loaderSpeed={700}
            progress={this.state.progress}
          />
          <Routes>
            {/* Replaced Switch with Routes */}
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="general"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/tech"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="tech"
                  category="tech"
                />
              }
            />
            <Route
              exact
              path="/politics"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="politics"
                  category="politics"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="business"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey={this.apiKey}
                  key="business"
                  category="science"
                />
              }
            />
            {/* Updated Route */}
          </Routes>
        </Router>
      </div>
    );
  }
}

// This Is React Function Based Component
/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */
