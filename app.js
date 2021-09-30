let cuota = 20000;
let meses = 12 * 1;
let total = 0;
let tna = 37/100;
let tasaMensual = tna/12; 

for(let i = 1; i <= meses; i++){
    total = (total + cuota) * (1 + tasaMensual)
    console.log(i);
}

console.log(total);
