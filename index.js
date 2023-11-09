import  express  from 'express'
import  usuarioRoutes from "./routes/usuarioRoutes.js"

const app = express ()

//rounting 
app.use(' / ', usuarioRoutes)


// definir el puerto

const port = 3000;

app.listen(port, () => {
    console.log(`el servidor esta corriendo en el puerto ${port}`)
});