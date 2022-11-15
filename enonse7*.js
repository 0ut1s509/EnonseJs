let mo="mo avek vwayel";
let vwayel = "aeiouy";
let ranplas;
for (el of mo){
    if (vwayel.includes(el)){
        console.log(el)
         ranplas = mo.replaceAll(el,"*");
    }
}


console.log(ranplas)