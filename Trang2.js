let postManApi = 'http://localhost:3000/posts-2';

function start_man() {
    getPosts_Man(function(postsman) {
        renderPosts_man(postsman);
    })
}

start_man();

function getPosts_Man(callback) {
    fetch(postManApi)
        .then(function(postsman) {
            return postsman.json();
        })
        .then(callback)
}

function renderPosts_man(postsman) {
    let html = document.querySelector('.main__list');
    let htmls = postsman.map(function(postman) {
        return `
        <li class="main__item">
            <div class="container__img"><img src="${postman.image}" alt=""></div>
            <div class="container__details">
                <p class="detail__name">
                ${postman.name}
                </p>
                <p class="detail__price">
                ${postman.price}
                </p>
                <div class="detail__color">
                    <div class="detail__color__item">
                        <p class="black"></p>
                        <p class="white"></p>
                    </div>
                </div>
            </div>
            <p class="sale">-40%</p>
        </li>
    `})

    html.innerHTML = htmls.join('');
    let sale = document.querySelectorAll('.sale');

    for(let i=0;i<sale.length;i++)
    {
        if(postsman[i].id%2==1)
        {
            sale[i].innerText = "Tạm hết hàng";
            sale[i].style.color = "#fff";
            sale[i].style.backgroundColor = "#000";
        }
        if(postsman[i].id%3==0)
        {
            sale[i].style.display = "none";
        }
    }
}