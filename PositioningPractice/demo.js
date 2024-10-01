function toggle(el){
    var c = document.getElementById(el);
    if (c.style.position == "relative"){
        c.style.position = "static";
    }
    else{
        c.style.position = "relative";
    }
}
function absolute(){
    var c = document.getElementById("inner");
    if (c.style.position == "absolute"){
        c.style.position = "static";

    }
    else{
        c.style.position = "absolute";
    }
}