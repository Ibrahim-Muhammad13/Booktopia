require('dotenv').config()

module.exports = {
  session: {
    cookieKey: process.env.COOKIEKEY
  },
  github: {
    clientID: process.env.CLIENTID ,
    clientSecret: process.env.CLIENTSECRET
  }
  ,facebook: {
    clientID: process.env.CLIENTIDFace ,
    clientSecret: process.env.CLIENTSECRETFace
  }
  ,google: {
    clientID: process.env.ClientIDgoogle ,
    clientSecret: process.env.clientSecretgoogle
  }


}