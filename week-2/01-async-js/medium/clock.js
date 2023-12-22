setInterval(() => {
    const now = new Date();

    // 24-hour format
    const time24 = now.toISOString().substr(11, 8);
    console.log('24-hour format:', time24);

    // 12-hour format
    const hours12 = now.getHours() % 12 || 12;
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const time12 = `${hours12}:${minutes}:${seconds} ${ampm}`;
    console.log('12-hour format:', time12);

    console.log('---');
}, 1000);