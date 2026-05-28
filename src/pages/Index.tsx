import { useState } from "react";
import Icon from "@/components/ui/icon";

// ─── GAMES ────────────────────────────────────────────────────────────────────
const GAMES = [
  {
    id: "cs2",
    label: "Counter-Strike 2",
    emoji: "🎯",
    tag: "NEW",
    tagColor: "badge-green",
    slots: [10, 12, 16, 20, 24, 32],
    pricePerSlot: 10.5,
    features: ["64-tick / 128-tick", "CS2 Workshop", "Плагины SourceMod", "GOTV трансляция"],
  },
  {
    id: "csgo",
    label: "CS:GO",
    emoji: "🔫",
    tag: null,
    slots: [10, 12, 16, 20, 24, 32, 48, 64],
    pricePerSlot: 8.5,
    features: ["128-tick серверы", "SourceMod / MetaMod", "Автообновление", "GOTV"],
  },
  {
    id: "css",
    label: "CS: Source",
    emoji: "💥",
    tag: null,
    slots: [10, 16, 20, 24, 32],
    pricePerSlot: 7.0,
    features: ["SourceMod", "Популярные плагины", "Кастомные карты"],
  },
  {
    id: "cs16",
    label: "CS 1.6",
    emoji: "🕹️",
    tag: null,
    slots: [10, 16, 20, 24, 32],
    pricePerSlot: 5.5,
    features: ["AMX Mod X", "Базовые плагины", "FTP доступ"],
  },
  {
    id: "minecraft",
    label: "Minecraft",
    emoji: "⛏️",
    tag: "ХИТ",
    tagColor: "badge-orange",
    slots: [10, 20, 30, 50, 100],
    pricePerSlot: 9.0,
    features: ["Java Edition", "Spigot / Paper / Forge", "Плагины и моды", "Бэкап миров"],
  },
  {
    id: "gmod",
    label: "Garry's Mod",
    emoji: "🔧",
    tag: null,
    slots: [10, 16, 20, 32],
    pricePerSlot: 8.0,
    features: ["DarkRP / TTT / Sandbox", "FastDL", "Lua-аддоны", "Кастомный контент"],
  },
  {
    id: "ark",
    label: "ARK: Survival",
    emoji: "🦕",
    tag: null,
    slots: [10, 20, 30, 50, 70],
    pricePerSlot: 14.0,
    features: ["Все DLC карты", "Кластерный сервер", "Моды Steam Workshop", "Высокие ресурсы CPU"],
  },
];

// ─── FEATURES ─────────────────────────────────────────────────────────────────
const FEATURES = [
  { icon: "Cpu",        title: "Мощное железо",    desc: "Intel Xeon, NVMe SSD RAID10, DDR4 ECC RAM" },
  { icon: "Globe",      title: "3 локации",         desc: "Москва, Санкт-Петербург, Франкфурт" },
  { icon: "Shield",     title: "DDoS-защита",       desc: "Фильтрация до 2 Тбит/с, 0 простоев" },
  { icon: "Zap",        title: "Пинг < 5 мс",       desc: "Оптимизированные маршруты по России" },
  { icon: "RotateCcw",  title: "Бэкапы ежедневно", desc: "Автоматически, откат в один клик" },
  { icon: "Headphones", title: "Поддержка 24/7",    desc: "Среднее время ответа — 4 минуты" },
];

// ─── LOCATIONS ────────────────────────────────────────────────────────────────
const LOCATIONS = [
  { flag: "🇷🇺", city: "Москва",           dc: "3data",     ping: "< 2 мс",  load: 61 },
  { flag: "🇷🇺", city: "Санкт-Петербург", dc: "Миран",     ping: "< 5 мс",  load: 48 },
  { flag: "🇩🇪", city: "Франкфурт",       dc: "Hetzner",   ping: "< 25 мс", load: 33 },
];

// ─── REVIEWS ──────────────────────────────────────────────────────────────────
const REVIEWS = [
  { name: "Артём К.",   role: "Организатор CS2 лиги",  stars: 5, game: "CS2",       text: "Пинг стабильный, ни одного рестарта за 4 месяца. Поддержка отвечает быстро и по делу." },
  { name: "Дмитрий В.", role: "Капитан клана",          stars: 5, game: "CS:GO",     text: "Настроил сервер без единого вопроса к саппорту — всё понятно в панели. Плагины за минуту." },
  { name: "Алексей М.", role: "Админ Minecraft сервера",stars: 5, game: "Minecraft",  text: "Держу сервер на 50 игроков — не лагает. Бэкапы спасли мир когда случайно снёс папку." },
  { name: "Максим Л.",  role: "Twitch-стример",         stars: 5, game: "Garry's Mod",text: "DDoS-защита реально работает. Пытались положить во время стрима — не вышло." },
  { name: "Иван С.",    role: "Племя ARK Warriors",     stars: 5, game: "ARK",        text: "Взял сервер ARK — кластер настроили сами за 20 минут по гайду. Всё работает отлично." },
  { name: "Кирилл Т.", role: "Сервер CS 1.6",           stars: 5, game: "CS 1.6",     text: "Старая добрая 1.6 — пинг 3мс, AMX работает. Дёшево и надёжно." },
];

