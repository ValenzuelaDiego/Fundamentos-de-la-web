function press_boton()
{
    alert("Ninja was like!");
}
function hide() 
{
    var element=document.querySelector(".part_iz .art_3 #boton_4");
    element.remove();
}
function change()
{
    var elemento = document.querySelector("nav #boton_1");
    elemento.textContent="Log Out";
}

window.onload = function()
{
    var boton1=document.getElementById('boton_1');
    var boton2=document.getElementById('boton_2');
    var boton4=document.getElementById('boton_4');

    boton1.addEventListener('click',change);
    boton2.addEventListener('click',press_boton);
    boton4.addEventListener('click',hide);
}