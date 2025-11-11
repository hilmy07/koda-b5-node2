// 24-04-2015 to 24/04/2015
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

function formatDate(dateString) {
    return dateString.replace(/-/g, '/');
}

rl.question('Masukkan tanggal (DD-MM-YYYY): ', (inputDate) => {
    const outputDate = formatDate(inputDate);
    console.log(`Tanggal yang dikonversi: ${outputDate}`);
    rl.close();
});

