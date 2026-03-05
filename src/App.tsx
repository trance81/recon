import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Building2, 
  TrendingUp, 
  ShieldCheck, 
  MapPin, 
  Users, 
  ChevronRight,
  Menu,
  X,
  FileText,
  CheckCircle2
} from 'lucide-react';

const logoUrl = new URL('/ReCon_logo.png', import.meta.url).href;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-1 shadow-sm' : 'bg-transparent py-1'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center gap-1.5 md:gap-2 min-w-0">
          <img 
            src={logoUrl}
            alt="ReCon 로고" 
            className="w-16 h-16 md:w-25 md:h-25 object-contain shrink-0"
          />
          <span className="text-sm md:text-xl font-bold tracking-tighter uppercase text-slate-900 truncate">B1블록 재건축 동의서 안내</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {['기회', '비교', '안심', '동의안내'].map((item) => (
            <a key={item} href={`#${item}`} className={`text-sm font-medium transition-colors ${isScrolled ? 'text-slate-600 hover:text-slate-900' : 'text-slate-700 hover:text-slate-900'}`}>
              {item}
            </a>
          ))}
          <a 
            href="https://receiver.chongone.com/noNumber/group/2144" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-5 py-2 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-slate-800 transition-all"
          >
            동의서 작성하기
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900 p-2 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl p-6 flex flex-col gap-5 md:hidden border-b border-slate-200 shadow-xl"
          >
            {['기회', '비교', '안심', '동의안내'].map((item) => (
              <a key={item} href={`#${item}`} className="text-base font-medium text-slate-600 py-1" onClick={() => setIsMobileMenuOpen(false)}>
                {item}
              </a>
            ))}
            <a 
              href="https://receiver.chongone.com/noNumber/group/2144" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl text-center"
            >
              동의서 작성하기
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 md:pt-28 pb-12 md:pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-64 md:w-96 h-64 md:h-96 bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-64 md:w-96 h-64 md:h-96 bg-slate-500/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-5 md:mb-8 text-slate-500">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-slate-400 animate-pulse" />
            Bupyeong · Galsan B1 Block
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-[1.15] md:leading-[1.1] mb-8 md:mb-12 text-gradient max-w-4xl">
            부평·갈산 B1블록의 미래,<br />
            주민 여러분의 동의서가 시작입니다!
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
            {[
              {
                q: "지금 작성하는 동의서는?",
                a: "선도지구 공모 신청을 위한 '의향 확인' 단계입니다.",
                icon: FileText
              },
              {
                q: "부담 갖지 마세요!",
                a: "지금 동의한다고 해서 바로 분담금이 발생하거나 이사를 가야 하는 것이 아닙니다.",
                icon: ShieldCheck
              },
              {
                q: "왜 지금인가요?",
                a: "이번 기회를 놓치면 우리 아파트의 재건축 순번이 기약 없이 밀릴 수 있기 때문입니다.",
                icon: TrendingUp
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="glass p-4 md:p-6 rounded-xl md:rounded-2xl border-slate-200 hover:bg-slate-50 transition-colors"
              >
                <div className="w-9 h-9 md:w-10 md:h-10 bg-slate-100 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                  <item.icon className="w-4 h-4 md:w-5 md:h-5 text-slate-700" />
                </div>
                <h4 className="font-bold text-slate-900 mb-1.5 md:mb-2 text-sm md:text-base">{item.q}</h4>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col gap-5 md:gap-8 md:flex-row md:items-center">
            <div className="flex flex-col gap-3 md:gap-4 md:flex-row w-full md:w-auto">
              <a 
                href="https://receiver.chongone.com/noNumber/group/2144" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3.5 md:px-8 md:py-4 bg-slate-900 text-white font-bold rounded-xl flex items-center justify-center gap-2 group hover:scale-105 transition-transform whitespace-nowrap text-sm md:text-base"
              >
                동의서 온라인 작성 <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="px-6 py-3.5 md:px-8 md:py-4 glass text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-colors whitespace-nowrap text-sm md:text-base">
                목표 동의율 100%
              </button>
            </div>
            <p className="text-base md:text-lg font-medium text-slate-700 italic border-l-2 border-slate-200 pl-4 md:pl-6 py-2">
              "우리 단지의 가치를 높이는 일,<br className="hidden sm:block" /> 1분의 참여로 시작됩니다."
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 hidden md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400">Scroll to explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-slate-300 to-transparent" />
      </motion.div>
    </section>
  );
};

const Opportunity = () => {
  return (
    <section id="기회" className="py-16 md:py-32 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-slate-400 mb-4 md:mb-6">Section 1. Opportunity</div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-5 md:mb-8 leading-tight text-slate-900">
              인천시가 보증하는 '특별 재건축',<br />부평·갈산 지구가 주인공입니다!
            </h2>
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-slate-600 leading-relaxed mb-8 md:mb-12">
              <p>
                "30년 된 우리 아파트, 그동안 왜 안 됐을까요?<br />
                법이 어려웠기 때문입니다."
              </p>
              <p>
                "이제 <span className="text-slate-900 font-bold">'노후계획도시 정비법'</span>으로<br />
                국가가 직접 나서서 도와줍니다."
              </p>
              <p>
                "녹물 나는 배관, 부족한 주차장, 층간소음...<br />
                이제 새집에서 해결하세요."
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 md:gap-4">
              <div className="flex items-center gap-2 px-3 md:px-4 py-2 bg-slate-100 rounded-full text-xs md:text-sm font-bold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> 노후계획도시 정비법 적용
              </div>
              <div className="flex items-center gap-2 px-3 md:px-4 py-2 bg-slate-100 rounded-full text-xs md:text-sm font-bold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> 용적률 인센티브 확보
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl md:rounded-[40px] overflow-hidden shadow-2xl border-4 md:border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop" 
                alt="Modern Apartment Bird's Eye View" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative mt-4 md:absolute md:-bottom-6 md:-left-6 glass p-4 md:p-6 rounded-xl md:rounded-2xl shadow-xl md:max-w-[200px]">
              <p className="text-sm font-bold text-slate-900 leading-tight">
                부평·갈산의 밝은 미래를 설계합니다.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Comparison = () => {
  return (
    <section id="비교" className="py-16 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-20">
          <div className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-slate-400 mb-4 md:mb-6">Section 2. Comparison</div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 md:mb-8 text-slate-900">'선도지구' 선정의 차이</h2>
          <p className="text-base md:text-lg text-slate-600">
            정부가 '가장 먼저' 지원하는 선도지구, 일반 재건축과는 차원이 다릅니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {[
            {
              title: "속도",
              headline: "남들은 20년, 우리는 초고속!",
              desc: "정부 지원으로 절차 대폭 단축",
              icon: TrendingUp,
              color: "bg-blue-50"
            },
            {
              title: "가치",
              headline: "인천 1등 아파트의 자부심",
              desc: "가장 먼저 새 아파트가 되어 가치 선점",
              icon: Building2,
              color: "bg-emerald-50"
            },
            {
              title: "혜택",
              headline: "더 높고 넓은 새집",
              desc: "용적률 인센티브로 층수 제한 완화",
              icon: ShieldCheck,
              color: "bg-purple-50"
            }
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-6 md:p-10 rounded-2xl md:rounded-[32px] border-slate-200 flex flex-col items-center text-center group hover:bg-white hover:shadow-2xl transition-all duration-500"
            >
              <div className={`w-12 h-12 md:w-16 md:h-16 ${card.color} rounded-xl md:rounded-2xl flex items-center justify-center mb-5 md:mb-8 group-hover:scale-110 transition-transform`}>
                <card.icon className="w-6 h-6 md:w-8 md:h-8 text-slate-900" />
              </div>
              <div className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 md:mb-4">{card.title}</div>
              <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4 text-slate-900 leading-tight">{card.headline}</h3>
              <p className="text-sm md:text-base text-slate-600 font-medium">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="안심" className="py-16 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-20">
          <div className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-slate-400 mb-4 md:mb-6">Section 3. Reassurance</div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 md:mb-8 text-slate-900">가장 궁금해하시는 3가지</h2>
        </div>

        <div className="space-y-3 md:space-y-4">
          {[
            {
              q: "지금 동의하면 당장 돈 내나요?",
              a: "아닙니다! 지금은 '신청 단계'일 뿐, 비용 부담은 한참 뒤에나 결정됩니다."
            },
            {
              q: "나중에 마음 바뀌면 어떡하죠?",
              a: "괜찮습니다! 앞으로 주민 투표 기회가 여러 번 더 남아있습니다. 지금은 권리를 챙기는 단계입니다."
            },
            {
              q: "당장 이사 가야 하나요?",
              a: "아닙니다! 실제 공사까지는 수년간의 꼼꼼한 계획 기간이 먼저 진행됩니다."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl md:rounded-3xl border border-slate-200 overflow-hidden transition-all duration-300"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-5 md:p-8 text-left flex justify-between items-center hover:bg-slate-50 transition-colors gap-4"
              >
                <h4 className="text-base md:text-xl font-bold text-slate-900 flex gap-2 md:gap-4">
                  <span className="text-emerald-600 font-black shrink-0">Q{i+1}.</span> {item.q}
                </h4>
                <ChevronRight className={`w-5 h-5 md:w-6 md:h-6 text-slate-400 transition-transform duration-300 shrink-0 ${openIndex === i ? 'rotate-90' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-5 pb-5 md:px-8 md:pb-8 text-base md:text-lg text-slate-600 leading-relaxed border-t border-slate-100 pt-4 md:pt-6">
                      <div className="flex gap-2 md:gap-4">
                        <span className="text-slate-900 font-black shrink-0">A.</span>
                        {item.a}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 md:mt-20 p-6 md:p-10 rounded-2xl md:rounded-[40px] bg-slate-900 text-white text-center shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16 blur-3xl" />
          
          <p className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight relative z-10">
            "지금 1분의 투자가<br className="md:hidden" /> 10년의 기다림을 줄입니다."
          </p>
          <p className="mt-3 md:mt-4 text-slate-400 text-base md:text-lg relative z-10">우리 가족의 미래를 위해 지금 참여해 주세요.</p>
        </motion.div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section id="동의안내" className="py-16 md:py-32 relative overflow-hidden bg-slate-50">
      <div className="absolute inset-0 bg-slate-900 opacity-[0.02]" />
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="glass p-8 md:p-12 lg:p-20 rounded-2xl md:rounded-[40px] text-center shadow-2xl">
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-5 md:mb-8 tracking-tight text-slate-900">
            지금, 당신의 동의가<br />미래의 가치를 결정합니다.
          </h2>
          <p className="text-base md:text-xl text-slate-700 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
            더 나은 내일을 위한 첫 걸음, 재건축 동의서 작성에 참여해 주세요.<br className="hidden md:block" />
            온라인으로 1분이면 충분합니다.
          </p>
          <div className="flex flex-col gap-3 md:gap-6 md:flex-row justify-center">
            <a 
              href="https://receiver.chongone.com/noNumber/group/2144" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-4 md:px-10 md:py-5 bg-slate-900 text-white font-bold rounded-xl md:rounded-2xl flex items-center justify-center gap-2 md:gap-3 text-sm md:text-lg hover:scale-105 transition-transform shadow-lg"
            >
              <FileText className="w-5 h-5 md:w-6 md:h-6" /> 동의서 온라인 작성하기
            </a>
            <button className="px-6 py-4 md:px-10 md:py-5 glass text-slate-900 font-bold rounded-xl md:rounded-2xl flex items-center justify-center gap-2 md:gap-3 text-sm md:text-lg hover:bg-slate-100 transition-colors">
              <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" /> 목표 동의율 100%+
            </button>
          </div>
          <div className="mt-8 md:mt-12 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8 text-slate-400 text-xs md:text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 보안 인증 완료
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 간편 본인 확인
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-5 border-t border-slate-200 bg-slate-50 pb-24 md:pb-5">
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-20">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4 md:mb-6">            
            <div className="flex items-center gap-1.5 md:gap-2">
              <img 
                src={logoUrl}
                alt="ReCon 로고" 
                className="w-16 h-16 md:w-25 md:h-25 object-contain"
              />
              <span className="text-sm md:text-xl font-bold tracking-tighter uppercase text-slate-900">B1블록 재건축 동의서 안내</span>
            </div>
          </div>
          <p className="text-slate-500 max-w-sm text-sm md:text-base">
          동의서가 시작입니다!
          </p>
        </div>                
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 pt-6 md:pt-10 border-t border-slate-200 text-[10px] uppercase tracking-widest text-slate-400">
        <div>2026 Bupyeong Galsan B1 Reconstruction.</div>        
      </div>
    </div>
  </footer>
);

const MobileBottomCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-3 safe-area-bottom"
        >
          <a
            href="https://receiver.chongone.com/noNumber/group/2144"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 bg-slate-900 text-white font-bold rounded-xl flex items-center justify-center gap-2 text-sm shadow-lg active:scale-[0.98] transition-transform"
          >
            <FileText className="w-4 h-4" /> 동의서 온라인 작성하기
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <Opportunity />
        <Comparison />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <MobileBottomCTA />
    </div>
  );
}
