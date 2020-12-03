require('dotenv').config()

const { Client } = require('pg')

;(async () => {
  const db = new Client()
  await db.connect()

  const createSql = `
  create table if not exists authenticatedusers (
    slack_id varchar(255) primary key,
    access_token varchar(255)
  );
`
  db.query(createSql, async (err, res) => {
    if (err) {
      console.error(err)
    } else {
      console.log('success', res)
    }

    try {
      await db.end()
    } catch (err) {
      console.error(err)
      process.exit(1)
    }
  })
})()
