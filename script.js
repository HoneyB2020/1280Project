function ConvertRecipe() {
    // let Servings = document.getElementById("input").value;
    let rangeInput = document.getElementById('RangeInput');
    const rangeValue = document.getElementById('RangeValue');
    rangeValue.innerText = rangeInput.value+" Servings";
    let Servings = rangeInput.value;
    
    let Flour = 1000 *Servings/18;
    document.getElementById("flour").innerText = "Flour " + Flour.toFixed(0)+ " grams";
    let Yeast = 2 *Servings/18;
    document.getElementById("yeast").innerText = "Yeast " + Yeast.toFixed(0)+ " grams";
    let Sugar = 40*Servings/18;
    document.getElementById("sugar").innerText = "Sugar " + Sugar.toFixed(0)+ " grams";
    let Malt = 9*Servings/18;
    document.getElementById("malt").innerText = "Malt Powder " + Malt.toFixed(0)+ " grams";
    let Egg = 2*Servings/18;
    document.getElementById("egg").innerText = Egg.toFixed(0)+ " Eggs";
    let Oil = 12*Servings/18;
    document.getElementById("oil").innerText = "Vegetable Oil "+Oil.toFixed(0)+ " grams";
    let Water = 465*Servings/18;
    document.getElementById("water").innerText = "Water " +Water.toFixed(0)+ " grams";

    
}