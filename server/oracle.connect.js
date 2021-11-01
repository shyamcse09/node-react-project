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

async function run() {
    let connection;
  
    try {
  
      let sql, binds, options, result;
  
      connection = await oracledb.getConnection(dbConfig);

    //
    // Query the data
    //

    sql = `SELECT STUDYWORKINGMAPID, VISITNAME FROM EDCOM_MAPPING.VISITMAP`;
    binds = {};
    // For a complete list of options see the documentation.
    options = {
      outFormat: oracledb.OUT_FORMAT_OBJECT,   // query result format
       extendedMetaData: true,               // get extra metadata
       prefetchRows:     4,                // internal buffer allocation size for tuning
       fetchArraySize:   4                 // internal buffer allocation size for tuning
    };

    result = await connection.execute(sql, binds, options);
    console.log("Metadata: ");
    console.dir(result.metaData, { depth: null });
    console.log("Query results: ");
    console.dir(result.rows, { depth: null });

    //
    // Show the date.  The value of ORA_SDTZ affects the output
    //

    sql = `SELECT TO_CHAR(CURRENT_DATE, 'DD-Mon-YYYY HH24:MI') AS CD FROM DUAL`;
    //result = await connection.execute(sql, binds, options);
    console.log(`Current date query results: ${result}`);
    //console.log(result.rows[0]['CD']);


    } catch (err) {
    console.error(err);
    } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

run();          

