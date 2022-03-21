//generate chess board
for (let i = 0; i < 64; i++) {
  document
    .getElementById("mainChessBoard")
    .appendChild(document.createElement("div")).style.backgroundColor =
    parseInt(i / 8 + i) % 2 === 0 ? "#F6F7EB" : "#8693AB";
}

//selectring all squares as nodelist
const allSquares = document.querySelectorAll("#mainChessBoard > div");

//setting up the pieces on the board (starting position)
for (let i = 0; i < allSquares.length; i++) {
  const chessPieceImg = document.createElement("img");
  const blackPiecesUrl = "./chessPieceSet-pngs/black";
  const whitePiecesUrl = "./chessPieceSet-pngs/white";

  //adding black pieces
  //adding rooks
  if (i === 0 || i === 7) {
    chessPieceImg.src = blackPiecesUrl + "Rook.png";
    allSquares[i].appendChild(chessPieceImg);

    //adding knights
  } else if (i === 1 || i === 6) {
    chessPieceImg.src = blackPiecesUrl + "Knight.png";
    allSquares[i].appendChild(chessPieceImg);

    //adding bishops
  } else if (i === 2 || i === 5) {
    chessPieceImg.src = blackPiecesUrl + "Bishop.png";
    allSquares[i].appendChild(chessPieceImg);

    //adding queen
  } else if (i === 3) {
    chessPieceImg.src = blackPiecesUrl + "Queen.png";
    allSquares[i].appendChild(chessPieceImg);

    //adding king
  } else if (i === 4) {
    chessPieceImg.src = blackPiecesUrl + "King.png";
    allSquares[i].appendChild(chessPieceImg);

    //adding pawns
  } else if (i > 7 && i < 16) {
    chessPieceImg.src = blackPiecesUrl + "Pawn.png";
    allSquares[i].appendChild(chessPieceImg);
  }

  //adding white pieces
  //adding pawns
  if (i > 47 && i < 56) {
    chessPieceImg.src = whitePiecesUrl + "Pawn.png";
    allSquares[i].appendChild(chessPieceImg);
  } else if (i === 56 || i === 63) {
    chessPieceImg.src = whitePiecesUrl + "Rook.png";
    allSquares[i].appendChild(chessPieceImg);

    //adding knights
  } else if (i === 57 || i === 62) {
    chessPieceImg.src = whitePiecesUrl + "Knight.png";
    allSquares[i].appendChild(chessPieceImg);

    //adding bishops
  } else if (i === 58 || i === 61) {
    chessPieceImg.src = whitePiecesUrl + "Bishop.png";
    allSquares[i].appendChild(chessPieceImg);

    //adding queen
  } else if (i === 59) {
    chessPieceImg.src = whitePiecesUrl + "Queen.png";
    allSquares[i].appendChild(chessPieceImg);

    //adding king
  } else if (i === 60) {
    chessPieceImg.src = whitePiecesUrl + "King.png";
    allSquares[i].appendChild(chessPieceImg);
  }
}
