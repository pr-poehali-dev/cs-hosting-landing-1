import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/a906e03f-2a0c-4654-b49f-8a3e04b6ccf3/files/1d0341e9-b177-486a-a9e6-85dab7a7e920.jpg";

const plans = [
  {
    name: "STARTER",
    slots: "16 слотов",
    price: "149",
    period: "/ мес",
    features: ["CS2 / CS:GO", "NVMe SSD", "10 Гбит/с канал", "Базовая защита DDoS", "Панель управления", "Резервные копии 3 дня"],
    popular: false,
    tag: null,
  },
  {
    name: "PRO",
    slots: "32 слота",
    price: "299",
    period: "/ мес",
    features: ["CS2 / CS:GO", "NVMe SSD", "10 Гбит/с канал", "Защита DDoS до 1 Тбит/с", "Панель управления", "Резервные копии 7 дней", "Приоритетная поддержка"],
    popular: true,
    tag: "ХИТПИК",
  },
  {
    name: "ELITE",
    slots: "64 слота",
    price: "599",
    period: "/ мес",
    features: ["CS2 / CS:GO", "Dedicated NVMe", "10 Гбит/с канал", "Защита DDoS до 2 Тбит/с", "Панель управления", "Резервные копии 30 дней", "VIP поддержка 24/7", "Кастомные плагины"],
    popular: false,
    tag: null,
  },
];

const advantages = [
  { icon: "Zap", title: "Пинг < 5 мс", desc: "Серверы в Москве, Санкт-Петербурге и Европе. Молниеносный отклик для честной игры." },
  { icon: "Shield", title: "DDoS-защита", desc: "Автоматическая фильтрация атак до 2 Тбит/с. Ваш сервер всегда в строю." },
  { icon: "Rocket", title: "Запуск за 60 сек", desc: "Создайте сервер за минуту. Установите плагины в один клик, без технических знаний." },
  { icon: "Clock", title: "Аптайм 99.9%", desc: "Гарантированная доступность сервера. Компенсация за каждую минуту простоя." },
  { icon: "Settings", title: "Полный контроль", desc: "Панель управления с доступом к конфигам, RCON, FTP и консоли в реальном времени." },
  { icon: "Headphones", title: "Поддержка 24/7", desc: "Живые операторы, не боты. Среднее время ответа — 3 минуты в любое время суток." },
];

const reviews = [
  {
    name: "Артём К.",
    role: "Организатор CS2 лиги",
    rating: 5,
    text: "Перешёл с другого хостинга — разница огромная. Пинг стал стабильным, ни одного лага за 3 месяца. Техподдержка отвечает быстрее, чем у провайдера дома.",
    server: "32 слота / PRO",
  },
  {
    name: "Дмитрий В.",
    role: "Капитан клана NaVI Fans",
    rating: 5,
    text: "Запустил сервер для тренировок команды за 2 минуты. Панель управления — огонь, настроил всё сам без единого запроса в саппорт. Рекомендую всем серьёзным игрокам.",
    server: "16 слотов / STARTER",
  },
  {
    name: "Максим Л.",
    role: "Стример Twitch",
    rating: 5,
    text: "Стримлю с серверов FRAG HOST уже полгода. DDoS-защита реально работает — пытались положить сервер во время турнира, не вышло. Парни знают своё дело.",
    server: "64 слота / ELITE",
  },
];

