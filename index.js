
import express from "express"
import usuarioRoutes from "./routes/usuarioRoutes.js"

const app = express()


app.use('/' , usuarioRoutes)

const port = 3001;
app.listen(port, () => {
    console.log(`el servidor esta corriendo en el puerto ${port}`)
});