import { Create, Edit, SimpleForm, TextInput, ImageInput, DeleteButton, List, Datagrid, ReferenceInput , SelectInput, ArrayInput, SimpleFormIterator, ImageField, EmailField, UrlField, TextField, ChipField, ArrayField, SingleFieldList, EditButton, ShowButton, fetchUtils, Show, SimpleShowLayout } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import RichTextInput from 'ra-input-rich-text';
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