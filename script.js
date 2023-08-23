
const popupCard = document.querySelector('.popup_card');
const overlay = document.querySelector('.overlay');
const btnPopup = document.querySelector('.head2');
const btnPopupAdd = document.querySelector('.btn1');
const btnPopupClose = document.querySelector('.btn2');
const cardNameInput = document.getElementById('cardName');
const card_container = document.querySelector('.card_container');

btnPopup.addEventListener('click', function(){
    popupCard.style.display = 'flex';
    overlay.style.display = 'block';
});
const Overlay = function(){
    popupCard.style.display='none';
    overlay.style.display='none';
}
btnPopupClose.addEventListener('click', Overlay);
overlay.addEventListener('click', Overlay);

function createCard(cardName){
    const card = document.createElement('div');
    const title = document.createElement('h3');
    const lists = document.createElement('div');
    const buttons = document.createElement('div');
    const btnCardDelete = document.createElement('button');
    const btnCardAdd = document.createElement('button');
    
    card.classList.add('card');
    title.classList.add('title');
    lists.classList.add('task_lists');
    buttons.classList.add('buttons');
    btnCardDelete.classList.add('delete');
    btnCardAdd.classList.add('add');
    
    card.appendChild(title);
    card.appendChild(lists);
    card.appendChild(buttons);
    buttons.appendChild(btnCardDelete);
    buttons.appendChild(btnCardAdd);

    title.innerText = cardName;
    btnCardDelete.innerText = '🗑️';
    btnCardAdd.innerText = '➕';

    card_container.appendChild(card);
    // console.log(card_container);
};
btnPopupAdd.addEventListener('click', function (){
    // console.log('printed');
    createCard(cardNameInput.value);
});
