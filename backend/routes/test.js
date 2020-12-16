function update(req, res) {
    const id = req.params.id;
    const userId = 1
 
    const updatedProject = {
         title: req.body.title,
         description: req.body.description,
         imageUrl: req.body.imageUrl,
         vote: req.body.vote,
         githubUrl: req.body.githubUrl,
         projectUrl: req.body.projectUrl,
         partnerId: req.body.partnerId,
     };
 
     models.Project.update(updatedProject, 
        {where: {id: id, userId: userId}
    })
    .then(result => {
        return res.status(201).json({projectEdit})
     }).catch(error => {
        return res.status(500).json({ 'error': 'Erreur dans les données saisis :' + err });
     })
 }