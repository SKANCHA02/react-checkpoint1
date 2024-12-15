import React from "react";
import { product } from "../product";

const Image = () => {
	return (
		<div>
			<img class="chauss" src={product.image} alt="louboutin"  />
		</div>
	);
};

export default Image;