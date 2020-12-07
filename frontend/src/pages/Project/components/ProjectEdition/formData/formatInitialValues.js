import { get } from 'lodash';

export default (project) => {
  console.log(project);
  const tags = [project.Tag];

  const isNotNull = (object) => (object !== null ? object : false);
  const addTag = (tag) => tags.push(tag);

  if (isNotNull(project.Tag2)) {
    addTag(project.Tag2);
  }

  if (isNotNull(project.Tag3)) {
    addTag(project.Tag3);
  }

  if (isNotNull(project.Tag4)) {
    addTag(project.Tag4);
  }

  if (isNotNull(project.Tag5)) {
    addTag(project.Tag5);
  }

  if (isNotNull(project.Tag6)) {
    addTag(project.Tag6);
  }

  console.log(tags);

  return ({
    title: project.title,
    githubLink: project.github_link,
    projectLink: project.project_link,
    description: project.description,
    image: project.image,
    imageName: 'Aucun fichier choisi',
    tags,
    partners: [],
  });
};
