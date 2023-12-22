let n = 0;
function counter(){
    setInterval(() => {
        console.log(n++);
    },2000)
}
counter();