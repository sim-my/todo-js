function addNew() {

  //selecting todos-section
  var todos = document.querySelector(".body-section");

  //creating grid container for each todo
  var grid_container = document.createElement("div");
  grid_container.className = "grid-container m-3";
  todos.appendChild(grid_container);

  //creating checkbox-container for each todo inside todo
  var checkbox_container = document.createElement("div");
  checkbox_container.className = "checkbox-container";
  grid_container.appendChild(checkbox_container);

  //creating checkbox inside checkbox-container
  var checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("onchange", "todoCheck(this)");
  checkbox.className = 'checkbox';
  checkbox_container.appendChild(checkbox);

  //creating text field inside grid-container
  var text_field = document.createElement("input");
  text_field.setAttribute("type", "text");
  text_field.className = 'text-field form-control'
  grid_container.appendChild(text_field);

   //creating button-container for each todo inside todo
   var button_container = document.createElement("div");
   button_container.className = "button-container";
   grid_container.appendChild(button_container);
 
   //creating checkbox inside checkbox-container
   var delete_button = document.createElement("button");
   delete_button.className = 'btn btn-default';
   delete_button.setAttribute("onclick", "removeTodo(this)");
   button_container.appendChild(delete_button);

   //adding icon to the button
   var delete_icon = document.createElement("i");
   delete_icon.className = 'fas fa-minus-circle text-danger';
   delete_button.appendChild(delete_icon);
}

function removeTodo(item){
    item.parentNode.parentNode.remove();
}

function todoCheck(item){
    var parent = item.parentNode.parentNode;
    var text_field = null
    for (var i = 0; i < parent.childNodes.length; i++) {
        if (parent.childNodes[i].classList.contains("text-field")){
          text_field = parent.childNodes[i];
          break;
        }        
    }
    if(item.checked){
      text_field.classList.add('strike');
    }
    if(!item.checked){
      text_field.classList.remove('strike');
    }
    
}