var table = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];
var current = "X";
var counter = 0;

var handleClick = (event) => {

  if (event.target.innerText !== "X" && event.target.innerText !== "O") {

    event.target.innerText = current;

    addToMatrix(event.target.id, current);
    if (checkForWin()) {
      console.log(checkForWin());
      alert(current + ' wins!')
      return;
    }

    if (current === "X") current = "O";
    else current = "X";
    document.getElementById('turn').innerText = current;

    counter += 1;
    if (counter === 9 ) {
      alert('Tie game!');
    }
  };
};

var reset = (event) => {
  var left = document.getElementsByClassName('left');
  var mid = document.getElementsByClassName('mid');
  var right = document.getElementsByClassName('right');
  for (var i = 0; i < right.length; i++) {
    left[i].innerText = "_ |";
    mid[i].innerText = "_";
    right[i].innerText = "| _";
  }

  table = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ];
  counter = 0;
  current = "X";
  document.getElementById('turn').innerText = current;
}

//helper functions
var addToMatrix = (id, value) => {
  var numId = Number(id);
  if (numId < 3) { table[0].splice(numId, 1, value); }
  else if (numId < 6) { table[1].splice(numId - 3, 1, value) }
  else { table[2].splice(numId - 6, 1, value) }
}

var singleRowCheck = (index) => {
  if (table[index][0] === "X" && table[index][1] === "X" && table[index][2] === "X") {
    return true;
  } else if (table[index][0] === "O" && table[index][1] === "O" && table[index][2] === "O") {
    return true;
  } else {
    return false;
  }
}

var rowsCheck = () => {
  var win = false;
  for (var i = 0; i < table.length; i++) {
    if (singleRowCheck(i)) { win = true }
  }
  return win;
}

var singleColumnCheck = (index) => {
  if (table[0][index] === "X" && table[1][index] === "X" && table[2][index] === "X") {
    return true;
  } else if (table[0][index] === "O" && table[1][index] === "O" && table[2][index] === "O") {
    return true;
  } else {
    return false;
  }
}

var columnsCheck = () => {
  var win = false;
  for (var i = 0; i < table.length; i++) {
    if (singleColumnCheck(i)) { win = true }
  }
  return win;
}

var diagonalCheck = () => {
  var win = false;
  if (table[0][0] === "X" && table[1][1] === "X" && table[2][2] === "X") {
    win = true;
  } else if (table[0][0] === "O" && table[1][1] === "O" && table[2][2] === "O") {
    win = true;
  } else if (table[2][0] === "X" && table[1][1] === "X" && table[0][2] === "X") {
    win = true;
  } else if (table[2][0] === "O" && table[1][1] === "O" && table[0][2] === "O") {
    win = true;
  }
  return win;
}

var checkForWin = () => {
  var win = false;
  if (diagonalCheck() || rowsCheck() || columnsCheck()) {
    win = true;
  }
  return win;
}