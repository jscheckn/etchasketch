const container = document.getElementById('container');
function makeDivs(){
    for(let i = 0; i < 256; i++){
        let square = document.createElement('div');
        container.appendChild(square);
        
    }
    
    

}

makeDivs();


