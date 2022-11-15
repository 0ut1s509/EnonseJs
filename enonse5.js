function sum(item){
    som=0;
    for (el of item){
        som+=parseInt(el);
    }
    return som;
}
let chen =prompt("Antre chen nan");
chen = chen.split(" ");
tabS=[]
let som=0;
let prod = 1;
for (el of chen){
    som =sum(el);
    tabS.push(som)

}

for(el of tabS){
    prod*=el;
}
console.log("Total : "+prod);