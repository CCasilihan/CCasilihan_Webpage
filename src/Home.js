import * as React from "react";
import "./App.css";


function Home() {
  return (
    <section className="hero">
      <div className="content" style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '50vh', 
        backgroundSize: 'cover'
      }}>
        <h1>Welcome to my personal webpage!</h1>
        <p>
          This webpage offers a glimpse into my world, passions, and interests, 
          featuring articles on technology, creativity, and personal anecdotes. 
          Join me on a virtual adventure to explore knowledge and imagination.
        </p>
      </div>
    </section>
  );
}

export default Home;
