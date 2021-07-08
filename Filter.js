let listItem =document.querySelectorAll('.Filter--items');
let Group =document.querySelectorAll('.Filter--Body__group');
let icon = document.querySelectorAll('.Filter__icon');
for(let i=0;i<Group.length;++i){
    for(let j=0;j<listItem.length;j++){
        Group[i].onclick = function(){
            if(icon[i].classList.contains('fa-minus') == true){
                listItem[i].classList.add("none");
                icon[i].classList.remove('fa-minus');
                icon[i].classList.add('fa-plus');
            }
            else{
                listItem[i].classList.remove('none');
                icon[i].classList.remove('fa-plus');
                icon[i].classList.add('fa-minus');
            }
        }
    }
}
let main = document.querySelector('.Filter');
let Close = document.querySelector('.Filter--Header__close');
Close.onclick = function(){
    main.classList.add('close');
}
let Open = document.getElementById('filter__text');
Open.onclick = function(){
    main.classList.add('block');
    main.classList.remove('close');
}