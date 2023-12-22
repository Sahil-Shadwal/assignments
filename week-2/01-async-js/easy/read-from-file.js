const fs = require('fs');
fs.readFile('./ssd.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

// Expensive operation
for(let i = 0; i<1000000;i++){
    setInterval(() => {
        console.log(i);
    }, 1000);
}
