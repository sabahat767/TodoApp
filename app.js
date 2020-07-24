var todoList=document.getElementById("todoList");
function addToDO()
{
    //for list item
    var input=document.getElementById("input");
    var li=document.createElement("li");
    li.setAttribute("class","list-group-item");
    var li_text=document.createTextNode(input.value);
    //console.log(li_text);
    li.appendChild(li_text);
    //for list-dlt button
    var deleteButton=document.createElement("button");
    var dlt_button_txt=document.createTextNode("\u00D7");
    deleteButton.setAttribute("class","btn btn-outline-danger btn-group float-sm-right");
    deleteButton.setAttribute('onclick','dltToDo(this)');

    deleteButton.appendChild(dlt_button_txt);
   
    li.appendChild(deleteButton);
    //edit button
    var editButton=document.createElement("button");

    var edit_button_txt=document.createTextNode("EDIT");
    editButton.setAttribute("class","btn btn-outline-warning btn-group float-sm-right ");
    editButton.setAttribute("onclick","editToDo(this)");

    editButton.appendChild(edit_button_txt);
   
    li.appendChild(editButton);
    todoList.appendChild(li);
input.value="";
}
function dltToDo(e)
{
  e.parentNode.remove();
 
}
function dltAll()
{
    todoList.innerHTML="";
}
function editToDo(e)
{
    
var update=prompt("enter new value",e.parentNode.firstChild.nodeValue);
e.parentNode.firstChild.nodeValue=update;
//console.log(e.parentNode.firstChild.nodeValue);

}