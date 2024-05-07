function hoverdiv(e,num){

    let info = document.getElementById("info").getBoundingClientRect();;
    
    let div = document.getElementById("disclaimer-notif");
    div.style.left = info.left - 75 + "px";
    div.style.top = info.top + 25 + "px";
    
    if (num==1)
        div.style.display = 'block';
    else
        div.style.display = 'none';
}

window.addEventListener("scroll", () => {
    let topbar = document.getElementById("navbar-hidden")
    if (window.pageYOffset > 70) {
        topbar.style.display = 'flex';
    } else {
        topbar.style.display = 'none';
    }
});