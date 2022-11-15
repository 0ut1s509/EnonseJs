let x=1,y=30;
nonbPe=""
for (i=x; i<=y;i++){
    if (i%2==0){
        nonbPe +=i+",";
    }
}

console.log("nonb pe yo se : "+nonbPe.slice(0,-1));