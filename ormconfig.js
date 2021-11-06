module.exports = {
  "type": "mysql",
  "host": "localhost",
  "port": 3306,
  "username": "jorginho",
  "password": "Jpjr309121!",
  "database": "valoriza_db",

  "migrations": [
    "./src/database/migrations/*.ts"
  ],

  "entities": [
    "./src/entities/*.ts"
  ],

  "cli": {
    "migrationsDir": "./src/database/migrations"
  }
}