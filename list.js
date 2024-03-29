// selectors

let inputTag = document.querySelector('#inputTag');
let list = document.querySelector('#list');
let addTop = document.querySelector('#btn1');
let addBottom = document.querySelector('#btn2');
let container2 = document.querySelector('#container2');



// code for add item bottom button
addBottom.addEventListener('click', function (event) {
    event.preventDefault();
    // let fchild = list.firstElementChild.value;
    if (inputTag.value == "") {
        document.getElementById('error').style.display = "block";
        addBottom.style.display = 'none';
        addTop.style.display = 'none';
        let okbtn = document.createElement('button');
        okbtn.classList.add("okbtn");
        okbtn.innerText = "Ok";
        okbtn.style.display = "block";
        container2.replaceChild(okbtn, addTop);
        okbtn.addEventListener("click", function () {
            document.getElementById('error').style.display = "none";
            container2.replaceChild(addTop, okbtn);
            addBottom.style.display = 'inline-block';
            addTop.style.display = 'inline-block';
        })
    }

    else {
        // create div element
        let todoDiv = document.createElement('div');
        todoDiv.classList.add('todo-div');

        // create li element
        let todoList = document.createElement('li');
        todoList.innerText = inputTag.value;
        todoList.classList.add('todo-list');
        todoDiv.appendChild(todoList);

        // create edit button
        let editButton = document.createElement('button');
        editButton.innerText = "✎";
        editButton.classList.add('editbtn');
        todoDiv.appendChild(editButton);

        // create check button
        let checkButton = document.createElement('button');
        checkButton.innerText = "✔";
        checkButton.classList.add('checkbtn');
        todoDiv.appendChild(checkButton);

        // create trash button
        let trashButton = document.createElement('button');
        trashButton.innerText = "X";
        trashButton.classList.add('trashbtn');
        todoDiv.appendChild(trashButton);

        // adding div to list
        list.appendChild(todoDiv);


        inputTag.value = "";
        document.getElementById('error').style.display = "none";

    }

});


// code for add item top button

addTop.addEventListener('click', function (event) {
    event.preventDefault();
    // let fchild = list.firstElementChild.value;
    if (inputTag.value == "") {
        document.getElementById('error').style.display = "block";
        addBottom.style.display = 'none';
        addTop.style.display = 'none';
        let okbtn = document.createElement('button');
        okbtn.classList.add("okbtn");
        okbtn.innerText = "Ok";
        okbtn.style.display = "block";
        container2.replaceChild(okbtn, addTop);
        okbtn.addEventListener("click", function () {
            document.getElementById('error').style.display = "none";
            container2.replaceChild(addTop, okbtn);
            addBottom.style.display = 'inline-block';
            addTop.style.display = 'inline-block';
        })
    }

    else {

        // create div element
        let todoDiv = document.createElement('div');
        todoDiv.classList.add('todo-div');

        // create li element
        let todoList = document.createElement('li');
        todoList.innerText = inputTag.value;
        todoList.classList.add('todo-list');
        todoDiv.appendChild(todoList);

        // create edit button
        let editButton = document.createElement('button');
        editButton.innerText = "✎";
        editButton.classList.add('editbtn');
        todoDiv.appendChild(editButton);

        // create check button
        let checkButton = document.createElement('button');
        checkButton.innerText = "✔";
        checkButton.classList.add('checkbtn');
        todoDiv.appendChild(checkButton);

        // create trash button
        let trashButton = document.createElement('button');
        trashButton.innerText = "X";
        trashButton.classList.add('trashbtn');
        todoDiv.appendChild(trashButton);

        // adding div to list
        let pos = list.firstElementChild;
        if (pos == "null") {
            list.appendChild(todoDiv);
        }

        else {
            list.insertBefore(todoDiv, pos);
        }


        inputTag.value = "";
        document.getElementById('error').style.display = "none";
    }

});


// code for delete button

// let delbtn = document.querySelector('.trashbtn');
list.addEventListener('click', function (event) {
    event.preventDefault();
    let item = event.target;
    if (item.classList[0] === "trashbtn") {
        let todel = item.parentElement;
        todel.classList.add('slide');
        todel.addEventListener('transitionend', function () {
            todel.remove()
        });
    }

    if (item.classList[0] === "checkbtn") {
        let todel = item.parentElement;
        todel.classList.toggle('completed');
    }

    if (item.classList[0] === "editbtn") {
        addBottom.style.display = 'none';
        addTop.style.display = 'none';
        let todel = item.parentElement;
        let rep = todel.firstElementChild;
        inputTag.value = rep.innerText;
        let save = document.createElement('button');
        save.classList.add('savebtn');
        save.innerText = "Save";
        save.style.display = 'block';
        container2.replaceChild(save, addTop);
        inputTag.focus();
        save.addEventListener("click", function (e) {
            e.preventDefault();
            rep.innerText = inputTag.value;
            inputTag.value = "";
            container2.replaceChild(addTop, save);
            save.style.display = 'none';
            item.style.display = "inline-block";
            addBottom.style.display = 'inline-block';
            addTop.style.display = 'inline-block';

        })
    }
});