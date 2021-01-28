import * as React from "react";
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-json-server';
import {  fetchUtils } from 'react-admin';
import { createMuiTheme } from '@material-ui/core/styles';
import authProvider from './authProvider';
import commentIcon from '@material-ui/icons/AssistantTwoTone';
import projectIcon from '@material-ui/icons/ClassTwoTone';
import categoryIcon from '@material-ui/icons/DirectionsBoatTwoTone';
import userIcon from '@material-ui/icons/FaceTwoTone';
import contactIcon from '@material-ui/icons/EmailTwoTone';
import chatIcon from '@material-ui/icons/TextsmsTwoTone';
import Login from '../Login/Login';
import { UserList, UserEdit } from './Users';
import { ProjectList, ProjectCreate, ProjectEdit } from './Projects';
import { TagList, TagCreate, TagEdit } from './Tags';
import { CommentList, CommentEdit } from './Comments';
import { ContactList, ContactShow } from './Contacts';
import { MessageList } from './Messages';



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
export const apiUrl = `${REACT_APP_API_PROTOCOL}://${REACT_APP_API_HOST}:${REACT_APP_API_PORT}/api/backoffice`;

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
