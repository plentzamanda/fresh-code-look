import { Heart, MessageCircle, Share2, Plus } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import { usePosts } from "@/hooks/usePosts";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Feed = () => {
  const { posts, isLoading } = usePosts();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

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
        {isLoading ? (
          <div className="p-4 text-center">Carregando...</div>
        ) : posts && posts.length > 0 ? (
          posts.map((post) => (
            <article key={post.id} className="bg-card border-b border-border">
              <div className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  {post.profiles?.avatar_url ? (
                    <img src={post.profiles.avatar_url} alt={post.profiles.full_name} className="w-full h-full rounded-full object-cover" />
                  ) : (
                    <User className="w-6 h-6 text-accent-foreground" />
                  )}
                </div>
                <div>
                  <p className="font-semibold">{post.profiles?.full_name || 'Usuário'}</p>
                  <p className="text-xs text-muted-foreground">@{post.profiles?.username || 'user'}</p>
                </div>
              </div>

              <img src={post.image_url} alt={post.caption || ''} className="aspect-square w-full object-cover" />

              <div className="p-4">
                <div className="flex items-center gap-4 mb-3">
                  <button className="flex items-center gap-1">
                    <Heart className="w-6 h-6" />
                    <span className="text-sm">{post.likes_count || 0}</span>
                  </button>
                  <button className="flex items-center gap-1">
                    <MessageCircle className="w-6 h-6" />
                    <span className="text-sm">{post.comments_count || 0}</span>
                  </button>
                  <button>
                    <Share2 className="w-6 h-6" />
                  </button>
                </div>
                {post.caption && (
                  <p className="text-sm">
                    <span className="font-semibold">{post.profiles?.full_name}</span> {post.caption}
                  </p>
                )}
              </div>
            </article>
          ))
        ) : (
          <div className="p-8 text-center text-muted-foreground">
            Nenhuma publicação ainda
          </div>
        )}
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
