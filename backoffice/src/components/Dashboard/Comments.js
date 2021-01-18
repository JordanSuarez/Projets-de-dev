import { Edit, SimpleForm, TextInput, DeleteButton, List, Datagrid, TextField, EditButton} from 'react-admin';

export const CommentList = (props) => {
    return(
  <List {...props} bulkActionButtons={false} Set pagination={false} >
      <Datagrid key="id" >
          <TextField label="Commentaire" source="content" />
          <TextField label="Auteur" source="User.username" sortable={false}/>
          <TextField label="Projet" source="Project.title" sortable={false}/>
        <EditButton label="Modifier"/>
        <DeleteButton label="Supprimer"/>
      </Datagrid>
  </List>
  )}
  
  
  export const CommentEdit = (props) => {
    return (
      <Edit {...props}>
      <SimpleForm>
      <TextInput disabled label="ID" source="id" />
      <TextInput label="Commentaire" source="content" />
      <TextInput disabled label="Utilisateur" source="User.username" sortable={false}/>
      <TextInput disabled label="Projet" source="Project.title" />
      </SimpleForm>
  </Edit>
    )
  }
  
  