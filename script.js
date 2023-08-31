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

// Opening Popup1 Menu
btnPopup.addEventListener('click', function(){
    popupCard.classList.remove('hidden');
    overlay.style.display = 'block';
});
function Overlay(parentPopup){
    parentPopup.classList.add('hidden');
    console.log(parentPopup);
    overlay.style.display = 'none';
}

// Creating card
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
    btnCardDelete.innerText = '🗑️';
    btnCardAdd.innerText = '➕';

    // deleting card
    btnCardDelete.addEventListener('click',(e)=>{
        let parent_card = (e.target.parentNode.parentNode);
        parent_card.classList.add('delete_card')
        setTimeout(()=>{
            parent_card.remove();
        },800)
    })

    // adding card task
    btnCardAdd.addEventListener('click',function(e){
        popupTask.classList.remove('hidden');
        overlay.style.display = 'block'; 
        currentTaskList = e.target.parentNode.previousSibling;
    })

    
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
        
    }
    
    btnAddTask.addEventListener('click', ()=>{
        const listName = document.getElementById('listName');
        createList(listName.value);
        overlay.addEventListener('click', Overlay);
    }) 
};

    btnPopupClose.forEach((btn)=>{
        btn.addEventListener('click',(e)=>{
            Overlay(e.target.parentNode.parentNode);
        })
    })
    //adding card
    btnPopupAdd.addEventListener('click', function(){
        createCard(cardNameInput.value);
        note.style.display='none'; 
    });
