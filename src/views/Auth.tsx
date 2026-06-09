import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';
import { ArrowRight, User as UserIcon, Lock, Sparkles, Smile, AtSign, AlignLeft, ShieldCheck, CheckCircle } from 'lucide-react';
import chicoImgLog from '@/chico-imagens/chico05.jpeg';

export function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const { user, updateProfile } = useAppStore();
  const navigate = useNavigate();

  // Form states
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('/chico01.png');
  const [errorSec, setErrorSec] = useState('');
  const [success, setSuccess] = useState(false);

  const PRESET_AVATARS = [
    '/chico01.png',
    '/chico2.png',
    '/chico03.png',
    '/chico04.png',
    '/chico05.png',
    '/chico06.png',
  ];

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorSec('');

    if (!username || !password) {
      setErrorSec('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    if (!isLogin && !name) {
      setErrorSec('Por favor, digite seu nome completo para se cadastrar.');
      return;
    }

    setSuccess(true);

    // Simulate login or signup by updating the store
    setTimeout(() => {
      if (!isLogin) {
        updateProfile({
          name: name,
          username: username.toLowerCase().replace(/\s+/g, ''),
          bio: bio || 'Guardião Digital em treinamento prontamente focado na segurança web.',
          avatarUrl: avatarUrl
        });
      } else {
        // If login, ensure we keep a valid existing user format
        updateProfile({
          name: name || user.name || 'Tiago Souza',
          username: username.toLowerCase().replace(/\s+/g, '') || user.username
        });
      }
      
      // Redirect to the onboarding flow
      navigate('/onboarding');
    }, 1500);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full bg-[#0a0a0b] overflow-x-hidden text-brand-cream relative">
      {/* Visual / Branding Sidebar */}
      <div className="hidden lg:flex lg:flex-1 relative bg-black items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 to-brand-purple/10 mix-blend-screen pointer-events-none z-10" />
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.55 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          src={chicoImgLog}
          alt="Chico do Rastro Autenticação" 
          className="absolute inset-0 w-full h-full object-cover filter saturate-50 contrast-125 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0a0a0b] z-20" />
        
        {/* Cinematic Content overlay */}
        <div className="relative z-30 max-w-lg px-12 text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand-gold/10 to-transparent border border-brand-gold/20 rounded-full w-fit">
              <ShieldCheck className="text-brand-gold animate-pulse" size={18} />
              <span className="text-xs font-bold tracking-widest uppercase text-brand-cream/80">Ambiente 100% Protegido</span>
            </div>
            
            <h1 className="text-5xl font-heading text-white leading-tight font-medium tracking-tight">
              Sua Identidade na<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-cream">Cidadania Digital</span>
            </h1>
            
            <p className="text-base text-brand-cream/65 leading-relaxed font-sans">
              Autentique-se para rastrear suas conquistas, desbloquear novos níveis de conhecimento prático e ter o Chico do Rastro como seu mentor no mundo digital.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Form container */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-20 xl:px-28 py-12 relative z-30 min-h-screen bg-[#0a0a0b]">
        <div className="w-full max-w-xl mx-auto lg:mx-0">
          
          {/* Logo Heading (Mobile and Desktop) */}
          <div className="mb-10 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center border border-brand-gold/20">
                <Sparkles size={20} className="text-brand-gold" />
              </div>
              <span className="font-heading text-xl uppercase tracking-widest text-white font-medium">Chico do Rastro</span>
            </div>
            <p className="text-sm text-brand-cream/50 font-sans uppercase tracking-widest">Portal de Autenticação</p>
          </div>

          {/* Success / Loading Screen */}
          <AnimatePresence mode="wait">
            {success ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center text-center py-16 px-6 bg-white/5 border border-white/10 rounded-[2rem] shadow-2xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent pointer-events-none" />
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className="w-16 h-16 rounded-full bg-brand-gold flex items-center justify-center mb-6 text-brand-black"
                >
                  <CheckCircle size={32} />
                </motion.div>
                <h3 className="text-2xl font-heading text-white mb-3">Conexão Estabelecida!</h3>
                <p className="text-sm text-brand-cream/60 max-w-sm font-sans">
                  {isLogin 
                    ? "Iniciando a sessão do seu guardião virtual..." 
                    : "Criando seu passaporte digital. Sincronizando com o Chico..."}
                </p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col gap-6"
              >
                {/* Tabs selection */}
                <div className="flex bg-white/5 border border-white/15 rounded-2xl p-1.5 mb-2">
                  <button 
                    type="button"
                    onClick={() => { setIsLogin(true); setErrorSec(''); }}
                    className={`flex-1 py-3 px-4 rounded-xl text-center text-sm font-bold uppercase tracking-wider transition-all duration-300 ${isLogin ? 'bg-brand-cream text-brand-black shadow-lg' : 'text-brand-cream/60 hover:text-white'}`}
                  >
                    Acessar
                  </button>
                  <button 
                    type="button"
                    onClick={() => { setIsLogin(false); setErrorSec(''); }}
                    className={`flex-1 py-3 px-4 rounded-xl text-center text-sm font-bold uppercase tracking-wider transition-all duration-300 ${!isLogin ? 'bg-brand-cream text-brand-black shadow-lg' : 'text-brand-cream/60 hover:text-white'}`}
                  >
                    Cadastrar-se
                  </button>
                </div>

                {errorSec && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/10 border border-red-500/30 text-red-200 text-xs rounded-xl font-medium tracking-wide font-sans"
                  >
                    {errorSec}
                  </motion.div>
                )}

                <form onSubmit={handleAuth} className="space-y-5">
                  <AnimatePresence mode="popLayout">
                    {/* Full Name field (Only on signup) */}
                    {!isLogin && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: -20 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-2 overflow-hidden"
                      >
                        <label className="text-[10px] font-black tracking-[0.2em] text-brand-cream/40 uppercase">Nome Completo</label>
                        <div className="relative">
                          <UserIcon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-cream/40" />
                          <input 
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Ex: Pedro Henrique"
                            className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-brand-gold/60 focus:ring-1 focus:ring-brand-gold/30 transition-all font-sans font-medium"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Username field */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black tracking-[0.2em] text-brand-cream/40 uppercase">
                      {isLogin ? 'Nome de Usuário ou Email' : 'Nome de Usuário (Como quer ser chamado)'}
                    </label>
                    <div className="relative">
                      <AtSign size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-cream/40" />
                      <input 
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Nome usual ou nick"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-brand-gold/60 focus:ring-1 focus:ring-brand-gold/30 transition-all font-sans font-medium"
                        required
                      />
                    </div>
                  </div>

                  {/* Password field */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-black tracking-[0.2em] text-brand-cream/40 uppercase">Sua Senha Secreta</label>
                    <div className="relative">
                      <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-cream/40" />
                      <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-brand-gold/60 focus:ring-1 focus:ring-brand-gold/30 transition-all font-sans font-medium"
                        required
                      />
                    </div>
                  </div>

                  <AnimatePresence mode="popLayout">
                    {/* Extra fields only on registration */}
                    {!isLogin && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: 20 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-5 overflow-hidden"
                      >
                        {/* Bio Field */}
                        <div className="space-y-2">
                          <label className="text-[10px] font-black tracking-[0.2em] text-brand-cream/40 uppercase">Fale sobre você (Bio Curta)</label>
                          <div className="relative">
                            <AlignLeft size={18} className="absolute left-4 top-4 text-brand-cream/40" />
                            <textarea 
                              value={bio}
                              onChange={(e) => setBio(e.target.value)}
                              placeholder="Adoro tecnologia, amo navegar com segurança e aprender sobre direitos digitais!"
                              className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-3 min-h-[80px] text-white focus:outline-none focus:border-brand-gold/60 transform transition-all font-sans font-medium text-sm resize-none"
                            />
                          </div>
                        </div>

                        {/* Avatares Oficiais Chico selector */}
                        <div className="space-y-3 pt-2">
                          <label className="text-[10px] font-black tracking-[0.2em] text-brand-cream/40 uppercase flex items-center gap-1.5">
                            <Smile size={12} className="text-brand-gold animate-bounce" /> Escolha seu Chico Oficial
                          </label>
                          <div className="grid grid-cols-6 gap-3">
                            {PRESET_AVATARS.map((url, idx) => (
                              <button
                                key={idx}
                                type="button"
                                onClick={() => setAvatarUrl(url)}
                                className={`aspect-square rounded-xl overflow-hidden border-2 bg-black/45 transition-all duration-300 relative ${
                                  avatarUrl === url 
                                    ? 'border-brand-gold scale-110 shadow-[0_0_12px_rgba(212,163,115,0.45)] z-10' 
                                    : 'border-white/5 opacity-60 hover:opacity-100 hover:border-white/10'
                                }`}
                              >
                                <img src={url} alt={`Preset Avatar ${idx + 1}`} className="w-full h-full object-cover object-top" />
                              </button>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submission and Action */}
                  <div className="pt-6">
                    <button 
                      type="submit"
                      className="flex items-center justify-center gap-3 w-full py-4.5 bg-brand-cream text-brand-black rounded-2xl font-bold uppercase tracking-widest text-xs hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-[0_0_20px_rgba(243,233,210,0.15)] group"
                    >
                      {isLogin ? 'Desbloquear Acesso' : 'Finalizar Cadastro'}
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </form>

                {/* Footer disclaimer */}
                <p className="text-center text-xs text-brand-cream/35 mt-6 leading-relaxed">
                  Ao continuar, você concorda com os princípios de respeito mútuo, ética digital e o compromisso em zelar pela cidadania online.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
}
