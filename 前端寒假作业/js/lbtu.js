window.addEventListener('load',function() {
    let left = this.document.querySelector('.left');
    let right = this.document.querySelector('.right');
    let lbt = this.document.querySelector('.lbt');
    let num = 1;
    lbt.addEventListener(this.onmouseover = function() {
        left.style.display = 'inline';
        right.style.display = 'inline';
        right.addEventListener(onclick = function() {
            lbt.style.left = -num * 700 + 'px';
            num++;
        })
        left.addEventListener(onclick = function() {
            lbt.style.left = -num * 700 + 'px';
            num--;
        });
        lbt.addEventListener(this.onmouseout = function() {
             left.style.display = 'none';
             right.style.display = 'none';
         });
    });

})
    