/*
    Event Routes
    /api/events
 */

const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const {check} = require('express-validator');
const {validarCampos} = require('../middlewares/validar-campos');
const router = Router();

const { getEventos, crearEvento, actualizarEvento, eliminarEvento} = require('../controllers/events');

// Todos deben de pasar por validación del JWT
router.use(validarJWT);

// Obtener eventos
router.get('/', getEventos);

// Crear eventos
router.post(
    '/',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('notes', 'La nota es obligatoria').not().isEmpty(),
        validarCampos
    ],  
    crearEvento
);

// Actualizar eventos
router.put('/:id', actualizarEvento);

// Actualizar eventos
router.delete('/:id', eliminarEvento);

module.exports = router;
