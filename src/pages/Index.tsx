import { useState } from "react";
import Icon from "@/components/ui/icon";

const IMG_HERO     = "https://cdn.poehali.dev/projects/a906e03f-2a0c-4654-b49f-8a3e04b6ccf3/files/783e080e-38c0-450c-945d-8df80735a451.jpg";
const IMG_CS2      = "https://cdn.poehali.dev/projects/a906e03f-2a0c-4654-b49f-8a3e04b6ccf3/files/f38db417-ae6d-40de-93b1-198bd23381b9.jpg";
const IMG_MC       = "https://cdn.poehali.dev/projects/a906e03f-2a0c-4654-b49f-8a3e04b6ccf3/files/8cdaaf30-afa4-4737-b684-65692fbc6c2c.jpg";
const IMG_GMOD     = "https://cdn.poehali.dev/projects/a906e03f-2a0c-4654-b49f-8a3e04b6ccf3/files/cafa0a11-5d14-4385-8f10-365680663b16.jpg";
const IMG_ARK      = "https://cdn.poehali.dev/projects/a906e03f-2a0c-4654-b49f-8a3e04b6ccf3/files/e6a0aac4-1342-4269-9634-e4b8d1019e34.jpg";

// ─── GAMES ─────────────────────────────────────────────────────────────────
const GAMES = [
  { id: "cs2",       label: "Counter-Strike 2", short: "CS2",         emoji: "🎯", img: IMG_CS2,  tag: "NEW",  perSlot: 10.5, slots: [10, 16, 24, 32, 48], color: "#FF1F8C" },
  { id: "csgo",      label: "CS:GO",            short: "CS:GO",       emoji: "🔫", img: IMG_CS2,  tag: null,   perSlot: 8.5,  slots: [10, 16, 24, 32, 48, 64], color: "#B026FF" },
  { id: "css",       label: "CS: Source",       short: "CSS",         emoji: "💥", img: IMG_CS2,  tag: null,   perSlot: 7.0,  slots: [10, 16, 24, 32], color: "#B026FF" },
  { id: "cs16",      label: "CS 1.6",           short: "1.6",         emoji: "🕹️", img: IMG_CS2,  tag: null,   perSlot: 5.5,  slots: [10, 16, 24, 32], color: "#B026FF" },
  { id: "minecraft", label: "Minecraft",        short: "MC",          emoji: "⛏️", img: IMG_MC,   tag: "ХИТ", perSlot: 9.0,  slots: [10, 20, 50, 100], color: "#B0FF00" },
  { id: "gmod",      label: "Garry's Mod",      short: "GMod",        emoji: "🔧", img: IMG_GMOD, tag: null,   perSlot: 8.0,  slots: [10, 16, 24, 32], color: "#00E1FF" },
  { id: "ark",       label: "ARK: Survival",    short: "ARK",         emoji: "🦕", img: IMG_ARK,  tag: "TOP", perSlot: 14.0, slots: [10, 20, 30, 50, 70], color: "#FF1F8C" },
];

// ─── FEATURES ──────────────────────────────────────────────────────────────
const FEATURES = [
  { icon: "Cpu",        title: "Топовое железо",        desc: "Intel Xeon Gold, DDR4 ECC, NVMe SSD RAID10 — без компромиссов" },
  { icon: "Globe",      title: "3 локации",              desc: "Москва, СПб, Франкфурт. Низкий пинг для игроков из СНГ и EU" },
  { icon: "Shield",     title: "DDoS-защита 2 Тбит/с",  desc: "Автоматическая фильтрация атак. Сервер работает даже под огнём" },
  { icon: "Zap",        title: "Запуск за 60 секунд",   desc: "Оплатил → играешь. Никаких ручных настроек на старте" },
  { icon: "RotateCcw",  title: "Бэкапы каждые 24 ч",    desc: "Автоматические резервные копии. Откат в один клик" },
  { icon: "Headphones", title: "Поддержка 24/7",         desc: "Живые операторы, не боты. Среднее время ответа — 4 минуты" },
  { icon: "Settings",   title: "Удобная панель",         desc: "Все настройки, плагины и моды — в один клик из браузера" },
  { icon: "Code",       title: "Полный root доступ",     desc: "FTP, SSH, RCON, конфиги — управляй сервером как хочешь" },
];

