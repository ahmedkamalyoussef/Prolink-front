import React, { useState, useEffect } from "react";
import './ErrorPage.css';

function ErrorPage() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.pageX, y: event.pageY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
 
  return (
    <div className="errorBody">
      <div className="text">
        <h1 className="py-5">404</h1>
        <h2 className="py-5">Uh, Ohh</h2>
        <h3>Sorry we can't find what you are looking for 'cuz it's so dark in here</h3>
      </div>
      <div 
        className="torch" 
        style={{ top: position.y, left: position.x }} 
      />
    </div>
  );
}

export default ErrorPage;
