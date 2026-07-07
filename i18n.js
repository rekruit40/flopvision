/* FlopVision site — language (en/ru/zh) + theme switching, no dependencies.
   Elements carry data-i18n="key"; this fills textContent from the dict below
   (falling back to English). Language and theme are remembered in
   localStorage; language defaults to the browser's, theme to the OS setting. */

const T = {
  en: {
    "nav.features": "Features",
    "nav.privacy": "Privacy",
    "nav.terms": "Terms",
    "nav.support": "Support",
    "theme.toggle": "Theme",

    "index.title": "FlopVision — Poker Range & GTO Study Tool",
    "hero.tag": "See the flop the way solvers do. An offline poker range, equity and GTO study tool — private, fast, and made for your pocket.",
    "badges.soon": "Android available soon · iOS coming later",

    "feat.title": "What FlopVision does",
    "feat.sub": "Everything runs on your device. No account, no internet needed.",
    "feat.range.h": "Range editor",
    "feat.range.p": "Weighted 13×13 matrix with standard notation and a saved-range library.",
    "feat.breakdown.h": "Board breakdown",
    "feat.breakdown.p": "See how ranges hit any flop, turn or river — made hands and draws.",
    "feat.equity.h": "Instant equity",
    "feat.equity.p": "Hand vs range and range vs range, computed locally in milliseconds.",
    "feat.gto.h": "GTO viewer",
    "feat.gto.p": "Precomputed solver solutions with per-combo action frequencies.",
    "feat.trainer.h": "Trainer",
    "feat.trainer.p": "Quiz yourself on solver-correct flop decisions, hand after hand.",
    "feat.offline.h": "Private & offline",
    "feat.offline.p": "No tracking, no ads, no servers. Your study stays on your phone.",

    "howto.title": "How to use it",
    "howto.sub": "From an empty matrix to a solver-backed decision in a few taps.",
    "howto.s1.h": "1 · Build a range",
    "howto.s1.p": "Tap cells in the 13×13 matrix, drop in a preset, or type standard notation — and save ranges to your library.",
    "howto.s2.h": "2 · Set the board",
    "howto.s2.p": "Pick the flop, turn and river cards you want to study.",
    "howto.s3.h": "3 · Read equity & breakdown",
    "howto.s3.p": "Instantly see how the range hits the board — made hands, draws, and equity versus another range.",
    "howto.s4.h": "4 · Study GTO",
    "howto.s4.p": "Open a solved spot and read per-hand action frequencies straight from the solver.",
    "howto.s5.h": "5 · Train",
    "howto.s5.p": "Quiz yourself hand after hand and get instant, solver-correct feedback.",

    "is.title": "A study tool — not gambling",
    "is.yes.h": "What it is",
    "is.yes.1": "An educational poker theory tool",
    "is.yes.2": "Real solver strategies, computed offline",
    "is.yes.3": "Affordable — one price, all spots",
    "is.yes.4": "Works with no account and no internet",
    "is.no.h": "What it is not",
    "is.no.1": "No real-money gambling, bets or casino",
    "is.no.2": "No connection to poker sites",
    "is.no.3": "No accounts, no tracking",

    "shots.title": "Inside the app",
    "shots.sub": "Real screens from the app — Android now, iOS soon.",
    "shots.cap1": "Range editor",
    "shots.cap2": "GTO strategy",
    "shots.cap3": "Trainer",
    "shots.cap4": "Equity & breakdown",
    "shots.ph": "Screenshot\ncoming soon",

    "cta.h": "Study smarter, anywhere",
    "cta.p": "FlopVision is launching soon on Android, with iOS to follow.",
    "cta.btn": "Contact us",

    "footer.disclaimer": "FlopVision is an educational tool for studying poker theory. It offers no gambling of any kind.",
    "footer.contact": "Contact",
    "footer.rights": "© 2026 FlopVision",

    "priv.title": "FlopVision — Privacy Policy",
    "priv.h": "Privacy Policy",
    "priv.date": "Effective date: July 3, 2026",
    "priv.sum.h": "Summary",
    "priv.sum.p": "FlopVision is an offline poker study tool. The app needs no account, collects no personal data, uses no advertising or analytics SDKs, and transmits none of your ranges, boards or calculations. All computation happens locally on your device.",
    "priv.collect.h": "Data we collect",
    "priv.collect.p": "None. FlopVision has no server of its own and sends no usage data to us. Your saved ranges and settings are stored only on your device and are deleted when you uninstall the app.",
    "priv.subs.h": "Subscriptions and purchases",
    "priv.subs.p": "If you buy an optional Pro subscription, payment is processed entirely by the app store. We never see your name, payment details or address. To validate subscription status the app uses RevenueCat, which receives an anonymous app-generated identifier and store purchase tokens; this data cannot be used by us to identify you. RevenueCat's privacy policy: revenuecat.com/privacy.",
    "priv.perm.h": "Permissions",
    "priv.perm.p": "FlopVision requests no sensitive permissions: no location, contacts, camera, or storage access beyond its own sandbox.",
    "priv.child.h": "Children",
    "priv.child.p": "FlopVision is an educational strategy tool that contains poker themes and is not directed at children. It offers no real-money gambling.",
    "priv.change.h": "Changes",
    "priv.change.p": "If this policy changes, the updated version will be published here with a new effective date before the change ships.",
    "priv.contact.h": "Contact",
    "priv.contact.p": "Questions about this policy: rekruit40@gmail.com",

    "terms.title": "FlopVision — Terms of Use",
    "terms.h": "Terms of Use (EULA)",
    "terms.date": "Effective date: July 7, 2026",
    "terms.intro.h": "Acceptance",
    "terms.intro.p": "By downloading or using FlopVision (\"the app\") you agree to these terms. If you do not agree, do not use the app.",
    "terms.license.h": "License",
    "terms.license.p": "We grant you a personal, non-exclusive, non-transferable license to use the app on devices you own or control, for your own study. You may not resell, redistribute, reverse-engineer, or extract the app's databases for redistribution.",
    "terms.edu.h": "Educational purpose",
    "terms.edu.p": "FlopVision is a poker-theory study tool. It provides no real-money gambling and does not connect to any real-money poker service. Strategy content is provided for educational purposes with no guarantee of results.",
    "terms.subs.h": "Subscriptions",
    "terms.subs.p": "Optional Pro features are sold as an auto-renewing subscription through the app store. Billing, renewals and refunds are handled by the store under its terms; manage or cancel in your store account.",
    "terms.warranty.h": "No warranty",
    "terms.warranty.p": "The app is provided \"as is\", without warranties of any kind. To the extent permitted by law, we are not liable for any damages arising from its use.",
    "terms.changes.h": "Changes",
    "terms.changes.p": "We may update these terms; the current version is always published here. Continued use after an update means acceptance.",
    "terms.contact.h": "Contact",
    "terms.contact.p": "Questions about these terms: rekruit40@gmail.com",

    "support.title": "FlopVision — Support",
    "support.h": "Support",
    "support.intro": "Need help or have feedback? We read every message.",
    "support.email.h": "Contact",
    "support.email.p": "Email us at rekruit40@gmail.com — please include your device model and app version so we can help faster.",
    "support.faq.h": "Frequently asked",
    "support.q1": "Does the app need the internet?",
    "support.a1": "No. All analysis runs offline on your device. Internet is only used to download optional extra strategy databases.",
    "support.q2": "Is this real-money gambling?",
    "support.a2": "No. FlopVision is a study tool. There is no betting, no casino, and no connection to poker sites.",
    "support.q3": "How do subscriptions work?",
    "support.a3": "Core features are free. An optional Pro subscription unlocks extra spots, deeper breakdowns and unlimited trainer hands. Manage or cancel it in your app-store account.",
    "support.q4": "How do I restore a purchase?",
    "support.a4": "Open the app and use \"Restore purchases\" on the Pro screen; purchases are tied to your store account.",
    "support.back": "Back to home"
  },

  ru: {
    "nav.features": "Возможности",
    "nav.privacy": "Конфиденциальность",
    "nav.terms": "Условия",
    "nav.support": "Поддержка",
    "theme.toggle": "Тема",

    "index.title": "FlopVision — покерный тренажёр диапазонов и GTO",
    "hero.tag": "Смотри на флоп глазами солвера. Офлайн-инструмент для диапазонов, эквити и GTO — приватно, быстро и всегда в кармане.",
    "badges.soon": "Android — скоро · iOS — позже",

    "feat.title": "Что умеет FlopVision",
    "feat.sub": "Всё считается на устройстве. Без аккаунта и без интернета.",
    "feat.range.h": "Редактор диапазонов",
    "feat.range.p": "Взвешенная матрица 13×13, стандартная нотация и библиотека сохранённых диапазонов.",
    "feat.breakdown.h": "Разбор борда",
    "feat.breakdown.p": "Как диапазоны попадают в любой флоп, тёрн и ривер — готовые руки и дро.",
    "feat.equity.h": "Мгновенное эквити",
    "feat.equity.p": "Рука против диапазона и диапазон против диапазона — локально, за миллисекунды.",
    "feat.gto.h": "GTO-просмотр",
    "feat.gto.p": "Прекомпьютнутые решения солвера с частотами действий по каждому комбо.",
    "feat.trainer.h": "Тренажёр",
    "feat.trainer.p": "Проверяй себя на GTO-верных решениях на флопе, рука за рукой.",
    "feat.offline.h": "Приватность и офлайн",
    "feat.offline.p": "Без слежки, рекламы и серверов. Твоя учёба остаётся в телефоне.",

    "howto.title": "Как пользоваться",
    "howto.sub": "От пустой матрицы до решения на базе солвера — за несколько касаний.",
    "howto.s1.h": "1 · Собери диапазон",
    "howto.s1.p": "Отмечай клетки в матрице 13×13, ставь пресет или вводи стандартную нотацию — и сохраняй диапазоны в библиотеку.",
    "howto.s2.h": "2 · Задай борд",
    "howto.s2.p": "Выбери карты флопа, тёрна и ривера для изучения.",
    "howto.s3.h": "3 · Смотри эквити и разбор",
    "howto.s3.p": "Мгновенно видно, как диапазон попадает в борд — готовые руки, дро и эквити против другого диапазона.",
    "howto.s4.h": "4 · Изучай GTO",
    "howto.s4.p": "Открой посчитанный спот и читай частоты действий по каждой руке прямо из солвера.",
    "howto.s5.h": "5 · Тренируйся",
    "howto.s5.p": "Проверяй себя рука за рукой и получай мгновенный GTO-верный фидбек.",

    "is.title": "Инструмент для учёбы, а не азартная игра",
    "is.yes.h": "Что это",
    "is.yes.1": "Обучающий инструмент по теории покера",
    "is.yes.2": "Настоящие решения солвера, посчитанные офлайн",
    "is.yes.3": "Доступно — одна цена, все споты",
    "is.yes.4": "Работает без аккаунта и без интернета",
    "is.no.h": "Чем это не является",
    "is.no.1": "Никакой игры на деньги, ставок и казино",
    "is.no.2": "Нет связи с покер-румами",
    "is.no.3": "Нет аккаунтов и слежки",

    "shots.title": "Внутри приложения",
    "shots.sub": "Реальные экраны приложения — Android сейчас, iOS скоро.",
    "shots.cap1": "Редактор диапазонов",
    "shots.cap2": "GTO-стратегия",
    "shots.cap3": "Тренажёр",
    "shots.cap4": "Эквити и разбор",
    "shots.ph": "Скриншот\nскоро",

    "cta.h": "Учись эффективнее, где угодно",
    "cta.p": "FlopVision скоро выходит на Android, iOS — следом.",
    "cta.btn": "Связаться с нами",

    "footer.disclaimer": "FlopVision — обучающий инструмент по теории покера. Никаких азартных игр.",
    "footer.contact": "Контакт",
    "footer.rights": "© 2026 FlopVision",

    "priv.title": "FlopVision — Политика конфиденциальности",
    "priv.h": "Политика конфиденциальности",
    "priv.date": "Дата вступления в силу: 3 июля 2026",
    "priv.sum.h": "Кратко",
    "priv.sum.p": "FlopVision — офлайн-инструмент для изучения покера. Приложению не нужен аккаунт, оно не собирает персональные данные, не использует рекламные и аналитические SDK и никуда не передаёт ваши диапазоны, борды и расчёты. Всё считается локально на устройстве.",
    "priv.collect.h": "Какие данные мы собираем",
    "priv.collect.p": "Никакие. У FlopVision нет своего сервера, и мы не получаем данные об использовании. Сохранённые диапазоны и настройки хранятся только на вашем устройстве и удаляются при удалении приложения.",
    "priv.subs.h": "Подписки и покупки",
    "priv.subs.p": "Если вы оформляете необязательную подписку Pro, оплату полностью проводит магазин приложений. Мы не видим ваше имя, платёжные данные и адрес. Для проверки статуса подписки приложение использует RevenueCat, который получает анонимный идентификатор и токены покупок магазина; по этим данным мы не можем вас опознать. Политика RevenueCat: revenuecat.com/privacy.",
    "priv.perm.h": "Разрешения",
    "priv.perm.p": "FlopVision не запрашивает чувствительных разрешений: ни геолокации, ни контактов, ни камеры, ни доступа к хранилищу вне своей песочницы.",
    "priv.child.h": "Дети",
    "priv.child.p": "FlopVision — обучающий инструмент со стратегической покерной тематикой, не предназначенный для детей. Никаких игр на реальные деньги.",
    "priv.change.h": "Изменения",
    "priv.change.p": "Если политика изменится, обновлённая версия будет опубликована здесь с новой датой до вступления изменений в силу.",
    "priv.contact.h": "Контакт",
    "priv.contact.p": "Вопросы по политике: rekruit40@gmail.com",

    "terms.title": "FlopVision — Условия использования",
    "terms.h": "Условия использования (EULA)",
    "terms.date": "Дата вступления в силу: 7 июля 2026",
    "terms.intro.h": "Принятие условий",
    "terms.intro.p": "Скачивая или используя FlopVision («приложение»), вы соглашаетесь с этими условиями. Если не согласны — не используйте приложение.",
    "terms.license.h": "Лицензия",
    "terms.license.p": "Мы предоставляем вам персональную, неисключительную, непередаваемую лицензию на использование приложения на ваших устройствах для личной учёбы. Запрещено перепродавать, распространять, декомпилировать приложение или извлекать его базы для распространения.",
    "terms.edu.h": "Образовательное назначение",
    "terms.edu.p": "FlopVision — инструмент изучения теории покера. Он не предлагает игру на реальные деньги и не подключается к покерным сервисам. Стратегический материал предоставляется в образовательных целях без гарантии результата.",
    "terms.subs.h": "Подписки",
    "terms.subs.p": "Необязательные функции Pro продаются как автопродлеваемая подписка через магазин приложений. Оплата, продление и возвраты обрабатываются магазином по его правилам; управлять и отменять — в аккаунте магазина.",
    "terms.warranty.h": "Отказ от гарантий",
    "terms.warranty.p": "Приложение предоставляется «как есть», без каких-либо гарантий. В пределах, допустимых законом, мы не несём ответственности за ущерб от его использования.",
    "terms.changes.h": "Изменения",
    "terms.changes.p": "Мы можем обновлять эти условия; актуальная версия всегда опубликована здесь. Продолжение использования после обновления означает согласие.",
    "terms.contact.h": "Контакт",
    "terms.contact.p": "Вопросы по условиям: rekruit40@gmail.com",

    "support.title": "FlopVision — Поддержка",
    "support.h": "Поддержка",
    "support.intro": "Нужна помощь или есть отзыв? Мы читаем каждое сообщение.",
    "support.email.h": "Контакт",
    "support.email.p": "Пишите на rekruit40@gmail.com — укажите модель устройства и версию приложения, чтобы мы помогли быстрее.",
    "support.faq.h": "Частые вопросы",
    "support.q1": "Нужен ли приложению интернет?",
    "support.a1": "Нет. Все расчёты идут офлайн на устройстве. Интернет нужен только для загрузки дополнительных баз стратегий.",
    "support.q2": "Это игра на реальные деньги?",
    "support.a2": "Нет. FlopVision — обучающий инструмент. Никаких ставок, казино и связи с покер-румами.",
    "support.q3": "Как работают подписки?",
    "support.a3": "Основные функции бесплатны. Необязательная подписка Pro открывает дополнительные споты, глубокий разбор и безлимитный тренажёр. Управлять и отменять — в аккаунте магазина.",
    "support.q4": "Как восстановить покупку?",
    "support.a4": "Откройте приложение и нажмите «Восстановить покупки» на экране Pro; покупки привязаны к аккаунту магазина.",
    "support.back": "На главную"
  },

  zh: {
    "nav.features": "功能",
    "nav.privacy": "隐私",
    "nav.terms": "条款",
    "nav.support": "支持",
    "theme.toggle": "主题",

    "index.title": "FlopVision — 扑克范围与 GTO 学习工具",
    "hero.tag": "像求解器一样看翻牌。离线的扑克范围、胜率与 GTO 学习工具——私密、快速，装进口袋。",
    "badges.soon": "Android 即将上线 · iOS 稍后推出",

    "feat.title": "FlopVision 能做什么",
    "feat.sub": "全部在你的设备上运行。无需账号，无需联网。",
    "feat.range.h": "范围编辑器",
    "feat.range.p": "带权重的 13×13 矩阵、标准记号，以及已保存范围库。",
    "feat.breakdown.h": "牌面分解",
    "feat.breakdown.p": "查看范围如何击中任意翻牌、转牌或河牌——成手与听牌。",
    "feat.equity.h": "即时胜率",
    "feat.equity.p": "手牌对范围、范围对范围，本地毫秒级计算。",
    "feat.gto.h": "GTO 查看器",
    "feat.gto.p": "预先计算的求解器方案，含每个组合的行动频率。",
    "feat.trainer.h": "训练器",
    "feat.trainer.p": "一手接一手地测试你在翻牌的 GTO 正确决策。",
    "feat.offline.h": "私密与离线",
    "feat.offline.p": "无追踪、无广告、无服务器。你的学习留在手机里。",

    "howto.title": "如何使用",
    "howto.sub": "从空矩阵到基于求解器的决策，只需几次点击。",
    "howto.s1.h": "1 · 构建范围",
    "howto.s1.p": "点击 13×13 矩阵中的格子、套用预设，或输入标准记号——并可将范围保存到范围库。",
    "howto.s2.h": "2 · 设置牌面",
    "howto.s2.p": "选择你想研究的翻牌、转牌和河牌。",
    "howto.s3.h": "3 · 查看胜率与分解",
    "howto.s3.p": "即时了解范围如何击中牌面——成手、听牌，以及对另一范围的胜率。",
    "howto.s4.h": "4 · 学习 GTO",
    "howto.s4.p": "打开已求解的场景，直接读取求解器给出的每手行动频率。",
    "howto.s5.h": "5 · 训练",
    "howto.s5.p": "一手接一手地测试自己，获得即时的、符合求解器的反馈。",

    "is.title": "学习工具，而非赌博",
    "is.yes.h": "它是什么",
    "is.yes.1": "扑克理论学习工具",
    "is.yes.2": "真实的求解器策略，离线计算",
    "is.yes.3": "实惠——一个价格，所有场景",
    "is.yes.4": "无需账号、无需联网即可使用",
    "is.no.h": "它不是什么",
    "is.no.1": "没有真钱赌博、下注或赌场",
    "is.no.2": "不连接任何扑克平台",
    "is.no.3": "没有账号，没有追踪",

    "shots.title": "应用内一览",
    "shots.sub": "应用真实截图——Android 现已推出，iOS 即将到来。",
    "shots.cap1": "范围编辑器",
    "shots.cap2": "GTO 策略",
    "shots.cap3": "训练器",
    "shots.cap4": "胜率与分解",
    "shots.ph": "截图\n即将上线",

    "cta.h": "随时随地更聪明地学习",
    "cta.p": "FlopVision 即将在 Android 上线，iOS 随后推出。",
    "cta.btn": "联系我们",

    "footer.disclaimer": "FlopVision 是用于学习扑克理论的教育工具，不提供任何形式的赌博。",
    "footer.contact": "联系",
    "footer.rights": "© 2026 FlopVision",

    "priv.title": "FlopVision — 隐私政策",
    "priv.h": "隐私政策",
    "priv.date": "生效日期：2026年7月3日",
    "priv.sum.h": "摘要",
    "priv.sum.p": "FlopVision 是一款离线扑克学习工具。应用无需账号，不收集个人数据，不使用广告或分析 SDK，也不会传输你的范围、牌面或计算。所有计算都在你的设备本地完成。",
    "priv.collect.h": "我们收集的数据",
    "priv.collect.p": "没有。FlopVision 没有自己的服务器，也不向我们发送使用数据。你保存的范围和设置仅存储在你的设备上，卸载应用即删除。",
    "priv.subs.h": "订阅与购买",
    "priv.subs.p": "如果你购买可选的 Pro 订阅，付款完全由应用商店处理。我们绝不会看到你的姓名、支付信息或地址。为验证订阅状态，应用使用 RevenueCat，它会收到一个匿名的应用生成标识符和商店购买凭证；我们无法用这些数据识别你。RevenueCat 隐私政策：revenuecat.com/privacy。",
    "priv.perm.h": "权限",
    "priv.perm.p": "FlopVision 不请求任何敏感权限：无定位、通讯录、相机，也不访问其沙盒之外的存储。",
    "priv.child.h": "儿童",
    "priv.child.p": "FlopVision 是含扑克主题的教育策略工具，并非面向儿童，也不提供任何真钱赌博。",
    "priv.change.h": "变更",
    "priv.change.p": "如本政策变更，更新版本将在变更生效前以新的生效日期发布于此。",
    "priv.contact.h": "联系",
    "priv.contact.p": "关于本政策的问题：rekruit40@gmail.com",

    "terms.title": "FlopVision — 使用条款",
    "terms.h": "使用条款（EULA）",
    "terms.date": "生效日期：2026年7月7日",
    "terms.intro.h": "接受条款",
    "terms.intro.p": "下载或使用 FlopVision（“本应用”）即表示你同意这些条款。若不同意，请勿使用本应用。",
    "terms.license.h": "许可",
    "terms.license.p": "我们授予你个人的、非独占的、不可转让的许可，以在你拥有或控制的设备上用于个人学习。你不得转售、再分发、逆向工程本应用或提取其数据库用于再分发。",
    "terms.edu.h": "教育用途",
    "terms.edu.p": "FlopVision 是扑克理论学习工具。它不提供真钱赌博，也不连接任何真钱扑克服务。策略内容仅供教育用途，不保证任何结果。",
    "terms.subs.h": "订阅",
    "terms.subs.p": "可选的 Pro 功能通过应用商店以自动续订订阅方式出售。计费、续订和退款由商店按其条款处理；请在你的商店账号中管理或取消。",
    "terms.warranty.h": "免责声明",
    "terms.warranty.p": "本应用按“现状”提供，不含任何明示或默示的保证。在法律允许的范围内，我们不对因使用本应用产生的任何损害负责。",
    "terms.changes.h": "变更",
    "terms.changes.p": "我们可能更新这些条款；当前版本始终发布于此。更新后继续使用即表示接受。",
    "terms.contact.h": "联系",
    "terms.contact.p": "关于条款的问题：rekruit40@gmail.com",

    "support.title": "FlopVision — 支持",
    "support.h": "支持",
    "support.intro": "需要帮助或有反馈？我们会阅读每一条消息。",
    "support.email.h": "联系",
    "support.email.p": "请发邮件至 rekruit40@gmail.com——请附上你的设备型号和应用版本，以便我们更快帮助你。",
    "support.faq.h": "常见问题",
    "support.q1": "应用需要联网吗？",
    "support.a1": "不需要。所有分析都在你的设备上离线运行。仅在下载可选的额外策略数据库时才使用网络。",
    "support.q2": "这是真钱赌博吗？",
    "support.a2": "不是。FlopVision 是学习工具。没有下注、没有赌场，也不连接任何扑克平台。",
    "support.q3": "订阅如何运作？",
    "support.a3": "核心功能免费。可选的 Pro 订阅解锁更多场景、更深入的分解和无限训练手数。请在你的应用商店账号中管理或取消。",
    "support.q4": "如何恢复购买？",
    "support.a4": "打开应用，在 Pro 页面使用“恢复购买”；购买与你的商店账号绑定。",
    "support.back": "返回首页"
  }
};

