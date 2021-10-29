module.exports = {
  user : process.env.NODE_ORACLEDB_USER || "edcom_mapping_rw",

  // Get the password from the environment variable
  // NODE_ORACLEDB_PASSWORD.  The password could also be a hard coded
  // string (not recommended), or it could be prompted for.
  // Alternatively use External Authentication so that no password is
  // needed.
  password      : process.env.NODE_ORACLEDB_PASSWORD || "GP~7-Asyw8Qz",

  // For information on connection strings see:
  // https://oracle.github.io/node-oracledb/doc/api.html#connectionstrings
  //connectString: "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(Host=oracle-df-dev.crdqucb2ywwx.us-east-1.rds.amazonaws.com)(Port=1521))(CONNECT_DATA=(SID=ORCL)))",
  connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING || "oracle-df-dev.crdqucb2ywwx.us-east-1.rds.amazonaws.com/ORCL",
  // Setting externalAuth is optional.  It defaults to false.  See:
  // https://oracle.github.io/node-oracledb/doc/api.html#extauth
  externalAuth  : process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false
};


