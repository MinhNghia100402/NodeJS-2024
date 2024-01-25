

// khai bao function basic 
function nbs(x:number, y:number):number{
    return x+y;
}
let x:number = 10;
let y: number = 5;
console.log("ket qua : ",x," + ",y," = ",nbs(x,y));


const fc1 = (x:number,y:number,name:string) => {
    console.log(x,'-----',y);
    var a:number = nbs(x,y);
    console.log("name : ",name,'----- age : ',a);
};
fc1(10,15,'John');


 function check(x:number,y:boolean,name:string) {
    if (y)
    {

         console.log('check ', y, 'year : ', x, 'name : ', name);
    }else{
     console.log('check : ',y);
        
    }
}

check(10,true,'nghialee');
check(10,false,'fasle');




var getAll = function (x:number, types:boolean) : void {
    if(types)
    {
        console.log('check : ',types);
        
    }else{
        console.log('check : ',types);
        
    }
}