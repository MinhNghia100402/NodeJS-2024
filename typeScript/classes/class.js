var Employess = /** @class */ (function () {
    // su dung contructor de khoi tao doi tuong 
    function Employess(id, name, age, address, department_id, gender) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.address = address;
        this.department_id = department_id;
        this.gender = gender;
    }
    // them phuong thuc cho class 
    Employess.prototype.getGender = function (gender) {
        if (gender) {
            return 'gender : male \n id : ' + this.id + '\n name : ' + this.name;
        }
        else {
            return 'gender : female\n id : ' + this.id + '\n name : ' + this.name;
        }
    };
    return Employess;
}());
var ps1 = new Employess('1', 'person1', 20, 'address1', 'dp1', true);
var ps2 = new Employess('2', 'person2', 20, 'address2', 'dp2', false);
console.log(ps1.getGender(ps1.gender));
console.log(ps2.getGender(ps2.gender));
