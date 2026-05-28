import { useState } from "react";
import Icon from "@/components/ui/icon";

const PANEL_IMG = "https://cdn.poehali.dev/projects/a906e03f-2a0c-4654-b49f-8a3e04b6ccf3/files/df2d544a-8a9d-4f60-b9b7-dda3495f5a5a.jpg";

// Slot options and their prices
const slotOptions = [10, 16, 20, 24, 32, 48, 64];

const getPrice = (slots: number, tier: "start" | "pro" | "elite") => {
  const base = { start: 6.9, pro: 9.5, elite: 13.0 };
  return Math.round(slots * base[tier]);
};

const features = [
  { icon: "Cpu", title: "Мощное железо", desc: "Intel Xeon E5/E7, DDR4 ECC, NVMe SSD RAID10. Никаких компромиссов." },
  { icon: "Globe", title: "3 дата-центра", desc: "Москва, Санкт-Петербург, Франкфурт. Выбирайте ближайший к игрокам." },
  { icon: "Shield", title: "DDoS-защита", desc: "Фильтрация атак до 2 Тбит/с. Сервер работает даже под атакой." },
  { icon: "Zap", title: "Пинг < 5 мс", desc: "Оптимизированные маршруты. Честная игра без задержек." },
  { icon: "RotateCcw", title: "Бэкапы", desc: "Автоматические резервные копии каждые 24 часа. Откат в 1 клик." },
  { icon: "Headphones", title: "Поддержка 24/7", desc: "Живые операторы. Среднее время ответа — 4 минуты." },
];

const plans = [
  {
    id: "start",
    name: "СТАРТ",
    tag: null,
    color: "var(--ma-muted2)",
    perSlot: 6.9,
    features: ["CS2 / CS:GO", "NVMe SSD", "Базовая DDoS-защита", "Панель управления", "Бэкап 3 дня", "Тикет-поддержка"],
    notIncluded: ["Приоритетный саппорт", "Кастомные плагины"],
  },
  {
    id: "pro",
    name: "ПРО",
    tag: "Популярный",
    color: "var(--ma-blue-light)",
    perSlot: 9.5,
    features: ["CS2 / CS:GO", "Dedicated NVMe", "DDoS до 1 Тбит/с", "Панель управления", "Бэкап 7 дней", "Приоритетный саппорт"],
    notIncluded: ["Кастомные плагины"],
  },
  {
    id: "elite",
    name: "ЭЛИТ",
    tag: null,
    color: "var(--ma-accent)",
    perSlot: 13.0,
    features: ["CS2 / CS:GO", "Dedicated NVMe", "DDoS до 2 Тбит/с", "Панель управления", "Бэкап 30 дней", "VIP-поддержка 24/7", "Кастомные плагины"],
    notIncluded: [],
  },
] as const;

const locations = [
  { city: "Москва", dc: "Дата-центр 3data", ping: "< 2 мс", status: "online", flag: "🇷🇺" },
  { city: "Санкт-Петербург", dc: "Дата-центр Миран", ping: "< 5 мс", status: "online", flag: "🇷🇺" },
  { city: "Франкфурт", dc: "Hetzner DE", ping: "< 25 мс", status: "online", flag: "🇩🇪" },
];

const reviews = [
  {
    name: "Артём К.",
    role: "Организатор CS2 лиги",
    rating: 5,
    text: "Перешёл сюда с другого хостинга — небо и земля. Пинг стабильный, ни одного реstart'а сервера за 4 месяца. Поддержка отвечает быстро и по делу.",
    server: "32 слота · PRO",
    date: "Март 2024",
  },
  {
    name: "Дмитрий В.",
    role: "Капитан клана, 2000+ elo",
    rating: 5,
    text: "Настроил сервер без единого вопроса к саппорту — всё понятно в панели. Плагины ставятся за минуту. DDoS реально держит — пробовали сливать, не вышло.",
    server: "16 слотов · СТАРТ",
    date: "Февраль 2024",
  },
  {
    name: "Максим Л.",
    role: "Twitch-стример / тренер",
    rating: 5,
    text: "Держу сервер для тренировок уже полгода. Бэкапы спасли однажды когда случайно снёс конфиги. Рекомендую всем кто серьёзно относится к CS.",
    server: "64 слота · ЭЛИТ",
    date: "Январь 2024",
  },
];

const navLinks = [
  { label: "Тарифы", href: "#pricing" },
  { label: "Преимущества", href: "#features" },
  { label: "Локации", href: "#locations" },
  { label: "Отзывы", href: "#reviews" },
];

