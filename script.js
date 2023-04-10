const menuBtn = document.querySelector('.menu-btn');
const menuIcon = document.querySelector('.menu-icon');
const menuItems = document.querySelector('nav ul');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    menuIcon.classList.toggle('active');
    menuItems.classList.toggle('active');
});



function ConvertRecipe() {
    // let Servings = document.getElementById("input").value;
    let rangeInput = document.getElementById('RangeInput');
    const rangeValue = document.getElementById('RangeValue');
    rangeValue.innerText = rangeInput.value+" Servings";
    let Servings = rangeInput.value;
    
    let Flour = 1000 *Servings/18;
    document.getElementById("flour").innerText = Flour.toFixed(0);
    let Yeast = 2 *Servings/18;
    document.getElementById("yeast").innerText = Yeast.toFixed(0);
    let Sugar = 40*Servings/18;
    document.getElementById("sugar").innerText = Sugar.toFixed(0);
    let Malt = 9*Servings/18;
    document.getElementById("malt").innerText = Malt.toFixed(0);
    let Egg = 2*Servings/18;
    document.getElementById("egg").innerText = Egg.toFixed(0);
    let Oil = 12*Servings/18;
    document.getElementById("oil").innerText = Oil.toFixed(0);
    let Water = 465*Servings/18;
    document.getElementById("water").innerText = Water.toFixed(0);

    
    
    




}