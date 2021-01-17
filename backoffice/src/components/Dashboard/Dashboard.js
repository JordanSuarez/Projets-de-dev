import * as React from "react";
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-json-server';
import { Create, Edit, SimpleForm, TextInput, ImageInput, DeleteButton, List, Datagrid, ReferenceInput , SelectInput, ArrayInput, SimpleFormIterator, ImageField, EmailField, UrlField, TextField, ChipField, ArrayField, SingleFieldList, EditButton, ShowButton, fetchUtils, Show, SimpleShowLayout } from 'react-admin';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import RichTextInput from 'ra-input-rich-text';
import authProvider from './authProvider';
import commentIcon from '@material-ui/icons/AssistantTwoTone';
import projectIcon from '@material-ui/icons/ClassTwoTone';
import categoryIcon from '@material-ui/icons/DirectionsBoatTwoTone';
import userIcon from '@material-ui/icons/FaceTwoTone';
import contactIcon from '@material-ui/icons/EmailTwoTone';
import chatIcon from '@material-ui/icons/TextsmsTwoTone';
import Login from '../Login/Login';




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
  <List {...props} bulkActionButtons={false} Set pagination={false} >
      <Datagrid expand={<TextField name="Description" source="description" />} key="id" 	>
          <TextField label="ID" source="id" sortBy="id" />
        
          <TextField label="Auteur" source="user.username" sortable={false} />

          <TextField label="Titre" source="title" />
          <UrlField label="Lien Github" source="github_link" />
          <UrlField label="Lien du Projet" source="project_link" />
          <ImageField source="image" />
          <ArrayField source="tags" sortable={false}>
             <SingleFieldList key="id">
                 <ChipField source="name" className={classes.tags}/>
            </SingleFieldList>
          </ArrayField>
        <EditButton label='Modifier' />
        <DeleteButton label='Supprimer'/>
      </Datagrid>
  </List>
)}

export const ProjectCreate = (props) => {
  const classes = useStyles();
  return (
    <Create {...props} title="Créer un Projet">
    <SimpleForm>
        <TextInput label="Titre" source="title" />
        <TextInput label="Lien Github" source="githubLink" />
        <TextInput label="Lien du Projet" source="projectLink" />
        <ImageInput source="image" />
        <RichTextInput label="Description" source="description" />
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

  const classes = useStyles();
  const PreviewImage = ({ record, source }) => {
    if (typeof (record) == "object") {
        record = {
            [source]: record.src,
        }
    }

    
    return <ImageField record={record} source={source} />
  }

return (
    <Edit {...props}>
    <SimpleForm>
        <TextInput disabled label="Id" source="id" />
        <TextInput label="Titre" source="title" key="id" required />
        <TextInput label="Lien Github" source="githubLink" />
        <TextInput label="Lien du Projet" source="projectLink" />
        <RichTextInput label="Description" source="description" />
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
              >
              <PreviewImage source="src" />
              </ImageInput>


              <ArrayInput source="tags">
                <SimpleFormIterator disableAdd disableRemove >
                <ReferenceInput label="Tags" source="id" reference="tags">
                <SelectInput optionText="name" />
                </ReferenceInput>
                </SimpleFormIterator>
              </ArrayInput>

    </SimpleForm>
</Edit>
  )
}

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

const httpClient = (url, options = {}) => {
  options.user = {
      authenticated: true,
      token: localStorage.getItem('token')
  };
  return fetchUtils.fetchJson(url, options);
  
};

const { REACT_APP_API_PROTOCOL } = process.env;
const { REACT_APP_API_HOST } = process.env;
const { REACT_APP_API_PORT } = process.env;
// BASE URL of api, from .env file
export const apiUrl = `${REACT_APP_API_PROTOCOL}://${REACT_APP_API_HOST}/api`;

const Dashboard = () => (
    <Admin loginPage={Login} authProvider={authProvider} theme={theme} dataProvider={simpleRestProvider(apiUrl, httpClient)}>
        <Resource options={{label : 'Utilisateurs', title : "Utilisateurs"}} icon={userIcon} name="users" list={UserList} edit={UserEdit}/>
        <Resource options={{label : 'Projets'}} icon={projectIcon} name="projects" list={ProjectList} create={ProjectCreate} edit={ProjectEdit} />
        <Resource options={{label : 'Catégories'}} icon={categoryIcon} name="tags" list={TagList} create={TagCreate} edit={TagEdit}/>
        <Resource options={{label : 'Commentaires'}} icon={commentIcon} name="comments" list={CommentList} edit={CommentEdit} />
        <Resource options={{label : 'Messages reçus'}} icon={contactIcon} name="contacts" list={ContactList} show={ContactShow} />
        <Resource options={{label : 'Messages du chat'}} icon={chatIcon} name="messages" list={MessageList} />
    </Admin>
    
);

export default Dashboard;
