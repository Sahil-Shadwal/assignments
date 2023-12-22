const fs = require('fs');
let mankebaat = "Would you be down for some fun haha , like the thread on your ...."
fs.writeFile('./ssd.txt', mankebaat, (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

// Expensive operation
for(let i = 0; i<10;i++){
    setInterval(() => {
        console.log("Come on let's have some bloody fun");
    }, 1000);
}