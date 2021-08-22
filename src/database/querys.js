export const queries  = {
    // consultas productos
    getAllProducts: "SELECT * FROM products",
    addNewProduct: "INSERT INTO products (producto, precio) VALUES(@producto, @precio)",
    getProductoById: "SELECT * FROM products WHERE id = @id",
    deleteProductoById: "DELETE FROM products WHERE id = @id",
    getTotalProductos: "SELECT COUNT(*) FROM products",
    updateProductById: "UPDATE products SET producto = @producto, precio = @precio WHERE id = @id",
    // consultas login
    addUser: "INSERT INTO usuarios (username, email, password) VALUES(@username, @email, @password)",
    findUserByEmail: "SELECT count(*) FROM usuarios WHERE email = @email",
}
