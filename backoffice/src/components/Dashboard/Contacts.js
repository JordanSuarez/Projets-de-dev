import {List, Datagrid, TextField, ShowButton, Show, SimpleShowLayout } from 'react-admin';

  export const ContactList = (props) => {
    return(
  <List {...props} bulkActionButtons={false} Set pagination={false} >
      <Datagrid key="id" >
      <TextField label="Auteur" source="name" />
      <TextField label="Email" source="email" />
      <TextField label="Sujet" source="object" />
      <TextField label="Message" source="message" />
      <TextField label="Site web" source="website" />
      <ShowButton label="Afficher"/>
      </Datagrid>
  </List>
  )}
  
  export const ContactShow = (props) => {
    return(
  <Show {...props}>
      <SimpleShowLayout>
      <TextField label="Auteur" source="name" />
      <TextField label="Email" source="email" />
      <TextField label="Sujet" source="object" />
      <TextField label="Message" source="message" />
      <TextField label="Site web" source="website" />
      </SimpleShowLayout>
  </Show>
  )}