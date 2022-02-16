const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const routerP = require('./pokemon')
const routerT = require('./tipo')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/',routerP)
router.use('/pokemon',routerP)
router.use('/tipo',routerT)


module.exports = router;
