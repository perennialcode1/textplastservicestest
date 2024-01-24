const express = require('express');
const mysql = require('mysql2');
const DbUtility = require('./dbUtility');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;


// // Enable CORS for all routes
app.use(cors());

// // Create an instance of DbUtility
const dbUtility = new DbUtility();

// const dbConfig = {
//   host: 'mysql5045.site4now.net',
//   user: 'a50d85_tpl202x',
//   password: 't3xpl@5t',
//   database: 'db_a50d85_tpl202x',
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0
// };

// app.get('/departments/:superid', (req, res) => {
//   console.log('departments')
//   const super_id = req.params.superid;
//   const sqlQuery = `SELECT * FROM department where superid = ${super_id}`;

//   const connection = mysql.createConnection(dbConfig);

//   connection.connect((connectErr) => {
//     if (connectErr) {
//       console.error('Error connecting to MySQL database:', connectErr);
//       res.status(500).json({
//         ResultData: null,
//         Message: 'Internal Server Error',
//         Status: false
//       });
//       return;
//     }

//     connection.query(sqlQuery, (queryErr, results) => {
//       connection.end(); // Close the connection after the query

//       if (queryErr) {
//         console.error('Error executing MySQL query:', queryErr);
//         res.status(500).json({
//           ResultData: null,
//           Message: 'Internal Server Error',
//           Status: false
//         });
//       } else {
//         // Send the results as the response
//         res.json({
//           ResultData: results,
//           Message: null,
//           Status: true
//         });
//       }
//     });
//   });
// });

// app.get('/branches/:superid', (req, res) => {
//   console.log('branches')

//   const super_id = req.params.superid;
//   const sqlQuery = `SELECT * FROM branches where superid = ${super_id}`;

//   const connection = mysql.createConnection(dbConfig);

//   connection.connect((connectErr) => {
//     if (connectErr) {
//       console.error('Error connecting to MySQL database:', connectErr);
//       res.status(500).json({
//         ResultData: null,
//         Message: 'Internal Server Error',
//         Status: false
//       });
//       return;
//     }

//     connection.query(sqlQuery, (queryErr, results) => {
//       connection.end(); // Close the connection after the query

//       if (queryErr) {
//         console.error('Error executing MySQL query:', queryErr);
//         res.status(500).json({
//           ResultData: null,
//           Message: 'Internal Server Error',
//           Status: false
//         });
//       } else {
//         // Send the results as the response
//         res.json({
//           ResultData: results,
//           Message: null,
//           Status: true
//         });
//       }
//     });
//   });
// });


// Defining a route to get departments
app.get('/departments/:superid', (req, res) => {
  const super_id = req.params.superid;
  const sqlQuery = `SELECT * FROM department where superid = ${super_id}`;
  dbUtility.query(sqlQuery, (error, results, fields) => {
    console.log('results........')
    if (error) {
      console.error(error);
      res.status(500).json(
        res.json({
          ResultData: 'Internal Server Error',
          Message: null,
          Status: false
        })
      );
    } else {
      // Send the results as the response
      res.json({
        ResultData: results,
        Message: null,
        Status: true
      });
    }
  });
});

// Defining a route to get branches
app.get('/branches/:superid', (req, res) => {
  const super_id = req.params.superid;
  const sqlQuery = `SELECT * FROM branches WHERE superid = ${super_id}`;
  dbUtility.query(sqlQuery, (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).json(
        res.json({
          ResultData: null,
          Message: 'Internal Server Error',
          Status: false
        })
      );
    } else {
      // Send the results as the response
      res.json({
        ResultData: results,
        Message: null,
        Status: true
      });
    }
  });
});

app.get('/payperiod/:superid', (req, res) => {
  console.log('payperiod')
  // Perform a database query
  const super_id = req.params.superid;
  const sqlQuery = `SELECT * FROM payperiod where superid = ${super_id}`;
  dbUtility.query(sqlQuery, (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).json(
        res.json({
        ResultData: null,
        Message: 'Internal Server Error',
        Status: false
      }));
    } else {
      // Send the results as the response
      res.json({
        ResultData: results,
        Message: null,
        Status: true
      });
    }
  });
});

app.get('/weeklypayperiod/:superid', (req, res) => {
  const super_id = req.params.superid;
  const sqlQuery = `SELECT * FROM weeklypayperiod where superid = ${super_id}`;
  dbUtility.query(sqlQuery, (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).json(
        res.json({
        ResultData: null,
        Message: 'Internal Server Error',
        Status: false
      }));
    } else {
      // Send the results as the response
      res.json({
        ResultData: results,
        Message: null,
        Status: true
      });
    }
  });
});

