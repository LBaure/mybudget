import forge from 'node-forge'
let axios = {}
axios = require('axios')

const urlWebApi = '/'
const publicKeyString = 'SDFASDF'

const uris = {
  procedure: '/ejecutar',
  upload: '/upload-file'
}

const toList = function (jsonObj) {
  if (typeof jsonObj === 'undefined') return []
  // const lent = jsonObj.length
  const response = []
  for (const key in jsonObj) {
    if (Object.prototype.hasOwnProperty.call(jsonObj, key)) {
      response.push(jsonObj[key])
    }
  }
  return response
}

const callWs = function (uri, json) {
  return new Promise(function (resolve, reject) { 
    axios.post(uri, json)
      .then(function (response) {
        response = response.data
        if (response.code === 200) {
          resolve(response.data)
        } else if (response.code === 500) {
          resolve(undefined)
        }
      })
      .catch(function (error) {
        reject(error)
      })
  })
}
const encryptRsa = function (obj) {
  const publicKey = forge.pki.publicKeyFromPem(publicKeyString)
  const encrypted = publicKey.encrypt(obj, 'RSA-OAEP', {
    md: forge.md.sha256.create(),
    mgf1: forge.mgf1.create()
  })
  const base64 = forge.util.encode64(encrypted)
  return base64
}

const callUpload = function (uri, fileToUpload) {
  return new Promise(function (resolve, reject) {
    axios.post(urlWebApi + uri, fileToUpload).then(function (response) {
      response = response.data
      if (response.code === 200) {
        resolve(response)
      } else if (response.code === 500) {
        resolve(undefined)
      }
    }).catch(function (error) {
      reject(error)
    })
  })
}

export const coreApi = {
  ejecutar: function (spName, params, encriptado = 0, loading = false) {
    const paramsToEncrypt = {
      nombre: spName,
      parametros: params
    }
    const paramsEncryptedString = (encriptado === 1) ? encryptRsa(forge.util.encodeUtf8(JSON.stringify(paramsToEncrypt))) : ''

    const model = {
      nombre: (encriptado === 1) ? '' : spName,
      parametros: (encriptado === 1) ? paramsEncryptedString : params,
      encriptado: (encriptado === 1) ? 1 : undefined,
      loading: (loading) ? true : undefined
    }
    let parameters = []
    if (encriptado === 0) {
      parameters = (model.parametros instanceof Array) ? model.parametros : toList(model.parametros)
      if (parameters.length > 0) model.parametros = parameters
    }
    return callWs(uris.procedure, model)
  },

  upload: function (fileUpload) {
    return callUpload(uris.upload, fileUpload)
  },

}
export default {
  install (Vue, options) {
    if (!Vue.prototype.$api) {
      Object.defineProperty(Vue.prototype, '$api', {value: coreApi})
    }
  }
}