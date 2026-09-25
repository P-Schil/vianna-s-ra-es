import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Award, BookOpen, ChevronLeft, ChevronRight, Clock3, HeartHandshake, Lightbulb, MapPin, MessageCircle, PackageCheck, PawPrint, ShoppingBag, Star, Truck } from "lucide-react";

export const Route = createFileRoute("/")({ component: Index });

const whatsapp = "https://wa.me/5582999672475";
const instagram = "https://www.instagram.com/vianasracoes/";

const slides = [
  { title: "Rações para diferentes necessidades", text: "Encontre opções para cães, gatos e outros pets, com orientação para escolher de acordo com a rotina e o perfil do animal.", image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=1200&q=85" },
  { title: "Produtos para a rotina do seu pet", text: "Acessórios e itens para alimentação, passeio, conforto e cuidados do dia a dia.", image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=1200&q=85" },
  { title: "Informação também faz parte do cuidado", text: "Dicas e orientações para ajudar você a tomar decisões mais conscientes sobre alimentação e cuidados.", image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=85" },
];

const tips = [
  { icon: Lightbulb, title: "Como escolher uma ração?", text: "Considere espécie, idade, porte, rotina e necessidades do animal antes de decidir." },
  { icon: PawPrint, title: "Observe seu pet", text: "Mudanças de apetite, rotina ou comportamento merecem atenção e, quando necessário, orientação profissional." },
  { icon: PackageCheck, title: "Produto certo para cada rotina", text: "Nem sempre o produto mais caro é o mais adequado. O importante é entender a necessidade do pet." },
];

function Index() {
  const [slide, setSlide] = useState(0);
  const current = slides[slide];
  const next = () => setSlide((value) => (value + 1) % slides.length);
  const previous = () => setSlide((value) => (value - 1 + slides.length) % slides.length);

  return (
    <main className="min-h-screen bg-white text-[#452602]">
      <header className="sticky top-0 z-50 border-b border-[#452602]/10 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#inicio" className="flex items-center gap-2 font-black tracking-tight"><span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#ff8800] text-white"><PawPrint size={22} /></span><span className="text-xl sm:text-2xl">Viana's Rações</span></a>
          <nav className="hidden items-center gap-7 text-sm font-semibold md:flex" aria-label="Navegação principal"><a href="#sobre" className="hover:text-[#ff8800]">Sobre</a><a href="#produtos" className="hover:text-[#ff8800]">Produtos</a><a href="#orientacao" className="hover:text-[#ff8800]">Orientação</a><a href="#contato" className="hover:text-[#ff8800]">Contato</a></nav>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="hidden rounded-full bg-[#452602] px-5 py-2.5 text-sm font-bold text-white sm:inline-flex">Fale Conosco</a>
        </div>
      </header>

      <section id="inicio" className="overflow-hidden bg-[#fff7ef]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-24">
          <div>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#ff8800]/10 px-4 py-2 text-sm font-bold text-[#9a5100]"><PawPrint size={16} /> O lugar dos melhores produtos para sua melhor companhia</span>
            <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">Rações e produtos escolhidos para cuidar melhor do seu pet.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#452602]/75">A Viana's Rações ajuda tutores a encontrar boas opções de alimentação, produtos e cuidados para seus animais, com atendimento próximo e orientação clara.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff8800] px-7 py-4 font-black text-white shadow-lg shadow-orange-200 hover:bg-[#e97900]">Falar com vendedor <ArrowRight size={19} /></a><a href="#produtos" className="inline-flex items-center justify-center rounded-full border-2 border-[#452602] px-7 py-4 font-bold hover:bg-[#452602] hover:text-white">Conhecer produtos</a></div>
            <div className="mt-8 flex flex-wrap gap-5 text-sm font-semibold text-[#452602]/70"><span className="inline-flex items-center gap-2"><MapPin size={17} /> Rio Largo - AL</span><span className="inline-flex items-center gap-2"><Clock3 size={17} /> Seg. a sáb. 08h-12h e 14h-21h</span></div>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1400&q=85" alt="Cachorro em ambiente acolhedor para pets" className="relative h-[440px] w-full rounded-[2.5rem] object-cover shadow-2xl lg:h-[560px]" loading="eager" />
            <div className="absolute bottom-5 left-5 rounded-2xl bg-white/95 p-4 shadow-xl"><div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-[#ff8800] text-white"><HeartHandshake size={21} /></span><div><p className="font-black">Atendimento próximo</p><p className="text-sm text-[#452602]/60">Para escolher melhor</p></div></div></div>
          </div>
        </div>
      </section>

      <section id="sobre" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div><span className="text-sm font-black uppercase tracking-[0.18em] text-[#ff8800]">Sobre a Viana's</span><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Mais do que vender ração: ajudar você a escolher melhor.</h2><p className="mt-6 leading-8 text-[#452602]/75">A Viana's Rações trabalha para oferecer produtos para pets e construir uma relação de confiança com quem cuida deles todos os dias.</p><p className="mt-4 leading-8 text-[#452602]/75">O foco está em rações, acessórios e produtos para a rotina dos animais, sempre com atendimento personalizado e disposição para explicar as opções de forma clara.</p><div className="mt-8 grid grid-cols-2 gap-4"><div className="rounded-2xl bg-[#fff7ef] p-5"><ShoppingBag className="text-[#ff8800]" /><p className="mt-3 font-black">Produtos selecionados</p><p className="mt-1 text-sm text-[#452602]/65">Para diferentes necessidades.</p></div><div className="rounded-2xl bg-[#fff7ef] p-5"><HeartHandshake className="text-[#ff8800]" /><p className="mt-3 font-black">Orientação próxima</p><p className="mt-1 text-sm text-[#452602]/65">Ajuda para escolher melhor.</p></div></div></div>
          <img src="https://images.unsplash.com/photo-1599443015574-ec8c0c2c7b9d?auto=format&fit=crop&w=1200&q=85" alt="Tutor com cachorro em momento de cuidado" className="h-[470px] w-full rounded-[2rem] object-cover shadow-xl" loading="lazy" />
        </div>
      </section>

      <section id="produtos" className="bg-[#452602] px-5 py-20 text-white lg:py-28"><div className="mx-auto max-w-7xl"><div className="max-w-2xl"><span className="text-sm font-black uppercase tracking-[0.18em] text-[#ffb45a]">Produtos e soluções</span><h2 className="mt-3 text-3xl font-black sm:text-4xl">Tudo para a rotina do seu pet, com orientação para comprar melhor.</h2><p className="mt-5 leading-7 text-white/70">A Viana's Rações é especializada em produtos e rações para pets. Fale com a equipe para entender as opções disponíveis.</p></div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{[
          ["Rações","Opções para cães, gatos e outros pets, considerando diferentes fases e rotinas.",PawPrint],
          ["Acessórios","Itens para alimentação, passeio, conforto e cuidados do dia a dia.",ShoppingBag],
          ["Produtos de higiene","Produtos para manter a rotina de cuidados do seu animal mais prática.",HeartHandshake],
          ["Opções para diferentes pets","Produtos para cães, gatos e também para outros animais de companhia.",PawPrint],
          ["Orientação na escolha","Tire dúvidas sobre produtos e encontre alternativas adequadas ao que você procura.",MessageCircle],
          ["Dicas de cuidados","Informações simples para ajudar tutores a cuidar melhor de seus animais.",BookOpen],
        ].map(([title,text,Icon])=>{const CardIcon=Icon as typeof PawPrint;return <article key={title as string} className="rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:bg-white/10"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#ff8800] text-white"><CardIcon size={23}/></span><h3 className="mt-5 text-xl font-black">{title as string}</h3><p className="mt-3 min-h-[72px] leading-7 text-white/65">{text as string}</p><a href={whatsapp} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 font-bold text-[#ffb45a] hover:text-white">Tirar dúvidas <ArrowRight size={16}/></a></article>})}</div>
      </div></section>

      <section id="orientacao" className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><div><span className="text-sm font-black uppercase tracking-[0.18em] text-[#ff8800]">Orientação</span><h2 className="mt-3 text-3xl font-black sm:text-4xl">Comprar melhor também é uma forma de cuidar.</h2><p className="mt-5 leading-8 text-[#452602]/70">Nem toda necessidade é igual. Por isso, a equipe pode ajudar a comparar opções e compartilhar orientações práticas para a rotina do seu animal.</p><a href={whatsapp} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#452602] px-6 py-3.5 font-bold text-white hover:bg-[#5d3608]">Fale com a equipe <MessageCircle size={18}/></a></div><div className="grid gap-4 sm:grid-cols-3">{tips.map(({icon:Icon,title,text})=><article key={title} className="rounded-3xl border border-[#452602]/10 bg-[#fff7ef] p-6"><Icon className="text-[#ff8800]" size={27}/><h3 className="mt-5 font-black">{title}</h3><p className="mt-3 text-sm leading-6 text-[#452602]/65">{text}</p></article>)}</div></div></section>

      <section className="bg-[#fff7ef] px-5 py-20 lg:py-24"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><span className="text-sm font-black uppercase tracking-[0.18em] text-[#ff8800]">Por que Viana's?</span><h2 className="mt-3 text-3xl font-black sm:text-4xl">Confiança construída no atendimento.</h2></div><div className="flex gap-2"><button onClick={previous} aria-label="Imagem anterior" className="grid h-11 w-11 place-items-center rounded-full border border-[#452602]/15 bg-white hover:bg-[#452602] hover:text-white"><ChevronLeft/></button><button onClick={next} aria-label="Próxima imagem" className="grid h-11 w-11 place-items-center rounded-full bg-[#ff8800] text-white hover:bg-[#e97900]"><ChevronRight/></button></div></div><div className="mt-10 grid overflow-hidden rounded-[2rem] bg-white shadow-xl lg:grid-cols-2"><img src={current.image} alt={current.title} className="h-[320px] w-full object-cover lg:h-[420px]" loading="lazy"/><div className="flex flex-col justify-center p-8 lg:p-12"><div className="flex gap-1 text-[#ff8800]" aria-label="Destaque"><Star fill="currentColor" size={18}/><Star fill="currentColor" size={18}/><Star fill="currentColor" size={18}/><Star fill="currentColor" size={18}/><Star fill="currentColor" size={18}/></div><h3 className="mt-5 text-2xl font-black">{current.title}</h3><p className="mt-4 leading-8 text-[#452602]/70">{current.text}</p><div className="mt-7 flex gap-2">{slides.map((item,index)=><button key={item.title} onClick={()=>setSlide(index)} aria-label={"Ir para destaque "+(index+1)} className={"h-2 rounded-full transition-all "+(index===slide?"w-10 bg-[#ff8800]":"w-2 bg-[#452602]/20")}/>)}</div></div></div><div className="mt-6 flex items-center gap-3 text-sm text-[#452602]/60"><Truck size={17}/> Consulte disponibilidade, preços e condições diretamente com a equipe.</div></div></section>

      <section id="contato" className="bg-[#ff8800] px-5 py-20 text-white lg:py-24"><div className="mx-auto max-w-4xl text-center"><PawPrint className="mx-auto" size={34}/><h2 className="mt-5 text-3xl font-black sm:text-5xl">Precisa escolher uma ração ou produto para o seu pet?</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">Fale com a Viana's Rações. A equipe pode ajudar você a encontrar opções e tirar suas dúvidas.</p><a href={whatsapp} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#452602] px-8 py-4 font-black text-white shadow-xl hover:bg-[#5d3608]"><MessageCircle size={20}/> Falar com vendedor</a></div></section>

      <footer className="bg-[#241300] px-5 py-12 text-white/80"><div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3 lg:px-8"><div><div className="flex items-center gap-2 text-xl font-black text-white"><span className="grid h-9 w-9 place-items-center rounded-xl bg-[#ff8800]"><PawPrint size={19}/></span>Viana's Rações</div><p className="mt-4 max-w-sm text-sm leading-6">O lugar dos melhores produtos para sua melhor companhia. 🐾</p></div><div><h3 className="font-black text-white">Contato</h3><p className="mt-3 text-sm leading-6">Conjunto Asa Dos Ventos - R. Projetada Cento e Quatorze, Quadra F, N° 2, Rio Largo - AL, 57100-000</p><p className="mt-2 text-sm">WhatsApp: (82) 99967-2475</p><p className="mt-1 text-sm">E-mail: estudiopetjlle@gmail.com</p></div><div><h3 className="font-black text-white">Horário</h3><p className="mt-3 text-sm leading-6">Segunda a sábado: 08h às 12h e 14h às 21h<br/>Domingo: 08h às 17h</p><a href={instagram} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#ffb45a] hover:text-white">Instagram <ArrowRight size={15}/></a></div></div><div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-5 text-xs text-white/45 lg:px-8">© {new Date().getFullYear()} Viana's Rações. Todos os direitos reservados.</div></footer>
      <a href={whatsapp} target="_blank" rel="noreferrer" aria-label="Falar com a Viana's Rações pelo WhatsApp" className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#ff8800] text-white shadow-2xl hover:scale-105 hover:bg-[#e97900]"><MessageCircle size={25}/></a>
    </main>
  );
}
