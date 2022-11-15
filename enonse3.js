function capitalize(car){
    return car[0].toUpperCase()+(car.slice(1)).toLowerCase();
}

let non =prompt("Antre nonw");
non = non.split(" ");
temp ="";

for (let el of non){
    temp+=capitalize(el)+" ";
}

alert(temp);