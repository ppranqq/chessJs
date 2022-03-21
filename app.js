//generate chess board
for (let i = 0; i < 64; i++) {
  document
    .getElementById("mainChessBoard")
    .appendChild(document.createElement("div")).style.backgroundColor =
    parseInt(i / 8 + i) % 2 === 0 ? "#F6F7EB" : "#8693AB";
}

//selectring all squares as nodelist
const allSquares = document.querySelectorAll("#mainChessBoard > div");

console.log(allSquares);

for (let i = 0; i < allSquares.length; i++) {
  let chessPieceImg = document.createElement("img");
  let imgUrl = "./chessPieceSet-pngs/" + i + ".png";

  if (imgUrl.statusCode !== "404") {
    chessPieceImg.src = imgUrl;
    allSquares[i].appendChild(chessPieceImg);
  }
}
