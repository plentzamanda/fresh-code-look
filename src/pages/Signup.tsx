import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";

const Signup = () => {
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      return alert("As senhas não coincidem");
    }

    const username = formData.email.split("@")[0];
    await signUp(formData.email, formData.password, formData.fullName, username);
  };

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-3xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-primary mb-1 font-['Brush_Script_MT']">
              Maprol
            </h1>
            <p className="text-sm text-muted-foreground">Crie sua conta</p>
          </div>

          <h2 className="text-2xl font-bold mb-6">Cadastre-se</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Nome Completo</label>
              <input
                type="text"
                placeholder="Seu nome completo"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg bg-input border-0 focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">E-mail</label>
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
              <label className="block text-sm font-medium mb-2">Senha</label>
              <input
                type="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
                minLength={6}
                className="w-full px-4 py-3 rounded-lg bg-input border-0 focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Confirmar Senha</label>
              <input
                type="password"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                required
                minLength={6}
                className="w-full px-4 py-3 rounded-lg bg-input border-0 focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            <Button 
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 rounded-xl text-base font-semibold mt-6"
            >
              Criar Conta
            </Button>

            <p className="text-sm text-muted-foreground text-center mt-4">
              Já tem uma conta?{" "}
              <button 
                onClick={() => navigate('/')}
                className="text-primary font-semibold hover:underline"
              >
                Entrar
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
