const env = {
    PORT: 3030
}

const database = {
    HOSTNAME: 'localhost',
    PORT: '7000',
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