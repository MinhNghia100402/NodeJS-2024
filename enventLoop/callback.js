function final(someInput, callback) {
    callback(`${someInput} and terminated by executing callback `);
  }
  function middleware(someInput, callback) {
    return final(`${someInput} touched by middleware `, callback);
  }
  function initiate() {
    const someInput = 'hello this is a function ';
    middleware(someInput, function (result) {
      console.log(result);
      // requires callback to `return` result
    });
  }
  initiate();




  // Hàm chứa callback
function fetchData(callback) {
    // Giả lập một hoạt động bất đồng bộ (ví dụ: setTimeout)
    setTimeout(function() {
      const data = 'Dữ liệu từ server';
      // Gọi lại callback và truyền dữ liệu vào nó
      callback(data);
    }, 2000);
  }
  
  // Hàm callback
  function processData(data) {
    console.log('Dữ liệu đã được xử lý:', data);
  }
  
  // Gọi hàm fetchData và truyền hàm processData làm callback
  fetchData(processData);
  