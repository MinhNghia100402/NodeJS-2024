setTimeout(() => {
    console.log('timeout');
}, 0);

setInterval(() => {
    console.log('interval');
}, 1000); 

setImmediate(() =>{
    console.log('inmedidate');
}); /// thực thi ngay sau khi event hiện tại kết thúc giống như setimeout = 0

process.nextTick(() => {
    console.log('nextTick'); // thực hiện ngay sau khi vòng event hiện tại kết thúc
});