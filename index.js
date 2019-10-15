const express = require('express')
const server = express()
server.use(express.json())

const projects = []


function checkProjectExist(req, res, next) {
  const {id} = req.params 
  const project = projects.find(p => p.id == id)
  if(!project){
    return res.status(400).json({error: ' Project not found '})
  }
  return next();
}

server.get('/projects', (req, res) =>{
  return res.json(projects)
})

server.get('/projects/:id', checkProjectExist, (req, res) =>{
  const { id } = req.params
  return res.json(projects[index])
})

server.put('/projects/:id', checkProjectExist, (req, res) =>{
  const { id } = req.params
  const {title } = req.body
  const project = projects.find( p => p.id ==id)
  
  project.title = title

  return res.json(project)
})

server.delete('/projects/:id', checkProjectExist, (req, res) =>{
  const { id } = req.params
  
  const pjindex = projects.findIndex(p=> p.id == id)
  projects.slice(pjindex, 1)

  return res.send()
})

server.post('/projects', checkProjectExist, (req, res) => {
    const project = {

      id: req.body.id,
      title: req.body.title,
      tasks:[]
    }
    projects.push(project)

    return res.json(projects)
})

server.post('/projects/:id/tasks', checkProjectExist, (req, res) => {
  const { id } = req.params
  const { title } = req.body
  
  const project = projects.find(p => p.id == id);
    project.tasks.push(title)
  const pjindex = projects.findIndex(p=> p.id == id);
    
    
    projects[pjindex] = project
   // projects.push(project)
   
  

  return res.json(projects)
})



server.listen(3000)