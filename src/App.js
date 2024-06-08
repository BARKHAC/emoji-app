import "./styles.css";
import { useState } from "react";

var emojiDictionary = {
  "😊": "smiling",
  "😂": "hilarious",
  "❤️": "love",
  "👍": "thumbs up",
  "😒": "side eye",
  "😅": "honestly, who knows?"
};

export default function App() {
  const [meaning, setMeaning] = useState("");

  var emojisWeKnow = Object.keys(emojiDictionary);

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  function inputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We don't have this in the DB as of now.";
    }
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Emoji App</h1>
      <input onChange={inputHandler} />
      <h2 style={{ padding: "1rem" }}>{meaning}</h2>

      {emojisWeKnow.map((emoji) => {
        return (
          <span
            style={{ fontSize: "1.5rem", padding: "2rem", cursor: "pointer" }}
            onClick={() => emojiClickHandler(emoji)}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
