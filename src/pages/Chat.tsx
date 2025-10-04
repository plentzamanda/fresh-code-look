import { Search } from "lucide-react";
import BottomNav from "@/components/BottomNav";

const Chat = () => {
  const conversations = [
    {
      id: 1,
      name: "Ana Maria",
      message: "Olá! Tudo bem? Vi seu trabalho de cerâmica e adorei!",
      time: "16:42",
      unread: true,
      badge: 2,
    },
    {
      id: 2,
      name: "Carlos Andrade",
      message: "Combinado! Te mando as fotos amanhã.",
      time: "Ontem",
      unread: false,
    },
    {
      id: 3,
      name: "Artesanato Criativo",
      message: "Você: Perfeito, obrigado!",
      time: "Sexta",
      unread: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="sticky top-0 bg-card border-b border-border z-10">
        <div className="max-w-lg mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">Conversas</h1>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar conversas..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-input border-0 focus:ring-2 focus:ring-primary outline-none"
            />
          </div>
        </div>
      </header>

      <main className="max-w-lg mx-auto">
        {conversations.map((chat) => (
          <div
            key={chat.id}
            className="px-4 py-4 border-b border-border flex items-center gap-3 hover:bg-accent/50 cursor-pointer"
          >
            <div className="relative">
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                <span className="text-xl">{chat.name[0]}</span>
              </div>
              {chat.unread && (
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-xs text-primary-foreground font-bold">
                    {chat.badge}
                  </span>
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold truncate">{chat.name}</h3>
                <span className="text-xs text-muted-foreground">{chat.time}</span>
              </div>
              <p className="text-sm text-muted-foreground truncate">{chat.message}</p>
            </div>
          </div>
        ))}
      </main>

      <BottomNav />
    </div>
  );
};

export default Chat;
