let alph ="abcdefghijklmnopqrstuvwxyz";
function splitt(tosplit){
    tosplit=tosplit.split("")
    return tosplit;

}
function toDecript(tocript){
    console.log(tocript)
    tocript = tocript.toLowerCase()
    tocript =tocript.split(" ");
    let concat="";
    let temp="";
    for (let el of tocript){
        el =splitt(el);
        if (el[0] == ">"){
            temp = alph.indexOf((el.at(-1)))
            temp  = alph[temp + parseInt(el.slice(1,-1).join(""))]
            concat+=temp;
        }
         if (el[0] == "<"){
             temp = alph.indexOf((el.at(-1)));
             temp  = alph[temp - parseInt(el.slice(1,-1).join(""))];
             concat+=temp;
             // console.log(temp)
         }
    }
    console.log(concat.toUpperCase())
    return tocript
}

let tocript = toDecript(">3A >0A <1U <10K >1A <9J <0S <16U");