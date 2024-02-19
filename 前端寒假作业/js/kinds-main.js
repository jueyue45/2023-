window.addEventListener('load',function() {
    let kinds = document.querySelector('.kinds');
    let all2 = document.querySelector('.all2');
    let temp = 0;
    all2.addEventListener(this.onclick = function() {
        if (temp === 0){
            kinds.style.display = 'inline';
            temp = 1;
        }else{
            kinds.style.display = 'none';
            temp = 0;
        }  
    })
    
})