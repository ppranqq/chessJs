const URL_PIECES_COLOR_BLACK = "./chessPieceSet-pngs/black";
const URL_PIECES_COLOR_WHITE = "./chessPieceSet-pngs/white";

const SQUARES_COLOR = {
  BLACK: "#8693AB",
  WHTIE: "#F6F7EB",
};

const GENERATE_CHESSBOARD = (mainChessBoard) => {
  for (let i = 0; i < 64; i++) {
    mainChessBoard.appendChild(
      document.createElement("div")
    ).style.backgroundColor =
      0 === parseInt(i / 8 + i) % 2 ? SQUARES_COLOR.WHTIE : SQUARES_COLOR.BLACK;
  }
  return document.querySelectorAll("#mainChessBoard > div");
};

const PIECES_STARTING_POSITION = (allSquares) => {
  let chessPieceImg, chosenColor;

  for (let i = 0; i < allSquares.length; i++) {
    let pieceName;
    chosenColor = i < 48 ? URL_PIECES_COLOR_BLACK : URL_PIECES_COLOR_WHITE;
    chessPieceImg = document.createElement("img");

    switch (i) {
      case 0:
      case 7:
      case 56:
      case 63:
        pieceName = "ROOK";
        break;
      case 1:
      case 6:
      case 57:
      case 62:
        pieceName = "KNIGHT";
        break;
      case 2:
      case 5:
      case 58:
      case 61:
        pieceName = "BISHOP";
        break;
      case 3:
      case 59:
        pieceName = "QUEEN";
        break;
      case 4:
      case 60:
        pieceName = "KING";
        break;
      default:
        if (i < 16 || i > 47) {
          pieceName = "PAWN";
        }
        break;
    }
    if (pieceName) {
      chessPieceImg.src = `${chosenColor}${pieceName}.png`;
      chessPieceImg.className = pieceName;
      allSquares[i].appendChild(chessPieceImg);
    }
  }
  return document.querySelectorAll("#mainChessBoard > div > img");
};

let isMoving = false;
let movingIdx;

/** @param {HTMLElement[]} chessPieces */

const startMovingPiece = (chessPieces, index) => {
  if (isMoving || !index) {
    return;
  }

  chessPieces[index].classList.add("selectedPiece");
  movingIdx = index;
  isMoving = true;
};

/** @param {HTMLElement[]} chessPieces */
const endMovingPiece = (chessSquares, chessPieces, index) => {
  if (!isMoving) {
    return;
  }

  chessPieces[movingIdx].classList.remove("selectedPiece");
  chessSquares[index].appendChild(chessPieces[movingIdx]);
  isMoving = false;
  movingIdx = -1;
};

const mainChessBoard = document.getElementById("mainChessBoard");
const allSquares = GENERATE_CHESSBOARD(mainChessBoard);
const allPieces = PIECES_STARTING_POSITION(allSquares);

allSquares.forEach((square, idx) =>
  square.addEventListener(
    "click",
    endMovingPiece.bind(null, allSquares, allPieces, idx),
    true
  )
);

allPieces.forEach((piece, idx) =>
  piece.addEventListener("click", startMovingPiece.bind(null, allPieces, idx))
);
