const express = require('express')
const app = express()
const port = 3000

const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))
app.set('view engine', 'ejs')
app.set('views',__dirname+'/views')

app.get('/', (req, res) => {
  //res.send('Pagina principal')
  console.log(__dirname)
  res.render('index')
})
app.get('/educacion', (req, res) => {
  res.render('academico', {
    titulo:"Seccion educacion",
    descripcion:"Aqui encontraras mi formacion academica"
  }
  )
})
app.get('/datos', (req, res) => {
  res.render('datos', {
    titulo:"Seccion datos basicos",
    descripcion:"Aqui encontraras nis datos basicos"
  }
  )
})
app.get('/reconocimientos', (req, res) => {
  res.send('Pagina de reconocimientos')
})
app.get('/conocimientos', (req, res) => {
  res.send('Pagina de conocimientos')
})

app.use((req,res,next) => {
  res.status(404).sendFile(__dirname+'/public/404.html')
})

app.listen(port, () => {
  console.log(`Acceda al servidor haciendo click aqui http://localhost/:${port}`)
})