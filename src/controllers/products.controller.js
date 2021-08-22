// importo la conexion a las db y las querys con las consultas
import { getConnection, sqlServer, queries } from "../database";

const getProducts = async (req, res) => {
    try {
        // obtengo un pool para la conexion del cliente
        const pool = await getConnection();

        // hago una consulta a la db
        const result = await pool.request()
            .query(queries.getAllProducts);

        res.json(result.recordsets);
    }
    catch (e) {
        res.status(500).send(`Error al obtener los productos...\n${e}`.red);
    }
}

const createProduct = async (req, res) => {
    try {
        const { producto, precio } = req.body;

        if (producto == null || precio == null) {
            return res.status(400).json({
                msg: 'Bad request, please fill all inputs'
            });
        }

        const pool = await getConnection();

        await pool.request()
            .input('producto', sqlServer.NVarChar(), producto)
            .input('precio', sqlServer.Money, precio)
            .query(queries.addNewProduct);

        res.json({
            "msg": "Create Product..",
            producto,
            precio
        });
    }
    catch (e) {
        res.status(500).send(`Error al crear el producto...\n${e}`.red);
    }
}

const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const pool = await getConnection();

        const result = await pool.request().input('id', id)
            .query(queries.getProductoById);

        res.send(result.recordset[0]);
    }
    catch (e) {
        res.status(500).send(`Error al obtener el producto - getProductById\n${e}`.red);
    }
}

const deleteProductById = async (req, res) => {
    try {
        const { id } = req.params;

        const pool = await getConnection();

        const result = await pool.request()
            .input('id', id)
            .query(queries.deleteProductoById);

        res.send(result);
    }
    catch (e) {
        res.status(500).send(`Error al eliminar el producto...\n${e}`.red);
    }
}

const getTotalProducts = async (req, res) => {
    const pool = await getConnection();

    const result = await pool.request()
                        .query(queries.getTotalProductos);

    res.json(result.recordset[0]['']);

}

const updateProductById = async (req, res) => {
    try {
        const { producto, precio } = req.body;

        const { id } = req.params;

        console.log({producto,precio,id});

        if (producto == null || precio == null) {
            res.status(400).json({ msg: 'Bad request, please fill all inputs' });
        }

        const pool = await getConnection();

        const result = await pool.request()
            .input('producto', sqlServer.NVarChar, producto)
            .input('precio', sqlServer.Money, precio)
            .input('id', sqlServer.Int, id)
            .query(queries.updateProductById);

        res.json({
            producto, precio
        });
    }
    catch (e) {
        res.status(500).send(`Error al actualizar el producto...\n${e}`.red);
    }
}

export {
    createProduct,
    getProducts,
    getProductById,
    deleteProductById,
    getTotalProducts,
    updateProductById
}
