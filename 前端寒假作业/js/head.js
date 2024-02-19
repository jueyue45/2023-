window.addEventListener('load', function() {
    var head1 = document.getElementsByClassName('head1');
        var head2 = document.getElementsByClassName('head2');
        head1.onmouseover = function() {
            this.backgroundColor = black;
        }
        var 搜索框 = document.querySelector('input');
        搜索框.onfocus = function() {
            console.log(111);
            if (this.value === '音乐/视频/电台/用户') {
                this.value = '';
                this.style.color = '#333';
            }
        }
        搜索框.onblur = function() {
            if(this.value === ''){
                this.value = '音乐/视频/电台/用户';
                this.style.color = '#999';
            }
        }
})
