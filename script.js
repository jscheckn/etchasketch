const container = document.getElementById('container');
function makeDivs(numDivs){
    for(let i = 0; i < numDivs; i++){
        let square = document.createElement('div');
        container.appendChild(square);
        
    }
    
    

}

makeDivs(16);