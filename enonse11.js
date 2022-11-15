let tabN=[1,2,10,4,5,6,7,8,9];

let mini=tabN[0],maxi=tabN[0];

for (i=0;i<tabN.length;i++){
    if (mini[i]<tabN[i]){
        mini=tabN[i];
    }
    if (maxi<tabN[i]){
        maxi=tabN[i];
    }
    
}

console.log("pi gran : "+maxi+" pi piti : "+mini);