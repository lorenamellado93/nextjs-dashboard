import { Metadata } from "next";
import { useState } from "react";
import { CartCounter } from "../../shopping-cart/components/CartCounter";

export const metadata: Metadata = {
	title: "Counter Page",
	description: "Contador simple",
};

export default function CounterPage() {
	return (
		<div className="flex flex-col items-center justify-center w-full h-full">
			<span>Productos del carrito</span>
			<CartCounter value={20} />
		</div>
	);
}
