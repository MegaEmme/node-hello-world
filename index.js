// console.log("Hello Boolean");

// console.log(process.argv);

let newPhrase = "";


for (let i = 2; i< process.argv.length; i++){
    newPhrase += process.argv[i] + " "
}

if (!newPhrase) {
    console.log("Hello Boolean");
} else {
    console.log(newPhrase);
}
