// ibu kota negara
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("masukan sebuah kalimat: ", (inputString) => {
    // contoh properti length
    console.log(`Panjang kalimat: ${inputString.length}`);
    rl.close();
});

//15