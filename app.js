const URL_PIECES_COLOR1 = './chessPieceSet-pngs/black';
const URL_PIECES_COLOR2 = './chessPieceSet-pngs/white';

const CHECKER_COLOR = {
  EVEN: '#F6F7EB',
  ODD: '#8693AB'
};

const generateChessBoard = mainChessBoard => {
  //generate chess board
  for (let i = 0; i < 64; i++) {
    mainChessBoard.appendChild(document.createElement('div')).style.backgroundColor =
      0 === parseInt(i / 8 + i) % 2 ? CHECKER_COLOR.EVEN : CHECKER_COLOR.ODD;
  }

  return document.querySelectorAll('#mainChessBoard > div');
};

const layoutInitialChessPieces = allSquares => {
  let chessPieceImg, chosenColor;

  //setting up the pieces on the board (starting position), also adding classes to pieces to make them unique by they rules of moving
  for (let i = 0; i < allSquares.length; i++) {
    let pieceName;
    chosenColor = i < 48 ? URL_PIECES_COLOR1 : URL_PIECES_COLOR2;
    chessPieceImg = document.createElement('img');

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
        if (i < 16 || i > 47) {
          pieceName = 'Pawn';
        }
        break;
    }

    if (pieceName) {
      chessPieceImg.src = `${chosenColor}${pieceName}.png`;
      chessPieceImg.className = pieceName.toUpperCase();
      allSquares[i].appendChild(chessPieceImg);
    }
  }

  return document.querySelectorAll('#mainChessBoard > div > img');
};

let isMoving = false,
  movingIdx;

/** @param {HTMLElement[]} chessPieces */
const startMovingPiece = (chessPieces, index) => {
  if (isMoving || !index) {
    return;
  }

  chessPieces[index].classList.add('selectedPiece');
  movingIdx = index;
  isMoving = true;
};

/** @param {HTMLElement[]} chessPieces */
const endMovingPiece = (chessSquares, chessPieces, index) => {
  if (!isMoving) {
    return;
  }

  chessPieces[movingIdx].classList.remove('selectedPiece');
  chessSquares[index].appendChild(chessPieces[movingIdx]);
  isMoving = false;
  movingIdx = -1;
};

const mainChessBoard = document.getElementById('mainChessBoard');
const chessSquares = generateChessBoard(mainChessBoard);
const chessPieces = layoutInitialChessPieces(chessSquares);

chessSquares.forEach((square, idx) =>
  square.addEventListener('click', endMovingPiece.bind(null, chessSquares, chessPieces, idx), true)
);
chessPieces.forEach((piece, idx) => piece.addEventListener('click', startMovingPiece.bind(null, chessPieces, idx)));
