import { Create, Edit, SimpleForm, TextInput, List, Datagrid, ImageField, TextField, EditButton } from 'react-admin';


export const TagList = (props) => {
    return(
  <List {...props} bulkActionButtons={false} Set pagination={false} >
      <Datagrid key="id" >
          <TextField label="ID" source="id" />
          <TextField label="Nom" source="name" />
          <ImageField source="image" sortable={false}/>
        <EditButton label="Modifier" />
      </Datagrid>
  </List>
)}

export const TagCreate = (props) => {
  return (
    <Create {...props}>
    <SimpleForm>
    <TextInput label="Nom" source="name" />
    </SimpleForm>
</Create>
  )
}

export const TagEdit = (props) => {
  return (
    <Edit {...props}>
    <SimpleForm>
    <TextInput label="Nom" source="name" />
    </SimpleForm>
</Edit>
  )
}
