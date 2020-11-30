``sequelize model:create --attributes "name:string email:string password:string isAdmin:boolean" --name User``

``sequelize model:create --attributes "title:string description:string vote:integer image:string github_link:string project_link:string user_id:integer" --name Project``

``sequelize model:create --attributes "name:string" --name Tag``

``sequelize model:create --attributes "content:string user_id:integer" --name Comment``

``sequelize db:migrate``