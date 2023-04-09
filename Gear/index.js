let loadMoreBtn = document.querySelector('#load_more');
let countCard = 3;

loadMoreBtn.onclick = () => {
    let cards = [...document.querySelectorAll('.tools-card .card')];


    for (var i = countCard; i < countCard + 3; i++) {
        cards[i].style.display = 'inline-block';
    }

    countCard=countCard += 3;

    if (countCard >= cards.length) {
        loadMoreBtn.style.display = 'none';
    }

}



let loadMoreNewComerBtn = document.querySelector('#load_more_newcomer');
let countNewComerCard = 4;

loadMoreNewComerBtn.onclick = () => {
    let newComerCards = [...document.querySelectorAll('.newcomer .card')];


    for (var i = countNewComerCard; i < countNewComerCard + 2; i++) {
        newComerCards[i].style.display = 'inline-block';
    }

    countNewComerCard=countNewComerCard += 2;

    if (countNewComerCard >= newComerCards.length) {
        loadMoreNewComerBtn.style.display = 'none';
    }

}


