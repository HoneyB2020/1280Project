const menuBtn = document.querySelector('.menu-btn');
const menuIcon = document.querySelector('.menu-icon');
const menuItems = document.querySelector('nav ul');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  menuIcon.classList.toggle('active');
  menuItems.classList.toggle('active');
});

function ConvertRecipe()
{
    let Servings = document.getElementById("input").value;
    let FlourConverted = document.getElementById("flour");
    let Yeast = document.getElementById("yeast");
    let Sugar = document.getElementById("sugar");
    let Malt = document.getElementById("malt");
    let Egg = document.getElementById("egg");
    let Oil = document.getElementById("oil");

    
}