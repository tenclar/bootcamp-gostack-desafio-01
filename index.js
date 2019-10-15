const express = require('express')
const server = express()
server.use(express.json())

//const project = { id:"1", title:"novo Projeto", tasks:[] }
const projects = []
//projects.push(project)

server.get('/projects', (req, res) =>{
  return res.json(projects)
})

server.get('/projects/:id', (req, res) =>{
  const { id } = req.params
  return res.json(projects[index])
})

server.put('/projects/:id', (req, res) =>{
  const { id } = req.params
  const {title } = req.body
  const project = projects.find( p => p.id ==id)
  
  project.title = title

  return res.json(project)
})

server.delete('/projects/:id', (req, res) =>{
  const { id } = req.params
  
  const pjindex = projects.findIndex(p=> p.id == id)
  projects.slice(pjindex, 1)

  return res.send()
})

server.post('/projects', (req, res) => {
    const project = {

      id: req.body.id,
      title: req.body.title,
      tasks:[]
    }
    projects.push(project)

    return res.json(projects)
})

server.post('/projects/:id/tasks', (req, res) => {
  const { id } = req.params
  const { title } = req.body
  
  
  
  const project = projects.find(p => p.id == id);
   

    
    project.tasks.push(title)
    projects.push(project)
   
  

  return res.json(projects)
})



server.listen(3000)