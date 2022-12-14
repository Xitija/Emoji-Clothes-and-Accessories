import React, { useState } from "react";
import "./styles.css";

const emojiObjs = {
  "๐": "Glasses",
  "๐ถ": "Sunglasses",
  "๐ฅฝ": "Goggles",
  "๐ฅผ": "Lab Coat",
  "๐ฅ": "Martial Arts Uniform",
  "๐ฆบ": "Safety Vest",
  "๐": "Necktie",
  "๐": "Tshirt",
  "๐": "Jeans",
  "๐งฃ": "Scarf",
  "๐งค": "Gloves",
  "๐งฅ": "Coat",
  "๐งฆ": "Socks",
  "๐": "Dress",
  "๐": "Kimono",
  "๐ฅป": "Saree",
  //"โ๐ฉฑ": "Swimsuit",
  "๐ฉณ": "Shorts",
  "๐": "Shirt",
  "๐": "Purse",
  "๐": "Handbag",
  "๐": "Clutchbag",
  "๐": "Shopping Bags",
  "๐": "Backpack",
  // "โ๐ฉด": "Thong Sandal",
  "๐": "Shoe",
  "๐": "Running Shoe",
  "๐ฅพ": "Hiking Boot",
  "๐ฅฟ": "Flat Shoe",
  "๐ ": "High-Heeled Shoe",
  "๐ก": "Sandal",
  "๐ฉฐ": "Ballet Shoes",
  "๐ข": "Boots",
  "๐": "Crown",
  "๐": "Hat",
  "๐ฉ": "Top Hat",
  "๐": "Graduation Cap",
  "๐งข": "Billed Cap",
  // "โ๐ช": "Military Helmet",
  "โ": "Rescue Worker Helmet",
  "๐": "Ring"
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
