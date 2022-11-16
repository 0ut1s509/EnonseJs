let sekans = [0,1,2,3,4]

let nskans = [...(sekans.slice(0,4)).reverse(), ...sekans.slice(-1)];

for (let i = 0 ; i < sekans.length; i++){
    if (i==0){
        sekans = sekans.reverse();
        console.log(sekans);
    }
    else{
        sekans = [...(sekans.slice(0,(sekans.length)-i)).reverse(), ...sekans.slice(-i)];
        console.log(sekans);
    }
}

console.log(`3|${sekans.indexOf(3)}`)