app.get('/registartions/:superid', (req, res) => {
  const super_id = req.params.superid;
  const sqlQuery = `SELECT * FROM registration where superid = ${super_id}`;
  dbUtility.query(sqlQuery, (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).json(
        res.json({
          ResultData: null,
          Message: 'Internal Server Error',
          Status: false
        })
      );
    } else {
      // Send the results as the response
      res.json({
        ResultData: results,
        Message: null,
        Status: true
      });
    }
  });
});

app.get('/financialyear/:superid', (req, res) => {
  // Perform a database query
  const super_id = req.params.superid;
  const sqlQuery = `SELECT * FROM financialyear where superid = ${super_id}`;
  dbUtility.query(sqlQuery, (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).json(
        res.json({
          ResultData: null,
          Message: 'Internal Server Error',
          Status: false
        })
      );
    } else {
      // Send the results as the response
      res.json({
        ResultData: results,
        Message: null,
        Status: true
      });
    }
  });
});

app.get('/salaryheads/:superid', (req, res) => {
  // Perform a database query
  const super_id = req.params.superid;
  const sqlQuery = `SELECT * FROM orgsalaryheads where superid = ${super_id}`;
  dbUtility.query(sqlQuery, (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).json(
        res.json({
          ResultData: null,
          Message: 'Internal Server Error',
          Status: false
        })
      );
    } else {
      // Send the results as the response
      res.json({
        ResultData: results,
        Message: null,
        Status: true
      });
    }
  });
});