(function () {
  function pickInitialLang() {
    const saved = localStorage.getItem("fv_lang");
    if (saved && T[saved]) return saved;
    const n = (navigator.language || "en").toLowerCase();
    if (n.startsWith("ru")) return "ru";
    if (n.startsWith("zh")) return "zh";
    return "en";
  }

  function applyLang(lang) {
    const dict = T[lang] || T.en;
    document.documentElement.lang = lang === "zh" ? "zh-Hans" : lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      const val = dict[key] != null ? dict[key] : T.en[key];
      if (val == null) return;
      if (el.tagName === "TITLE") { el.textContent = val; return; }
      el.textContent = val;
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-ph");
      const val = (dict[key] != null ? dict[key] : T.en[key]) || "";
      el.textContent = val;
    });
    document.querySelectorAll("[data-lang]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
    });
    localStorage.setItem("fv_lang", lang);
  }

  function applyTheme(theme) {
    if (theme === "light" || theme === "dark") {
      document.documentElement.setAttribute("data-theme", theme);
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    localStorage.setItem("fv_theme", theme || "");
  }

  function currentTheme() {
    // Dark is the site's default; only an explicit data-theme overrides it.
    return document.documentElement.getAttribute("data-theme") || "dark";
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyLang(pickInitialLang());
    const savedTheme = localStorage.getItem("fv_theme");
    if (savedTheme) applyTheme(savedTheme);

    document.querySelectorAll("[data-lang]").forEach(function (b) {
      b.addEventListener("click", function () { applyLang(b.getAttribute("data-lang")); });
    });
    const tb = document.getElementById("themeToggle");
    if (tb) tb.addEventListener("click", function () {
      applyTheme(currentTheme() === "light" ? "dark" : "light");
    });
  });
})();
