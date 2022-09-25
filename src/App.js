import React, { useState } from "react";
import "./styles.css";

const emojiObjs = {
  "👓": "Glasses",
  "🕶": "Sunglasses",
  "🥽": "Goggles",
  "🥼": "Lab Coat",
  "🥋": "Martial Arts Uniform",
  "🦺": "Safety Vest",
  "👔": "Necktie",
  "👕": "Tshirt",
  "👖": "Jeans",
  "🧣": "Scarf",
  "🧤": "Gloves",
  "🧥": "Coat",
  "🧦": "Socks",
  "👗": "Dress",
  "👘": "Kimono",
  "🥻": "Saree",
  //"​🩱": "Swimsuit",
  "🩳": "Shorts",
  "👚": "Shirt",
  "👛": "Purse",
  "👜": "Handbag",
  "👝": "Clutchbag",
  "🛍": "Shopping Bags",
  "🎒": "Backpack",
  // "​🩴": "Thong Sandal",
  "👞": "Shoe",
  "👟": "Running Shoe",
  "🥾": "Hiking Boot",
  "🥿": "Flat Shoe",
  "👠": "High-Heeled Shoe",
  "👡": "Sandal",
  "🩰": "Ballet Shoes",
  "👢": "Boots",
  "👑": "Crown",
  "👒": "Hat",
  "🎩": "Top Hat",
  "🎓": "Graduation Cap",
  "🧢": "Billed Cap",
  // "​🪖": "Military Helmet",
  "⛑": "Rescue Worker Helmet",
  "💍": "Ring"
};

var emojiSet = Object.keys(emojiObjs);

export default function App() {
  const [meaning, setMeaning] = useState("");
  //const [val, setVal] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiObjs[userInput];

    if (userInput in emojiObjs) {
      setMeaning(emojiObjs[userInput]);
    } else if (meaning === undefined) {
      console.log(meaning);
      setMeaning("Sorry We don't have this in our Collection");
    }

    if (userInput.trim() === "") {
      setMeaning("");
    }

    //setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiObjs[emoji];
    setMeaning(meaning);
  }

  // function clearInput() {
  //   setVal("");
  //   var meaning = "";
  //   setMeaning(meaning);
  // }
  return (
    <div className="App">
      <h1>Clothes & Accessories Collection</h1>
      <img alt="img" src={require("./images/canopy.jpg").default} />
      <div className="innerDiv">
        <input
          placeholder="Enter or Click an Emoji"
          onChange={emojiInputHandler}
          // value={val}
        />
        <h2> {meaning} </h2>
        <h3>Have a look at our store</h3>
        {emojiSet.map((emo) => {
          return (
            <span
              onClick={() => emojiClickHandler(emo)}
              className = "emoji"
              key={emo}
            >
              {emo}
            </span>
          );
        })}
        {/* <button onClick={() => clearInput()}>Clear</button> */}
      </div>
      <div>
        <small>View this Project on <a href="https://github.com/Xitija/Emoji-Clothes-and-Accessories">Github</a></small>
      </div>
    </div>
    
  );
}
