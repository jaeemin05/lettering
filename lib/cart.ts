// 장바구니를 localStorage에 저장·조회하는 클라이언트 헬퍼
export type CartItem = { id: string; qty: number };

const KEY = "lettering-cart";
export const CART_EVENT = "cart:updated";

export function getCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = JSON.parse(window.localStorage.getItem(KEY) ?? "[]");
    return Array.isArray(raw) ? raw : [];
  } catch {
    return [];
  }
}

export function getCartCount(): number {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

export function addToCart(id: string): void {
  const cart = getCart();
  const item = cart.find((i) => i.id === id);
  if (item) {
    item.qty += 1;
  } else {
    cart.push({ id, qty: 1 });
  }
  window.localStorage.setItem(KEY, JSON.stringify(cart));
  window.dispatchEvent(new Event(CART_EVENT));
}
