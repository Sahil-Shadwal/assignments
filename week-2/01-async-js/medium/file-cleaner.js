const fs = require('fs');
const filePath = "./read.txt"// Read the file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    // Remove extra spaces
    const cleanedData = data.replace(/\s+/g, ' ');
    console.log(cleanedData)

    // Write the cleaned data back to the file
    fs.writeFile(filePath, cleanedData, 'utf8', (err) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log('File cleaned successfully!');
    });
});
