let mo="VWAYEl";
let vwayel = "aeiouy";
let ranplas;
let nmo=[];
for (el of mo){
   nmo.push(el)
}

for(el in nmo){
 if (vwayel.includes(nmo[el].toLowerCase())){
    console.log(nmo[el])
    nmo[parseInt(el)+1] = "*";
 }
}
console.log(nmo.join(""));