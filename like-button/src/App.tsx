import { useState } from "react";
import "./App.css";

const LikeButton = () => {
  const handleClick = () => {
    setCount(count + 1);
  };
  const [count, setCount] = useState<number>(999);
  return (
    <span className="likeButton" onClick={handleClick}>
      ♥ {count}
    </span>
  );
};

function App() {
  return (
    <>
      <h1>Practice TypeScript</h1>
      <LikeButton />
    </>
  );
}

export default App;
