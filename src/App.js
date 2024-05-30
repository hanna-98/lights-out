import "./App.css";
import { useState } from "react";

function Tile(props) {
  let style = {
    border: "1px solid blue",
    padding: "40px",
  };

  if (props.status === 0) {
    style.backgroundColor = "green";
  } else {
    style.backgroundColor = "lightgreen";
  }
  return <div style={style} onClick={props.handleClick}></div>;
}

function App() {
  const [board, setBoard] = useState([
    [0, 1, 0],
    [0, 0, 1],
    [1, 0, 0],
  ]);

  const handleClick = (i, j) => {
    let tempBoard = JSON.parse(JSON.stringify(board));
    tempBoard[i][j] = 1 - tempBoard[i][j];

    if (i === 0) {
      tempBoard[i + 1][j] = 1 - tempBoard[i + 1][j];
    } else if (i === 2) {
      tempBoard[i - 1][j] = 1 - tempBoard[i - 1][j];
    } else {
      tempBoard[i + 1][j] = 1 - tempBoard[i + 1][j];
      tempBoard[i - 1][j] = 1 - tempBoard[i - 1][j];
    }

    if (j === 0) {
      tempBoard[i][j + 1] = 1 - tempBoard[i][j + 1];
    } else if (j === 2) {
      tempBoard[i][j - 1] = 1 - tempBoard[i][j - 1];
    } else {
      tempBoard[i][j + 1] = 1 - tempBoard[i][j + 1];
      tempBoard[i][j - 1] = 1 - tempBoard[i][j - 1];
    }

    setBoard(tempBoard);
  };

  let styleApp = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "100px",
  };

  let styleBoard = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    border: "1px solid blue",
    width: "400px",
    height: "400px",
  };

  let styleRow = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  };

  let row1 = [];
  for (let i = 0; i < 3; i++) {
    row1[i] = (
      <Tile
        key={0 + "," + i}
        status={board[0][i]}
        handleClick={() => {
          handleClick(0, i);
        }}
      />
    );
  }

  let row2 = [];
  for (let i = 0; i < 3; i++) {
    row2[i] = (
      <Tile
        key={1 + "," + i}
        status={board[1][i]}
        handleClick={() => {
          handleClick(1, i);
        }}
      />
    );
  }

  let row3 = [];
  for (let i = 0; i < 3; i++) {
    row3[i] = (
      <Tile
        key={2 + "," + i}
        status={board[2][i]}
        handleClick={() => {
          handleClick(2, i);
        }}
      />
    );
  }
  return (
    <div className="App" style={styleApp}>
      <div className="game-board" style={styleBoard}>
        <div style={styleRow}>{row1}</div>
        <div style={styleRow}>{row2}</div>
        <div style={styleRow}>{row3}</div>
      </div>
    </div>
  );
}

export default App;
