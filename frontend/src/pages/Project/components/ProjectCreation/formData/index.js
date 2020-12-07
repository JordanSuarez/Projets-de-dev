import { get } from 'lodash';

export const initialValues = {
  title: '',
  githubLink: '',
  projectLink: '',
  description: '',
  image: '',
  imageName: 'Aucun fichier choisi',
  tags: [],
  partners: [],
};

export const formatSubmitValues = (formValues) => ({
  title: formValues.title,
  github_Link: formValues.github_Link,
  project_link: formValues.project_link,
  description: formValues.description,
  image: formValues.image,
  Tag: get(formValues, 'tags[0]'),
  Tag2: get(formValues, 'tags[1]'),
  Tag3: get(formValues, 'tags[2]'),
  Tag4: get(formValues, 'tags[3]'),
  Tag5: get(formValues, 'tags[4]'),
  Tag6: get(formValues, 'tags[5]'),
  // imageName: 'Aucun fichier choisi',
  // partners: [],
});
