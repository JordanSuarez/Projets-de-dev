import { get } from 'lodash';

export default (formValues) => ({
  title: formValues.title,
  githubLink: formValues.githubLink,
  projectLink: formValues.projectLink,
  description: formValues.description,
  image: formValues.image,
  shortImage: formValues.shortImage,
  tag1: get(formValues, 'tags[0].id'),
  tag2: get(formValues, 'tags[1].id'),
  tag3: get(formValues, 'tags[2].id'),
  tag4: get(formValues, 'tags[3].id'),
  tag5: get(formValues, 'tags[4].id'),
  tag6: get(formValues, 'tags[5].id'),
});
