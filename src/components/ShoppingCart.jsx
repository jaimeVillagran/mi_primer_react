import React, { useState } from "react";
import "./ShoppingCart.css";

const initialCart = [];

const ShoppingCart = () => {
	const [cart, setCart] = useState(initialCart);

	const addProduct = (newProduct) => {
		newProduct.id = Date.now();
		const changedCart = [...cart, newProduct];
		setCart(changedCart);
	};

	const deleteProduct = (productId) => {
		const changedCart = cart.filter((product) => product.id !== productId);
		setCart(changedCart);
	};

	const mostrarDatos = () => {
		console.log("Mostrar datos");
	};

	const updateProduct = (updateProduct) => {
		const changedCart = cart.map((product) =>
			product.id === updateProduct.id ? updateProduct : product
		);
		setCart(changedCart);
	};

	return (
		<div>
			<h1>Shopping Cart</h1>
			<button onClick={mostrarDatos}></button>
			<button
				className="btn_add"
				onClick={() =>
					addProduct({
						title: "Product",
						description: "Descripción del producto",
					})
				}>
				Agregar
			</button>

			{cart.map((product) => (
				<div key={product.id}>
					<h2>
						{product.id} {product.title}
					</h2>
					<p>{product.description}</p>
					<button
						className="btn_delete"
						onClick={() => deleteProduct(product.id)}>
						Borrar
					</button>
					<button
						className="btn_update"
						onClick={() =>
							updateProduct({
								id: product.id,
								title: "Product edited",
								description: "Descripción del producto editado",
							})
						}>
						Actualizar
					</button>
				</div>
			))}
			<div>
				<pre>{JSON.stringify(cart, true, 2)}</pre>
			</div>
		</div>
	);
};

export default ShoppingCart;
