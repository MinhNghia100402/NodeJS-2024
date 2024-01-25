const { get } = require("express/lib/response");

// khai bao function basic 
function nbs(x, y) {
    return x + y;
}
var x = 10;
var y = 5;
console.log("ket qua : ", x, " + ", y, " = ", nbs(x, y));
var fc1 = function (x, y, name) {
    console.log(x, '-----', y);
    var a = nbs(x, y);
    console.log("name : ", name, '----- age : ', a);
};
fc1(10, 15, 'John');
function check(x, y, name) {
    if (y) {
        console.log('check ', y, 'year : ', x, 'name : ', name);
    }
    else {
        console.log('check : ', y);
    }
}
check(10, true, 'nghialee');
check(10, false, 'fasle');
var getAll = function (x, types) {
    if (types) {
        console.log('check -------- 2: ', types);
    }
    else {
        console.log('check --------- 2 : ', types);
    }
};


getAll('12',true)