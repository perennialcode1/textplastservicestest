const mysql = require('mysql2');

class DbUtility {
  constructor() {
    this.dbConfig = {
      host: 'mysql5045.site4now.net',
      user: 'a50d85_tpl202x',
      password: 't3xpl@5t',
      database: 'db_a50d85_tpl202x',
      waitForConnections: true,
      connectionLimit: 40,
      queueLimit: 0
    };
  }

  createConnection() {
    return mysql.createConnection(this.dbConfig);
  }

  query(sql, callback) {
    const connection = this.createConnection();

    connection.connect((err) => {
      if (err) {
        console.error('Error connecting to MySQL database:', err);
        return callback(err, null);
      }

      connection.query(sql, (queryErr, results) => {
        connection.end(); // Close the connection after the query is done

        if (queryErr) {
          console.error('Error executing MySQL query:', queryErr);
        }

        callback(queryErr, results);
      });
    });
  }
}

module.exports = DbUtility;
