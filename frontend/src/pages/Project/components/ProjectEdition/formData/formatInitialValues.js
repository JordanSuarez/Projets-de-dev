export default (project) => {
  const formatTags = [];

  project.tags.map((tag) => {
    if (tag !== null) {
      return formatTags.push(tag);
    }
  });

  return ({
    title: project.title,
    githubLink: project.githubLink,
    projectLink: project.projectLink,
    description: project.description,
    image: project.image,
    imageName: 'Aucun fichier choisi',
    tags: formatTags,
    partners: [],
  });
};
