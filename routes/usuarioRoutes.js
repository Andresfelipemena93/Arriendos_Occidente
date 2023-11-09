
import  express  from "express";

const router = express.Router();

// crear routing

router.get('/', function(req, res){
    res.send({msg: 'hola'})
});

router.get('/nosotros', function(req, res){
    res.send('Hola todo bien, sobre nosotros')
});

export default router