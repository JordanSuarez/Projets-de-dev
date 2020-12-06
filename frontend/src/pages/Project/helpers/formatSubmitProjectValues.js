import { get } from 'lodash';

export default (formValues) => ({
  title: formValues.title,
  github_Link: formValues.github_Link,
  project_link: formValues.project_link,
  description: formValues.description,
  image: formValues.image,
  tag1: get(formValues, 'tags[0]'),
  tag2: get(formValues, 'tags[1]'),
  tag3: get(formValues, 'tags[2]'),
  tag4: get(formValues, 'tags[3]'),
  tag5: get(formValues, 'tags[4]'),
  tag6: get(formValues, 'tags[5]'),
  // imageName: 'Aucun fichier choisi',
  // partners: [],
});
