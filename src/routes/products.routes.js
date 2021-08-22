import { Router } from 'express';
// importamos funciones para las rutas desde controller para cada grupo de rutas
import * as productsCtrl from '../controllers/products.controller';

// Inicializamos
const router = Router();

router.post('/', productsCtrl.createProduct);
router.get('/', productsCtrl.getProducts);
router.get('/:id', productsCtrl.getProductById);
router.delete('/:id', productsCtrl.deleteProductById);
router.post('/count', productsCtrl.getTotalProducts);
router.put('/:id', productsCtrl.updateProductById);

export default router;
