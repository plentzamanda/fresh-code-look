import { Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import BottomNav from "@/components/BottomNav";
import groupPottery from "@/assets/group-pottery.jpg";
import groupWeaving from "@/assets/group-weaving.jpg";
import macrameArt from "@/assets/macrame-art.jpg";
import ceramicBowl from "@/assets/ceramic-bowl-1.jpg";

const Groups = () => {
  const featuredGroups = [
    {
      id: 1,
      name: "Artesanato em Cerâmica",
      members: "12.3k membros",
      description: "Um espaço para compartilhar criações, técnicas e inspirações de cerâmica.",
      image: groupPottery,
    },
    {
      id: 2,
      name: "Pintura em Tela",
      members: "8.7k membros",
      description: "Comunidade para artistas que amam pintar. Dicas, tutoriais e exposições.",
      image: groupWeaving,
    },
  ];

  const myGroups = [
    {
      id: 1,
      name: "Amantes de Crochê",
      lastActivity: "Última atividade há 2 horas",
      image: ceramicBowl,
    },
    {
      id: 2,
      name: "Macramê Moderno",
      lastActivity: "Última atividade há 4 horas",
      image: macrameArt,
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="sticky top-0 bg-card border-b border-border z-10">
        <div className="max-w-lg mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-primary font-['Brush_Script_MT']">
              Grupos
            </h1>
            <button>
              <Plus className="w-6 h-6" />
            </button>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar grupos..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-input border-0 focus:ring-2 focus:ring-primary outline-none"
            />
          </div>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 py-6">
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Descobrir</h2>
          <div className="space-y-4">
            {featuredGroups.map((group) => (
              <div key={group.id} className="bg-card rounded-2xl p-4 border border-border">
                <div className="flex gap-4 mb-3">
                  <img src={group.image} alt={group.name} className="w-20 h-20 rounded-xl object-cover flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{group.name}</h3>
                    <p className="text-xs text-muted-foreground">{group.members}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{group.description}</p>
                <Button className="w-full bg-primary hover:bg-primary/90 rounded-xl">
                  Entrar
                </Button>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">Seus Grupos</h2>
          <div className="space-y-3">
            {myGroups.map((group) => (
              <div
                key={group.id}
                className="bg-card rounded-2xl p-4 border border-border flex items-center gap-4"
              >
                <img src={group.image} alt={group.name} className="w-16 h-16 rounded-xl object-cover flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{group.name}</h3>
                  <p className="text-xs text-muted-foreground">{group.lastActivity}</p>
                </div>
                <button className="text-primary">›</button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
};

export default Groups;
