const cursor = (e)=>{
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
};
var mouseCursor = document.querySelector(".cursor");
window.addEventListener("mousemove", cursor);
var hidden =document.querySelector(".hidden");

var link =document.querySelectorAll("a");
link.forEach((link) => {

    link .addEventListener("mouseover",growlink );
    link .addEventListener("mouseleave",shrinklink );

});

function growlink(){
    mouseCursor.classList.add("link-grow");
}
function shrinklinklink(){
    mouseCursor.classList.remove("link-grow");
}
var panel=document.querySelectorAll(".panel");
panel.forEach(function(panel)  {
    panel.addEventListener("click", growpanel);

});
function growpanel(){
    panel.forEach(

        panel.classList.remove("active")
    )
}