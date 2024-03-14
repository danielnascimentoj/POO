let celular1 = {
  marca: "Apple",
  modelo: "iPhone 13",
  armazenamento: "128GB",
  ram: "6GB",
  processador: "Apple A15 Bionic",
  tipoTela: "OLED",
  cor: "Azul",
  bateria: "4352 mAh",
  preco: "$799",
};
let celular2 = {
  marca: "Samsung",
  modelo: "Galaxy S21",
  armazenamento: "256GB",
  ram: "8GB",
  processador: "Exynos 2100",
  tipoTela: "AMOLED",
  cor: "Preto",
  bateria: "4000 mAh",
  preco: "$799",
};
let celular3 = {
  marca: "Google",
  modelo: "Pixel 6",
  armazenamento: "128GB",
  ram: "8GB",
  processador: "Google Tensor",
  tipoTela: "AMOLED",
  cor: "Branco",
  bateria: "4614 mAh",
  preco: "$599",
};
let celular4 = {
  marca: "OnePlus",
  modelo: "9 Pro",
  armazenamento: "256GB",
  ram: "12GB",
  processador: "Snapdragon 888",
  tipoTela: "AMOLED",
  cor: "Verde",
  bateria: "4500 mAh",
  preco: $969
};
let celular5 = {
  marca: "Xiaomi",
  modelo: "Mi 11",
  armazenamento: "128GB",
  ram: "8GB",
  processador: "Snapdragon",
  tipoTela: "AMOLED",
  cor: "Rosa",
  bateria: "5000 mAh",
  preco: 1800
};
let celular6 = {
  marca: "Huawei",
  modelo: "P40 Pro",
  armazenamento: "256GB",
  ram: "8GB",
  processador: "Kirin 990",
  tipoTela: "OLED",
  cor: "Prata",
  bateria: "4200 mAh",
  preco: "$899",
};
let celular7 = {
  marca: "Sony",
  modelo: "Xperia 1 III",
  armazenamento: "256GB",
  ram: "12GB",
  processador: "Snapdragon 888",
  tipoTela: "OLED",
  cor: "Roxo",
  bateria: "4500 mAh",
  preco: "$1299",
};



//Sem FOR___________________________________________________________

console.log(`${celular1.marca} ${celular1.modelo} ${celular1.armazenamento}GB ${celular1.ram} ${celular1.cor} ${celular1.preco}`);
console.log(`${celular2.marca} ${celular2.modelo} ${celular2.armazenamento}GB ${celular2.ram} ${celular2.cor} ${celular2.preco}`);
console.log(`${celular3.marca} ${celular3.modelo} ${celular3.armazenamento}GB ${celular3.ram} ${celular3.cor} ${celular3.preco}`);
console.log(`${celular4.marca} ${celular4.modelo} ${celular4.armazenamento}GB ${celular4.ram} ${celular4.cor} ${celular4.preco}`);
console.log(`${celular5.marca} ${celular5.modelo} ${celular5.armazenamento}GB ${celular5.ram} ${celular5.cor} ${celular5.preco}`);
console.log(`${celular6.marca} ${celular6.modelo} ${celular6.armazenamento}GB ${celular6.ram} ${celular6.cor} ${celular6.preco}`);
console.log(`${celular7.marca} ${celular7.modelo} ${celular7.armazenamento}GB ${celular7.ram} ${celular7.cor} ${celular7.preco}`);


let listaDeCelulares = [];
listaDeCelulares.push(celular1);
listaDeCelulares.push(celular2);
listaDeCelulares.push(celular3);
listaDeCelulares.push(celular4);
listaDeCelulares.push(celular5);
listaDeCelulares.push(celular6);
listaDeCelulares.push(celular7);

console.log("Celulares com FOR_________________________________________________________________________________");

for (let i = 0; i < listaDeCelulares.length; i++) {
    console.log(`${listaDeCelulares[i].marca} ${listaDeCelulares[i].modelo} ${listaDeCelulares[i].armazenamento}GB ${listaDeCelulares[i].ram} ${listaDeCelulares[i].cor} ${listaDeCelulares[i].preco}`);
}

