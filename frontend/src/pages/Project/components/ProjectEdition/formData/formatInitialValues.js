export default (project) => ({
  title: project.title,
  githubLink: project.github_link,
  projectLink: project.project_link,
  description: project.description,
  image: project.image,
  imageName: 'Aucun fichier choisi',
  tags: [
    { name: 'React' },
    { name: 'PHP' },
    { name: 'Ruby' },
  ],
  partners: [],
});
