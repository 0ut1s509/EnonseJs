let alph ="abcdefghijklmnopqrstuvwxyz";

function toDecript(tocript){
    tocript = tocript.toLowerCase()
    tocript =tocript.split(" ");
    let concat="";
    let temp="";
    for (let el of tocript){
        if (el[0] == ">"){
            temp = alph.indexOf((el.at(-1)));
            temp  = alph[temp + parseInt(el.slice(1,-1))];
            concat+=temp;
        }
         if (el[0] == "<"){
             temp = alph.indexOf((el.at(-1)));
             temp  = alph[temp - parseInt(el.slice(1,-1))];
             concat+=temp;
         }
    }
    return concat.toUpperCase();
}

let Decript = toDecript("<1T >7H >3C <5Y >13J <2C <5W >4A");
console.log(Decript)