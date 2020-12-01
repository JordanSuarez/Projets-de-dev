# Backend du projet "Projets De Dev"

## Getting Started 🚀

Install all dependencies : `npm install` 

Create new database "projets_de_dev_development" or edit the name in config/config.json file

Change username, password and database info in config/config.json

Install sequelize-mig globally : `npm install sequelize-mig -g`

Make a new migration `sequelize-mig migration:make -n <migration name>`

Run migration `sequelize db:migrate`

Run the app in development mode : `npm start`