// ─── LOCATIONS ─────────────────────────────────────────────────────────────
const LOCATIONS = [
  { flag: "🇷🇺", city: "Москва",           dc: "Дата-центр 3data",   ping: 2,  load: 61 },
  { flag: "🇷🇺", city: "Санкт-Петербург", dc: "Дата-центр Миран",   ping: 4,  load: 48 },
  { flag: "🇩🇪", city: "Франкфурт",       dc: "Hetzner DE",         ping: 24, load: 33 },
];

// ─── REVIEWS ───────────────────────────────────────────────────────────────
const REVIEWS = [
  { name: "Артём К.",   role: "Организатор CS2 лиги",      letter: "А", stars: 5, game: "CS2",       text: "Пинг стабильный, ни одного рестарта за 4 месяца. Поддержка отвечает быстро и по делу." },
  { name: "Дмитрий В.", role: "Капитан клана NaVI Fans",   letter: "Д", stars: 5, game: "CS:GO",     text: "Настроил сервер без единого вопроса к саппорту — всё понятно в панели. Плагины ставятся за минуту." },
  { name: "Алексей М.", role: "Админ MC-сервера",          letter: "А", stars: 5, game: "Minecraft", text: "Держу сервер на 50 игроков — не лагает. Бэкапы спасли мир когда случайно снёс папку с плагинами." },
  { name: "Максим Л.",  role: "Twitch-стример",            letter: "М", stars: 5, game: "GMod",      text: "DDoS-защита реально работает. Пытались положить во время стрима — не вышло. Парни знают своё дело." },
  { name: "Иван С.",    role: "Племя ARK Warriors",         letter: "И", stars: 5, game: "ARK",       text: "Кластер из 3 серверов настроили сами за 20 минут по гайду. Всё работает без багов." },
  { name: "Кирилл Т.", role: "Олдфаг с 2003 года",          letter: "К", stars: 5, game: "CS 1.6",    text: "Старая добрая 1.6 — пинг 3мс, AMX работает. Дёшево и надёжно. Что ещё нужно?" },
];

// ─── NAV ───────────────────────────────────────────────────────────────────
const NAV = [
  { id: "home",      label: "Главная",       icon: "Home" },
  { id: "games",     label: "Игры",          icon: "Gamepad2" },
  { id: "pricing",   label: "Тарифы",        icon: "CreditCard" },
  { id: "features",  label: "Преимущества",  icon: "Sparkles" },
  { id: "locations", label: "Локации",       icon: "MapPin" },
  { id: "reviews",   label: "Отзывы",        icon: "MessageSquareQuote" },
];

