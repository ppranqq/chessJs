const URL_PIECES_COLOR1 = "./chessPieceSet-pngs/black";
const URL_PIECES_COLOR2 = "./chessPieceSet-pngs/white";

const CHECKER_COLOR = {
  EVEN: '#F6F7EB',
  ODD: '#8693AB'
};

const generateChessBoard = (mainChessBoard) => {
  //generate chess board
  for (let i = 0; i < 64; i++) {
    mainChessBoard.appendChild(document.createElement("div")).style.backgroundColor =
      0 === parseInt(i / 8 + i) % 2 ? CHECKER_COLOR.EVEN : CHECKER_COLOR.ODD;
  }

  return mainChessBoard.querySelectorAll("> div");
}

const layoutInitialChessPieces = (allSquares) => {
  let chessPieceImg, pieceName, chosenColor;

  //setting up the pieces on the board (starting position), also adding classes to pieces to make them unique by they rules of moving
  for (let i = 0; i < allSquares.length; i++) {
    chosenColor = i < 50 ? URL_PIECES_COLOR1 : URL_PIECES_COLOR2;
    chessPieceImg = document.createElement("img");

    switch (i) {
      case 0:
      case 7:
      case 56:
      case 63:
        pieceName = 'Rook';
        break;
      case 1:
      case 6:
      case 57:
      case 62:
        pieceName = 'Knight';
        break;
      case 2:
      case 5:
      case 58:
      case 61:
        pieceName = 'Bishop';
        break;
      case 3:
      case 59:
        pieceName = 'Queen';
        break;
      case 4:
      case 60:
        pieceName = 'King';
        break;
      default:
        // FIXME: Don't set if in an empty range
        // if (i >= xx && i <= yy) {}
        pieceName = 'Pawn'
        break;
    }

    if (pieceName) {
      chessPieceImg.src = `${chosenColor}${pieceName}.png`;
      chessPieceImg.className = pieceName.toUpperCase();
      allSquares[i].appendChild(chessPieceImg);
    }
  }

  return mainChessBoard.querySelectorAll("> div > img");
}

let isMoving = false, movingIdx;

/** @param {HTMLElement[]} chessPieces */
const startMovingPiece = (chessPieces, index) => {
  if (isMoving || !index) {
    return;
  }

  chessPieces[index].classList.add("selectedPiece");

  movingIdx = index;
  isMoving = true;
}

/** @param {HTMLElement[]} chessPieces */
const endMovingPiece = (chessPieces, index) => {
  chessPieces[movingIdx].classList.remove("selectedPiece");
  chessPieces[index].appendChild(chessPieces[movingIdx]);

  isMoving = false
  movingIdx = -1;
}

const mainChessBoard = document.getElementById("mainChessBoard");
const chessSquares = generateChessBoard(mainChessBoard);
const chessPieces = layoutInitialChessPieces(mainChessBoard, chessSquares);

chessPieces.forEach((piece, idx) => piece.addEventListener('click', startMovingPiece.bind(null, chessPieces, idx)))
chessSquares.forEach((square, idx) => square.addEventListener('click', endMovingPiece.bind(null, chessPieces, idx)))
