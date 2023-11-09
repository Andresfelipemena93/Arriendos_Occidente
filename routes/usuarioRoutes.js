
import  express  from "express";

const router = express.Router();

// crear routing

router.get('/' , function (req, res) {
    res.json({msg: "hola perros" })
})
router.get('/nosotros' , function (req, res) {
    res.send("hola perros desde nosotros")
})

export default router