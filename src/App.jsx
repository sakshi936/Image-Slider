import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const imgs = [
    "https://images.pexels.com/photos/2343170/pexels-photo-2343170.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/1336454/pexels-photo-1336454.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/884788/pexels-photo-884788.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2101187/pexels-photo-2101187.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1322185/pexels-photo-1322185.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  const [imageIndex, setImageIndex] = useState(0);
  const [imageslider, setImageSlider] = useState(true);

  const hoverRef = useRef(null);

  useEffect(() => {
    const image = hoverRef.current;

    // Add event listeners
    image.addEventListener("mouseenter", () => setImageSlider(false));
    image.addEventListener("mouseleave", () => setImageSlider(true)); 

    // Start the image slider interval
    let interval;
    if (imageslider) {
      interval = setInterval(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % imgs.length);
      }, 500);
    }

    // Cleanup function to remove event listeners and clear the interval
    return () => {
      image.addEventListener("mouseenter", () => setImageSlider(false));
      image.addEventListener("mouseleave", () => setImageSlider(true));
      if (interval) clearInterval(interval);
    };
  }, [imageslider, imgs.length]);

  return (
    <div className="w-full bg-gray-700 px-10 py-8 rounded-lg text-center">
      {/* img div */}
      <div className="mb-6 bg-pink-300">
        <img
          src={imgs[imageIndex]}
          className="shadow-lg"
          ref={hoverRef}
          alt={`Slide ${imageIndex + 1}`}
        />
      </div>

      <div className="flex justify-between">
        <p>
          {imageIndex + 1}/{imgs.length}
        </p>
      </div>
    </div>
  );
}

export default App;
