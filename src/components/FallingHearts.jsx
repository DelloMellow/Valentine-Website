import { useEffect, useState } from "react";
import heartImg from "../assets/pixel-heart.png";

function FallingHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Math.random(),
        left: Math.random() * 100,
        duration: 3 + Math.random() * 2,
        size: 60 + Math.random() * 60
      };

      setHearts((prev) => [...prev, newHeart]);

      setTimeout(() => {
        setHearts((prev) => prev.slice(1));
      }, 6000);

    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {hearts.map((heart) => (
        <img
          key={heart.id}
          src={heartImg}
          className="falling-heart"
          style={{
            left: `${heart.left}vw`,
            animationDuration: `${heart.duration}s`,
            width: `${heart.size}px`
          }}
        />
      ))}
    </>
  );
}

export default FallingHearts;
