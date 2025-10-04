import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BottomNav from "@/components/BottomNav";

const Profile = () => {
  const navigate = useNavigate();

  const portfolio = [
    { id: 1 }, { id: 2 }, { id: 3 },
    { id: 4 }, { id: 5 }, { id: 6 },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="sticky top-0 bg-card border-b border-border z-10">
        <div className="max-w-lg mx-auto px-4 py-4 flex items-center">
          <button onClick={() => navigate('/feed')}>
            <ArrowLeft className="w-6 h-6" />
          </button>
        </div>
      </header>

      <main className="max-w-lg mx-auto">
        <div className="relative h-48 bg-accent">
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
            <div className="w-32 h-32 rounded-full bg-card border-4 border-card overflow-hidden">
              <div className="w-full h-full bg-accent"></div>
            </div>
          </div>
        </div>

        <div className="pt-20 px-6 text-center">
          <h1 className="text-2xl font-bold mb-1">Elara Vasconcelos</h1>
          <p className="text-sm text-muted-foreground mb-4">@elaravasco</p>
          <p className="text-sm mb-4 max-w-md mx-auto">
            Artesã de cerâmica, transformando argila em arte. Apaixonada por formas orgânicas e texturas naturais.
          </p>

          <div className="flex justify-center gap-8 mb-6">
            <div>
              <p className="text-xl font-bold">1.2k</p>
              <p className="text-xs text-muted-foreground">Seguidores</p>
            </div>
            <div>
              <p className="text-xl font-bold">543</p>
              <p className="text-xs text-muted-foreground">Seguindo</p>
            </div>
            <div>
              <p className="text-xl font-bold">128</p>
              <p className="text-xs text-muted-foreground">Publicações</p>
            </div>
          </div>

          <div className="flex gap-3 mb-6">
            <Button className="flex-1 bg-primary hover:bg-primary/90 rounded-full">
              Seguir
            </Button>
            <Button variant="outline" className="flex-1 rounded-full">
              Mensagem
            </Button>
          </div>
        </div>

        <div className="border-t border-border">
          <div className="flex border-b border-border">
            <button className="flex-1 py-3 text-sm font-semibold border-b-2 border-primary">
              Portfólio
            </button>
            <button className="flex-1 py-3 text-sm text-muted-foreground">
              Sobre
            </button>
            <button className="flex-1 py-3 text-sm text-muted-foreground">
              Contato
            </button>
          </div>

          <div className="grid grid-cols-3 gap-1 p-1">
            {portfolio.map((item) => (
              <div key={item.id} className="aspect-square bg-accent rounded-lg"></div>
            ))}
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Profile;
