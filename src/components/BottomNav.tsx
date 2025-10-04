import { Home, Users, MessageCircle, ShoppingCart, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Home, label: "Início", path: "/feed" },
    { icon: Users, label: "Grupos", path: "/groups" },
    { icon: MessageCircle, label: "Chat", path: "/chat" },
    { icon: ShoppingCart, label: "Loja", path: "/cart" },
    { icon: User, label: "Perfil", path: "/profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
      <div className="flex justify-around items-center h-16 max-w-lg mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Icon className={`w-6 h-6 ${isActive ? "fill-current" : ""}`} />
              <span className="text-xs mt-1">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
