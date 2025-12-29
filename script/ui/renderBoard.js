// This function initializes the chessboard by creating cells, assigning IDs, placing pieces, and setting up click handlers for piece movement rendering.

import { initial } from "../engine/initial.js";
export function initializeBoard() {
  // Create board cells
  const board = document.getElementById("board");
  const rowsLetters = ["a", "b", "c", "d", "e", "f", "g", "h"];

  for (let row = 0; row < 64; row += 8) {
    for (let col = 0; col < 8; col++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.id = rowsLetters[col] + (8 - row / 8);
      board.appendChild(cell);
    }
  }

  // Place pieces on the board
  const cells = initial();

  const pieceImgSrc = {
    br: "script/imgs/pieces/br.png",
    bn: "script/imgs/pieces/bn.png",
    bb: "script/imgs/pieces/bb.png",
    bq: "script/imgs/pieces/bq.png",
    bk: "script/imgs/pieces/bk.png",
    bp: "script/imgs/pieces/bp.png",
    wr: "script/imgs/pieces/wr.png",
    wn: "script/imgs/pieces/wn.png",
    wb: "script/imgs/pieces/wb.png",
    wq: "script/imgs/pieces/wq.png",
    wk: "script/imgs/pieces/wk.png",
    wp: "script/imgs/pieces/wp.png",
  };

  for (const cell in cells) {
    if (cells[cell]) {
      const cellElement = document.getElementById(cell);
      cellElement.innerHTML = `<img class="piece" src="${pieceImgSrc[cells[cell]]}" alt="${cells[cell]}">`
    }
  }
}