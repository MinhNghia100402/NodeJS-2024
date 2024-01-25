// define abstract class

abstract class person{
    name: string;
    age: number;
    address:string;
    gender:boolean;
    constructor(name:string, age:number,address:string,gender:boolean)
    {
        this.name = name;
        this.age = age;
        this.address = address;
        this.gender = gender;
        
    }
}

class employee extends person{ 
    id : string;
    department_id : string;
    group : string;
    //contructor
    constructor(name:string,age:number, address:string, gender:boolean,id : string, department_id : string, group : string)
    {
        super(name,age,address,gender);
        this.id = id;
        this.department_id = department_id;
        this.group = group;
    }
};


class workers extends person {
    work : string;
    add_work : string;

    constructor(name: string, age: number, gender:boolean, address: string, work: string, add_work: string)
    {
        super(name, age, address, gender);
        this.work = work;
        this.add_work = add_work;
    }
}