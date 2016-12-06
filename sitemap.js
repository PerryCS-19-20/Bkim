function buildMap(eleid){
    var space = document.getElementById(eleid);
    var list = document.createElement("ul");
    var subList = document.createElement("ul");
    list.appendChild(item("Home", "index.html"));
    list.appendChild(item("Play Game","breakout.html"));
    list.appendChild(item("About Me","bio.html"));
    list.appendChild(item("Class Stuff","classstuff.html"));
    subList.appendChild(item("HTML Sandbox","htmltest.html"));
    subList.appendChild(item("To Do List","todolist.html"));
    subList.appendChild(item("Chalkboard","chalkboard.html"));
    subList.appendChild(item("Tic-Tac-Toe","tictactoe.html"));
    subList.appendChild(item("Times Table","timestable.html"));
    list.appendChild(subList);
    space.appendChild(list);
}
function item(name,link){
    var ele = document.createElement("a");
    var li = document.createElement("li");
    ele.href = link;
    ele.textContent=name;
    li.appendChild(ele);
    return li;
}