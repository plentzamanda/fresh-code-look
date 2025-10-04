import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BottomNav from "@/components/BottomNav";

const Cart = () => {
  const navigate = useNavigate();

  const cartItems = [
    {
      id: 1,
      name: "Vaso de cerâmica...",
      quantity: 1,
      price: 45.0,
    },
    {
      id: 2,
      name: "Cesta de vime tecida à...",
      quantity: 2,
      price: 60.0,
    },
    {
      id: 3,
      name: "Colar de miçangas...",
      quantity: 1,
      price: 25.0,
    },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 10.0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="sticky top-0 bg-card border-b border-border z-10">
        <div className="max-w-lg mx-auto px-4 py-4 flex items-center">
          <button onClick={() => navigate('/feed')}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold ml-4">Carrinho</h1>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 py-6">
        <div className="space-y-4 mb-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex gap-4 bg-card rounded-2xl p-4 border border-border">
              <div className="w-20 h-20 rounded-xl bg-accent flex-shrink-0"></div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">{item.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Quantidade: {item.quantity}
                </p>
                <p className="font-bold">R$ {item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-6 border border-border mb-6">
          <h2 className="text-lg font-bold mb-4">Resumo do pedido</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span>R$ {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Frete</span>
              <span>R$ {shipping.toFixed(2)}</span>
            </div>
            <div className="border-t border-border pt-2 mt-2">
              <div className="flex justify-between font-bold text-base">
                <span>Total</span>
                <span>R$ {total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        <Button className="w-full bg-[#FF8C00] hover:bg-[#FF8C00]/90 text-white py-6 rounded-xl text-base font-semibold">
          Finalizar compra
        </Button>
      </main>

      <BottomNav />
    </div>
  );
};

export default Cart;
