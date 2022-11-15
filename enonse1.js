let port =prompt("Antre adres ip a")
port = port.split(".");
port = port.join("")
sum=0;
for (el of port){
 sum+=parseInt(el);
}
let ip = sum*parseInt(port[0]);
console.log(port);
console.log("Pot ki ouvri a se "+ip);