var todos = []


function base(){
  var headTodo = document.createElement("h1");
  headTodo.setAttribute("id","headTodo");
  document.body.appendChild(headTodo)
  headTodo.innerHTML="ToDo App"

  var  div1  = document.createElement("div");
  div1.setAttribute("id","div1")
  document.body.appendChild(div1)


  var leftdiv  = document.createElement("div");
  var heading = document.createElement("h1");
  heading.innerHTML = " Task List";
  leftdiv.appendChild(heading);

  var subhead = document.createElement("h3");
  subhead.innerHTML = "Add tasks to your list by typing to the right and pressing enter.<br> You may then view pending tasks below."
  leftdiv.appendChild(subhead);

  var rightdiv = document.createElement("div");

  leftdiv.setAttribute("id","leftdiv");

  rightdiv.setAttribute("id","rightdiv");

  div1.appendChild(leftdiv);
  
  div1.appendChild(rightdiv);

  var inputTodo = document.createElement("textarea");

  inputTodo.setAttribute("placeholder","I need to ...");

  inputTodo.setAttribute("class","textbox");

  inputTodo.setAttribute("id","todoBox");

  rightdiv.appendChild(inputTodo);

  inputTodo.addEventListener("keyup",eventHandler);



  
}

function eventHandler(event)
  {
    var keyCode = event.code;
    var todoBox = document.getElementById("todoBox");
    var value = todoBox.value;
    if (keyCode==="Enter" && value !== "")
    {
      event.preventDefault();
      var container = document.createElement("div");
      container.setAttribute("class","containerStyle")
      var taskHeading = document.createElement("h4");
      var checkbox = document.createElement("input");
      var editButton = document.createElement("button");
      var deleteButton = document.createElement("button");


      checkbox.setAttribute("type", "checkbox");
      checkbox.setAttribute("id", "checkbox");
      checkbox.setAttribute("onclick", "checkboxClicked(this)");

      deleteButton.setAttribute("class","btn");
      deleteButton.setAttribute("onclick","deleteclicked(this)");
      var innerdelete = document.createElement("i");
      innerdelete.setAttribute("class","fa fa-close");

      deleteButton.appendChild(innerdelete);

      editButton.setAttribute("class","btn");
      editButton.setAttribute("onclick","editclicked(this)");
      var inneredit = document.createElement("i");
      inneredit.setAttribute("class","fa fa-pencil");

      editButton.appendChild(inneredit);

      container.appendChild(taskHeading);
      container.appendChild(checkbox);
      container.appendChild(editButton);
      container.appendChild(deleteButton);

      

      taskHeading.innerHTML = value;

      todos.push(value);

      localStorage.setItem("todos", JSON.stringify(todos));

      var leftdiv = document.getElementById("leftdiv");
      leftdiv.appendChild(container);

      todoBox.value = "";

    }
  }

base()

let storedTodos = localStorage.getItem("todos");

if(storedTodos !== null) {
    todos = JSON.parse(storedTodos);
}

todos.forEach(function(value)
{

    var container = document.createElement("div");
    container.setAttribute("class","containerStyle")
    var taskHeading = document.createElement("h4");
    var checkbox = document.createElement("input");
    var editButton = document.createElement("button");
    var deleteButton = document.createElement("button");


    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", "checkbox");
    checkbox.setAttribute("onclick", "checkboxClicked(this)");

    deleteButton.setAttribute("class","btn");
    deleteButton.setAttribute("onclick","deleteclicked(this)");
    var innerdelete = document.createElement("i");
    innerdelete.setAttribute("class","fa fa-close");

    deleteButton.appendChild(innerdelete);

    editButton.setAttribute("class","btn");
    editButton.setAttribute("onclick","editclicked(this)");
    var inneredit = document.createElement("i");
    inneredit.setAttribute("class","fa fa-pencil");

    editButton.appendChild(inneredit);

    container.appendChild(taskHeading);
    container.appendChild(checkbox);
    container.appendChild(editButton);
    container.appendChild(deleteButton);
    taskHeading.innerHTML = value;

    var leftdiv = document.getElementById("leftdiv");
    leftdiv.appendChild(container);

    todoBox.value = "";

})

function checkboxClicked(checkbox) {
    // Check or uncheck a to-do item
    if (checkbox.checked) {
        checkbox.parentElement.firstChild.style.textDecoration = "line-through";
    } else {
        checkbox.parentElement.firstChild.style.textDecoration = "none";
    }
}

function deleteclicked(deleteButton)
  {
    var text = deleteButton.parentNode.firstChild.innerHTML;
    var index = todos.indexOf(text);
    todos.splice(index, 1);

    localStorage.clear;
    localStorage.setItem("todos", JSON.stringify(todos));
    deleteButton.parentElement.remove();
  }

function editclicked(editButton)
  {
    var edittext = editButton.parentNode.firstChild.innerHTML;
    var ind = todos.indexOf(edittext);
    var foo = prompt('Type here your task');
    var bar = confirm('Confirm or deny');
    todos.splice(ind,1,foo)

    localStorage.clear;
    localStorage.setItem("todos", JSON.stringify(todos));
    window.location.reload(true)
  }





