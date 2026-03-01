"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type CartItem = {
	id: string;
	image: string;
	title: string;
	slug: string;
	price: number | string;
};

export type CartState = {
	items: CartItem[];
	addToCart: (item: CartItem) => void;
	removeFromCart: (id: string) => void;
	clearCart: () => void;
};

export const useCartStore = create<CartState>()(
	persist(
		(set, get) => ({
			items: [],
			addToCart: (item) => {
				const exists = get().items.some((i) => i.id === item.id);
				if (exists) return; // avoid duplicates
				set({ items: [...get().items, item] });
			},
			removeFromCart: (id) =>
				set({ items: get().items.filter((i) => i.id !== id) }),
			clearCart: () => set({ items: [] }),
		}),
		{
			name: "cart-store",
			storage: createJSONStorage(() => localStorage),
			partialize: (state) => ({ items: state.items }),
		}
	)
);

// Handy selector to check membership without rerendering whole tree
export const useIsInCart = (id: string) =>
	useCartStore((s) => s.items.some((i) => i.id === id));
