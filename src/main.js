function hoverdiv(e,num){

    let info = document.getElementById("info").getBoundingClientRect();;
    
    let div = document.getElementById("disclaimer-notif");
    div.style.left = info.left + "px";
    div.style.top = info.top + 25 + "px";
    
    if (num==1)
        div.style.display = 'block';
    else
        div.style.display = 'none';
}