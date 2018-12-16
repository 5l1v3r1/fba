import React, { Component } from "react";
import GamesList from "./GamesList";
// const games = undefined;
import Login from "./login";
const games = [
  {
    _id: 1,
    name: "Arash",
    thumbnail:
      "https://cf.geekdo-images.com/-7kWI_TKVJ9M3DLFdPTfky18324=/fit-in/246x300/pic38668.jpg",
    price: 100,
    players: "2-4",
    duration: 60
  },
  {
    _id: 2,
    name: "Arash",
    thumbnail:
      "https://www.tunerstickers.com/wp-content/uploads/2016/09/Harambe-Window-Decal-Sticker-246x300.png",
    price: 100,
    players: "2-4",
    duration: 60
  },
  {
    _id: 3,
    name: "Arash",
    thumbnail:
      "https://www.tunerstickers.com/wp-content/uploads/2016/09/Harambe-Window-Decal-Sticker-246x300.png",
    price: 100,
    players: "2-4",
    duration: 60
  },
  {
    _id: 4,
    name: "Arash",
    thumbnail:
      "https://www.tunerstickers.com/wp-content/uploads/2016/09/Harambe-Window-Decal-Sticker-246x300.png",
    price: 100,
    players: "2-4",
    duration: 60
  }
];

export default class App extends Component {
  render() {
    return (
      // <div className="container">
      //   <div className="ui clearing segment" />
      //   <GamesList games={games} />
      // </div>
      <div>
        <Login />
      </div>
    );
  }
}
