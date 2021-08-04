import "./styles.css";
import React, { useState } from "react";

const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",

  "😇": "Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face",

  "😚": "Kissing Face with Closed Eyes",
  "😙": "Kissing Face with Smiling Eyes",
  "😋": "Face Savoring Food",
  "😛": "Face with Tongue",
  "😜": "Winking Face with Tongue",
  "🤪": "Zany Face",
  "😝": "Squinting Face with Tongue",
  "🤑": "Money-Mouth Face",
  "🤗": "Hugging Face",
  "🤭": "Face with Hand Over Mouth",
  "🤫": "Shushing Face",
  "🤔": "Thinking Face",
  "🤐": "Zipper-Mouth Face",
  "🤨": "Face with Raised Eyebrow",
  "😐": "Neutral Face",

  "😶": "Face Without Mouth",
  "😏": "Smirking Face",
  "😒": "Unamused Face",
  "🙄": "Face with Rolling Eyes",
  "😬": "Grimacing Face",
  "🤥": "Lying Face",
  "😌": "Relieved Face",

  "😪": "Sleepy Face",
  "🤤": "Drooling Face",
  "😴": "Sleeping Face",
  "😷": "Face with Medical Mask",
  "🤒": "Face with Thermometer",
  "🤕": "Face with Head-Bandage",
  "🤢": "Nauseated Face",
  "🤮": "Face Vomiting",
  "🤧": "Sneezing Face",
  "🥵": "Hot Face",
  "🥶": "Cold Face",
  "🥴": "Woozy Face",
  "😵": "Dizzy Face",
  "🤯": "Exploding Head",
  "🤠": "Cowboy Hat Face",
  "🥳": "Partying Face",
  "😎": "Smiling Face with Sunglasses",
  "🤓": "Nerd Face",
  "🧐": "Face with Monocle",
  "😕": "Confused Face",
  "😟": "Worried Face",
  "🙁": "Slightly Frowning Face",
  "☹️": "Frowning Face",
  "😮": "Face with Open Mouth",
  "😯": "Hushed Face",
  "😲": "Astonished Face",

  "🥺": "Pleading Face",
  "😦": "Frowning Face with Open Mouth",
  "😧": "Anguished Face",
  "😨": "Fearful Face",
  "😰": "Anxious Face with Sweat",
  "😥": "Sad but Relieved Face",
  "😢": "Crying Face",
  "😭": "Loudly Crying Face",
  "😱": "Face Screaming in Fear",
  "😖": "Confounded Face",
  "😣": "Persevering Face",
  "😞": "Disappointed Face",
  "😓": "Downcast Face with Sweat",
  "😩": "Weary Face",
  "😫": "Tired Face",
  "🥱": "Yawning Face",
  "😤": "Face with Steam From Nose",
  "😡": "Pouting Face",
  "😠": "Angry Face",
  "🤬": "Face with Symbols on Mouth",
  "😈": "Smiling Face with Horns",
  "👿": "Angry Face with Horns",
  "🍏": "green apple",
  "🍎": "red apple",
  "🍐": "pear",
  "🍊": "tangerine",
  "🍋": "lemon",
  "🍌": "banana",
  "🍉": "watermelon",
  "🍇": "grapes",
  "🍓": "strawberry",
  "🍈": "melon",
  "🍒": "cherries",
  "🍑": "peach",
  "🍍": "pineapple",
  "🥥": "coconut",
  "🥝": "kiwi",
  "🍅": "tomato",
  "🍆": "eggplant",
  "🥑": "avocado",
  "🥦": "broccoli",
  "🥒": "cucumber",
  "🌶": "hot pepper",
  "🌽": "ear of corn",
  "🥕": "carrot"
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
