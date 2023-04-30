const env = {
    PORT: 1000
}

const database = {
    HOSTNAME: '127.0.0.1',
    PORT: 3306,
    USERNAME: 'nodeserver',
    PASSWORD: '#35bT-015',
    DATABASE: 'neatbeat',
    USERTABLE: 'accounts'
}

const mailer = {
    HOST: "localhost",
    PORT: 6000,
    USERNAME: "nodemailer",
    PASSWORD: "#35bT-015",
    ADDRESS: "service@neatbeat.de"
}

module.exports = { env, database, mailer }