app.get('/getdataby/:reportid/:superid/:regid/:payperiod/:wpayperiod/:financialyear/:salaryheads/:branch/:dept/:groupby/:emptype', (req, res) => {
  // const super_id = req.params.superid;
  const query_id = req.params.reportid;
  const reg_Id = req.params.regid;
  const payperiod_id = req.params.payperiod;
  const wpayperiod_id = req.params.wpayperiod;
  const financialyear_id = req.params.financialyear;
  const salaryheads_id = req.params.salaryheads;
  const branch_id = req.params.branch;
  const dept_id = req.params.dept;
  const groupby_id = req.params.groupby;
  const emptype_id = req.params.emptype;

  // Perform a database query to get the query from appreports table
  console.log(query_id, salaryheads_id, 'query_idididi');

  var getQuery = `SELECT selectquery FROM appreports WHERE id = ${query_id}`;

  // weekly deductions
  if (query_id == 1503){
    if ((query_id == 1503) && (salaryheads_id != 38) && (salaryheads_id != 39) && (salaryheads_id != 40) && (salaryheads_id != 2) || (salaryheads_id == 'null')) {
      console.log('1')
      getQuery = `SELECT selectquery FROM appreports WHERE id = 1527`;
    }
    else if ((query_id == 1503) && (salaryheads_id == 39) ){
      console.log('2')
      getQuery = `SELECT selectquery FROM appreports WHERE id = 1523`
    }
    else if ((query_id == 1503) && (salaryheads_id == 38) ){
      console.log('3')
      getQuery = `SELECT selectquery FROM appreports WHERE id = 1524`
    }
    else if ((query_id == 1503) && (salaryheads_id == 40) ){
      console.log('4')
      getQuery = `SELECT selectquery FROM appreports WHERE id = 1525`
    }
    else if ((query_id == 1503) && (salaryheads_id == 2) ){
      console.log('5')
      getQuery = `SELECT selectquery FROM appreports WHERE id = 1526`
    }
  }

  // weekly-consolidates
  else if (query_id == 1509){
    if ((query_id == 1509) && (salaryheads_id != 38) && (salaryheads_id != 39) && (salaryheads_id != 40) && (salaryheads_id != 2) || (salaryheads_id == 'null')) {
      console.log('else if checkng')
      getQuery = `SELECT selectquery FROM appreports WHERE id = 1532`;
    }
    else if ((query_id == 1503) && (salaryheads_id == 39) ){
      console.log('else if checkng1')
      getQuery = `SELECT selectquery FROM appreports WHERE id = 1528`
    }
    else if ((query_id == 1503) && (salaryheads_id == 38) ){
      console.log('else if checkng2')
      getQuery = `SELECT selectquery FROM appreports WHERE id = 1529`
    }
    else if ((query_id == 1503) && (salaryheads_id == 40) ){
      console.log('else if checkng3')
      getQuery = `SELECT selectquery FROM appreports WHERE id = 1530`
    }
    else if ((query_id == 1503) && (salaryheads_id == 2) ){
      console.log('else if checkng4')
      getQuery = `SELECT selectquery FROM appreports WHERE id = 1531`
    }
  }

  else if (query_id == 1522){
    if (emptype_id != 'null') {
      getQuery = `SELECT selectquery FROM appreports WHERE id = 1522`;
    }
    else{
      getQuery = `SELECT selectquery FROM appreports WHERE id = 1533`;
    }
  }

  dbUtility.query(getQuery, (getError, queryResults, queryFields) => {
    if (getError) {
      console.error(getError);
      res.status(500).json(
        res.json({
        ResultData: null,
        Message: 'Internal Server Error',
        Status: false
      }));
    } else {
      var sqlQuery = queryResults[0].selectquery;
      console.log(sqlQuery, 'sqlsqlsqlsqlsql')

      if (query_id == 1520){
          if (reg_Id != 'null') {
            sqlQuery += ` WHERE regid = ${reg_Id}`;
          } else {
            sqlQuery += ` WHERE regid >= 0`;
          }

          if (dept_id != 'null') {
            sqlQuery += ` AND deptid = ${dept_id}`;
          } else {
            sqlQuery += ` AND deptid >= 0`;
          }

          if (branch_id != 'null') {
            sqlQuery += ` AND branchid = ${branch_id}`;
          } else {
            sqlQuery += ` AND branchid >= 0`;
          }

          if (payperiod_id != 'null') {
            sqlQuery += ` AND mnthpayperiod = ${payperiod_id}`;
          } else {
            sqlQuery += ` AND mnthpayperiod >= 0`;
          }

          sqlQuery += ` ;`;
      }

      else if (query_id == 1501){
        if (reg_Id != 'null') {
            sqlQuery += ` WHERE reg.id = ${reg_Id}`;
          } else {
            sqlQuery += ` WHERE reg.id >= 0`;
          }

          if (dept_id != 'null') {
            sqlQuery += ` AND dept.id = ${dept_id}`;
          } else {
            sqlQuery += ` AND dept.id >= 0`;
          }

          if (branch_id != 'null') {
            sqlQuery += ` AND br.id = ${branch_id}`;
          } else {
            sqlQuery += ` AND br.id >= 0`;
          }

          if (payperiod_id != 'null') {
            sqlQuery += ` AND pp.id = ${payperiod_id}`;
          } else {
            sqlQuery += ` AND pp.id >= 0`;
          }

          if (wpayperiod_id != 'null') {
            sqlQuery += ` AND pay.id = ${wpayperiod_id}`;
          } else {
            sqlQuery += ` AND pay.id >= 0`;
          }

          // Limit the results to 2
          sqlQuery += ` ;`;
      }

      else if (query_id == 1502){
        if (reg_Id != 'null') {
            sqlQuery += ` AND reg.id = ${reg_Id}`;
          } else {
            sqlQuery += ` AND reg.id >= 0`;
          }

          if (dept_id != 'null') {
            sqlQuery += ` AND dept.id = ${dept_id}`;
          } else {
            sqlQuery += ` AND dept.id >= 0`;
          }

          if (branch_id != 'null') {
            sqlQuery += ` AND br.id = ${branch_id}`;
          } else {
            sqlQuery += ` AND br.id >= 0`;
          }

          if (wpayperiod_id != 'null') {
            sqlQuery += ` AND pay.id = ${wpayperiod_id}`;
          } else {
            sqlQuery += ` AND pay.id >= 0`;
          }

          // Limit the results to 2
          sqlQuery += ` GROUP BY osh.Name, osh.IsEarnings`;
      }

      else if (query_id == 1517){
        if (reg_Id != 'null') {
            sqlQuery += ` WHERE reg.id = ${reg_Id}`;
          } else {
            sqlQuery += ` WHERE reg.id >= 0`;
          }

          if (dept_id != 'null') {
            sqlQuery += ` AND dept.id = ${dept_id}`;
          } else {
            sqlQuery += ` AND dept.id >= 0`;
          }

          if (branch_id != 'null') {
            sqlQuery += ` AND br.id = ${branch_id}`;
          } else {
            sqlQuery += ` AND br.id >= 0`;
          }

          if (wpayperiod_id != 'null') {
            sqlQuery += ` AND pp.id = ${wpayperiod_id}`;
          } else {
            sqlQuery += ` AND pp.id >= 0`;
          }

          // Limit the results to 2
          // sqlQuery += ` Limit 12`;
      }

      else if (query_id == 1516){
        if (reg_Id != 'null') {
            sqlQuery += ` WHERE reg.id = ${reg_Id}`;
          } else {
            sqlQuery += ` WHERE reg.id >= 0`;
          }

          if (dept_id != 'null') {
            sqlQuery += ` AND dept.id = ${dept_id}`;
          } else {
            sqlQuery += ` AND dept.id >= 0`;
          }

          if (branch_id != 'null') {
            sqlQuery += ` AND br.id = ${branch_id}`;
          } else {
            sqlQuery += ` AND br.id >= 0`;
          }

          if (wpayperiod_id != 'null') {
            sqlQuery += ` AND pp.id = ${wpayperiod_id}`;
          } else {
            sqlQuery += ` AND pp.id >= 0`;
          }

          if (groupby_id == '1') {
            sqlQuery += ` `;
          } else if (groupby_id == '2') {
            sqlQuery += ` group by dept.name`;
          }

          // Limit the results to 2
          // sqlQuery += ` Limit 12`;
      }

      else if (query_id == 1506){
        if (reg_Id != 'null') {
            sqlQuery += ` WHERE reg.id = ${reg_Id}`;
          } else {
            sqlQuery += ` WHERE reg.id >= 0`;
          }

          if (dept_id != 'null') {
            sqlQuery += ` AND dept.id = ${dept_id}`;
          } else {
            sqlQuery += ` AND dept.id >= 0`;
          }

          if (branch_id != 'null') {
            sqlQuery += ` AND br.id = ${branch_id}`;
          } else {
            sqlQuery += ` AND br.id >= 0`;
          }

          if (wpayperiod_id != 'null') {
            sqlQuery += ` AND pay.id = ${wpayperiod_id}`;
          } else {
            sqlQuery += ` AND pay.id >= 0`;
          }

          // Limit the results to 2
          // sqlQuery += ` Limit 12`;
      }

      else if (query_id == 509){
        if (reg_Id != 'null') {
            sqlQuery += ` WHERE reg.id = ${reg_Id}`;
          } else {
            sqlQuery += ` WHERE reg.id >= 0`;
          }

          if (dept_id != 'null') {
            sqlQuery += ` AND dept.id = ${dept_id}`;
          } else {
            sqlQuery += ` AND dept.id >= 0`;
          }

          if (branch_id != 'null') {
            sqlQuery += ` AND br.id = ${branch_id}`;
          } else {
            sqlQuery += ` AND br.id >= 0`;
          }

          if (payperiod_id != 'null') {
            sqlQuery += ` AND pay.id = ${payperiod_id}`;
          } else {
            sqlQuery += ` AND pay.id >= 0`;
          }

          // Limit the results to 2
          sqlQuery += ` ;`;
      }

      else if (query_id == 1512){
        if (reg_Id != 'null') {
            sqlQuery += ` WHERE reg.id = ${reg_Id}`;
          } else {
            sqlQuery += ` WHERE reg.id >= 0`;
          }

          if (dept_id != 'null') {
            sqlQuery += ` AND dept.id = ${dept_id}`;
          } else {
            sqlQuery += ` AND dept.id >= 0`;
          }

          if (branch_id != 'null') {
            sqlQuery += ` AND br.id = ${branch_id}`;
          } else {
            sqlQuery += ` AND br.id >= 0`;
          }

          if (wpayperiod_id != 'null') {
            sqlQuery += ` AND pay.id = ${wpayperiod_id}`;
          } else {
            sqlQuery += ` AND pay.id >= 0`;
          }

          // Limit the results to 2
          sqlQuery += ` ;`;
      }

      else if (query_id == 1510){
        if (reg_Id != 'null') {
            sqlQuery += ` WHERE reg.id = ${reg_Id}`;
          } else {
            sqlQuery += ` WHERE reg.id >= 0`;
          }

          if (dept_id != 'null') {
            sqlQuery += ` AND dept.id = ${dept_id}`;
          } else {
            sqlQuery += ` AND dept.id >= 0`;
          }

          if (branch_id != 'null') {
            sqlQuery += ` AND br.id = ${branch_id}`;
          } else {
            sqlQuery += ` AND br.id >= 0`;
          }

          if (payperiod_id != 'null') {
            sqlQuery += ` AND pp.id = ${payperiod_id}`;
          } else {
            sqlQuery += ` AND pp.id >= 0`;
          }

          // Limit the results to 2
          sqlQuery += ` GROUP BY regprf.PAN, func_getusername(regprf.id), RESIDENTIALSTATUS, \`Type Of Employee\`, regprf.Id`;
      }

      else if (query_id == 1521){
        if (reg_Id != 'null') {
            sqlQuery += ` WHERE reg.id = ${reg_Id}`;
          } else {
            sqlQuery += ` WHERE reg.id >= 0`;
          }

          if (dept_id != 'null') {
            sqlQuery += ` AND dept.id = ${dept_id}`;
          } else {
            sqlQuery += ` AND dept.id >= 0`;
          }

          if (branch_id != 'null') {
            sqlQuery += ` AND br.id = ${branch_id}`;
          } else {
            sqlQuery += ` AND br.id >= 0`;
          }

          if (payperiod_id != 'null') {
            sqlQuery += ` AND pp.id = ${payperiod_id}`;
          } else {
            sqlQuery += ` AND pp.id >= 0`;
          }

          // Limit the results to 2
          sqlQuery += ` GROUP BY regprf.VoterId, func_GetUserName(reg.Id), regprf.PAN;`;
      }

      else if (query_id == 1511){
        if (reg_Id != 'null') {
            sqlQuery += ` WHERE reg.id = ${reg_Id}`;
          } else {
            sqlQuery += ` WHERE reg.id >= 0`;
          }

          if (dept_id != 'null') {
            sqlQuery += ` AND dept.id = ${dept_id}`;
          } else {
            sqlQuery += ` AND dept.id >= 0`;
          }

          if (branch_id != 'null') {
            sqlQuery += ` AND br.id = ${branch_id}`;
          } else {
            sqlQuery += ` AND br.id >= 0`;
          }

          if (payperiod_id != 'null') {
            sqlQuery += ` AND pp.id = ${payperiod_id}`;
          } else {
            sqlQuery += ` AND pp.id >= 0`;
          }

          // Limit the results to 2
          sqlQuery += ` GROUP BY \`PAYROLL_NUMBER\`, \`SURNAME\`, \`OTHER_NAMES\`, \`ID_NO\`, \`KRA_PIN\`, \`NSSF_N0\`, \`VOLUNTARY\`;`;
      }

      else if (query_id == 1513){
        if (reg_Id == 'null') {
          if (reg_Id != 'null') {
            sqlQuery += ` WHERE regid = ${reg_Id}`;
          } else {
            sqlQuery += ` WHERE regid >= 0`;
          }

          if (dept_id != 'null') {
            sqlQuery += ` AND deptid = ${dept_id}`;
          } else {
            sqlQuery += ` AND deptid >= 0`;
          }

          if (branch_id != 'null') {
            sqlQuery += ` AND branchid = ${branch_id}`;
          } else {
            sqlQuery += ` AND branchid >= 0`;
          }

          if (financialyear_id != 'null') {
            sqlQuery += ` AND finacialyearid = ${financialyear_id}`;
          } else {
            sqlQuery += ` AND finacialyearid >= 0`;
          }
        }
        else{
          var sqlQuery = `SELECT * FROM P9Data `;;

          if (financialyear_id != 'null') {
            sqlQuery += ` Where fyearid = ${financialyear_id}`;
          } else {
            sqlQuery += ` Where fyearid >= 0`;
          }
          sqlQuery += ` ORDER BY MnthPayPeriod ASC`;
        }

        // Limit the results to 2
      }

      else if (query_id == 1515){
        if (financialyear_id != 'null') {
            sqlQuery += ` WHERE fyearid = ${financialyear_id}`;
          } else {
            sqlQuery += ` WHERE fyearid >= 0`;
          }

          sqlQuery += ` ;`;
      }

      else if (query_id == 1518){
        if (financialyear_id != 'null') {
            sqlQuery += ` WHERE finyearid = ${financialyear_id}`;
          } else {
            sqlQuery += ` WHERE finyearid >= 0`;
          }

          sqlQuery += ` ;`;
      }

      else if (query_id == 1522){
        if (emptype_id != 'null'){
          if (reg_Id != 'null') {
              sqlQuery += ` WHERE regid = ${reg_Id}`;
            } else {
              sqlQuery += ` WHERE regid >= 0`;
            }

            if (dept_id != 'null') {
              sqlQuery += ` AND deptid = ${dept_id}`;
            } else {
              sqlQuery += ` AND deptid >= 0`;
            }

            if (branch_id != 'null') {
              sqlQuery += ` AND branchid = ${branch_id}`;
            } else {
              sqlQuery += ` AND branchid >= 0`;
            }

            if (emptype_id != 'null') {
              sqlQuery += ` AND payperiodid = ${emptype_id}`;
            } else {
              sqlQuery += ` AND payperiodid >= 0`;
            }
          }

          else{
            if (reg_Id != 'null') {
                sqlQuery += ` WHERE regid = ${reg_Id}`;
              } else {
                sqlQuery += ` WHERE regid >= 0`;
              }

              if (dept_id != 'null') {
                sqlQuery += ` AND deptid = ${dept_id}`;
              } else {
                sqlQuery += ` AND deptid >= 0`;
              }

              if (branch_id != 'null') {
                sqlQuery += ` AND branchid = ${branch_id}`;
              } else {
                sqlQuery += ` AND branchid >= 0`;
              }

              if (emptype_id != 'null') {
                sqlQuery += ` AND payperiodid = ${emptype_id}`;
              } else {
                sqlQuery += ` AND payperiodid >= 0`;
              }
          } 

          sqlQuery += ` `;
      }

      else if (query_id == 1503){
        if (salaryheads_id == '39'){
          if (reg_Id != 'null') {
            sqlQuery += ` WHERE regid = ${reg_Id} and superid = ${super_id}`;
          } else {
            sqlQuery += ` WHERE regid >= 0 and superid = ${super_id}`;
          }

          if (salaryheads_id != 'null') {
            sqlQuery += ` AND salaryHeadId = ${salaryheads_id}`;
          } else {
            sqlQuery += ` AND salaryHeadId >= 0`;
          }

          if (dept_id != 'null') {
            sqlQuery += ` AND deptid = ${dept_id}`;
          } else {
            sqlQuery += ` AND deptid >= 0`;
          }

          if (branch_id != 'null') {
            sqlQuery += ` AND branchid = ${branch_id}`;
          } else {
            sqlQuery += ` AND branchid >= 0`;
          }

          if (wpayperiod_id != 'null') {
            sqlQuery += ` AND weekid = ${wpayperiod_id}`;
          } else {
            sqlQuery += ` AND weekid >= 0`;
          }
          sqlQuery += ` ORDER BY UserName`;
        }
        else if (salaryheads_id == 38){
          if (reg_Id != 'null') {
            sqlQuery += ` WHERE regid = ${reg_Id} and superid = ${super_id}`;
          } else {
            sqlQuery += ` WHERE regid >= 0 and superid = ${super_id}`;
          }

          if (salaryheads_id != 'null') {
            sqlQuery += ` AND salaryHeadId = ${salaryheads_id}`;
          } else {
            sqlQuery += ` AND salaryHeadId >= 0`;
          }

          if (dept_id != 'null') {
            sqlQuery += ` AND deptid = ${dept_id}`;
          } else {
            sqlQuery += ` AND deptid >= 0`;
          }

          if (branch_id != 'null') {
            sqlQuery += ` AND branchid = ${branch_id}`;
          } else {
            sqlQuery += ` AND branchid >= 0`;
          }

          if (wpayperiod_id != 'null') {
            sqlQuery += ` AND weekid = ${wpayperiod_id}`;
          } else {
            sqlQuery += ` AND weekid >= 0`;
          }
          sqlQuery += ` ORDER BY Employee`;
        }
        else if (salaryheads_id == 40){
          if (reg_Id != 'null') {
            sqlQuery += ` WHERE regid = ${reg_Id} and superid = ${super_id}`;
          } else {
            sqlQuery += ` WHERE regid >= 0 and superid = ${super_id}`;
          }

          if (salaryheads_id != 'null') {
            sqlQuery += ` AND salaryHeadId = ${salaryheads_id}`;
          } else {
            sqlQuery += ` AND salaryHeadId >= 0`;
          }

          if (dept_id != 'null') {
            sqlQuery += ` AND deptid = ${dept_id}`;
          } else {
            sqlQuery += ` AND deptid >= 0`;
          }

          if (branch_id != 'null') {
            sqlQuery += ` AND branchid = ${branch_id}`;
          } else {
            sqlQuery += ` AND branchid >= 0`;
          }

          if (wpayperiod_id != 'null') {
            sqlQuery += ` AND weekid = ${wpayperiod_id}`;
          } else {
            sqlQuery += ` AND weekid >= 0`;
          }
          sqlQuery += ` ORDER BY Employee`;
        }
        else if (salaryheads_id == 2){
          if (reg_Id != 'null') {
            sqlQuery += ` WHERE regid = ${reg_Id} and superid = ${super_id}`;
          } else {
            sqlQuery += ` WHERE regid >= 0 and superid = ${super_id}`;
          }

          if (salaryheads_id != 'null') {
            sqlQuery += ` AND salaryHeadId = ${salaryheads_id}`;
          } else {
            sqlQuery += ` AND salaryHeadId >= 0`;
          }

          if (dept_id != 'null') {
            sqlQuery += ` AND deptid = ${dept_id}`;
          } else {
            sqlQuery += ` AND deptid >= 0`;
          }

          if (branch_id != 'null') {
            sqlQuery += ` AND branchid = ${branch_id}`;
          } else {
            sqlQuery += ` AND branchid >= 0`;
          }

          if (wpayperiod_id != 'null') {
            sqlQuery += ` AND weekid = ${wpayperiod_id}`;
          } else {
            sqlQuery += ` AND weekid >= 0`;
          }
          sqlQuery += ` ORDER BY Employee`;
        }
        else {
          console.log('else else else ')
          if (reg_Id != 'null') {
            sqlQuery += ` WHERE reg.id = ${reg_Id}`;
          } else {
            sqlQuery += ` WHERE reg.id >= 0`;
          }

          if (salaryheads_id != 'null') {
            sqlQuery += ` AND osh.id = ${salaryheads_id}`;
          } else {
            sqlQuery += ` AND osh.id >= 0`;
          }

          if (dept_id != 'null') {
            sqlQuery += ` AND dept.id = ${dept_id}`;
          } else {
            sqlQuery += ` AND dept.id >= 0`;
          }

          if (branch_id != 'null') {
            sqlQuery += ` AND br.id = ${branch_id}`;
          } else {
            sqlQuery += ` AND br.id >= 0`;
          }

          if (wpayperiod_id != 'null') {
            sqlQuery += ` AND pay.id = ${wpayperiod_id}`;
          } else {
            sqlQuery += ` AND pay.id >= 0`;
          }
          sqlQuery += ` ORDER BY func_getusername(reg.Id)`;
        }
      }

      else if (query_id == 1509){
        if (salaryheads_id == 39){
          if (reg_Id != 'null') {
            sqlQuery += ` WHERE regid = ${reg_Id} and superid = ${super_id}`;
          } else {
            sqlQuery += ` WHERE regid >= 0 and superid = ${super_id}`;
          }

          if (salaryheads_id != 'null') {
            sqlQuery += ` AND salaryHeadId = ${salaryheads_id}`;
          } else {
            sqlQuery += ` AND salaryHeadId >= 0`;
          }

          if (dept_id != 'null') {
            sqlQuery += ` AND deptid = ${dept_id}`;
          } else {
            sqlQuery += ` AND deptid >= 0`;
          }

          if (branch_id != 'null') {
            sqlQuery += ` AND branchid = ${branch_id}`;
          } else {
            sqlQuery += ` AND branchid >= 0`;
          }

          if (payperiod_id != 'null') {
            sqlQuery += ` AND payperiodId = ${payperiod_id}`;
          } else {
            sqlQuery += ` AND payperiodId >= 0`;
          }
          sqlQuery += ` GROUP BY PayRollNo, UserName, NssfNo, \`Id No\` HAVING SUM(Amount) > 0 ORDER BY UserName`;
        }
        else if (salaryheads_id == 38){
          if (reg_Id != 'null') {
            sqlQuery += ` WHERE regid = ${reg_Id} and superid = ${super_id}`;
          } else {
            sqlQuery += ` WHERE regid >= 0 and superid = ${super_id}`;
          }

          if (salaryheads_id != 'null') {
            sqlQuery += ` AND salaryHeadId = ${salaryheads_id}`;
          } else {
            sqlQuery += ` AND salaryHeadId >= 0`;
          }

          if (dept_id != 'null') {
            sqlQuery += ` AND deptid = ${dept_id}`;
          } else {
            sqlQuery += ` AND deptid >= 0`;
          }

          if (branch_id != 'null') {
            sqlQuery += ` AND branchid = ${branch_id}`;
          } else {
            sqlQuery += ` AND branchid >= 0`;
          }

          if (payperiod_id != 'null') {
            sqlQuery += ` AND payperiodId = ${payperiod_id}`;
          } else {
            sqlQuery += ` AND payperiodId >= 0`;
          }
          sqlQuery += ` GROUP BY PayRollNo, Employee, NHIFNo, IdNo, LastName HAVING SUM(Amount) > 0 ORDER BY Employee`;
        }
        else if (salaryheads_id == 40){
          if (reg_Id != 'null') {
            sqlQuery += ` WHERE regid = ${reg_Id} and superid = ${super_id}`;
          } else {
            sqlQuery += ` WHERE regid >= 0 and superid = ${super_id}`;
          }

          if (salaryheads_id != 'null') {
            sqlQuery += ` AND salaryHeadId = ${salaryheads_id}`;
          } else {
            sqlQuery += ` AND salaryHeadId >= 0`;
          }

          if (dept_id != 'null') {
            sqlQuery += ` AND deptid = ${dept_id}`;
          } else {
            sqlQuery += ` AND deptid >= 0`;
          }

          if (branch_id != 'null') {
            sqlQuery += ` AND branchid = ${branch_id}`;
          } else {
            sqlQuery += ` AND branchid >= 0`;
          }

          if (payperiod_id != 'null') {
            sqlQuery += ` AND payperiodId = ${payperiod_id}`;
          } else {
            sqlQuery += ` AND payperiodId >= 0`;
          }
          sqlQuery += ` GROUP BY PayRollNo, Employee, pinno HAVING SUM(Amount) > 0 ORDER BY Employee`;
        }
        else if (salaryheads_id == 2){
          if (reg_Id != 'null') {
            sqlQuery += ` WHERE regid = ${reg_Id} and superid = ${super_id}`;
          } else {
            sqlQuery += ` WHERE regid >= 0 and superid = ${super_id}`;
          }

          if (salaryheads_id != 'null') {
            sqlQuery += ` AND salaryHeadId = ${salaryheads_id}`;
          } else {
            sqlQuery += ` AND salaryHeadId >= 0`;
          }

          if (dept_id != 'null') {
            sqlQuery += ` AND deptid = ${dept_id}`;
          } else {
            sqlQuery += ` AND deptid >= 0`;
          }

          if (branch_id != 'null') {
            sqlQuery += ` AND branchid = ${branch_id}`;
          } else {
            sqlQuery += ` AND branchid >= 0`;
          }

          if (payperiod_id != 'null') {
            sqlQuery += ` AND payperiodId = ${payperiod_id}`;
          } else {
            sqlQuery += ` AND payperiodId >= 0`;
          }
          sqlQuery += ` GROUP BY CardId, username, Designation HAVING SUM(Amount) > 0 ORDER BY UserName`;
        }
        else {
          console.log('elseeeeeeeeeeeeeeeeeeeeeeee')
          if (reg_Id != 'null') {
            sqlQuery += ` WHERE reg.id = ${reg_Id}`;
          } else {
            sqlQuery += ` WHERE reg.id >= 0`;
          }

          if (salaryheads_id != 'null') {
            sqlQuery += ` AND osh.id = ${salaryheads_id}`;
          } else {
            sqlQuery += ` AND osh.id >= 0`;
          }

          if (dept_id != 'null') {
            sqlQuery += ` AND dept.id = ${dept_id}`;
          } else {
            sqlQuery += ` AND dept.id >= 0`;
          }

          if (branch_id != 'null') {
            sqlQuery += ` AND br.id = ${branch_id}`;
          } else {
            sqlQuery += ` AND br.id >= 0`;
          }

          if (wpayperiod_id != 'null') {
            sqlQuery += ` AND pay.id = ${wpayperiod_id}`;
          } else {
            sqlQuery += ` AND pay.id >= 0`;
          }
          sqlQuery += ` GROUP BY reg.CardId, reg.UserName, osh.Name, reg.Id HAVING SUM(mpd.Paid) > 0 ORDER BY func_getusername(reg.Id)`;
        }
      }

      console.log(sqlQuery,'final mysql query ...')
      dbUtility.query(sqlQuery, (executeError, executeResults, executeFields) => {
        if (executeError) {
          console.error(executeError);
          res.status(500).json(
            res.json({
            ResultData: null,
            Message: 'Internal Server Error',
            Status: false
          }));
        } else {
          // Send the results as the response
          res.json({
            ResultData: executeResults,
            Message: null,
            Status: true
          })
        }
      });
    }
  });
});


// Use 0.0.0.0 as the host to make it accessible externally
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is listening at http://localhost:${port}`);
});