import { Edit, SimpleForm, TextInput, ImageInput, List, Datagrid, ImageField, EmailField, TextField, EditButton } from 'react-admin';



export const UserList = (props) => (
    <List {...props} bulkActionButtons={false} Set pagination={false} >
        <Datagrid key="id" >
            <TextField label="ID" source="id" />
            <TextField label="Nom d'utilisateur" source="username" />
            <ImageField label="Photo de profile" source="userImage" />
            <EmailField label="Adresse email" source="email" />
            <EditButton label="Modifier"/>
        </Datagrid>
    </List>
);

export const UserEdit = (props) => {
  const PreviewImage = ({ record, source }) => {
    if (typeof (record) == "string") {
        record = {
            [source]: record
        }
    }
    return <ImageField record={record} source={source} />
}
  return (
    <Edit {...props}>
    <SimpleForm>
        <TextInput disabled label="Id" source="id" />
        <TextInput label="Nom d'utilisateur" source="username" />
        <TextInput disabled label="Adresse email" source="email" />
        <ImageField label="Image actuelle" source="userImage" />
        <ImageInput
                source="data.pictures"
                label="Nouvelle image"
                accept="image/png, image/jpg, image/jpeg"
                maxSize={5000000}
                placeholder={
                  <p>
                    <span >
                      Choisir une image
                    </span>
                    </p>
                }
              >
              <PreviewImage source="src" />
              </ImageInput>
    </SimpleForm>
</Edit>
  )
}
