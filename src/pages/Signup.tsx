import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

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

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Nome Completo</label>
              <input
                type="text"
                placeholder="Seu nome completo"
                className="w-full px-4 py-3 rounded-lg bg-input border-0 focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">E-mail</label>
              <input
                type="email"
                placeholder="seuemail@exemplo.com"
                className="w-full px-4 py-3 rounded-lg bg-input border-0 focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Senha</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg bg-input border-0 focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Confirmar Senha</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg bg-input border-0 focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            <Button 
              onClick={() => navigate('/feed')}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 rounded-xl text-base font-semibold mt-6"
            >
              Criar Conta
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              Já tem uma conta?{" "}
              <button 
                onClick={() => navigate('/')}
                className="text-primary font-semibold hover:underline"
              >
                Entrar
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
