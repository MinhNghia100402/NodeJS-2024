// xử lí ngoại lệ : đưa ra lỗi khi code xảy ra nhưng không làm ảnh hưởng đến chương trình

const fs = require('node:fs');
// nếu không có file txt thì đưa ra thông báo lỗi 
fs.readFile('./data.txt', function(err, data){
    if(err) throw err;
    console.log(data);
});

// xử lí ngoại lệ theo domains 

const domain = require('domain');
const d = domain.create();
// const fs  = require('node:fs');

d.on('error', function(err) {
    console.error(err);
} );

d.run(function() // cho phép xử lí ngoại lệ ở nơi có thể xảy ra lỗi 
{
    fs.readFile('./data.txt',function(err, data){
        if (err) throw err;
        console.log(data);
    });
});


// process có quyền kiểm soát và quản lí quá trình thực thi tương tác với 
// môi trường và xử lí sự kiện lên quan.

// process.exit(0); kết thúc quá trình hiện tại với code được chỉ định (0)
// process.kill(pid[,signal]) gửi 1 tín hiện đến quá trình có id quá trình pid
// process.cwd() trả về đường dẫn thư mục làm việc 
// process.on baoa gồm exit, uncaught exception

// process.nextTick : đánh dấu vòng lặp tiếp theo 