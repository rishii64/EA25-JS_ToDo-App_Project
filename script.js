const popupCard = document.querySelector('.popup_card');
const popupTask = document.querySelector('.popup_Task');
const overlay = document.querySelector('.overlay');
const btnPopup = document.querySelector('.head2');
const btnPopupAdd = document.querySelector('.btn1');
const btnPopupClose = document.querySelectorAll('.btn2');
const btnAddTask = document.querySelector('.btn3');
const cardNameInput = document.getElementById('cardName');
const card_container = document.querySelector('.card_container');
const note = document.querySelector('.note');
const popuplist = document.querySelector('.card_head');
const popupItem = document.querySelector('.card_head2');
let currentTaskList;
let cardCounter = 0;
const singleCard = document.querySelector('.singleCard_container');
const singleCardHead = document.querySelector('#singleCardHeading');
const backBtn = document.getElementById('btnBack');
const head1 = document.querySelector('.head1');
const head2Text = document.getElementById('head2Text');
let currentSingleCard;

// Opening Popup1 Menu
btnPopup.addEventListener('click', function(){
    popupCard.classList.remove('hidden');
    overlay.style.display = 'block';
});
function Overlay(parentPopup){
    parentPopup.classList.add('hidden');
    overlay.style.display = 'none';
}
function noteHide(){
    if(cardCounter===0)
        note.style.display='block';
    else
        note.style.display='none';
}
// Creating card
function createCard(cardName){
    const card = document.createElement('div');
    const title = document.createElement('h3');
    const lists = document.createElement('div');
    const buttons = document.createElement('div');
    const btnCardDelete = document.createElement('i');
    const btnCardAdd = document.createElement('i');
    
    card.classList.add('card');
    title.classList.add('title');
    lists.classList.add('task_lists');
    buttons.classList.add('buttons');
    btnCardDelete.classList.add('delete', 'fa-solid', 'fa-trash');
    btnCardAdd.classList.add('add','fa-solid', 'fa-plus');
    
    // appending card elements
    card.appendChild(title);
    card.appendChild(lists);
    card.appendChild(buttons);
    buttons.appendChild(btnCardDelete);
    buttons.appendChild(btnCardAdd);
    card_container.appendChild(card);

    // giving values to card elements
    title.innerText = cardName;
    cardNameInput.value = '';

    // deleting card
    btnCardDelete.addEventListener('click',(e)=>{
        let parent_card = (e.target.parentNode.parentNode);
        parent_card.classList.add('delete_card');
        cardCounter--;
        setTimeout(()=>{
            parent_card.remove();
            noteHide();
            singleCardHead.innerText='';
        },800);
    })

    btnCardAdd.addEventListener('click',function(e){
        popupTask.classList.remove('hidden');
        overlay.style.display = 'block'; 
        currentTaskList = e.target.parentNode.previousSibling;
    })

    // opening single card
    title.addEventListener('click', (e)=>{
        singleCard.classList.remove('hidden');
        currentSingleCard =  e.target.parentNode;
        currentSingleCard.classList.add('singleCard');
        head1.style.display='none';
        backBtn.style.display='block';
        head2Text.style.display='none';
        singleCardHead.innerText=e.target.innerText;
    })
};
function createList(listName){
    // creating itemlist
    const item = document.createElement('div');
    const itemText = document.createElement('span');
    const markDone = document.createElement('button');
    
    item.classList.add('item');
    itemText.classList.add('itemText');
    markDone.classList.add('mark');

    // appending itemlist elements
    item.appendChild(itemText);
    item.appendChild(markDone);

    // giving values itemlist elements
    itemText.innerText = listName;
    markDone.innerText = 'Mark Done';
    currentTaskList.appendChild(item);

    markDone.addEventListener('click', (e)=>{
        e.target.previousElementSibling.classList.add('taskDone');
        e.target.style.display='none';
    })
}
    // adding task in card  |   Opening Popup2 Menu
    btnAddTask.addEventListener('click', ()=>{
        const listName = document.getElementById('listName');
        createList(listName.value);
        listName.value='';
        overlay.addEventListener('click', Overlay);
        popupTask.classList.add('hidden');
        overlay.style.display = 'none';
    }) 
    // closing Popup1 & Popup2 Menu
    btnPopupClose.forEach((btn)=>{
        btn.addEventListener('click',(e)=>{
            Overlay(e.target.parentNode.parentNode);
            e.target.parentNode.previousElementSibling.value='';
        })
    })
    //adding card
    btnPopupAdd.addEventListener('click', function(){
        cardCounter++;
        noteHide();
        createCard(cardNameInput.value);
        popupCard.classList.add('hidden');
        overlay.style.display = 'none';
    });

    backBtn.addEventListener('click',()=>{
        singleCard.classList.add('hidden');
        currentSingleCard.classList.remove('singleCard');
        head1.style.display='block';
        backBtn.style.display='none';
        head2Text.style.display='block';
    })