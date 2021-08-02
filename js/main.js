
var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";

function menutuggle(){
    if(MenuItems.style.maxHeight == "0px")
        {
            MenuItems.style.maxHeight = "300px"
        }
    else
    {
        MenuItems.style.maxHeight = "0px"
    }
}




var pid = document.getElementById("pid");
var sid = document.getElementsByClassName("sid");

sid[0].onclick = function(){
    pid.src = sid[0].src;
}
sid[1].onclick = function(){
    pid.src = sid[1].src;
}
sid[2].onclick = function(){
    pid.src = sid[2].src;
}
sid[3].onclick = function(){
    pid.src = sid[3].src;
}