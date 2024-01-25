const mysql = require('mysql');

class EmployeesModels {
    constructor(connection)
    {
        this.connection = connection;
    }

    createEmployee(employeeData, callback) {
        const { first_name, last_name, email, department_id } = employeeData; // import data from employeeData
        const sql = 'INSERT INTO Employees (first_name, last_name, email, department_id) VALUES (?, ?, ?, ?)'; // insert into employeeData in database
        this.connection.query(sql, [first_name, last_name, email, department_id], (err, result) => {
          callback(err, result); // goi lai ham callback 
        });
    };

    updateEmployee(updatedData, callback) {
        const sql = `UPDATE Employees SET ${Object.keys(updatedData).map(key => `${key}=?`).join(', ')} WHERE employee_id=?`;
        const values = [...Object.values(updatedData), employeeId];

        this.connection.query(sql, values, (err, result) => {
            callback(err, result);
        });
    };
}
module.exports = EmployeesModels;