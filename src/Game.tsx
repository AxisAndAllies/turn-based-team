import { INVALID_MOVE } from "boardgame.io/core";
import { Game, Move } from "boardgame.io";

import board1 from "../data/board1";

function setupCells() {
  // boards are created in a spreadsheet + exported as CSV
  // only 20x20 boards supported for now
  let arr = board1.split("\n").map((e) => e.split(","));
  let result = [];
  for (let row of arr) {
    // reverse to make it symmetric
    result = result.concat(row.slice(0, 10)).concat(row.slice(0, 10).reverse());
  }
  console.log(result);
  return result;
}

export interface MyGameState {
  // aka 'G', your game's state
  cells: any[];
}

export const TicTacToe: Game<MyGameState> = {
  setup: () => ({ cells: setupCells() }),

  turn: {
    minMoves: 1,
    maxMoves: 1,
  },

  moves: {
    clickCell: (G, ctx, id) => {
      if (G.cells[id] !== null) {
        return INVALID_MOVE;
      }
      G.cells[id] = ctx.currentPlayer;
    },
  },

  endIf: (G, ctx) => {
    if (IsVictory(G.cells)) {
      return { winner: ctx.currentPlayer };
    }
    if (IsDraw(G.cells)) {
      return { draw: true };
    }
  },
};

// Return true if `cells` is in a winning configuration.
function IsVictory(cells) {
  const positions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const isRowComplete = (row) => {
    const symbols = row.map((i) => cells[i]);
    return symbols.every((i) => i !== null && i === symbols[0]);
  };

  return positions.map(isRowComplete).some((i) => i === true);
}

// Return true if all `cells` are occupied.
function IsDraw(cells) {
  return cells.filter((c) => c === null).length === 0;
}
