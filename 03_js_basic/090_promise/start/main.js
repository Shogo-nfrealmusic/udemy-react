let a = 0;
// console.log(a);


new Promise((resolve, reject) => {
    setTimeout(() => {
        a = 2;
        reject()
    }, 2000);
}).then(() => {
    console.log(a);
}).catch(() => {
    console.log('catchが実行')
});


