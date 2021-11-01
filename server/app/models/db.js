const oracledb = require('oracledb');
const dbConfig= require('./app/config/db.config.js')
process.env.ORA_SDTZ = 'UTC';
const fs = require('fs');

let libPath;
if (process.platform === 'win32') {           // Windows
  libPath = 'D:\\Users\\smonda\\Sites\\instantclient_21_3';
} else if (process.platform === 'darwin') {   // macOS
  libPath = process.env.HOME + '/Downloads/instantclient_19_8';
}
if (libPath && fs.existsSync(libPath)) {
  oracledb.initOracleClient({ libDir: libPath });
}
