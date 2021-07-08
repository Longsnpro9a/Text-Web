let postManApi = 'http://localhost:3000/posts';

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
    `
})

    html.innerHTML = htmls.join('');
}