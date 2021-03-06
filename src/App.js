import "./styles.css";
import React, { useState } from "react";

const emojiDictionary = {
  "๐": "Smiling",
  "๐ณ": "disbelief",
  "๐": "sad",
  "๐ฅก": "takeout box",
  "โค๏ธ": "love",
  "๐": "annoyance",
  "๐": "Grinning Face",
  "๐": "Grinning Face with Big Eyes",
  "๐": "Grinning Face with Smiling Eyes",
  "๐": "Beaming Face with Smiling Eyes",
  "๐": "Grinning Squinting Face",
  "๐": "Grinning Face with Sweat",
  "๐คฃ": "Rolling on the Floor Laughing",
  "๐": "Face with Tears of Joy",
  "๐": "Slightly Smiling Face",
  "๐": "Upside-Down Face",
  "๐": "Winking Face",

  "๐": "Smiling Face with Halo",
  "๐ฅฐ": "Smiling Face with Hearts",
  "๐": "Smiling Face with Heart-Eyes",
  "๐คฉ": "Star-Struck",
  "๐": "Face Blowing a Kiss",
  "๐": "Kissing Face",

  "๐": "Kissing Face with Closed Eyes",
  "๐": "Kissing Face with Smiling Eyes",
  "๐": "Face Savoring Food",
  "๐": "Face with Tongue",
  "๐": "Winking Face with Tongue",
  "๐คช": "Zany Face",
  "๐": "Squinting Face with Tongue",
  "๐ค": "Money-Mouth Face",
  "๐ค": "Hugging Face",
  "๐คญ": "Face with Hand Over Mouth",
  "๐คซ": "Shushing Face",
  "๐ค": "Thinking Face",
  "๐ค": "Zipper-Mouth Face",
  "๐คจ": "Face with Raised Eyebrow",
  "๐": "Neutral Face",

  "๐ถ": "Face Without Mouth",
  "๐": "Smirking Face",
  "๐": "Unamused Face",
  "๐": "Face with Rolling Eyes",
  "๐ฌ": "Grimacing Face",
  "๐คฅ": "Lying Face",
  "๐": "Relieved Face",

  "๐ช": "Sleepy Face",
  "๐คค": "Drooling Face",
  "๐ด": "Sleeping Face",
  "๐ท": "Face with Medical Mask",
  "๐ค": "Face with Thermometer",
  "๐ค": "Face with Head-Bandage",
  "๐คข": "Nauseated Face",
  "๐คฎ": "Face Vomiting",
  "๐คง": "Sneezing Face",
  "๐ฅต": "Hot Face",
  "๐ฅถ": "Cold Face",
  "๐ฅด": "Woozy Face",
  "๐ต": "Dizzy Face",
  "๐คฏ": "Exploding Head",
  "๐ค ": "Cowboy Hat Face",
  "๐ฅณ": "Partying Face",
  "๐": "Smiling Face with Sunglasses",
  "๐ค": "Nerd Face",
  "๐ง": "Face with Monocle",
  "๐": "Confused Face",
  "๐": "Worried Face",
  "๐": "Slightly Frowning Face",
  "โน๏ธ": "Frowning Face",
  "๐ฎ": "Face with Open Mouth",
  "๐ฏ": "Hushed Face",
  "๐ฒ": "Astonished Face",

  "๐ฅบ": "Pleading Face",
  "๐ฆ": "Frowning Face with Open Mouth",
  "๐ง": "Anguished Face",
  "๐จ": "Fearful Face",
  "๐ฐ": "Anxious Face with Sweat",
  "๐ฅ": "Sad but Relieved Face",
  "๐ข": "Crying Face",
  "๐ญ": "Loudly Crying Face",
  "๐ฑ": "Face Screaming in Fear",
  "๐": "Confounded Face",
  "๐ฃ": "Persevering Face",
  "๐": "Disappointed Face",
  "๐": "Downcast Face with Sweat",
  "๐ฉ": "Weary Face",
  "๐ซ": "Tired Face",
  "๐ฅฑ": "Yawning Face",
  "๐ค": "Face with Steam From Nose",
  "๐ก": "Pouting Face",
  "๐ ": "Angry Face",
  "๐คฌ": "Face with Symbols on Mouth",
  "๐": "Smiling Face with Horns",
  "๐ฟ": "Angry Face with Horns",
  "๐": "green apple",
  "๐": "red apple",
  "๐": "pear",
  "๐": "tangerine",
  "๐": "lemon",
  "๐": "banana",
  "๐": "watermelon",
  "๐": "grapes",
  "๐": "strawberry",
  "๐": "melon",
  "๐": "cherries",
  "๐": "peach",
  "๐": "pineapple",
  "๐ฅฅ": "coconut",
  "๐ฅ": "kiwi",
  "๐": "tomato",
  "๐": "eggplant",
  "๐ฅ": "avocado",
  "๐ฅฆ": "broccoli",
  "๐ฅ": "cucumber",
  "๐ถ": "hot pepper",
  "๐ฝ": "ear of corn",
  "๐ฅ": "carrot"
};

const emojiDictionaryArr = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  const [emoji, setEmoji] = useState("");

  function emojiInputHandler(event) {
    var inputText = event.target.value;

    var meaning = emojiDictionary[inputText];

    if (meaning === undefined) {
      meaning = "We Dont have this word in our Emoji Dictionary";
    }

    setMeaning(meaning);
  }

  function stylehandler(index) {
    if (index % 2 === 0) {
      const sty = {
        backgroundColor: "green",
        fontSize: "2rem",
        padding: "0.5rem"
      };

      return sty;
    } else {
      var sty1 = {
        backgroundColor: "grey",
        fontSize: "2rem",
        padding: "0.5rem"
      };
      return sty1;
    }
  }

  function listClickHandler(item) {
    // console.log(item)
    var meaning = emojiDictionary[item];
    var emoji = item;
    setEmoji(emoji);
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>EmojiPedia</h1>
      <section className="section"></section>
      <div className="container container-center section-center">
        <input
          onChange={emojiInputHandler}
          style={{ height: "10vh", width: "60vh" }}
          placeholder={emoji + " " + meaning + " OR Paste an Emoji you like "}
        ></input>
        <h2>Emojis we Know</h2>
        <div className="container container-center">
          <h3>
            {emoji} {meaning}
          </h3>
        </div>
        <h2>
          {emojiDictionaryArr.map((item, index) => {
            return (
              <span
                onClick={() => listClickHandler(item)}
                key={index}
                style={stylehandler(index)}
              >
                {item}
              </span>
            );
          })}
        </h2>
      </div>
    </div>
  );
}
