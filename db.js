const MongoClient = require('mongodb').MongoClient

let db

exports.connect = (url, done) => {
  if (db) return done()

  MongoClient.connect(url, (err, database) => {
    if (err) return done(err)
    db = database
    done()
  })
}

exports.get = () => {
  return db
}

exports.close = (done) => {
  if (db) {
    db.close((err, result) => {
      db = null
      done(err)
    })
  }
}
