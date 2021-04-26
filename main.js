menu_list_array=["Chicken Tandoori Pizza","Deluxe Veggie Pizza","Paneer Tikka Pizza","Veg Supreme Pizza","Veg Extravaganza Pizza"]
function getmenu(){
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+'<li class="array">'+menu_list_array[i]+'</li>'
    }
    htmldata=htmldata+"</ol>"
    document.getElementById("display_menu").innerHTML=htmldata;
}
function additem(){
    var htmldata;
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata="<section class='cards'>"
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+'<div class="cards">'+'<img src="images/pizzaImg.png"/>'+menu_list_array[i]+'</div>'
    }
    htmldata=htmldata+"</section>"
    document.getElementById("display_addedmenu").innerHTML=htmldata;
}