window.addEventListener('load',function() {
    let main31 = this.document.querySelector('.main31');
    let main32 = this.document.querySelector('.main32');
    let shezhi1 = this.document.querySelector('.shezhi1');
    let shezhi2 = this.document.querySelector('.shezhi2');
    main31.style.display = 'inline';
    shezhi1.style.backgroundColor = 'white';
    shezhi2.addEventListener(this.onclick = function() {
        main32.style.display = 'inline';
        main31.style.display = 'none';
        shezhi2.style.backgroundColor = 'white';
        shezhi1.style.backgroundColor = 'rgba(128, 128, 128, 0.084)';
    });
    shezhi1.addEventListener(this.onclick = function() {
        main31.style.display = 'inline';
        main32.style.display = 'none';
        shezhi1.style.backgroundColor = 'white';
        shezhi2.style.backgroundColor = 'rgba(128, 128, 128, 0.084)';
    });
})
   