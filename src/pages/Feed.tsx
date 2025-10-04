import { Heart, MessageCircle, Share2, Plus } from "lucide-react";
import BottomNav from "@/components/BottomNav";

const Feed = () => {
  const posts = [
    {
      id: 1,
      author: "Joana Silva",
      location: "São Paulo, Brasil",
      image: "ceramic-pot",
      likes: "1.2k",
      comments: 83,
      caption: "Finalizando mais uma encomenda especial ✨ Cada detalhe feito com muito amor.",
    },
    {
      id: 2,
      author: "Carlos Pereira",
      location: "Oficina de Macramê",
      image: "ceramic-vase",
      likes: 847,
      comments: 56,
      caption: "Nova coleção de vasos minimalistas! O que acharam? 🏺",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <header className="sticky top-0 bg-card border-b border-border z-10">
        <div className="max-w-lg mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary font-['Brush_Script_MT']">
            Maprol
          </h1>
          <div className="flex gap-4">
            <button className="text-foreground">
              <Plus className="w-6 h-6" />
            </button>
            <button className="text-foreground">
              <Heart className="w-6 h-6" />
            </button>
            <button className="text-foreground">
              <Share2 className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-lg mx-auto">
        {posts.map((post) => (
          <article key={post.id} className="bg-card border-b border-border">
            <div className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <User className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <p className="font-semibold">{post.author}</p>
                <p className="text-xs text-muted-foreground">{post.location}</p>
              </div>
            </div>

            <div className="aspect-square bg-accent"></div>

            <div className="p-4">
              <div className="flex items-center gap-4 mb-3">
                <button className="flex items-center gap-1">
                  <Heart className="w-6 h-6" />
                  <span className="text-sm">{post.likes}</span>
                </button>
                <button className="flex items-center gap-1">
                  <MessageCircle className="w-6 h-6" />
                  <span className="text-sm">{post.comments}</span>
                </button>
                <button>
                  <Share2 className="w-6 h-6" />
                </button>
              </div>
              <p className="text-sm">
                <span className="font-semibold">{post.author}</span> {post.caption}
              </p>
              <button className="text-sm text-muted-foreground mt-2">
                Ver todos os {post.comments} comentários
              </button>
            </div>
          </article>
        ))}
      </main>

      <BottomNav />
    </div>
  );
};

const User = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="8" r="4" fill="currentColor"/>
    <path d="M6 21c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export default Feed;
