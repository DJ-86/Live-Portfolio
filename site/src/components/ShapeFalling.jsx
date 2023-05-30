import React, { useState, useEffect } from 'react';
import './shapeFalling.css';

const ShapeFalling = () => {
  const [shapes, setShapes] = useState([]);

  useEffect(() => {
    const generateShape = () => {
      const shape = {
        id: Date.now(),
        top: -50,
        left: Math.random() * window.innerWidth,
        rotation: Math.random() * 360,
        shapeType: Math.random() < 0.5 ? 'circle' : 'square',
      };
      setShapes((prevShapes) => [...prevShapes, shape]);
      setTimeout(() => removeShape(shape.id), 5000); // Remove shape after 5 seconds
    };

    const removeShape = (id) => {
      setShapes((prevShapes) => prevShapes.filter((shape) => shape.id !== id));
    };

    const fallShapes = setInterval(generateShape, 1000);

    return () => {
      clearInterval(fallShapes);
    };
  }, []);

  return (
    <div className="shape-container">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className={`shape ${shape.shapeType}`}
          style={{
            top: `${shape.top}px`,
            left: `${shape.left}px`,
            transform: `rotate(${shape.rotation}deg)`,
            backgroundColor: shape.shapeType === 'square' ? 'white' : 'transparent',
          }}
        ></div>
      ))}
    </div>
  );
};

export default ShapeFalling;

