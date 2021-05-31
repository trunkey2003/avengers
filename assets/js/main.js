function Submit() {
    alert("Your comment have succesfully sent, LamTin will contact you later! Thanks !");
}




document.getElementById("more-button").onclick = function(){
    document.getElementById("sub-nav").style.display = "block"; 
    document.getElementById("close-sub-nav").style.display = "inline-block";
    console.log('sub-nav');
}

document.getElementById('date-button').onclick = function() {
    document.getElementById('date').innerHTML = Date();
};   

document.getElementById("close-sub-nav").onclick=function(e){
    e.stopPropagation();
    document.getElementById("sub-nav").style.display = "none";
    document.getElementById("close-sub-nav").style.display = "none";
};

document.getElementById('date').onclick = function() {
    document.getElementById('date').innerHTML ='';
}; 


