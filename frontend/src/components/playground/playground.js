import React, { useState, useEffect } from "react";
import Card from "../../UI/Card";

import classes from "./Playground.module.css";

const cardsValue = [
  { name: "Cat card", sign: "😼" },
  { name: "Defuse card", sign: "🙅‍♂️" },
  { name: "Shuffle card", sign: "🔀" },
  { name: "Exploding kitten card", sign: "💣" },
];

const Playground = () => {
  const [counter, setCounter] = useState(5);
  const [resultCardList, setResultCardList] = useState([""]);
  // counter to count till 5
  // array holding 4 type of card;

  // state to hold card and matched for win / lose
  // check for defuse card and exploding card.
  useEffect(() => {
    console.log("component Mounted");
  });

  //   get random item for defined list; length is 3 without zero
  const getRandomItem = (arr = [0, 1, 2]) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
  };

  //   generate 5 random card
  const generateFiveCard = () => {
    let item;
    let cardState = {};
    for (let i = 0; i < 5; i++) {
      item = getRandomItem();
      console.log(item);
      cardState = cardsValue[item];
      setResultCardList({resultCardList : resultCardList+ cardState});
      console.log(resultCardList[i]);
    }
  };

  //   handler for card click and generate new card.
  const cardClickedHandler = () => {
    generateFiveCard();
   
  };

  return (
    <main>
      <div>
        {" "}
        <h1>😸 Exploding Kitten</h1>
      </div>
      <div onClick={cardClickedHandler}>
        <Card blankCard={true} />
        <br />
        {/* <ul>
          {resultCardList.map((cardData) => {
            return (
              <li>
                <Card
                  blankCard={false}
                  cardName={cardData.name}
                  cardSign={cardData.sign}
                />{" "}
                <br />
              </li>
            );
          })}
        </ul> */}
      </div>
    </main>
  );
};

export default Playground;
