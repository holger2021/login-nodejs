import { Router } from 'express';

// importamos funciones para las rutas desde controller para cada grupo de rutas
import * as authCtrl from '../controllers/auth.controller';


// Inicializamos
const router = Router();

router.post('/signup', authCtrl.signup);
router.post('/singin', authCtrl.signin);

export default router;
