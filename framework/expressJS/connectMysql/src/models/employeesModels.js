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
            const{employee_id, first_name,last_name,email, department_id} = updatedData;
            const sql = `UPDATE Employees SET 
                    first_name = ?,
                    last_name = ?,
                    email = ?,
                    department_id = ?
                WHERE employee_id = ?`;

            const values = [first_name, last_name, email,department_id,employee_id];
            this.connection.query(sql, values, (err, result) => {
                callback(err, result);        
        });
    }

    deleteEmployee(data, callback) {
            const{employee_id,first_name} = data;
            const sql = 'DELETE from Employees WHERE employee_id=?';
            this.connection.query(sql, [employee_id], (err, result) => {
                callback(err, result);
            });
    }
    getOneEmployee(data, callback) {
        const{employee_id} = data;
        const sql = 'SELECT * FROM Employees WHERE employee_id=?';
        this.connection.query(sql, [employee_id], (err, result) => {
            callback(err, result);
        });
    };
}
module.exports = EmployeesModels;