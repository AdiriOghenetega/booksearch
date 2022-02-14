// let books=document.querySelectorAll('#book-list li .name')
// books.forEach(function(book){
//     console.log(book.textContent);//lists all the text in the '#book-list li .name' target
//     book.textContent += ' revised'
// })

// function del(){
//     document.getElementById('hello').textContent=null;


// }
// let btn = document.querySelectorAll('#book-list .delete')
// btn.forEach(function(btns){
//     btns.addEventListener('click',function(e){
//         const li = e.target.parentElement;
//         li.parentNode.removeChild(li)
//     })
// })
// const addName = document.forms('add-book')
// addName.addEventListener('submit',function(e){
//     e.preventDefault()
//     const value = addName.querySelector('input [type="text"]').value
//     console.log(value)
// })
const list = document.querySelector('#book-list ul')
const forms = document.forms;

list.addEventListener('click', function (e) {
  if (e.target.className == 'delete') {
    const li = e.target.parentElement
    list.removeChild(li);
  }


})

//ADD TO tHE DOM

const addForm = forms['add-book'];
addForm.addEventListener('submit', function (e) {
  e.preventDefault();

  //CREATE ELEMENTS IN THE DOM
  const value = addForm.querySelector('input[type="text"]').value;
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  // Add content in the DOM

  bookName.textContent = value;
  deleteBtn.textContent = 'delete';

  // Add classes
  deleteBtn.classList.add('delete')
  bookName.classList.add('name')

  // Append To document
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
})
