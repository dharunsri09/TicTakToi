const gameBoard=document.querySelector('#gameBoard')
const text=document.querySelector('#textG')
const cell=["1","2","3","4","5","6","7","8","9"]

let st = "circle";
text.textContent="Circle goes first"
function createBoard(){
    cell.forEach((cell,index)=>{
       const cells= document.createElement('div')
        cells.classList.add('square')
        gameBoard.append(cells)
        cells.id=index
        cells.addEventListener("click", addGo)
    })
}
createBoard()

function addGo(e){
    const goDis=document.createElement('div');
    goDis.classList.add(st)
    e.target.append(goDis)
    st = st === "circle"?"cross":"circle"
    text.textContent=st+" goes now."
    e.target.removeEventListener("click",addGo)
    wins()
}

function wins(){
    const alls=document.querySelectorAll(".square")
    const winningCombo=[
        [0,1,2],[0,4,8],[2,3,6],
        [3,4,5],[6,7,8],[0,3,6],
        [2,4,6],[2,5,8]
    ]
    winningCombo.forEach(array=>{
        const cir=array.every(cell=>
            alls[cell].firstChild?.classList.contains('circle'))

        if(cir){
            text.textContent="Circle Wins  :)"
            alls.forEach(square=>square.replaceWith(square.cloneNode(true)))
            return
        }
    })

    winningCombo.forEach(array=>{
        const cir=array.every(cell=>
            alls[cell].firstChild?.classList.contains('cross'))
        if(cir){
            text.textContent="Cross Wins :)"
            alls.forEach(square=>square.replaceWith(square.cloneNode(true)))
            return
        }
    })
}