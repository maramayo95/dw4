import express from 'express'
import cors from 'cors'
import chalk from 'chalk'

const app = express()
const PORT = 8080;



app.use(express.json())
app.use(cors('*'))

const productos = []

app.get('/', (req,res)=> {
   res.json(productos)
})

app.post('/', async (req,res)=> {
    try {
        productos.push(req.body)
        res.status(201).json({message:"El producto ha sido creado"})
    } catch (error) {
        res.status(400).json({error:"No se ha podido procesar la solicitd"})
    }
})


app.listen(PORT, () => {
    console.log(chalk.blackBright.bgWhite.bold(` Aplicación escuchando en http://localhost:${PORT} `));
  })