const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("masukan sebuah kalimat: ", (kalimat) => {
    rl.question("masukan indeks awal: ", (startIndex) => {
        rl.question("masukan panjang substring: ", (length) => {
            //konversi nilai indeks dan panjnag ke tipe number
            startIndex = Number(startIndex);
            length = Number(length);
            // gunakan method substring untuk mengambil substring dari startIndex hingga endIndex
            const substringResult = kalimat.substr(startIndex, length);
            console.log(`hasil sunstring dari indeks ${startIndex} dengan panjang ${length}: ${substringResult}
            `);
            rl.close()
        });
    });
});

//love