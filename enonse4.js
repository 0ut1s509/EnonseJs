let n1,n2,x,y, mn1="",mn2="",mn1n2="",nm="";

x=prompt("antre kote enteval la ap komanse");
y=prompt('antre kote enteval la fini');

n1 = prompt("antre premye nonb lan");
n2 = prompt("Antre dezyem nonb lan");

for (let i=x; i<=y; i++){
    if(i%n1 ==0 && i%n2 !=0){
        mn1+=i+",";

    }
    else if(i%n2 == 0 && i%n1!=0){
        mn2+=i+",";
    }
    else if(i%n1==0 && i%n2==0){
        mn1n2+=i+",";
    }
    else{
        nm+=i+",";
    }
}
mn1=mn1.slice(0,-1)
mn2=mn2.slice(0,-1)
mn1n2=mn1n2.slice(0,-1)
nm=nm.slice(0,-1)

console.log("miltip premye nonb lan ki pa miltip dezyem nan : "+mn1+" -> total nonb : "+(mn1.split(",")).length);
console.log("miltip dezyem nonb lan ki pa miltip premye nan : "+mn2+" -> total nonb : "+(mn2.split(",")).length);   
console.log("miltip 2 nonb yo : "+mn1n2+" -> total nonb : "+(mn1n2.split(",")).length);
console.log("ki pa miltip ni premye ni dezyem nonb lan : "+nm+" -> total nonb : "+(nm.split(",")).length);

