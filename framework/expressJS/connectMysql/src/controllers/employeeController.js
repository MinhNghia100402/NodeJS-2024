var conn = require('./../index').conn;
const employees = require('./../models/employeesModels');
const employeesModels = new employees(conn);


const allEmployees = function (req, res) {
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
const allDepartments = function(req, res) {
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
module.exports = {
    allDepartments,
    allEmployees,
    createEmployee,
}