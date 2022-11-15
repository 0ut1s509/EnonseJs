a=prompt("antre yon antye : ");
b=prompt("antre yon lot antye : ");
a = parseInt(a);
b= parseInt(b);
if (a>b){
    res=(a/b);
    res=res/2;
    console.log("a = ",a,"\t\t\t",res)
    console.log("b = ",b,"\n")
}

else if(a<b){
    res=(b/a);
    res = res/2;
    console.log("Resultat : ",res)
    console.log("a = ",a,"\t\t\t",res)
    console.log("b = ",b,"\n")
}
else{
    res=(b/a);
    res= res/2;
    console.log("a = ",a,"\t\t\t",res)
    console.log("b = ",b,"\n")
}