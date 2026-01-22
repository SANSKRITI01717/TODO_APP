
let input = document.querySelector('input');
let ul = document.querySelector('ul');
let btn = document.querySelector('button');

let editingSpan = null;

btn.addEventListener('click', function () {


    if (editingSpan !== null) {
        editingSpan.innerText = input.value;
        input.value = '';
        editingSpan = null;
        btn.innerText = 'Add';
        return;
    }


    let a = document.createElement('li');

    let text = document.createElement('span');
    text.innerText = input.value;
    text.classList.add('text');
    a.appendChild(text);
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    a.appendChild(checkbox);
    let delbtn = document.createElement('button');
    delbtn.innerText = 'Delete';
    delbtn.classList.add('delete');
    a.appendChild(delbtn);

    let editbtn = document.createElement('button');
    editbtn.innerText = 'Edit';
    editbtn.classList.add('edit');
    a.appendChild(editbtn);
     if(text.innerText==''){
        alert("please enter some thing");
        return
     }else{
             ul.appendChild(a);
    input.value = '';
     }
  
});

ul.addEventListener('click', function (e) {


    if (e.target.classList.contains('delete')) {
        if (editingSpan === e.target.parentElement.querySelector('.text')) {
            editingSpan = null;
            input.value = '';
            btn.innerText = 'Add';
        }
        e.target.parentElement.remove();
    }


    if (e.target.classList.contains('edit')) {
        editingSpan = e.target.parentElement.querySelector('.text');
        input.value = editingSpan.innerText;
        btn.innerText = 'Save';
    }

});
ul.addEventListener('click', function (e) {
    if (e.target.classList.contains('checkbox')) {
        let c = e.target.parentElement.querySelector('.text');
        let editBtn = e.target.parentElement.querySelector('.edit');
        if (e.target.checked) {
            c.style.textDecoration = 'line-through';
            editBtn.disabled = true;

        } else {
            c.style.textDecoration = 'none';
            editBtn.disabled = false;
        }

    }
})


