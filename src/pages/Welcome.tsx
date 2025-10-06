import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useState, useEffect } from "react";

const Welcome = () => {
  const navigate = useNavigate();
  const { signIn, user } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (user) {
      navigate('/feed');
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn(formData.email, formData.password);
  };

  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-3xl p-8 shadow-lg text-center">
          <h1 className="text-5xl font-bold text-primary mb-2 font-['Brush_Script_MT']">
            Maprol
          </h1>
          
          <div className="my-12">
            <h2 className="text-2xl font-semibold mb-2">Seja bem-vindo!</h2>
            <p className="text-muted-foreground">Entre para continuar</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-left text-sm font-medium mb-2">E-mail</label>
              <input
                type="email"
                placeholder="seuemail@exemplo.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg bg-input border-0 focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            <div>
              <label className="block text-left text-sm font-medium mb-2">Senha</label>
              <input
                type="password"
                placeholder="Sua senha"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg bg-input border-0 focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            <Button 
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 rounded-xl text-base font-semibold"
            >
              Entrar
            </Button>

            <p className="text-sm text-muted-foreground">
              Não tem uma conta?{" "}
              <button 
                type="button"
                onClick={() => navigate('/signup')}
                className="text-primary font-semibold hover:underline"
              >
                Cadastre-se
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
