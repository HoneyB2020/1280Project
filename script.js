function ConvertRecipe() {
    // let Servings = document.getElementById("input").value;
    let rangeInput = document.getElementById('RangeInput');
    const rangeValue = document.getElementById('RangeValue');
    rangeValue.innerText = rangeInput.value+" Servings";
    let Servings = rangeInput.value;
    
    let Flour = 1000 *Servings/18;
    document.getElementById("flour").innerText = "Flour " + Flour.toFixed(0)+ " grams";
    document.getElementById("flour").textContent = "Flour " + Flour.toFixed(0)+ " grams";
    let Yeast = 2 *Servings/18;
    document.getElementById("yeast").innerText = "Yeast " + Yeast.toFixed(0)+ " grams";
    document.getElementById("yeast").textContent = "Yeast " + Yeast.toFixed(0)+ " grams";
    let Sugar = 40*Servings/18;
    document.getElementById("sugar").innerText = "Sugar " + Sugar.toFixed(0)+ " grams";
    document.getElementById("sugar").textContent = "Sugar " + Sugar.toFixed(0)+ " grams";
    let Malt = 9*Servings/18;
    document.getElementById("malt").innerText = "Malt Powder " + Malt.toFixed(0)+ " grams";
    document.getElementById("malt").textContent = "Malt Powder " + Malt.toFixed(0)+ " grams";
    let Egg = 2*Servings/18;
    document.getElementById("egg").innerText = Egg.toFixed(0)+ " Eggs";
    document.getElementById("egg").textContent = Egg.toFixed(0)+ " Eggs";
    let Oil = 12*Servings/18;
    document.getElementById("oil").innerText = "Vegetable Oil "+Oil.toFixed(0)+ " grams";
    document.getElementById("oil").textContent = "Vegetable Oil "+Oil.toFixed(0)+ " grams";
    let Water = 465*Servings/18;
    document.getElementById("water").innerText = "Water " +Water.toFixed(0)+ " grams";
    document.getElementById("water").textContent = "Water " +Water.toFixed(0)+ " grams";
    let Seeds = 100*Servings/18;
    document.getElementById("seeds").innerText = Seeds.toFixed(0)+ " grams sesame or poppy seeds";
    document.getElementById("seeds").textContent = Seeds.toFixed(0)+ " grams sesame or poppy seeds";
    
}
