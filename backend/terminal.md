``sequelize model:create --attributes "username:string email:string bio:string userImage:string password:string isAdmin:boolean" --name User``

``sequelize model:create --attributes "title:string description:string vote:integer image:string github_link:string project_link:string userId:integer" --name Project``

``sequelize model:create --attributes "name:string" --name Tag``

``sequelize model:create --attributes "content:string userId:integer" --name Comment``

``sequelize model:create --attributes "name:string" --name Channel``

``sequelize model:create --attributes "content:string userId:integer channelId:integer" --name Message``

``sequelize db:migrate``