// define abstract class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var person = /** @class */ (function () {
    function person(name, age, address, gender) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.gender = gender;
    }
    return person;
}());
var employee = /** @class */ (function (_super) {
    __extends(employee, _super);
    //contructor
    function employee(name, age, address, gender, id, department_id, group) {
        var _this = _super.call(this, name, age, address, gender) || this;
        _this.id = id;
        _this.department_id = department_id;
        _this.group = group;
        return _this;
    }
    return employee;
}(person));
;
var workers = /** @class */ (function (_super) {
    __extends(workers, _super);
    function workers(name, age, gender, address, work, add_work) {
        var _this = _super.call(this, name, age, address, gender) || this;
        _this.work = work;
        _this.add_work = add_work;
        return _this;
    }
    return workers;
}(person));



const ps1 = new person('person 1 ',20,'adders1',true);
const employee1 = new employee('employee 1 ',20, 'address 2', false, 'id 1', 'dp1', 'group 1');
const worker1 = new workers('worker 1 ',22, 'address 3',true, 'doctor', 'hopitals 1 ');


console.log(ps1.name ,'\n',employee1.name ,'\n',worker1.name );