ele = document.getElementById("ele1");
ele.addEventListener('click',function(){
    ele.style.backgroundColor = 'yellow';
});

function pintar(a = 'green'){
    ele = document.getElementById("ele1")
    ele.style.backgroundColor = a
}