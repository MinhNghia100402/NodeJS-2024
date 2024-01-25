class Employess{
    // define properties for  this class
    id : string;
    name : string;
    age : number;
    address : string;
    department_id : string;
    gender : boolean;


    // su dung contructor de khoi tao doi tuong 
    constructor(id : string, name : string, age : number, address : string, department_id : string, gender : boolean)
    {
        this.id = id;
        this.name = name;
        this.age = age;
        this.address = address;
        this.department_id = department_id;
        this.gender = gender;
    }

    // them phuong thuc cho class 
    getGender(gender:boolean)
    {
        if(gender)
        {
            return 'gender : male \n id : ' + this.id + '\n name : ' + this.name;
        }else{
            return 'gender : female\n id : ' + this.id + '\n name : ' + this.name;
        }
    }


}


