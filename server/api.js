import forge from 'node-forge'
const oracledb = require('oracledb')
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
const publicKeyString = "-----BEGIN PUBLIC KEY----- MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA205Ag8sXnqc0XsPa4NiS tZSca+3afzgkMdpotsIOphZxketyBLs4QOKYsAHGw51R68fbx5oLmDCn7a4n4ZtT u39ksIQg1lwQ3y7pqfb9BbYZKhtYigL8URUVrsQ5EuZxk9BOHHez59gizNzM+Vp0 zlnOuJVZdVdp3d+d1z+oE3ejsdXLGFEjAblo8GNQxTgxOXJk2VQ+4yQX5QN+mEYS FQpJqP9z5Y+/SVXlD3e943XjuNOFZwSG2uVkW3tuKsvGBOA38xLKydY9hb5y0WdM E0/hnOvB6gfIOovSmdTonDF3224iGQJa8RXss3SN+6NeLnhJQYGBri6U4sa0lNR/ 5vip/VCzaHliYERTztT2NgW6WUZAEW05gjN6Qid2eB7lKs/ND3BQkDHUKqouNDO1 xookeBqSg7fT/l3D6D7QzJE5Jc+bdZUDrr2MeYXehzbGg8sUBXJZbOu6GUkDSM5Y C8r/SnZhhA0ancQZZW/t4TmFNiLiGrqNS4uJf4UHKKsmXHCKDKB/bdlp60lTl6YF ocGzW6tBPdDFD7S5UTPqg//ob6mvuPFJ0E6t8Le60P+UiZIdmINe9dX9darS0VNH +eCVLj1J7iQNyXrelD5sE7xhAvQ3+jp3Q4mXWVgOZi1Uh/+/iNXDxrAtzKipYAOg zuyH0DDtO3E4JSiv4qr8o+UCAwEAAQ== -----END PUBLIC KEY-----"
const privateKeyString = "-----BEGIN RSA PRIVATE KEY----- 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 -----END RSA PRIVATE KEY-----"
const callService = async (model) => {  
    const params = model.parametros;
    let connection;

    try {
      connection = await oracledb.getConnection({
        user: "orbis_erp",
        password: "orbis_erp",
        connectString: "desa.via-asesores.com:1521/xe"
      });
      console.log("open connection")
      let sql = `BEGIN ` + model.nombre + `(`;
      for (let i = 0; i < params.length; i++) {
        sql += (i > 0) ? ", :" + i : ":" + i;
      }
      
      sql += (params.length) ? ", :cursor); END;" : ":cursor); END;";

      const result = await connection.execute(sql, orderParams(params));
      const resultSet = result.outBinds.cursor;
      let row;
      let rows = [];
      while ((row = await resultSet.getRow())) {
        // console.log("dbRow ", row);
        rows.push(lowercaseKeys(row));
      }
      // always close the ResultSet
      await resultSet.close();
      // console.log("Termina consulta de datos");
      return rows;

    } catch (err) {
      console.error(err);
    } finally {
      if (connection) {
        try {
          await connection.close();
          console.log("close connection")
        } catch (err) {
          console.error(err);
        }
      }
    }
}
const decryptData = function (str) {
  var privateKey = forge.pki.privateKeyFromPem(privateKeyString);
  const result = privateKey.decrypt(forge.util.decode64(str), 'RSA-OAEP', {
    md: forge.md.sha256.create(),
    mgf1: forge.mgf1.create()
  })
  return JSON.parse(result);
}

// convierte las llaves de un objeto 
// a minusculas
const lowercaseKeys = obj =>
  Object.keys(obj).reduce((acc, key) => {
    acc[key.toLowerCase()] = obj[key];
    return acc;
  }, {});
  
const orderParams = function (params) {
  const numParams = params.length
  let obj = {}
  for (let i = 0; i < params.length + 1; i++) {
    if (i === numParams) {
      obj.cursor = { type: oracledb.CURSOR, dir: oracledb.BIND_OUT }
    } else {
      obj[i.toString()] = params[i]
    }
  }
  return obj
}

const ejecutar = function (jsonData) {
  //  ↓ SE CREA COMO UN HELP PARA SABER SI LA INFORMACION VIENE ENCRIPTADA 
  let encryptedVal = (jsonData.encriptado) ? 1 : 0;
  let modelSend = {};
  const params = (jsonData.parametros) ? jsonData.parametros : [];

  if (encryptedVal === 1) {
    modelSend = decryptData(jsonData.parametros)
  } else {
    modelSend.nombre = jsonData.nombre
    modelSend.parametros = params
  }
  console.log("sendModel to dataBase", modelSend)
  return callService(modelSend)
}

export default function (req, res, next) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Expose-Headers": "Content-Type",
    "Access-Control-Allow-Headers": "Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, X-Requested-By, If-Modified-Since, X-File-Name, Cache-Control",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS, PATCH, PUT"
  };

  if ( req.method === 'OPTIONS' ) {
		res.writeHead(204, headers);
		res.end();
		next();
  }
  

  req.on('data', (data) => {
    const datos = JSON.parse(data)
    // console.log("datos entran api", datos)
    // verificamos que el objeto no este vacio
    const validObject = Object.entries(datos).length > 0;
    if (validObject) {
      ejecutar(datos)
        .then((response) => {
          // console.log('response del middleware server/api', response)
          res.statusCode = 200
          res.writeHead(200, headers);
          res.end(JSON.stringify({ code: 200, msg: 'ok', data: response }))
        })
        .catch((err) => {
          res.statusCode = 500
          res.writeHead(500, headers);
          res.end(JSON.stringify({ code: 500, msg: 'error' }))
          console.log("error", err)
        });
    }      
  })
  
}