const stats = [
  { value: "12 000+", label: "активных серверов" },
  { value: "< 5 мс", label: "средний пинг" },
  { value: "99.9%", label: "гарантия аптайма" },
  { value: "3 мин", label: "среднее время ответа" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: "var(--cs-bg)" }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{ background: "rgba(10,12,14,0.88)", backdropFilter: "blur(14px)", borderBottom: "1px solid rgba(255,106,0,0.1)" }}>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full" style={{ background: "var(--neon)", boxShadow: "0 0 8px var(--neon)" }} />
          <span className="font-oswald text-xl font-bold tracking-widest" style={{ color: "var(--cs-text)" }}>
            FRAG<span style={{ color: "var(--neon)" }}>HOST</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#advantages" className="nav-link">Преимущества</a>
          <a href="#pricing" className="nav-link">Тарифы</a>
          <a href="#reviews" className="nav-link">Отзывы</a>
        </div>
        <button className="btn-neon px-5 py-2 text-sm cursor-pointer">
          Начать
        </button>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover" style={{ opacity: 0.22 }} />
          <div className="absolute inset-0" style={{
            background: "linear-gradient(135deg, rgba(10,12,14,0.96) 40%, rgba(255,106,0,0.04) 100%)"
          }} />
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse at 70% 50%, rgba(255,106,0,0.07) 0%, transparent 60%)"
          }} />
        </div>

        {/* Grid lines */}
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(rgba(255,106,0,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,106,0,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.05
        }} />

        <div className="relative container mx-auto px-6 pt-28 pb-20">
          <div className="max-w-3xl">
            <div className="tag-cs inline-block mb-6" style={{ opacity: 0, animation: "fade-in-up 0.6s ease 0.1s forwards" }}>
              ⚡ Профессиональный гейминг-хостинг
            </div>
            <h1 className="font-oswald font-bold leading-none mb-6" style={{
              fontSize: "clamp(3rem, 8vw, 7rem)",
              color: "var(--cs-text)",
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              opacity: 0,
              animation: "fade-in-up 0.7s ease 0.2s forwards"
            }}>
              <span className="glitch block" data-text="СЕРВЕРЫ">СЕРВЕРЫ</span>
              <span className="block" style={{ color: "var(--neon)", textShadow: "0 0 40px rgba(255,106,0,0.5)" }}>
                COUNTER&#8209;STRIKE
              </span>
              <span className="block" style={{ fontSize: "0.52em", color: "var(--cs-muted)", letterSpacing: "0.1em" }}>
                ДЛЯ ПРОФЕССИОНАЛОВ
              </span>
            </h1>

            <p className="font-rajdhani text-lg mb-10 max-w-xl" style={{
              color: "var(--cs-muted)", lineHeight: 1.7,
              opacity: 0, animation: "fade-in-up 0.7s ease 0.35s forwards"
            }}>
              Запусти CS2 сервер за 60 секунд. Пинг менее 5 мс, DDoS-защита военного класса,
              панель управления без лишнего — только игра.
            </p>

            <div className="flex flex-wrap gap-4" style={{ opacity: 0, animation: "fade-in-up 0.7s ease 0.5s forwards" }}>
              <button className="btn-neon px-8 py-4 text-base cursor-pointer">
                Создать сервер
              </button>
              <button className="btn-neon-outline px-8 py-4 text-base cursor-pointer">
                Смотреть тарифы
              </button>
            </div>

            {/* Ping indicator */}
            <div className="flex items-center gap-3 mt-10" style={{ opacity: 0, animation: "fade-in-up 0.7s ease 0.65s forwards" }}>
              <div className="relative flex items-center justify-center w-3 h-3">
                <div className="absolute w-3 h-3 rounded-full animate-ping-slow" style={{ background: "rgba(74,222,128,0.4)" }} />
                <div className="w-2 h-2 rounded-full" style={{ background: "#4ADE80" }} />
              </div>
              <span className="font-mono-cs text-xs" style={{ color: "var(--cs-muted)" }}>
                MSK — <span style={{ color: "#4ADE80" }}>3 мс</span>&nbsp;&nbsp;
                SPB — <span style={{ color: "#4ADE80" }}>5 мс</span>&nbsp;&nbsp;
                EU — <span style={{ color: "#FBBF24" }}>22 мс</span>
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32" style={{
          background: "linear-gradient(to bottom, transparent, var(--cs-bg))"
        }} />
      </section>

      {/* STATS */}
      <section className="relative py-16" style={{ background: "var(--cs-surface)" }}>
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-oswald font-bold mb-1" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "var(--neon)" }}>
                  {s.value}
                </div>
                <div className="font-rajdhani text-sm uppercase tracking-wider" style={{ color: "var(--cs-muted)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="section-divider absolute bottom-0 left-0 right-0" />
      </section>

      {/* ADVANTAGES */}
      <section id="advantages" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="tag-cs inline-block mb-4">Почему мы</div>
            <h2 className="font-oswald font-bold uppercase" style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "var(--cs-text)",
              letterSpacing: "0.02em"
            }}>
              НАШИ <span style={{ color: "var(--neon)" }}>ПРЕИМУЩЕСТВА</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((a, i) => (
              <div key={i} className="card-cs corner-bracket p-7 cursor-default">
                <div className="w-12 h-12 flex items-center justify-center mb-5 rounded" style={{
                  background: "var(--neon-dim)",
                  border: "1px solid rgba(255,106,0,0.25)"
                }}>
                  <Icon name={a.icon} fallback="CircleAlert" size={22} style={{ color: "var(--neon)" }} />
                </div>
                <h3 className="font-oswald font-semibold text-xl uppercase mb-3 tracking-wide" style={{ color: "var(--cs-text)" }}>
                  {a.title}
                </h3>
                <p className="font-rajdhani text-base leading-relaxed" style={{ color: "var(--cs-muted)" }}>
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider mx-6" />

      {/* PRICING */}
      <section id="pricing" className="py-24 relative">
        <div className="absolute inset-0" style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(255,106,0,0.07) 0%, transparent 55%)"
        }} />
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <div className="tag-cs inline-block mb-4">Выбери план</div>
            <h2 className="font-oswald font-bold uppercase" style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "var(--cs-text)",
              letterSpacing: "0.02em"
            }}>
              ТАРИФНЫЕ <span style={{ color: "var(--neon)" }}>ПЛАНЫ</span>
            </h2>
            <p className="font-rajdhani text-base mt-3" style={{ color: "var(--cs-muted)" }}>
              Без скрытых платежей. Первый месяц — возврат гарантирован.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <div key={i} className={`card-cs relative p-8 flex flex-col ${plan.popular ? 'popular-glow' : ''}`}
                style={plan.popular ? { background: "var(--cs-surface2)" } : {}}>

                {plan.tag && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "0.65rem",
                      padding: "2px 12px",
                      background: "var(--neon)",
                      color: "#000",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      fontWeight: 600
                    }}>
                      {plan.tag}
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <div className="font-mono-cs text-xs mb-2" style={{ color: "var(--cs-muted)" }}>
                    {plan.slots}
                  </div>
                  <div className="font-oswald font-bold text-2xl uppercase tracking-widest mb-1"
                    style={{ color: plan.popular ? "var(--neon)" : "var(--cs-text)" }}>
                    {plan.name}
                  </div>
                  <div className="flex items-end gap-1">
                    <span className="font-oswald font-bold" style={{ fontSize: "3rem", color: "var(--cs-text)", lineHeight: 1 }}>
                      {plan.price}₽
                    </span>
                    <span className="font-rajdhani mb-2" style={{ color: "var(--cs-muted)" }}>
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <Icon name="Check" size={14} style={{ color: "var(--neon)", flexShrink: 0 }} />
                      <span className="font-rajdhani text-base" style={{ color: "var(--cs-text)" }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className={plan.popular ? "btn-neon px-6 py-3 w-full cursor-pointer" : "btn-neon-outline px-6 py-3 w-full cursor-pointer"}>
                  Выбрать {plan.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider mx-6" />

      {/* REVIEWS */}
      <section id="reviews" className="py-24 relative" style={{ background: "var(--cs-surface)" }}>
        <div className="section-divider absolute top-0 left-0 right-0" />
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="tag-cs inline-block mb-4">Игроки говорят</div>
            <h2 className="font-oswald font-bold uppercase" style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "var(--cs-text)",
              letterSpacing: "0.02em"
            }}>
              ОТЗЫВЫ <span style={{ color: "var(--neon)" }}>КЛИЕНТОВ</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="card-cs corner-bracket p-7 flex flex-col gap-5">
                <div className="flex gap-1">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <span key={j} className="star-filled text-lg">★</span>
                  ))}
                </div>
                <p className="font-rajdhani text-base leading-relaxed flex-1" style={{ color: "var(--cs-muted)" }}>
                  "{r.text}"
                </p>
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div>
                    <div className="font-oswald font-semibold uppercase tracking-wide" style={{ color: "var(--cs-text)" }}>
                      {r.name}
                    </div>
                    <div className="font-rajdhani text-sm" style={{ color: "var(--cs-muted)" }}>
                      {r.role}
                    </div>
                  </div>
                  <div className="tag-cs text-xs">{r.server}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0" style={{
          background: "linear-gradient(135deg, rgba(255,106,0,0.1) 0%, transparent 60%)",
        }} />
        <div className="absolute left-0 top-0 bottom-0 w-1" style={{ background: "var(--neon)" }} />
        <div className="container mx-auto px-6 relative text-center">
          <div className="tag-cs inline-block mb-6">Готов играть?</div>
          <h2 className="font-oswald font-bold uppercase mb-4" style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            color: "var(--cs-text)",
            letterSpacing: "0.02em",
            lineHeight: 1.1
          }}>
            ЗАПУСТИ СЕРВЕР<br />
            <span style={{ color: "var(--neon)", textShadow: "0 0 30px rgba(255,106,0,0.4)" }}>ЗА 60 СЕКУНД</span>
          </h2>
          <p className="font-rajdhani text-lg mb-10" style={{ color: "var(--cs-muted)" }}>
            Первые 3 дня бесплатно. Кредитная карта не нужна.
          </p>
          <button className="btn-neon px-12 py-5 text-lg cursor-pointer">
            Попробовать бесплатно
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "var(--cs-surface)", borderTop: "1px solid rgba(255,106,0,0.1)" }}>
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full" style={{ background: "var(--neon)" }} />
                <span className="font-oswald text-xl font-bold tracking-widest">
                  FRAG<span style={{ color: "var(--neon)" }}>HOST</span>
                </span>
              </div>
              <p className="font-rajdhani text-sm max-w-xs" style={{ color: "var(--cs-muted)" }}>
                Профессиональный хостинг игровых серверов для Counter-Strike с 2019 года.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {[
                { title: "Продукт", links: ["Тарифы", "Локации", "SLA", "API"] },
                { title: "Поддержка", links: ["База знаний", "Discord", "Тикеты", "Статус"] },
                { title: "Компания", links: ["О нас", "Блог", "Партнёрам", "Контакты"] },
              ].map((col) => (
                <div key={col.title}>
                  <div className="font-oswald text-xs uppercase tracking-widest mb-4" style={{ color: "var(--neon)" }}>
                    {col.title}
                  </div>
                  <ul className="space-y-2">
                    {col.links.map((l) => (
                      <li key={l}>
                        <a href="#" className="font-rajdhani text-sm transition-colors hover:text-orange-400"
                          style={{ color: "var(--cs-muted)" }}>
                          {l}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="section-divider mb-6" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-mono-cs text-xs" style={{ color: "var(--cs-muted)" }}>
              © 2024 FRAGHOST. Все права защищены.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#4ADE80" }} />
              <span className="font-mono-cs text-xs" style={{ color: "var(--cs-muted)" }}>
                Все системы работают нормально
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}