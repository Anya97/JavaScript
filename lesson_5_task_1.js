function chessBoard(){
    let myBlock = document.querySelector('.chess-board');
    let cell;
    let numberRow;
    let flag = true;
    let letters;

    for (let i = 0; i<8; i++){
        for (let j = 0; j<8; j++){
            if (j==0) {
                flag = !flag;
                numberRow = document.createElement('div');
                numberRow.innerHTML = 8-i;
                numberRow.className = 'rows';
                myBlock.appendChild(numberRow);
            }
            
            cell = document.createElement('div');

            if (flag) {
                cell.className = 'cell black'}
            else {cell.className = 'cell white'};

            if (i==0 && j==0 || i==0 && j==7) {
                cell.style.backgroundImage = 'url(img_lesson_5/black_rook.png)';
            }
            else if (i==0 && j==1 || i==0 && j==6) {
                cell.style.backgroundImage = 'url(img_lesson_5/black_knight.png)';
            }
            else if (i==0 && j==2 || i==0 && j==5) {
                cell.style.backgroundImage = 'url(img_lesson_5/black_bishop.png)';
            }
            else if (i==0 && j==3) {
                cell.style.backgroundImage = 'url(img_lesson_5/black_queen.png)';
            }
            else if (i==0 && j==4) {
                cell.style.backgroundImage = 'url(img_lesson_5/black_king.png)';
            }
            else if (i==1) {
                cell.style.backgroundImage = 'url(img_lesson_5/black_pawn.png)';
            }
            else if (i==6) {
            cell.style.backgroundImage = 'url(img_lesson_5/white_pawn.png)';
            }
            else if (i==7 && j==2 || i==7 && j==5) {
                cell.style.backgroundImage = 'url(img_lesson_5/white_bishop.png)';
            }
            else if (i==7 && j==1 || i==7 && j==6) {
                cell.style.backgroundImage = 'url(img_lesson_5/white_knight.png)';
            }
            else if (i==7 && j==0 || i==7 && j==7) {
                cell.style.backgroundImage = 'url(img_lesson_5/white_rook.png)';
            }
            else if (i==7 && j==3) {
                cell.style.backgroundImage = 'url(img_lesson_5/white_queen.png)';
            }
            else if (i==7 && j==4) {
                cell.style.backgroundImage = 'url(img_lesson_5/white_king.png)';
            }        
            myBlock.appendChild(cell);
            flag = !flag;
        }
    }
    for (let b = 7; b>=0; b--){
        letters = document.createElement('div');
        letters.innerHTML = String.fromCharCode(65 + b);
        letters.className = 'letters';
        myBlock.appendChild(letters);
    }
}

chessBoard();