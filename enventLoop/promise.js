// promise đại diện cho một giá trị ở thời điểm hiện tại có thể chưa tồn tại
// nhưng sẽ được xử lí và có giá trị vào một thời gia nào đó trong tương lai
// Promise API

const { log } = require("console");

// create promise  
// if (window.Promise) // check browser support promise
// {
//     console.log('promise is available');
//     var promise = new Promise(function(resolve, reject) {
//         var request = new XMLHttpRequest();

// });
// }



// promises có 3 trạng thái : pending , rejected, fulfilled
// -------------pending : đang xử lí bất đồng bộ, nếu xong thì chuyển sang reslove hoặc rejected
// -------------fulfilled : xử lí bất đồng bộ thành công thì chuyển sang reslove 
// ------------- rejected : có lỗi trong quá trình bất đồng bộ thì promises chuyển sang trạng thái rejected 
// promise.all : xử lí tất cả các promise nếu tất cả promise ở trang thái reslove thì trả về kết quả không thì trả về error
// promise.race : nếu promises đầu tiên thành công thì sẽ trả về kết quả 
// promise.allSelected : selected tất cả promise 


const p1 = Promise.resolve(100);
const p2 = Promise.resolve(true);
const p3 = Promise.reject('errror');
const p4 = new Promise(function(resolve, reject) {
    resolve('200');
});

async function test ()
{
    await Promise.all([p1, p2, p3, p4])
        .then(data => {
            console.log('p1, p2, p3, p4', data);
        })
        .catch(err => {
            console.log('p1, p2, p3, p4', err);
        });
    
    await Promise.all([p1,p2,p4])
        .then(data => {
            console.log('p1, p2, p3', data);
        })
        .catch(err => {
            console.log('p1, p2 p4',err)
        });
}
test();


// async function :    // từ khóa Async  đặt trước 1 hàm làm cho hàm trả về promise 
// await kiểm soát quá trình xử lí sự kiện, khi sự kiện được xử lí xong thì mới cho phép xử lí sự kiện khác 

// từ khóa await đặt trước 1 hàm làm cho hàm chờ  promise 
// let value = await promises;
// await chỉ có thể sử dụng bên trong một hàm không đồng bộ 

async function demo()
{
    await setTimeout(() => {
        console.log('line1');
    }, 2000);
    await setTimeout(() => {
        console.log('line2');
},1000);
}

demo();


async function fc ()
{
    let promise  = new Promise((resolve, reject) =>{        // khởi tạo 1 promise 
        setTimeout(() => {
            resolve('done !');
        }, 2000);
    })

    // sử dụng await 
    let result = await promise;
    console.log(result);

}

fc();