export default function Index() {
  const [selectedSlots, setSelectedSlots] = useState(24);

  return (
    <div style={{ background: "var(--ma-bg)", minHeight: "100vh" }}>

      {/* Top accent */}
      <div className="top-accent" />

      {/* NAV */}
      <nav style={{
        background: "rgba(13,17,23,0.96)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid var(--ma-border)",
        position: "sticky", top: 0, zIndex: 50
      }}>
        <div className="container mx-auto px-4" style={{ maxWidth: 1200 }}>
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-md flex items-center justify-center" style={{ background: "var(--ma-blue)" }}>
                <Icon name="Server" size={14} style={{ color: "#fff" }} />
              </div>
              <span style={{ fontWeight: 700, fontSize: "1rem", color: "var(--ma-text)", letterSpacing: "-0.01em" }}>
                FRAG<span style={{ color: "var(--ma-blue-light)" }}>HOST</span>
              </span>
            </div>

            {/* Links */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map(l => (
                <a key={l.label} href={l.href} className="ma-nav-link">{l.label}</a>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-3">
              <a href="#" className="ma-nav-link hidden sm:block">Войти</a>
              <button className="btn-ma">Создать сервер</button>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: "64px 0 48px", position: "relative", overflow: "hidden" }}>
        {/* Subtle bg gradient */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at 60% 0%, rgba(26,111,232,0.08) 0%, transparent 60%)",
          pointerEvents: "none"
        }} />

        <div className="container mx-auto px-4" style={{ maxWidth: 1200, position: "relative" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <div className="badge-blue inline-flex items-center gap-1.5 mb-5 fade-in d1">
                <span className="dot-online" style={{ width: 6, height: 6 }} />
                Серверы онлайн · 12 431 активных
              </div>

              <h1 className="fade-in d2" style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                color: "var(--ma-text)",
                lineHeight: 1.2,
                marginBottom: 16,
                letterSpacing: "-0.02em"
              }}>
                Хостинг серверов<br />
                <span style={{ color: "var(--ma-blue-light)" }}>Counter-Strike 2</span>
              </h1>

              <p className="fade-in d3" style={{
                fontSize: "1rem", color: "var(--ma-muted2)", lineHeight: 1.7,
                marginBottom: 28, maxWidth: 480
              }}>
                Запустите сервер CS2 или CS:GO за 60 секунд. Мощное железо,
                низкий пинг, надёжная DDoS-защита и удобная панель управления.
              </p>

              <div className="flex flex-wrap gap-3 fade-in d4" style={{ marginBottom: 36 }}>
                <button className="btn-ma" style={{ padding: "12px 28px", fontSize: "0.95rem" }}>
                  Попробовать бесплатно
                </button>
                <button className="btn-ma-outline">
                  Смотреть тарифы
                </button>
              </div>

              {/* Quick stats row */}
              <div className="flex flex-wrap gap-6 fade-in d5">
                {[
                  { label: "Пинг МСК", value: "< 2 мс", ok: true },
                  { label: "Аптайм", value: "99.9%", ok: true },
                  { label: "Запуск", value: "60 сек", ok: true },
                  { label: "Поддержка", value: "24/7", ok: true },
                ].map(s => (
                  <div key={s.label} className="flex items-center gap-2">
                    <Icon name="CheckCircle" size={14} style={{ color: "var(--ma-green)", flexShrink: 0 }} />
                    <span style={{ fontSize: "0.82rem", color: "var(--ma-muted2)" }}>
                      {s.label}: <strong style={{ color: "var(--ma-text)" }}>{s.value}</strong>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Panel screenshot */}
            <div className="fade-in d3 hidden lg:block" style={{ position: "relative" }}>
              <div style={{
                borderRadius: 12,
                overflow: "hidden",
                border: "1px solid var(--ma-border)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(26,111,232,0.1)"
              }}>
                {/* fake browser bar */}
                <div style={{
                  background: "var(--ma-surface2)",
                  borderBottom: "1px solid var(--ma-border)",
                  padding: "10px 14px",
                  display: "flex",
                  alignItems: "center",
                  gap: 6
                }}>
                  {["#FF5F56","#FFBD2E","#27C93F"].map(c => (
                    <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
                  ))}
                  <div style={{
                    flex: 1, marginLeft: 8, background: "var(--ma-surface)",
                    borderRadius: 4, padding: "3px 10px",
                    fontSize: "0.72rem", color: "var(--ma-muted)"
                  }}>
                    panel.fraghost.ru
                  </div>
                </div>
                <img src={PANEL_IMG} alt="Панель управления" style={{ width: "100%", display: "block" }} />
              </div>
              {/* Glow */}
              <div style={{
                position: "absolute", bottom: -20, left: "50%", transform: "translateX(-50%)",
                width: "70%", height: 60,
                background: "rgba(26,111,232,0.15)",
                filter: "blur(30px)", borderRadius: "50%",
                pointerEvents: "none"
              }} />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="ma-section" style={{ borderTop: "1px solid var(--ma-border)" }}>
        <div className="container mx-auto px-4" style={{ maxWidth: 1200 }}>
          <div style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "var(--ma-text)", marginBottom: 8 }}>
              Почему выбирают нас
            </h2>
            <p style={{ color: "var(--ma-muted2)", fontSize: "0.9rem" }}>
              Всё необходимое для стабильной игры и удобного управления сервером
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <div key={i} className="ma-card" style={{ padding: 20, display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div className="feature-icon">
                  <Icon name={f.icon} fallback="CircleAlert" size={18} style={{ color: "var(--ma-blue-light)" }} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: "0.92rem", color: "var(--ma-text)", marginBottom: 4 }}>
                    {f.title}
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "var(--ma-muted2)", lineHeight: 1.6 }}>
                    {f.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="ma-section" style={{ borderTop: "1px solid var(--ma-border)" }}>
        <div className="container mx-auto px-4" style={{ maxWidth: 1200 }}>
          <div style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "var(--ma-text)", marginBottom: 8 }}>
              Тарифы
            </h2>
            <p style={{ color: "var(--ma-muted2)", fontSize: "0.9rem" }}>
              Выберите количество слотов — цена пересчитается автоматически
            </p>
          </div>

          {/* Slot selector */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
            <span style={{ fontSize: "0.82rem", color: "var(--ma-muted2)", alignSelf: "center", marginRight: 4 }}>
              Количество слотов:
            </span>
            {slotOptions.map(s => (
              <button
                key={s}
                className={`slot-btn ${selectedSlots === s ? "active" : ""}`}
                onClick={() => setSelectedSlots(s)}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {plans.map((plan) => (
              <div key={plan.id} className={`price-card ${plan.tag ? "featured" : ""} flex flex-col`} style={{ padding: 24 }}>
                {plan.tag && (
                  <div style={{ marginBottom: 12 }}>
                    <span className="badge-popular">{plan.tag}</span>
                  </div>
                )}

                <div style={{ marginBottom: 20 }}>
                  <div style={{ fontSize: "0.7rem", fontWeight: 600, color: "var(--ma-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>
                    Тариф
                  </div>
                  <div style={{ fontWeight: 700, fontSize: "1.3rem", color: plan.color, marginBottom: 12 }}>
                    {plan.name}
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                    <span style={{ fontSize: "2.4rem", fontWeight: 800, color: "var(--ma-text)", lineHeight: 1 }}>
                      {getPrice(selectedSlots, plan.id as "start" | "pro" | "elite")}₽
                    </span>
                    <span style={{ fontSize: "0.8rem", color: "var(--ma-muted2)" }}>/ мес</span>
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "var(--ma-muted)", marginTop: 4 }}>
                    {selectedSlots} слотов · {plan.perSlot}₽ за слот
                  </div>
                </div>

                <div className="ma-divider" style={{ marginBottom: 18 }} />

                <ul style={{ flex: 1, marginBottom: 20 }}>
                  {plan.features.map((f, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 9 }}>
                      <Icon name="Check" size={13} style={{ color: "var(--ma-green)", flexShrink: 0 }} />
                      <span style={{ fontSize: "0.85rem", color: "var(--ma-text)" }}>{f}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((f, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 9 }}>
                      <Icon name="X" size={13} style={{ color: "var(--ma-muted)", flexShrink: 0 }} />
                      <span style={{ fontSize: "0.85rem", color: "var(--ma-muted)" }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <button className={plan.tag ? "btn-ma" : "btn-ma-outline"} style={{ width: "100%", padding: "11px", fontSize: "0.875rem" }}>
                  Выбрать {plan.name}
                </button>
              </div>
            ))}
          </div>

          {/* Small note */}
          <p style={{ marginTop: 16, fontSize: "0.78rem", color: "var(--ma-muted)" }}>
            * Первые 3 дня бесплатно. Без автопродления. Кредитная карта не нужна.
          </p>
        </div>
      </section>

      {/* LOCATIONS */}
      <section id="locations" className="ma-section" style={{ borderTop: "1px solid var(--ma-border)" }}>
        <div className="container mx-auto px-4" style={{ maxWidth: 1200 }}>
          <div style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "var(--ma-text)", marginBottom: 8 }}>
              Локации
            </h2>
            <p style={{ color: "var(--ma-muted2)", fontSize: "0.9rem" }}>
              Выбирайте дата-центр ближайший к вашим игрокам
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {locations.map((loc, i) => (
              <div key={i} className="ma-card" style={{ padding: "18px 20px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: "1.2rem" }}>{loc.flag}</span>
                    <span style={{ fontWeight: 600, fontSize: "0.95rem", color: "var(--ma-text)" }}>{loc.city}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <div className="dot-online" />
                    <span style={{ fontSize: "0.72rem", color: "var(--ma-green)" }}>Онлайн</span>
                  </div>
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--ma-muted2)", marginBottom: 6 }}>{loc.dc}</div>
                <div className="badge-blue" style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                  <Icon name="Wifi" size={10} />
                  {loc.ping}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="ma-section" style={{ borderTop: "1px solid var(--ma-border)" }}>
        <div className="container mx-auto px-4" style={{ maxWidth: 1200 }}>
          <div style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: "1.6rem", fontWeight: 700, color: "var(--ma-text)", marginBottom: 8 }}>
              Отзывы клиентов
            </h2>
            <p style={{ color: "var(--ma-muted2)", fontSize: "0.9rem" }}>
              Реальные отзывы от игроков и организаторов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {reviews.map((r, i) => (
              <div key={i} className="review-card flex flex-col gap-4">
                {/* Stars */}
                <div style={{ display: "flex", gap: 2 }}>
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Icon key={j} name="Star" size={14} style={{ color: "var(--ma-accent)", fill: "var(--ma-accent)" }} />
                  ))}
                </div>
                <p style={{ fontSize: "0.875rem", color: "var(--ma-muted2)", lineHeight: 1.65, flex: 1 }}>
                  {r.text}
                </p>
                <div className="ma-divider" />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "0.875rem", color: "var(--ma-text)" }}>{r.name}</div>
                    <div style={{ fontSize: "0.75rem", color: "var(--ma-muted)" }}>{r.role}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div className="badge-blue" style={{ display: "inline-block", marginBottom: 3 }}>{r.server}</div>
                    <div style={{ fontSize: "0.7rem", color: "var(--ma-muted)" }}>{r.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        borderTop: "1px solid var(--ma-border)",
        background: "var(--ma-surface)",
        padding: "56px 0"
      }}>
        <div className="container mx-auto px-4 text-center" style={{ maxWidth: 600 }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--ma-text)", marginBottom: 12 }}>
            Готов запустить сервер?
          </h2>
          <p style={{ color: "var(--ma-muted2)", marginBottom: 28, lineHeight: 1.7 }}>
            Первые 3 дня бесплатно. Настройка за 60 секунд. Отмена в любой момент.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <button className="btn-ma" style={{ padding: "13px 32px", fontSize: "0.95rem" }}>
              Создать сервер бесплатно
            </button>
            <button className="btn-ma-outline">
              Посмотреть тарифы
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "var(--ma-bg)", borderTop: "1px solid var(--ma-border)", padding: "40px 0" }}>
        <div className="container mx-auto px-4" style={{ maxWidth: 1200 }}>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8" style={{ marginBottom: 36 }}>
            {/* Brand */}
            <div className="col-span-2 md:col-span-2">
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                <div style={{ width: 28, height: 28, borderRadius: 6, background: "var(--ma-blue)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name="Server" size={14} style={{ color: "#fff" }} />
                </div>
                <span style={{ fontWeight: 700, color: "var(--ma-text)" }}>
                  FRAG<span style={{ color: "var(--ma-blue-light)" }}>HOST</span>
                </span>
              </div>
              <p style={{ fontSize: "0.82rem", color: "var(--ma-muted)", lineHeight: 1.65, maxWidth: 260 }}>
                Профессиональный хостинг игровых серверов Counter-Strike. Работаем с 2019 года.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 14 }}>
                <div className="dot-online" />
                <span style={{ fontSize: "0.75rem", color: "var(--ma-muted2)" }}>Все системы в норме</span>
              </div>
            </div>

            {[
              { title: "Продукт", links: ["Тарифы", "Локации", "Панель управления", "API"] },
              { title: "Помощь", links: ["База знаний", "Документация", "Тикеты", "Discord"] },
              { title: "Компания", links: ["О нас", "Блог", "Партнёрам", "Контакты"] },
            ].map(col => (
              <div key={col.title}>
                <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "var(--ma-muted2)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>
                  {col.title}
                </div>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {col.links.map(l => (
                    <li key={l} style={{ marginBottom: 8 }}>
                      <a href="#" style={{ fontSize: "0.82rem", color: "var(--ma-muted)", textDecoration: "none", transition: "color 0.15s" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "var(--ma-text)")}
                        onMouseLeave={e => (e.currentTarget.style.color = "var(--ma-muted)")}>
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="ma-divider" style={{ marginBottom: 20 }} />

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
            <p style={{ fontSize: "0.78rem", color: "var(--ma-muted)" }}>
              © 2024 FRAGHOST. Все права защищены.
            </p>
            <div style={{ display: "flex", gap: 16 }}>
              {["Политика конфиденциальности", "Оферта", "Cookies"].map(l => (
                <a key={l} href="#" style={{ fontSize: "0.78rem", color: "var(--ma-muted)", textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--ma-muted2)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--ma-muted)")}>
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
