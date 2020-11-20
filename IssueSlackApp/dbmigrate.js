require('dotenv').config()

const { Client } = require('pg')

;(async () => {
  const db = new Client()
  await db.connect()

  const createSql = `
  create table authenticatedusers (
    slack_id varchar(255) primary key,
    access_token varchar(255)
  );
`
  db.query(createSql, (err, res) => {
    if (err) {
      console.error(err)
    } else {
      console.log('success', res)
    }
  })
})()
