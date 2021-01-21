import { DeleteButton, List, Datagrid, TextField } from 'react-admin';

export const MessageList = (props) => {
    return(
  <List {...props} bulkActionButtons={false} Set pagination={false} >
      <Datagrid key="id" >
      <TextField label="Auteur" source="User.username" sortable={false}/>
      <TextField label="Message" source="content" />
      <TextField label="Canal" source="Channel.name" sortable={false} />
      <DeleteButton label="Supprimer"/>
      </Datagrid>
  </List>
  )}
  