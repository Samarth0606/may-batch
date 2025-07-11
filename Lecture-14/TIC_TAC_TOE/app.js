const cellElements = document.querySelectorAll('.cell');
console.log(cellElements);


for(let cell of cellElements){
    cell.addEventListener('click' , handleClick , {once:true})
}

let circle_turn = false;
let WINNING_COMBINATION = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


function handleClick(e){
    // 1. MARK THE SYMBOL (X,O)
    let clickedCell = e.target;
    let currentClass = circle_turn ? 'circle' : 'x';
    clickedCell.classList.add(currentClass);

    // 2. CHECK WON
    if(checkWin(currentClass)){
        document.querySelector('.final-winner').innerHTML = `WINNER- ${currentClass.toUpperCase()}`;
        document.querySelector('.final-winner').parentElement.classList.add('show');
    }
    // 3. DRAW
    else if( checkDraw() ){
         document.querySelector('.final-winner').innerHTML = `DRAW`;
        document.querySelector('.final-winner').parentElement.classList.add('show');
    }
    // 4. CHANGE TURN
    else{
        circle_turn = !circle_turn;
    }
}

function checkDraw(){
    return [...cellElements].every((cell)=>{
        return cell.classList.contains('x') || cell.classList.contains('circle')
    })
}

// dry run at your places
function checkWin(currentClass){
    return WINNING_COMBINATION.some((itemRow)=>{
        return itemRow.every((item)=>{
            return cellElements[item].classList.contains(currentClass)
        })
    })
}

function restart(){
    window.location.reload();
}

document.querySelector('#restart-btn').onclick = restart;


// window.location.alert("pleae")