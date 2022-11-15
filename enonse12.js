let a, b;

for (i=0; i<3; i++){
    a = prompt("antre a");
    b = prompt("antre b");

    if (b<a){
        console.log(`a = ${a} \t\t ${b}\nb = ${b}`);
    }
    else if(a < b){
        console.log(`a = ${a} \t\t ${a}\nb = ${b}`);
    }
    else{
        console.log(`a = ${a} \t\t ${a}\nb = ${b}`);
    }
}