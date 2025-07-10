let ismlar=["Asal","Muhamadqoir","Nodir","Nurmuhamad","Ali","Suhrob"]
let nBor=[];
let nYoq=[];
for (const ism of ismlar){
    if(ism.toLowerCase().includes("n")){
        nBor.push(ism);
    } else{
        nYoq.push(ism); 
    }
}
console.log("n harifi bor ismlar", nBor);
console.log("n harifi yoq ismlar", nYoq);