// ─── COMPONENT ─────────────────────────────────────────────────────────────
export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [activeGame, setActiveGame] = useState("cs2");
  const [slotIdx, setSlotIdx] = useState(2);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const game = GAMES.find(g => g.id === activeGame)!;
  const slots = game.slots[Math.min(slotIdx, game.slots.length - 1)];

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setSidebarOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="layout-root">

      {/* ═══ SIDEBAR ═══ */}
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-logo">
          <div className="logo-mark">
            <Icon name="Zap" size={18} style={{ color: "#fff" }} />
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 16, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              FRAG<span className="gradient-text">HOST</span>
            </div>
            <div style={{ fontSize: 10, color: "var(--text3)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Game Servers
            </div>
          </div>
        </div>

        {/* Nav */}
        <div className="sidebar-section-title">Навигация</div>
        {NAV.map(item => (
          <div
            key={item.id}
            className={`sidebar-link ${activeSection === item.id ? "active" : ""}`}
            onClick={() => scrollTo(item.id)}
          >
            <Icon name={item.icon} fallback="CircleAlert" size={16} />
            {item.label}
          </div>
        ))}

        <div className="sidebar-divider" />

        {/* Games */}
        <div className="sidebar-section-title">Игры</div>
        {GAMES.map(g => (
          <div
            key={g.id}
            className={`sidebar-link ${activeGame === g.id ? "active" : ""}`}
            onClick={() => { setActiveGame(g.id); setSlotIdx(0); scrollTo("pricing"); }}
          >
            <span style={{ fontSize: 16, flexShrink: 0 }}>{g.emoji}</span>
            <span style={{ flex: 1, fontSize: 13 }}>{g.label}</span>
            {g.tag && (
              <span style={{
                fontSize: 9, padding: "2px 6px", borderRadius: 4,
                background: g.color, color: "#000", fontWeight: 800,
                letterSpacing: "0.05em"
              }}>
                {g.tag}
              </span>
            )}
          </div>
        ))}

        <div className="sidebar-divider" />

        {/* Footer status */}
        <div style={{ padding: "16px 18px", marginTop: "auto" }}>
          <div className="glass-card" style={{ padding: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 6 }}>
              <div className="dot-live" />
              <span style={{ fontSize: 11, color: "var(--neon-lime)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Online
              </span>
            </div>
            <div style={{ fontSize: 11.5, color: "var(--text2)" }}>
              <strong style={{ color: "var(--text)" }}>12 431</strong> активных серверов
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      <div className={`sidebar-overlay ${sidebarOpen ? "open" : ""}`} onClick={() => setSidebarOpen(false)} />

      {/* ═══ MAIN ═══ */}
      <div className="main-wrap">

        {/* Topbar */}
        <div className="topbar">
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <button
              className="md:hidden"
              style={{ background: "none", border: "none", color: "var(--text2)", cursor: "pointer", display: "flex" }}
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Icon name="Menu" size={20} />
            </button>
            <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
              {[
                { city: "МСК", ms: 2 },
                { city: "СПБ", ms: 4 },
                { city: "EU",  ms: 24 },
              ].map(p => (
                <div key={p.city} style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: "var(--text2)" }}>
                  <div className="dot-live" style={{ width: 6, height: 6 }} />
                  {p.city}: <span style={{ color: "var(--neon-lime)", fontWeight: 700 }}>{p.ms} ms</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <button className="btn-ghost" style={{ padding: "7px 14px", fontSize: 12.5 }}>
              <Icon name="LogIn" size={14} style={{ marginRight: 5, display: "inline-block", verticalAlign: -2 }} />
              Войти
            </button>
            <button className="btn-neon" style={{ padding: "8px 18px", fontSize: 12.5 }}>
              Регистрация
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="content">

          {/* ═══ HERO ═══ */}
          <div id="home" style={{ scrollMarginTop: 64 }}>
            <div className="hero fadein">
              <img src={IMG_HERO} alt="" className="hero-bg" />
              <div className="hero-overlay" />
              <div className="hero-content">
                <div className="badge-lime" style={{ marginBottom: 16, alignSelf: "flex-start" }}>
                  <div className="dot-live" style={{ width: 6, height: 6 }} />
                  Серверы запускаются в реальном времени
                </div>
                <h1 style={{
                  fontSize: "clamp(28px, 4.5vw, 48px)",
                  fontWeight: 800,
                  lineHeight: 1.05,
                  color: "var(--text)",
                  letterSpacing: "-0.025em",
                  marginBottom: 14,
                  maxWidth: 640
                }}>
                  Хостинг игровых<br />
                  <span className="gradient-text">серверов нового поколения</span>
                </h1>
                <p style={{ fontSize: 14.5, color: "var(--text2)", maxWidth: 540, marginBottom: 24, lineHeight: 1.7 }}>
                  CS 1.6 / Source / GO / CS2 · Minecraft · Garry's Mod · ARK и другие.
                  Мощное железо, низкий пинг, DDoS-защита и панель управления как для гика.
                </p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <button className="btn-neon" onClick={() => scrollTo("games")}>
                    <Icon name="Rocket" size={14} style={{ marginRight: 6, display: "inline-block", verticalAlign: -2 }} />
                    Выбрать игру
                  </button>
                  <button className="btn-ghost" onClick={() => scrollTo("pricing")}>
                    Смотреть тарифы
                  </button>
                </div>

                {/* Mini stats */}
                <div style={{ display: "flex", gap: 28, marginTop: 32, flexWrap: "wrap" }}>
                  {[
                    { v: "12.4k+", l: "серверов" },
                    { v: "99.9%",  l: "аптайм" },
                    { v: "< 2 ms", l: "пинг МСК" },
                    { v: "4 мин",  l: "ответ" },
                  ].map(s => (
                    <div key={s.l}>
                      <div className="gradient-text" style={{ fontSize: 24, fontWeight: 800, lineHeight: 1, fontFamily: "'Chakra Petch', sans-serif" }}>
                        {s.v}
                      </div>
                      <div style={{ fontSize: 11, color: "var(--text3)", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 4 }}>
                        {s.l}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ═══ GAMES GRID ═══ */}
          <div id="games" style={{ scrollMarginTop: 64, marginBottom: 36 }}>
            <div className="section-head">
              <div className="section-eyebrow">Поддерживаемые игры</div>
              <div className="section-title">Выберите свою игру</div>
              <div className="section-subtitle">Любая популярная игра — мы её хостим. Жми на карточку, чтобы увидеть тарифы.</div>
            </div>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: 14
            }}>
              {GAMES.map((g, i) => (
                <div
                  key={g.id}
                  className={`game-card fadein ${activeGame === g.id ? "active" : ""}`}
                  style={{ animationDelay: `${i * 0.05}s` }}
                  onClick={() => { setActiveGame(g.id); setSlotIdx(0); scrollTo("pricing"); }}
                >
                  {g.tag && <span className="game-card-tag">{g.tag}</span>}
                  <img src={g.img} alt={g.label} />
                  <div className="game-card-overlay">
                    <div style={{ fontSize: 11, fontWeight: 700, color: g.color, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>
                      от {g.perSlot}₽ / слот
                    </div>
                    <div style={{ fontSize: 17, fontWeight: 800, color: "#fff", marginBottom: 4 }}>
                      {g.label}
                    </div>
                    <div style={{ fontSize: 12, color: "var(--text2)", display: "flex", alignItems: "center", gap: 5 }}>
                      <Icon name="Users" size={12} />
                      от {g.slots[0]} до {g.slots[g.slots.length - 1]} слотов
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ═══ PRICING ═══ */}
          <div id="pricing" style={{ scrollMarginTop: 64, marginBottom: 36 }}>
            <div className="section-head">
              <div className="section-eyebrow">Тарифы</div>
              <div className="section-title">
                {game.emoji} {game.label} <span style={{ color: "var(--text3)", fontWeight: 600 }}>· выбрать план</span>
              </div>
              <div className="section-subtitle">Цена пересчитается автоматически в зависимости от количества слотов</div>
            </div>

            <div className="glass-card" style={{ padding: 22 }}>
              {/* Slot tabs */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18, flexWrap: "wrap" }}>
                <span style={{ fontSize: 12, color: "var(--text2)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700, marginRight: 4 }}>
                  Слоты:
                </span>
                {game.slots.map((s, i) => (
                  <button key={s} className={`slot-tab ${slotIdx === i ? "active" : ""}`} onClick={() => setSlotIdx(i)}>
                    {s}
                  </button>
                ))}
              </div>

              {/* Plans table */}
              <div style={{ overflowX: "auto", borderRadius: 10, border: "1px solid var(--border-c)" }}>
                <table className="price-table">
                  <thead>
                    <tr>
                      <th>Тариф</th>
                      <th>Локация</th>
                      <th>DDoS</th>
                      <th>Бэкап</th>
                      <th>Цена / мес</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "СТАРТ", mult: 1.0, loc: "МСК / СПБ",       ddos: "500 Гбит/с", backup: "3 дня",  popular: false },
                      { name: "ПРО",   mult: 1.3, loc: "МСК / СПБ / EU",  ddos: "1 Тбит/с",   backup: "7 дней", popular: true },
                      { name: "ЭЛИТ",  mult: 1.7, loc: "МСК / СПБ / EU",  ddos: "2 Тбит/с",   backup: "30 дней",popular: false },
                    ].map(p => (
                      <tr key={p.name}>
                        <td>
                          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                            <strong style={{ color: "var(--text)", fontWeight: 800, fontSize: 14 }}>{p.name}</strong>
                            {p.popular && <span className="badge-neon">Топ</span>}
                          </div>
                          <div style={{ fontSize: 11, color: "var(--text3)", marginTop: 2 }}>
                            {slots} слотов
                          </div>
                        </td>
                        <td style={{ color: "var(--text2)", fontSize: 13 }}>{p.loc}</td>
                        <td><span className="badge-cyan">{p.ddos}</span></td>
                        <td style={{ color: "var(--text2)", fontSize: 13 }}>{p.backup}</td>
                        <td>
                          <div className="price-val">
                            {Math.round(slots * game.perSlot * p.mult)}<span className="currency">₽</span>
                          </div>
                          <div style={{ fontSize: 10.5, color: "var(--text3)" }}>
                            ≈ {(game.perSlot * p.mult).toFixed(1)}₽/слот
                          </div>
                        </td>
                        <td>
                          <button className="btn-order">Заказать</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Included */}
              <div style={{ marginTop: 18, padding: "14px 16px", background: "rgba(176,38,255,0.05)", borderRadius: 10, border: "1px solid var(--border-c)" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "var(--neon-h)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 10 }}>
                  ⚡ Входит во все тарифы
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 24px" }}>
                  {["Панель управления", "FTP / SSH доступ", "Автообновление", "Бесплатный перенос", "RCON консоль", "Установка плагинов в 1 клик"].map(f => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <Icon name="Check" size={13} style={{ color: "var(--neon-lime)" }} />
                      <span style={{ fontSize: 12.5, color: "var(--text)" }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ═══ FEATURES ═══ */}
          <div id="features" style={{ scrollMarginTop: 64, marginBottom: 36 }}>
            <div className="section-head">
              <div className="section-eyebrow">Преимущества</div>
              <div className="section-title">Почему игроки выбирают нас</div>
              <div className="section-subtitle">Всё нужное чтобы запустить сервер и забыть о технических проблемах</div>
            </div>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: 12
            }}>
              {FEATURES.map((f, i) => (
                <div key={i} className="feature-tile fadein" style={{ animationDelay: `${i * 0.05}s` }}>
                  <div className="feature-icon-box">
                    <Icon name={f.icon} fallback="CircleAlert" size={20} style={{ color: "var(--neon-h)" }} />
                  </div>
                  <div style={{ fontWeight: 800, fontSize: 14.5, color: "var(--text)", marginBottom: 5 }}>{f.title}</div>
                  <div style={{ fontSize: 12.5, color: "var(--text2)", lineHeight: 1.6 }}>{f.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ═══ LOCATIONS ═══ */}
          <div id="locations" style={{ scrollMarginTop: 64, marginBottom: 36 }}>
            <div className="section-head">
              <div className="section-eyebrow">Дата-центры</div>
              <div className="section-title">Серверы рядом с твоими игроками</div>
              <div className="section-subtitle">Выбирай ближайший дата-центр для минимального пинга</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14 }}>
              {LOCATIONS.map((loc, i) => (
                <div key={i} className="glass-card fadein" style={{ padding: 20, animationDelay: `${i * 0.05}s` }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                    <span style={{ fontSize: 30 }}>{loc.flag}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 800, fontSize: 16, color: "var(--text)" }}>{loc.city}</div>
                      <div style={{ fontSize: 12, color: "var(--text3)" }}>{loc.dc}</div>
                    </div>
                    <div className="badge-lime">
                      <div className="dot-live" style={{ width: 6, height: 6 }} />
                      Live
                    </div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                    <span style={{ fontSize: 12, color: "var(--text2)" }}>Пинг</span>
                    <span className="gradient-text" style={{ fontFamily: "'Chakra Petch'", fontWeight: 800, fontSize: 18 }}>
                      {loc.ping} ms
                    </span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                    <span style={{ fontSize: 12, color: "var(--text2)" }}>Загрузка</span>
                    <span style={{ fontWeight: 700, color: "var(--text)", fontSize: 13 }}>{loc.load}%</span>
                  </div>
                  <div style={{ height: 6, background: "rgba(176,38,255,0.1)", borderRadius: 3, overflow: "hidden" }}>
                    <div style={{
                      width: `${loc.load}%`, height: "100%",
                      background: "linear-gradient(90deg, var(--neon), var(--neon2))",
                      borderRadius: 3
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ═══ REVIEWS ═══ */}
          <div id="reviews" style={{ scrollMarginTop: 64, marginBottom: 36 }}>
            <div className="section-head">
              <div className="section-eyebrow">Отзывы</div>
              <div className="section-title">Что говорят игроки</div>
              <div className="section-subtitle">Реальные отзывы клиентов которые играют на наших серверах</div>
            </div>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 14
            }}>
              {REVIEWS.map((r, i) => (
                <div key={i} className="review-card fadein" style={{ animationDelay: `${i * 0.04}s` }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 12 }}>
                    <div className="avatar">{r.letter}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontWeight: 700, fontSize: 13.5, color: "var(--text)" }}>{r.name}</div>
                      <div style={{ fontSize: 11.5, color: "var(--text3)" }}>{r.role}</div>
                    </div>
                    <span className="badge-neon" style={{ fontSize: 10 }}>{r.game}</span>
                  </div>
                  <div style={{ display: "flex", gap: 2, marginBottom: 10 }}>
                    {Array.from({ length: r.stars }).map((_, j) => (
                      <Icon key={j} name="Star" size={13} style={{ color: "var(--neon2)", fill: "var(--neon2)" }} />
                    ))}
                  </div>
                  <p style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.65 }}>
                    "{r.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ═══ CTA ═══ */}
          <div className="glass-card" style={{ padding: 36, textAlign: "center", marginBottom: 28, position: "relative", overflow: "hidden" }}>
            <div style={{
              position: "absolute", inset: 0,
              background: "radial-gradient(ellipse at center, rgba(176,38,255,0.15) 0%, transparent 70%)",
              pointerEvents: "none"
            }} />
            <div style={{ position: "relative" }}>
              <div className="badge-neon" style={{ marginBottom: 16 }}>
                ⚡ Готов запустить?
              </div>
              <h2 style={{ fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 800, color: "var(--text)", marginBottom: 10, letterSpacing: "-0.02em" }}>
                Создай свой сервер<br />
                <span className="gradient-text">за 60 секунд</span>
              </h2>
              <p style={{ fontSize: 14.5, color: "var(--text2)", marginBottom: 22, maxWidth: 480, margin: "0 auto 22px" }}>
                Первые 3 дня бесплатно. Без карты. Без обязательств. Можно отменить в любой момент.
              </p>
              <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
                <button className="btn-neon" style={{ padding: "14px 30px", fontSize: 14 }}>
                  Попробовать бесплатно
                </button>
                <button className="btn-ghost" style={{ padding: "13px 26px" }}>
                  Связаться с нами
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div style={{
            borderTop: "1px solid var(--border-c)",
            paddingTop: 22, marginTop: 12,
            display: "flex", flexWrap: "wrap",
            justifyContent: "space-between", gap: 14
          }}>
            <div style={{ fontSize: 12, color: "var(--text3)" }}>
              © 2024 <span style={{ color: "var(--text)", fontWeight: 700 }}>FRAGHOST</span> · Все права защищены
            </div>
            <div style={{ display: "flex", gap: 18 }}>
              {["Telegram", "Discord", "Оферта", "Контакты"].map(l => (
                <a key={l} href="#" style={{ fontSize: 12, color: "var(--text3)", textDecoration: "none", transition: "color 0.15s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--neon-h)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--text3)")}>
                  {l}
                </a>
              ))}
            </div>
          </div>

        </div>{/* /content */}
      </div>{/* /main-wrap */}
    </div>
  );
}
