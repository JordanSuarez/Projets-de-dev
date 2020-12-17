import * as React from "react";
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-json-server';
import { Create, Edit, SimpleForm, TextInput, ImageInput, required, List, Datagrid, ImageField, EmailField, FunctionField, UrlField, TextField, ChipField, ArrayField, SingleFieldList, EditButton, ShowButton, fetchUtils } from 'react-admin';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import RichTextInput from 'ra-input-rich-text';
import addUploadFeature from './addUploadFeature';
import authProvider from './authProvider';
import FileBase64 from 'react-file-base64';




const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#59B0DF',
      },
      secondary: {
        main: '#424244',
      },
    },
  });


export const UserList = (props) => (
    <List {...props}>
        <Datagrid key="id" >
            <TextField label="ID" source="id" />
            <TextField label="Nom d'utilisateur" source="username" />
            <ImageField label="Photo de profile" source="userImage" />
            <EmailField label="Adresse email" source="email" />
            <EditButton />
            <ShowButton />
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
        <TextInput label="Adresse email" source="email" />
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
                options={addUploadFeature}
              >
              <PreviewImage source="src" />
              </ImageInput>
    </SimpleForm>
</Edit>
  )
}


const useStyles = makeStyles({
  tags: { 
    '& :empty' : {
      display: 'none',
    }
},
});

export const ProjectList = (props) => {
    const classes = useStyles();
    return(
  <List {...props}>
      <Datagrid expand={<TextField name="Description" source="description" />} key="id" 	>
          <TextField label="ID" source="id" sortBy="id" />
        
          <TextField label="Auteur" source="user.username" />

          <TextField label="Titre" source="title" />
          <UrlField label="Lien Github" source="github_link" />
          <UrlField label="Lien du Projet" source="project_link" />
          <ImageField source="image" />
          <ArrayField source="tags">
             <SingleFieldList key="id">
                 <ChipField source="name" className={classes.tags}/>
            </SingleFieldList>
          </ArrayField>
        <EditButton />
        <ShowButton />



      </Datagrid>
  </List>
)}

export const ProjectCreate = (props) => {
  const classes = useStyles();
  return (
    <Create {...props}>
    <SimpleForm>
        <TextInput label="Titre" source="title" />
        <TextInput label="Lien Github" source="githubLink" />
        <TextInput label="Lien du Projet" source="projectLink" />
        <ImageInput source="image" />
        <RichTextInput name="Description" source="description" />
        <ArrayField source="tags">
           <SingleFieldList key="id" >
           <ChipField source="name" className={classes.tags}/>
          </SingleFieldList>
        </ArrayField>
    </SimpleForm>
</Create>
  )
}

export const ProjectEdit = (props) => {

  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

  const classes = useStyles();
  const PreviewImage = ({ record, source }) => {
    console.log(typeof(record))
    if (typeof (record) == "object") {
        record = {
            [source]: 'ALLOOO'
        }
    }
    console.log(record)
    
    return <ImageField record={record} source={source} />
  }

  const convertBase64 = async (record, source) => {
    const imageSrc = await toBase64(record.rawFile)
    return imageSrc
  }

return (
    <Edit {...props}>
    <SimpleForm>
        <TextInput disabled label="Id" source="id" />
        <TextInput label="Titre" source="title" key="id" required />
        <TextInput label="Lien Github" source="githubLink" />
        <TextInput label="Lien du Projet" source="projectLink" />
        <RichTextInput name="Description" source="description" />
        <ImageField label="Image actuelle" source="image" />
        <ImageInput
                source="record.src"
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
                options={addUploadFeature}
              >
              <PreviewImage source="src" />
              </ImageInput>
        <ArrayField source="tags" required>
           <SingleFieldList key="id" >
           <ChipField source="name" className={classes.tags}/>
          </SingleFieldList>
        </ArrayField>
    </SimpleForm>
</Edit>
  )
}

export const TagList = (props) => {
    console.log(props)
    return(
  <List {...props}>
      <Datagrid key="id" >
          <TextField label="ID" source="id" />
          <TextField label="Nom" source="name" />
          <ImageField source="image" />
        <EditButton />



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

export const CommentList = (props) => {
  console.log(props)
  return(
<List {...props}>
    <Datagrid key="id" >
        <TextField label="Commentaire" source="content" />
        <TextField label="Auteur" source="User.username" />
        <TextField label="Projet" source="Project.title" />
      <EditButton />
    </Datagrid>
</List>
)}


export const CommentEdit = (props) => {
  return (
    <Edit {...props}>
    <SimpleForm>
    <TextField label="ID" source="id" />
    <TextInput label="Commentaire" source="content" />
    <TextInput label="ID de l'utilisateur" source="User.id" />
    <TextInput label="ID du Projet" source="Project.id" />
    </SimpleForm>
</Edit>
  )
}

const httpClient = (url, options = {}) => {
  options.user = {
      authenticated: true,
      token: localStorage.getItem('token')
  };
  return fetchUtils.fetchJson(url, options);
};

const Dashboard = () => (
    <Admin authProvider={authProvider} theme={theme} dataProvider={simpleRestProvider('http://localhost:3001/api', httpClient)}>
        <Resource name="users" list={UserList} edit={UserEdit}/>
        <Resource name="projects" list={ProjectList} create={ProjectCreate} edit={ProjectEdit} />
        <Resource name="tags" list={TagList} create={TagCreate} edit={TagEdit}/>
        <Resource name="comments" list={CommentList} edit={CommentEdit} />

    </Admin>
);

export default Dashboard;