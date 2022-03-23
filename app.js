//generate chess board
for (let i = 0; i < 64; i++) {
  document
    .getElementById("mainChessBoard")
    .appendChild(document.createElement("div")).style.backgroundColor =
    parseInt(i / 8 + i) % 2 === 0 ? "#F6F7EB" : "#8693AB";
}

//selecting all squares as nodelist
const allSquares = document.querySelectorAll("#mainChessBoard > div");

//setting up the pieces on the board (starting position), also adding classes to pieces to make them unique by they rules of moving
for (let i = 0; i < allSquares.length; i++) {
  const chessPieceImg = document.createElement("img");
  const blackPiecesUrl = "./chessPieceSet-pngs/black";
  const whitePiecesUrl = "./chessPieceSet-pngs/white";

  //adding black pieces
  //adding rooks
  if (i === 0 || i === 7) {
    chessPieceImg.src = blackPiecesUrl + "Rook.png";
    allSquares[i].appendChild(chessPieceImg);
    chessPieceImg.className = "ROOK";

    //adding knights
  } else if (i === 1 || i === 6) {
    chessPieceImg.src = blackPiecesUrl + "Knight.png";
    allSquares[i].appendChild(chessPieceImg);
    chessPieceImg.className = "KNIGHT";

    //adding bishops
  } else if (i === 2 || i === 5) {
    chessPieceImg.src = blackPiecesUrl + "Bishop.png";
    allSquares[i].appendChild(chessPieceImg);
    chessPieceImg.className = "BISHOP";

    //adding queen
  } else if (i === 3) {
    chessPieceImg.src = blackPiecesUrl + "Queen.png";
    allSquares[i].appendChild(chessPieceImg);
    chessPieceImg.className = "QUEEN";

    //adding king
  } else if (i === 4) {
    chessPieceImg.src = blackPiecesUrl + "King.png";
    allSquares[i].appendChild(chessPieceImg);
    chessPieceImg.className = "KING";

    //adding pawns
  } else if (i > 7 && i < 16) {
    chessPieceImg.src = blackPiecesUrl + "Pawn.png";
    allSquares[i].appendChild(chessPieceImg);
    chessPieceImg.className = "PAWN"; // very important, later on i might want to use different logic for white and black pawns, maybe use blackPAWN, whitePAWN
  }

  //adding white pieces and classes as previously mentioned
  //adding pawns
  if (i > 47 && i < 56) {
    chessPieceImg.src = whitePiecesUrl + "Pawn.png";
    allSquares[i].appendChild(chessPieceImg);
    chessPieceImg.className = "PAWN";
  } else if (i === 56 || i === 63) {
    chessPieceImg.src = whitePiecesUrl + "Rook.png";
    allSquares[i].appendChild(chessPieceImg);
    chessPieceImg.className = "ROOK";

    //adding knights
  } else if (i === 57 || i === 62) {
    chessPieceImg.src = whitePiecesUrl + "Knight.png";
    allSquares[i].appendChild(chessPieceImg);
    chessPieceImg.className = "KNIGHT";

    //adding bishops
  } else if (i === 58 || i === 61) {
    chessPieceImg.src = whitePiecesUrl + "Bishop.png";
    allSquares[i].appendChild(chessPieceImg);
    chessPieceImg.className = "BISHOP";

    //adding queen
  } else if (i === 59) {
    chessPieceImg.src = whitePiecesUrl + "Queen.png";
    allSquares[i].appendChild(chessPieceImg);
    chessPieceImg.className = "QUEEN";

    //adding king
  } else if (i === 60) {
    chessPieceImg.src = whitePiecesUrl + "King.png";
    allSquares[i].appendChild(chessPieceImg);
    chessPieceImg.className = "KING";
  }
}

//selecting all img/pieces as node list
const allPieces = document.querySelectorAll("#mainChessBoard > div > img");

//returning index of node from nodeList of pieces - this way i am selecting unique piece
// this is gettign complicated atm
const selectedPiece = (allPieces, allSquares) => {
  for (let i = 0; i < allPieces.length; i++) {
    allPieces[i].addEventListener("click", () => {
      if (i != undefined) {
        allPieces[i].classList.add("selectedPiece");

        let pieceIndex = i;

        for (let i = 0; i < allSquares.length; i++) {
          allSquares[i].addEventListener("click", () => {
            allSquares[i].appendChild(allPieces[pieceIndex]);
          });
        }
      }
    });
  }
};

selectedPiece(allPieces, allSquares);
