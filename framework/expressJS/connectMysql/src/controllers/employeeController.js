var conn = require('./../index').conn;
const e = require('express');
const employees = require('./../models/employeesModels');
const employeesModels = new employees(conn);


const gettAllEmployees = function (req, res) {
    var sql = 'SELECT * FROM Employees;';
    conn.query(sql, function (err, data, fields) {
        if (err) {
            // Xử lý lỗi nếu có
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            // Trả về dữ liệu dạng JSON
            res.json({ posts: data });
        }
    }); 
}
const getAllDepartments = function(req, res) {
    var sql = 'SELECT * FROM Departments';
    conn.query(sql, function(err,data, fields) {
        if (err) throw err;
        res.json({data:data});
    });
};


const createEmployee = (req,res) => {
    const employeesData  = req.body;
    console.log('data : ',employeesData);
    if (!employeesData.first_name || !employeesData.last_name || !employeesData.email || !employeesData.department_id ) // kiem tra xem data co cac thuoc tinh nay hay khong
    {
        return res.status(404).json({ error:'first_name, last_name, email, department_id are required' });

    }else{
        
        employeesModels.createEmployee(employeesData,(err, data) => {
            if (err) 
            {
                res.status(500).json({ error:'Interner Server Error' });
            }else{
                res.status(200).json({ message: 'Create successful' });
            }
        });
    }
}


const updateEmployee = (req, res) => {
    const data = req.body;
    if (!data.employee_id || !data.first_name || !data.last_name || !data.email || !data.department_id)
    {
        return res.status(404).json({error:' Not found '})

    }else{
        employeesModels.updateEmployee(data,(err,data)=>{
            if (err){
                res.status(500).json({error:'Email already exist'});
            }else{
                res.status(200).json({success:'Updated Successfully'});
            }
        })
    }
}

const deleteEmployee = (req,res) => {
    const data = req.body;
    console.log(data);
    if (!data.employee_id || !data.first_name)
    {
        return res.status(404).json({message:"Not found id"});
    }else{
        employeesModels.deleteEmployee(data,(err, data) =>{
            if(err) 
            {
                return res.status(500).json({message: "Not Found id in database"});
            }else{
                res.status(200).json({message:"Delete successful"});
            }
        })
    }

}

const getOneEmployee = (req, res) => {
    const data = req.body;
    if(!data.employee_id)
    {
        return res.status(500).json({message:'Not Found ID'});
    }else{
        employeesModels.getOneEmployee(data,(err, result) => {
            if(err) 
            {
                return res.json({server:'Not Found ID'});
            }else{
                // console.log(typeof(result));
                // return res.json({message:result[0]});
                if(result && result.length > 0)
                {
                    return res.json({message:result[0]});
                }else{
                    return res.json({message:'ID is not available'});
                }
            }
        });
    }
}
module.exports = {
    getAllDepartments,
    gettAllEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee,
    getOneEmployee,
}