function chessBoard() {
    for (var i = 0; i < 64; i++) {
        var result = document.getElementById("chess-board");
        result.appendChild(document.createElement("div")).style.backgroundColor = parseInt((i / 8) + i) % 2 == 0 ? '#ababab' : 'white';
    }
}
chessBoard()