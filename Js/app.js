function showNav(){
    let nav=document.getElementById('myHeader');
    if(nav.className==="header"){
        nav.className += " responsive";
    }
    else{
        nav.className = "header";
    }
}