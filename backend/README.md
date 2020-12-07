# Backend du projet "Projets De Dev"

## Getting Started 🚀

Install all dependencies : `npm install` 

Create new database "projets_de_dev_development" or edit the name in config/config.json file, database must be set to "utf8mb4_unicode_520_ci" to include emojies in the comments

Change username, password and database info in config/config.json

Run migrations `sequelize db:migrate`

Run the app in development mode : `npm start`

## API Routes 🗺🚠

### Projects 👨‍🚀👩‍⚖️🧳 🌂 ☂️ 🧵 🧶 👓 🕶 🥽 🥼 👔 👕 👖 🧣 🧤 🧥 🧦 👗 👘 👚 👛 👜 👝 🎒 👞 👟 🥾 🥿 👠 👡👢 👑 👒 🎩 🎓 🧢 ⛑💄 💍 💼

http://localhost:3001/api/projects/:id - Find a project with ID, including user data, tags and comments (GET)

http://localhost:3001/api/projects/ - Get all projects including user data, tags and comments, you can add ?limit=, &?offset=, &?tag1= - tag1 is the first tag filter but it checks all 6 tags, we're actually working on setting up 6 different tag filters (GET)

http://localhost:3001/api/projects/new - Add a new project (POST)

http://localhost:3001/api/projects/:id/edit - Edit an existing project, must include its ID (PATCH)


### Users 👩🏻‍💻👨🏻‍💻👮🏻‍♀️ 👮🏻 👮🏻‍♂️ 👷🏻‍♀️ 👷🏻 👷🏻‍♂️💂🏻‍♀️ 💂🏻 💂🏻‍♂️ 🕵🏻‍♀️ 🕵🏻 🕵🏻‍♂️👨🏻‍🔧 👩🏻‍🔬👨🏻‍🔬👩🏻‍🎨👨🏻‍🎨

http://localhost:3001/api//users/register/ - Register (POST)

http://localhost:3001/api//users/login/ - Login (POST)

http://localhost:3001/api//users/me - User profile with all user data, including its projects (which also include tags) (GET)

http://localhost:3001/api//users/ - Get a list of all users (GET)

http://localhost:3001/api//users/:id - Find a user with ID (GET)