// ─── SIDEBAR NAV ──────────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { id: "home",      label: "Главная",        icon: "Home" },
  { id: "pricing",   label: "Тарифы",         icon: "CreditCard" },
  { id: "features",  label: "Преимущества",   icon: "Star" },
  { id: "locations", label: "Локации",        icon: "MapPin" },
  { id: "reviews",   label: "Отзывы",         icon: "MessageSquare" },
];

// ─── COMPONENT ────────────────────────────────────────────────────────────────
export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [activeGame, setActiveGame] = useState("cs2");
  const [selectedSlots, setSelectedSlots] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const game = GAMES.find(g => g.id === activeGame)!;
  const slots = game.slots[selectedSlots] ?? game.slots[0];
  const totalPrice = Math.round(slots * game.pricePerSlot);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setSidebarOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="layout-root">

      {/* ── SIDEBAR ── */}
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        {/* Logo */}
        <div className="sidebar-logo">
          <div style={{
            width: 26, height: 26, background: "var(--blue)", borderRadius: 5,
            display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
          }}>
            <Icon name="Server" size={13} style={{ color: "#fff" }} />
          </div>
          <span style={{ fontWeight: 700, fontSize: 14, color: "var(--white)", letterSpacing: "-0.01em" }}>
            FRAG<span style={{ color: "var(--blue-h)" }}>HOST</span>
          </span>
        </div>

        {/* Navigation */}
        <div className="sidebar-section-title">Навигация</div>
        {NAV_ITEMS.map(item => (
          <div
            key={item.id}
            className={`sidebar-link ${activeSection === item.id ? "active" : ""}`}
            onClick={() => scrollTo(item.id)}
          >
            <Icon name={item.icon} fallback="CircleAlert" size={14} />
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
            onClick={() => { setActiveGame(g.id); setSelectedSlots(0); scrollTo("pricing"); }}
          >
            <span className="game-emoji">{g.emoji}</span>
            <span style={{ flex: 1, fontSize: 12 }}>{g.label}</span>
            {g.tag && (
              <span className={`badge ${g.tagColor}`} style={{ fontSize: 9, padding: "1px 5px" }}>
                {g.tag}
              </span>
            )}
          </div>
        ))}

        <div className="sidebar-divider" />

        {/* Status */}
        <div style={{ padding: "10px 14px 16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
            <div className="dot-green" />
            <span style={{ fontSize: 11, color: "var(--green)" }}>Все серверы онлайн</span>
          </div>
          <div style={{ fontSize: 10.5, color: "var(--text3)" }}>
            12 431 активных серверов
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      <div className={`sidebar-overlay ${sidebarOpen ? "open" : ""}`} onClick={() => setSidebarOpen(false)} />

      {/* ── MAIN ── */}
      <div className="main-wrap">

        {/* Topbar */}
        <div className="topbar">
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {/* mobile menu btn */}
            <button
              style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text2)", display: "flex" }}
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden"
            >
              <Icon name="Menu" size={18} />
            </button>
            <div style={{ display: "flex", gap: 4, alignItems: "center" }}>
              <div className="dot-green" />
              <span style={{ fontSize: 11, color: "var(--text3)" }}>
                Пинг МСК: <span style={{ color: "var(--green)" }}>2 мс</span>
                &nbsp;·&nbsp;
                СПБ: <span style={{ color: "var(--green)" }}>4 мс</span>
                &nbsp;·&nbsp;
                EU: <span style={{ color: "var(--text2)" }}>24 мс</span>
              </span>
            </div>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <button className="btn-ghost" style={{ padding: "5px 12px", fontSize: 11.5 }}>Войти</button>
            <button className="btn-primary" style={{ padding: "5px 14px", fontSize: 11.5 }}>Регистрация</button>
          </div>
        </div>

        {/* Content */}
        <div className="content">

          {/* ── HOME / HERO ── */}
          <div id="home" style={{ scrollMarginTop: 52 }}>
            <div className="hero-strip fadein">
              <div style={{ display: "flex", flexWrap: "wrap", gap: 24, alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ maxWidth: 520 }}>
                  <div className="badge badge-blue" style={{ marginBottom: 12 }}>
                    Игровой хостинг с 2019 года
                  </div>
                  <h1 style={{ fontSize: 24, fontWeight: 700, color: "var(--white)", lineHeight: 1.3, marginBottom: 10 }}>
                    Хостинг игровых серверов<br />
                    <span style={{ color: "var(--blue-h)" }}>CS, Minecraft, GMod, ARK</span>
                  </h1>
                  <p style={{ fontSize: 12.5, color: "var(--text2)", lineHeight: 1.7, marginBottom: 18 }}>
                    Запустите сервер за 60 секунд. Мощное железо, DDoS-защита,
                    удобная панель управления и поддержка 24/7.
                  </p>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <button className="btn-primary" onClick={() => scrollTo("pricing")}>
                      Выбрать тариф
                    </button>
                    <button className="btn-ghost" onClick={() => scrollTo("features")}>
                      Подробнее
                    </button>
                  </div>
                </div>
                {/* Stats mini */}
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    { label: "Серверов онлайн", val: "12 431" },
                    { label: "Аптайм",          val: "99.9%" },
                    { label: "Пинг МСК",        val: "< 2 мс" },
                    { label: "Ответ саппорта",  val: "4 мин" },
                  ].map(s => (
                    <div key={s.label} style={{
                      background: "rgba(15,21,29,0.7)", border: "1px solid var(--border-c)",
                      borderRadius: 5, padding: "6px 14px",
                      display: "flex", justifyContent: "space-between", gap: 20, minWidth: 200
                    }}>
                      <span style={{ fontSize: 11.5, color: "var(--text2)" }}>{s.label}</span>
                      <span style={{ fontSize: 12.5, fontWeight: 700, color: "var(--white)" }}>{s.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick game selector on homepage */}
            <div className="section-head">
              <span className="section-head-title">Выберите игру</span>
              <div className="section-head-line" />
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
              {GAMES.map(g => (
                <button
                  key={g.id}
                  onClick={() => { setActiveGame(g.id); setSelectedSlots(0); scrollTo("pricing"); }}
                  style={{
                    background: activeGame === g.id ? "var(--blue)" : "var(--bg2)",
                    border: `1px solid ${activeGame === g.id ? "var(--blue)" : "var(--border-c)"}`,
                    borderRadius: 5, padding: "7px 14px",
                    color: activeGame === g.id ? "#fff" : "var(--text2)",
                    cursor: "pointer", fontSize: 12.5, fontWeight: 600,
                    display: "flex", alignItems: "center", gap: 7, transition: "all 0.15s"
                  }}
                >
                  <span style={{ fontSize: 15 }}>{g.emoji}</span>
                  {g.label}
                  {g.tag && (
                    <span className={`badge ${g.tagColor}`} style={{ fontSize: 9, padding: "1px 5px" }}>
                      {g.tag}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* ── PRICING ── */}
          <div id="pricing" style={{ scrollMarginTop: 52, marginBottom: 32 }}>
            <div className="section-head">
              <span className="section-head-title">Тарифы — {game.emoji} {game.label}</span>
              <div className="section-head-line" />
            </div>

            <div className="ma-box fadein">
              <div className="ma-box-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span>Выберите количество слотов</span>
                <span style={{ color: "var(--text3)", fontWeight: 400, textTransform: "none", letterSpacing: 0 }}>
                  {game.pricePerSlot}₽ / слот / мес
                </span>
              </div>
              <div style={{ padding: 14 }}>
                <div className="slot-tabs">
                  {game.slots.map((s, i) => (
                    <button
                      key={s}
                      className={`slot-tab ${selectedSlots === i ? "active" : ""}`}
                      onClick={() => setSelectedSlots(i)}
                    >
                      {s} слотов
                    </button>
                  ))}
                </div>

                {/* Plans for selected slots */}
                <table className="price-table" style={{ borderRadius: 5, overflow: "hidden", border: "1px solid var(--border-c)" }}>
                  <thead>
                    <tr>
                      <th>Тариф</th>
                      <th>Слоты</th>
                      <th>Локация</th>
                      <th>DDoS-защита</th>
                      <th>Бэкап</th>
                      <th>Цена/мес</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: "СТАРТ",   mult: 1.0, loc: "МСК / СПБ",       ddos: "500 Гбит/с", backup: "3 дня",  badge: null },
                      { name: "ПРО",     mult: 1.3, loc: "МСК / СПБ / EU",  ddos: "1 Тбит/с",   backup: "7 дней", badge: "Популярный" },
                      { name: "ЭЛИТ",    mult: 1.7, loc: "МСК / СПБ / EU",  ddos: "2 Тбит/с",   backup: "30 дней",badge: null },
                    ].map(plan => (
                      <tr key={plan.name}>
                        <td>
                          <span style={{ fontWeight: 700, color: "var(--white)", fontSize: 12 }}>{plan.name}</span>
                          {plan.badge && (
                            <span className="badge badge-blue" style={{ marginLeft: 6 }}>{plan.badge}</span>
                          )}
                        </td>
                        <td style={{ color: "var(--text2)" }}>{slots}</td>
                        <td style={{ color: "var(--text2)" }}>{plan.loc}</td>
                        <td style={{ color: "var(--text2)" }}>{plan.ddos}</td>
                        <td style={{ color: "var(--text2)" }}>{plan.backup}</td>
                        <td>
                          <span className="price-val">
                            {Math.round(slots * game.pricePerSlot * plan.mult)}₽
                          </span>
                        </td>
                        <td>
                          <button className="btn-order">Заказать</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* What's included */}
                <div style={{ marginTop: 14, padding: "10px 12px", background: "var(--bg3)", borderRadius: 5, border: "1px solid var(--border-c)" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text2)", marginBottom: 7, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    Входит во все тарифы
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "5px 18px" }}>
                    {game.features.map(f => (
                      <div key={f} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                        <Icon name="Check" size={11} style={{ color: "var(--green)" }} />
                        <span style={{ fontSize: 11.5, color: "var(--text)" }}>{f}</span>
                      </div>
                    ))}
                    {["Панель управления", "FTP доступ", "Автообновление", "Бесплатный перенос"].map(f => (
                      <div key={f} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                        <Icon name="Check" size={11} style={{ color: "var(--green)" }} />
                        <span style={{ fontSize: 11.5, color: "var(--text)" }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── FEATURES ── */}
          <div id="features" style={{ scrollMarginTop: 52, marginBottom: 32 }}>
            <div className="section-head">
              <span className="section-head-title">Преимущества</span>
              <div className="section-head-line" />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: 8 }}>
              {FEATURES.map((f, i) => (
                <div key={i} className="feature-card fadein">
                  <div className="feat-icon">
                    <Icon name={f.icon} fallback="CircleAlert" size={16} style={{ color: "var(--blue-h)" }} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 12.5, color: "var(--white)", marginBottom: 3 }}>{f.title}</div>
                    <div style={{ fontSize: 11.5, color: "var(--text2)", lineHeight: 1.6 }}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── LOCATIONS ── */}
          <div id="locations" style={{ scrollMarginTop: 52, marginBottom: 32 }}>
            <div className="section-head">
              <span className="section-head-title">Локации</span>
              <div className="section-head-line" />
            </div>
            <div className="ma-box fadein">
              <div className="ma-box-header">Дата-центры</div>
              {LOCATIONS.map((loc, i) => (
                <div key={i} className="loc-row">
                  <span style={{ fontSize: 18 }}>{loc.flag}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: 12.5, color: "var(--white)" }}>{loc.city}</div>
                    <div style={{ fontSize: 11, color: "var(--text3)" }}>{loc.dc}</div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 5, minWidth: 70 }}>
                    <div className="dot-green" />
                    <span style={{ fontSize: 11, color: "var(--green)" }}>Онлайн</span>
                  </div>
                  <div className="badge badge-blue">{loc.ping}</div>
                  <div style={{ minWidth: 90, fontSize: 11, color: "var(--text2)" }}>
                    Загрузка: <span style={{ color: "var(--white)" }}>{loc.load}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── REVIEWS ── */}
          <div id="reviews" style={{ scrollMarginTop: 52, marginBottom: 32 }}>
            <div className="section-head">
              <span className="section-head-title">Отзывы клиентов</span>
              <div className="section-head-line" />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 8 }}>
              {REVIEWS.map((r, i) => (
                <div key={i} className="review-item fadein">
                  <div style={{ display: "flex", gap: 2, marginBottom: 8 }}>
                    {Array.from({ length: r.stars }).map((_, j) => (
                      <Icon key={j} name="Star" size={12} style={{ color: "#e07c22", fill: "#e07c22" }} />
                    ))}
                  </div>
                  <p style={{ fontSize: 12, color: "var(--text2)", lineHeight: 1.65, marginBottom: 10 }}>
                    {r.text}
                  </p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 6 }}>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 12, color: "var(--white)" }}>{r.name}</div>
                      <div style={{ fontSize: 10.5, color: "var(--text3)" }}>{r.role}</div>
                    </div>
                    <span className="badge badge-blue" style={{ fontSize: 10 }}>{r.game}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div style={{ borderTop: "1px solid var(--border-c)", paddingTop: 18, marginTop: 8, display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 12 }}>
            <div style={{ fontSize: 11, color: "var(--text3)" }}>
              © 2024 FRAGHOST · Все права защищены
            </div>
            <div style={{ display: "flex", gap: 14 }}>
              {["Оферта", "Конфиденциальность", "Контакты"].map(l => (
                <a key={l} href="#" style={{ fontSize: 11, color: "var(--text3)", textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--text2)")}
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
