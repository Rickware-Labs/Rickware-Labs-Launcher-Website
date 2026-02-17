let config = {};
let products = [];
let currentLanguage = 'en';
let cart = [];
let wishlist = [];
let userPurchases = [];
let currentUser = null;

const translations = {
    en: {
        store: 'Store',
        library: 'Library',
        customer_panel: 'Customer Panel',
        discover: 'Discover',
        browse: 'Browse',
        news: 'News',
        search_store: 'Search store',
        wishlist: 'Wishlist',
        cart: 'Cart',
        show: 'Show:',
        new_release: 'New Release',
        price_low: 'Price: Low to High',
        price_high: 'Price: High to Low',
        popular: 'Most Popular',
        filters: 'Filters',
        reset: 'reset',
        keywords: 'Keywords',
        events: 'Events',
        price: 'Price',
        genre: 'Genre',
        features: 'Features',
        types: 'Types',
        apps: 'Apps',
        editor: 'Editor',
        stock_unlimited: 'Unlimited',
        stock_left: 'left',
        add_to_cart: 'Add to Cart',
        view_details: 'View Details',
        my_products: 'My Products',
        all: 'All',
        purchases: 'Purchases',
        recent: 'Recent',
        name: 'Name',
        category: 'Category',
        date: 'Date',
        product: 'Product',
        amount: 'Amount',
        coupon: 'Coupon',
        saved: 'Saved',
        no_coupon: 'No coupon',
        account_settings: 'Account Settings',
        preferences: 'Preferences',
        payment_methods: 'Payment Methods',
        order_history: 'Order History',
        help_support: 'Help & Support',
        logout: 'Logout',
        login: 'Login',
        register: 'Register',
        login_title: 'Sign In',
        login_description: 'Enter your credentials to access your account',
        email: 'Email',
        password: 'Password',
        remember_me: 'Remember me',
        forgot_password: 'Forgot password?',
        login_button: 'Sign In',
        or: 'OR',
        google_login: 'Continue with Google',
        discord_login: 'Continue with Discord',
        register_title: 'Create Account',
        register_description: 'Sign up to get started with premium products',
        username: 'Username',
        username_or_email: 'Username or Email',
        phone_number: 'Phone Number',
        confirm_password: 'Confirm Password',
        accept_terms: 'I accept the Terms of Service and Privacy Policy',
        email_newsletter: 'Subscribe to email newsletter',
        register_button: 'Create Account',
        google_register: 'Sign up with Google',
        discord_register: 'Sign up with Discord',
        store_name: 'Rickware - Labs - Launcher',
        auth_welcome: 'Welcome to the future of digital products',
        feature_1: 'Instant Access to Products',
        feature_2: 'Secure Payment Processing',
        feature_3: 'Premium Support',
        auto_setup: 'Auto Setup',
        install: 'Install',
        uninstall: 'Uninstall',
        update: 'Update',
        installed: 'Installed',
        buy_now: 'Buy Now',
        select_duration: 'Select Duration',
        description: 'Description',
        specifications: 'Specifications',
        system_requirements: 'System Requirements'
    },
    de: {
        store: 'Store',
        library: 'Bibliothek',
        customer_panel: 'Kundenbereich',
        discover: 'Entdecken',
        browse: 'Durchsuchen',
        news: 'Neuigkeiten',
        search_store: 'Store durchsuchen',
        wishlist: 'Wunschliste',
        cart: 'Warenkorb',
        show: 'Anzeigen:',
        new_release: 'Neu erschienen',
        price_low: 'Preis: Niedrig bis Hoch',
        price_high: 'Preis: Hoch bis Niedrig',
        popular: 'Am beliebtesten',
        filters: 'Filter',
        reset: 'zurücksetzen',
        keywords: 'Stichwörter',
        events: 'Ereignisse',
        price: 'Preis',
        genre: 'Genre',
        features: 'Funktionen',
        types: 'Typen',
        apps: 'Apps',
        editor: 'Editor',
        stock_unlimited: 'Unbegrenzt',
        stock_left: 'übrig',
        add_to_cart: 'In den Warenkorb',
        view_details: 'Details anzeigen',
        my_products: 'Meine Produkte',
        all: 'Alle',
        purchases: 'Käufe',
        recent: 'Neueste',
        name: 'Name',
        category: 'Kategorie',
        date: 'Datum',
        product: 'Produkt',
        amount: 'Betrag',
        coupon: 'Gutschein',
        saved: 'Gespart',
        no_coupon: 'Kein Gutschein',
        account_settings: 'Kontoeinstellungen',
        preferences: 'Einstellungen',
        payment_methods: 'Zahlungsmethoden',
        order_history: 'Bestellverlauf',
        help_support: 'Hilfe & Support',
        logout: 'Abmelden',
        login: 'Anmelden',
        register: 'Registrieren',
        login_title: 'Anmelden',
        login_description: 'Geben Sie Ihre Anmeldedaten ein',
        email: 'E-Mail',
        password: 'Passwort',
        remember_me: 'Angemeldet bleiben',
        forgot_password: 'Passwort vergessen?',
        login_button: 'Anmelden',
        or: 'ODER',
        google_login: 'Mit Google fortfahren',
        discord_login: 'Mit Discord fortfahren',
        register_title: 'Konto erstellen',
        register_description: 'Registrieren Sie sich für Premium-Produkte',
        username: 'Benutzername',
        username_or_email: 'Benutzername oder E-Mail',
        phone_number: 'Telefonnummer',
        confirm_password: 'Passwort bestätigen',
        accept_terms: 'Ich akzeptiere die Nutzungsbedingungen und Datenschutzrichtlinie',
        email_newsletter: 'Newsletter abonnieren',
        register_button: 'Konto erstellen',
        google_register: 'Mit Google registrieren',
        discord_register: 'Mit Discord registrieren',
        store_name: 'Rickware - Labs - Launcher',
        auth_welcome: 'Willkommen in der Zukunft digitaler Produkte',
        feature_1: 'Sofortiger Zugriff auf Produkte',
        feature_2: 'Sichere Zahlungsabwicklung',
        feature_3: 'Premium-Support',
        auto_setup: 'Auto-Setup',
        install: 'Installieren',
        uninstall: 'Deinstallieren',
        update: 'Aktualisieren',
        installed: 'Installiert',
        buy_now: 'Jetzt kaufen',
        select_duration: 'Dauer wählen',
        description: 'Beschreibung',
        specifications: 'Spezifikationen',
        system_requirements: 'Systemanforderungen'
    },
    ru: {
        store: 'Магазин',
        library: 'Библиотека',
        customer_panel: 'Панель клиента',
        discover: 'Обзор',
        browse: 'Просмотр',
        news: 'Новости',
        search_store: 'Поиск в магазине',
        wishlist: 'Избранное',
        cart: 'Корзина',
        show: 'Показать:',
        new_release: 'Новые релизы',
        price_low: 'Цена: от низкой к высокой',
        price_high: 'Цена: от высокой к низкой',
        popular: 'Популярное',
        filters: 'Фильтры',
        reset: 'сбросить',
        keywords: 'Ключевые слова',
        events: 'События',
        price: 'Цена',
        genre: 'Жанр',
        features: 'Особенности',
        types: 'Типы',
        apps: 'Приложения',
        editor: 'Редактор',
        stock_unlimited: 'Неограничено',
        stock_left: 'осталось',
        add_to_cart: 'Добавить в корзину',
        view_details: 'Подробнее',
        my_products: 'Мои продукты',
        all: 'Все',
        purchases: 'Покупки',
        recent: 'Недавние',
        name: 'Название',
        category: 'Категория',
        date: 'Дата',
        product: 'Продукт',
        amount: 'Сумма',
        coupon: 'Купон',
        saved: 'Сэкономлено',
        no_coupon: 'Без купона',
        account_settings: 'Настройки аккаунта',
        preferences: 'Предпочтения',
        payment_methods: 'Способы оплаты',
        order_history: 'История заказов',
        help_support: 'Помощь и поддержка',
        logout: 'Выйти',
        login: 'Войти',
        register: 'Регистрация',
        login_title: 'Вход',
        login_description: 'Введите данные для входа',
        email: 'Электронная почта',
        password: 'Пароль',
        remember_me: 'Запомнить меня',
        forgot_password: 'Забыли пароль?',
        login_button: 'Войти',
        or: 'ИЛИ',
        google_login: 'Продолжить с Google',
        discord_login: 'Продолжить с Discord',
        register_title: 'Создать аккаунт',
        register_description: 'Зарегистрируйтесь для доступа к премиум продуктам',
        username: 'Имя пользователя',
        username_or_email: 'Имя пользователя или Email',
        phone_number: 'Номер телефона',
        confirm_password: 'Подтвердите пароль',
        accept_terms: 'Я принимаю Условия использования и Политику конфиденциальности',
        email_newsletter: 'Подписаться на рассылку',
        register_button: 'Создать аккаунт',
        google_register: 'Зарегистрироваться через Google',
        discord_register: 'Зарегистрироваться через Discord',
        store_name: 'Rickware - Labs - Launcher',
        auth_welcome: 'Добро пожаловать в будущее цифровых продуктов',
        feature_1: 'Мгновенный доступ к продуктам',
        feature_2: 'Безопасная обработка платежей',
        feature_3: 'Премиум поддержка',
        auto_setup: 'Авто-установка',
        install: 'Установить',
        uninstall: 'Удалить',
        update: 'Обновить',
        installed: 'Установлено',
        buy_now: 'Купить сейчас',
        select_duration: 'Выберите срок',
        description: 'Описание',
        specifications: 'Характеристики',
        system_requirements: 'Системные требования'
    },
    fr: {
        store: 'Boutique',
        library: 'Bibliothèque',
        customer_panel: 'Panneau client',
        discover: 'Découvrir',
        browse: 'Parcourir',
        news: 'Actualités',
        search_store: 'Rechercher dans la boutique',
        wishlist: 'Liste de souhaits',
        cart: 'Panier',
        show: 'Afficher:',
        new_release: 'Nouvelles sorties',
        price_low: 'Prix: Croissant',
        price_high: 'Prix: Décroissant',
        popular: 'Populaire',
        filters: 'Filtres',
        reset: 'réinitialiser',
        keywords: 'Mots-clés',
        events: 'Événements',
        price: 'Prix',
        genre: 'Genre',
        features: 'Fonctionnalités',
        types: 'Types',
        apps: 'Applications',
        editor: 'Éditeur',
        stock_unlimited: 'Illimité',
        stock_left: 'restant',
        add_to_cart: 'Ajouter au panier',
        view_details: 'Voir les détails',
        my_products: 'Mes produits',
        all: 'Tous',
        purchases: 'Achats',
        recent: 'Récent',
        name: 'Nom',
        category: 'Catégorie',
        date: 'Date',
        product: 'Produit',
        amount: 'Montant',
        coupon: 'Coupon',
        saved: 'Économisé',
        no_coupon: 'Pas de coupon',
        account_settings: 'Paramètres du compte',
        preferences: 'Préférences',
        payment_methods: 'Méthodes de paiement',
        order_history: 'Historique des commandes',
        help_support: 'Aide et support',
        logout: 'Se déconnecter',
        login: 'Connexion',
        register: 'Inscription',
        login_title: 'Se connecter',
        login_description: 'Entrez vos identifiants',
        email: 'E-mail',
        password: 'Mot de passe',
        remember_me: 'Se souvenir de moi',
        forgot_password: 'Mot de passe oublié?',
        login_button: 'Se connecter',
        or: 'OU',
        google_login: 'Continuer avec Google',
        discord_login: 'Continuer avec Discord',
        register_title: 'Créer un compte',
        register_description: 'Inscrivez-vous pour accéder aux produits premium',
        username: 'Nom d\'utilisateur',
        username_or_email: 'Nom d\'utilisateur ou Email',
        phone_number: 'Numéro de téléphone',
        confirm_password: 'Confirmer le mot de passe',
        accept_terms: 'J\'accepte les Conditions d\'utilisation et la Politique de confidentialité',
        email_newsletter: 'S\'abonner à la newsletter',
        register_button: 'Créer un compte',
        google_register: 'S\'inscrire avec Google',
        discord_register: 'S\'inscrire avec Discord',
        store_name: 'Rickware - Labs - Launcher',
        auth_welcome: 'Bienvenue dans le futur des produits numériques',
        feature_1: 'Accès instantané aux produits',
        feature_2: 'Traitement des paiements sécurisé',
        feature_3: 'Support premium',
        auto_setup: 'Configuration automatique',
        install: 'Installer',
        uninstall: 'Désinstaller',
        update: 'Mettre à jour',
        installed: 'Installé',
        buy_now: 'Acheter maintenant',
        select_duration: 'Sélectionner la durée',
        description: 'Description',
        specifications: 'Spécifications',
        system_requirements: 'Configuration requise'
    },
    es: {
        store: 'Tienda',
        library: 'Biblioteca',
        customer_panel: 'Panel de cliente',
        discover: 'Descubrir',
        browse: 'Navegar',
        news: 'Noticias',
        search_store: 'Buscar en la tienda',
        wishlist: 'Lista de deseos',
        cart: 'Carrito',
        show: 'Mostrar:',
        new_release: 'Nuevo lanzamiento',
        price_low: 'Precio: Bajo a Alto',
        price_high: 'Precio: Alto a Bajo',
        popular: 'Más popular',
        filters: 'Filtros',
        reset: 'restablecer',
        keywords: 'Palabras clave',
        events: 'Eventos',
        price: 'Precio',
        genre: 'Género',
        features: 'Características',
        types: 'Tipos',
        apps: 'Aplicaciones',
        editor: 'Editor',
        stock_unlimited: 'Ilimitado',
        stock_left: 'restante',
        add_to_cart: 'Añadir al carrito',
        view_details: 'Ver detalles',
        my_products: 'Mis productos',
        all: 'Todos',
        purchases: 'Compras',
        recent: 'Reciente',
        name: 'Nombre',
        category: 'Categoría',
        date: 'Fecha',
        product: 'Producto',
        amount: 'Cantidad',
        coupon: 'Cupón',
        saved: 'Ahorrado',
        no_coupon: 'Sin cupón',
        account_settings: 'Configuración de cuenta',
        preferences: 'Preferencias',
        payment_methods: 'Métodos de pago',
        order_history: 'Historial de pedidos',
        help_support: 'Ayuda y soporte',
        logout: 'Cerrar sesión',
        login: 'Iniciar sesión',
        register: 'Registrarse',
        login_title: 'Iniciar sesión',
        login_description: 'Ingrese sus credenciales',
        email: 'Correo electrónico',
        password: 'Contraseña',
        remember_me: 'Recuérdame',
        forgot_password: '¿Olvidaste tu contraseña?',
        login_button: 'Iniciar sesión',
        or: 'O',
        google_login: 'Continuar con Google',
        discord_login: 'Continuar con Discord',
        register_title: 'Crear cuenta',
        register_description: 'Regístrate para acceder a productos premium',
        username: 'Nombre de usuario',
        username_or_email: 'Nombre de usuario o Email',
        phone_number: 'Número de teléfono',
        confirm_password: 'Confirmar contraseña',
        accept_terms: 'Acepto los Términos de servicio y la Política de privacidad',
        email_newsletter: 'Suscribirse al boletín',
        register_button: 'Crear cuenta',
        google_register: 'Registrarse con Google',
        discord_register: 'Registrarse con Discord',
        store_name: 'Rickware - Labs - Launcher',
        auth_welcome: 'Bienvenido al futuro de los productos digitales',
        feature_1: 'Acceso instantáneo a productos',
        feature_2: 'Procesamiento de pagos seguro',
        feature_3: 'Soporte premium',
        auto_setup: 'Configuración automática',
        install: 'Instalar',
        uninstall: 'Desinstalar',
        update: 'Actualizar',
        installed: 'Instalado',
        buy_now: 'Comprar ahora',
        select_duration: 'Seleccionar duración',
        description: 'Descripción',
        specifications: 'Especificaciones',
        system_requirements: 'Requisitos del sistema'
    },
    it: {
        store: 'Negozio',
        library: 'Biblioteca',
        customer_panel: 'Pannello cliente',
        discover: 'Scopri',
        browse: 'Sfoglia',
        news: 'Notizie',
        search_store: 'Cerca nel negozio',
        wishlist: 'Lista dei desideri',
        cart: 'Carrello',
        show: 'Mostra:',
        new_release: 'Nuove uscite',
        price_low: 'Prezzo: dal più basso',
        price_high: 'Prezzo: dal più alto',
        popular: 'Più popolare',
        filters: 'Filtri',
        reset: 'ripristina',
        keywords: 'Parole chiave',
        events: 'Eventi',
        price: 'Prezzo',
        genre: 'Genere',
        features: 'Caratteristiche',
        types: 'Tipi',
        apps: 'Applicazioni',
        editor: 'Editor',
        stock_unlimited: 'Illimitato',
        stock_left: 'rimasti',
        add_to_cart: 'Aggiungi al carrello',
        view_details: 'Vedi dettagli',
        my_products: 'I miei prodotti',
        all: 'Tutti',
        purchases: 'Acquisti',
        recent: 'Recenti',
        name: 'Nome',
        category: 'Categoria',
        date: 'Data',
        product: 'Prodotto',
        amount: 'Importo',
        coupon: 'Coupon',
        saved: 'Risparmiato',
        no_coupon: 'Nessun coupon',
        account_settings: 'Impostazioni account',
        preferences: 'Preferenze',
        payment_methods: 'Metodi di pagamento',
        order_history: 'Cronologia ordini',
        help_support: 'Aiuto e supporto',
        logout: 'Esci',
        login: 'Accedi',
        register: 'Registrati',
        login_title: 'Accedi',
        login_description: 'Inserisci le tue credenziali',
        email: 'Email',
        password: 'Password',
        remember_me: 'Ricordami',
        forgot_password: 'Password dimenticata?',
        login_button: 'Accedi',
        or: 'OPPURE',
        google_login: 'Continua con Google',
        discord_login: 'Continua con Discord',
        register_title: 'Crea account',
        register_description: 'Registrati per accedere ai prodotti premium',
        username: 'Nome utente',
        username_or_email: 'Nome utente o Email',
        phone_number: 'Numero di telefono',
        confirm_password: 'Conferma password',
        accept_terms: 'Accetto i Termini di servizio e la Privacy Policy',
        email_newsletter: 'Iscriviti alla newsletter',
        register_button: 'Crea account',
        google_register: 'Registrati con Google',
        discord_register: 'Registrati con Discord',
        store_name: 'Rickware - Labs - Launcher',
        auth_welcome: 'Benvenuto nel futuro dei prodotti digitali',
        feature_1: 'Accesso istantaneo ai prodotti',
        feature_2: 'Elaborazione pagamenti sicura',
        feature_3: 'Supporto premium',
        auto_setup: 'Configurazione automatica',
        install: 'Installa',
        uninstall: 'Disinstalla',
        update: 'Aggiorna',
        installed: 'Installato',
        buy_now: 'Acquista ora',
        select_duration: 'Seleziona durata',
        description: 'Descrizione',
        specifications: 'Specifiche',
        system_requirements: 'Requisiti di sistema'
    },
    pt: {
        store: 'Loja',
        library: 'Biblioteca',
        customer_panel: 'Painel do cliente',
        discover: 'Descobrir',
        browse: 'Navegar',
        news: 'Notícias',
        search_store: 'Pesquisar na loja',
        wishlist: 'Lista de desejos',
        cart: 'Carrinho',
        show: 'Mostrar:',
        new_release: 'Novo lançamento',
        price_low: 'Preço: Menor para Maior',
        price_high: 'Preço: Maior para Menor',
        popular: 'Mais popular',
        filters: 'Filtros',
        reset: 'redefinir',
        keywords: 'Palavras-chave',
        events: 'Eventos',
        price: 'Preço',
        genre: 'Gênero',
        features: 'Recursos',
        types: 'Tipos',
        apps: 'Aplicativos',
        editor: 'Editor',
        stock_unlimited: 'Ilimitado',
        stock_left: 'restante',
        add_to_cart: 'Adicionar ao carrinho',
        view_details: 'Ver detalhes',
        my_products: 'Meus produtos',
        all: 'Todos',
        purchases: 'Compras',
        recent: 'Recente',
        name: 'Nome',
        category: 'Categoria',
        date: 'Data',
        product: 'Produto',
        amount: 'Valor',
        coupon: 'Cupom',
        saved: 'Economizado',
        no_coupon: 'Sem cupom',
        account_settings: 'Configurações da conta',
        preferences: 'Preferências',
        payment_methods: 'Métodos de pagamento',
        order_history: 'Histórico de pedidos',
        help_support: 'Ajuda e suporte',
        logout: 'Sair',
        login: 'Entrar',
        register: 'Registrar',
        login_title: 'Entrar',
        login_description: 'Insira suas credenciais',
        email: 'E-mail',
        password: 'Senha',
        remember_me: 'Lembrar de mim',
        forgot_password: 'Esqueceu a senha?',
        login_button: 'Entrar',
        or: 'OU',
        google_login: 'Continuar com Google',
        discord_login: 'Continuar com Discord',
        register_title: 'Criar conta',
        register_description: 'Cadastre-se para acessar produtos premium',
        username: 'Nome de usuário',
        username_or_email: 'Nome de usuário ou Email',
        phone_number: 'Número de telefone',
        confirm_password: 'Confirmar senha',
        accept_terms: 'Aceito os Termos de Serviço e Política de Privacidade',
        email_newsletter: 'Assinar newsletter',
        register_button: 'Criar conta',
        google_register: 'Cadastrar com Google',
        discord_register: 'Cadastrar com Discord',
        store_name: 'Rickware - Labs - Launcher',
        auth_welcome: 'Bem-vindo ao futuro dos produtos digitais',
        feature_1: 'Acesso instantâneo aos produtos',
        feature_2: 'Processamento de pagamento seguro',
        feature_3: 'Suporte premium',
        auto_setup: 'Configuração automática',
        install: 'Instalar',
        uninstall: 'Desinstalar',
        update: 'Atualizar',
        installed: 'Instalado',
        buy_now: 'Comprar agora',
        select_duration: 'Selecionar duração',
        description: 'Descrição',
        specifications: 'Especificações',
        system_requirements: 'Requisitos do sistema'
    },
    ja: {
        store: 'ストア',
        library: 'ライブラリ',
        customer_panel: '顧客パネル',
        discover: '発見',
        browse: '閲覧',
        news: 'ニュース',
        search_store: 'ストアを検索',
        wishlist: 'ウィッシュリスト',
        cart: 'カート',
        show: '表示:',
        new_release: '新着',
        price_low: '価格: 安い順',
        price_high: '価格: 高い順',
        popular: '人気',
        filters: 'フィルター',
        reset: 'リセット',
        keywords: 'キーワード',
        events: 'イベント',
        price: '価格',
        genre: 'ジャンル',
        features: '機能',
        types: 'タイプ',
        apps: 'アプリ',
        editor: 'エディター',
        stock_unlimited: '無制限',
        stock_left: '残り',
        add_to_cart: 'カートに追加',
        view_details: '詳細を表示',
        my_products: 'マイ製品',
        all: 'すべて',
        purchases: '購入履歴',
        recent: '最近',
        name: '名前',
        category: 'カテゴリー',
        date: '日付',
        product: '製品',
        amount: '金額',
        coupon: 'クーポン',
        saved: '節約',
        no_coupon: 'クーポンなし',
        account_settings: 'アカウント設定',
        preferences: '設定',
        payment_methods: '支払い方法',
        order_history: '注文履歴',
        help_support: 'ヘルプとサポート',
        logout: 'ログアウト',
        login: 'ログイン',
        register: '登録',
        login_title: 'サインイン',
        login_description: '認証情報を入力してください',
        email: 'メール',
        password: 'パスワード',
        remember_me: 'ログイン状態を保持',
        forgot_password: 'パスワードをお忘れですか？',
        login_button: 'サインイン',
        or: 'または',
        google_login: 'Googleで続ける',
        discord_login: 'Discordで続ける',
        register_title: 'アカウント作成',
        register_description: 'プレミアム製品にアクセスするために登録',
        username: 'ユーザー名',
        username_or_email: 'ユーザー名またはメール',
        phone_number: '電話番号',
        confirm_password: 'パスワード確認',
        accept_terms: '利用規約とプライバシーポリシーに同意します',
        email_newsletter: 'ニュースレターを購読',
        register_button: 'アカウント作成',
        google_register: 'Googleで登録',
        discord_register: 'Discordで登録',
        store_name: 'Rickware - Labs - Launcher',
        auth_welcome: 'デジタル製品の未来へようこそ',
        feature_1: '製品への即時アクセス',
        feature_2: '安全な支払い処理',
        feature_3: 'プレミアムサポート',
        auto_setup: '自動セットアップ',
        install: 'インストール',
        uninstall: 'アンインストール',
        update: '更新',
        installed: 'インストール済み',
        buy_now: '今すぐ購入',
        select_duration: '期間を選択',
        description: '説明',
        specifications: '仕様',
        system_requirements: 'システム要件'
    },
    ko: {
        store: '스토어',
        library: '라이브러리',
        customer_panel: '고객 패널',
        discover: '발견',
        browse: '찾아보기',
        news: '뉴스',
        search_store: '스토어 검색',
        wishlist: '위시리스트',
        cart: '장바구니',
        show: '표시:',
        new_release: '신규 출시',
        price_low: '가격: 낮은순',
        price_high: '가격: 높은순',
        popular: '인기',
        filters: '필터',
        reset: '재설정',
        keywords: '키워드',
        events: '이벤트',
        price: '가격',
        genre: '장르',
        features: '기능',
        types: '유형',
        apps: '앱',
        editor: '편집기',
        stock_unlimited: '무제한',
        stock_left: '남음',
        add_to_cart: '장바구니에 추가',
        view_details: '세부정보 보기',
        my_products: '내 제품',
        all: '전체',
        purchases: '구매 내역',
        recent: '최근',
        name: '이름',
        category: '카테고리',
        date: '날짜',
        product: '제품',
        amount: '금액',
        coupon: '쿠폰',
        saved: '절약',
        no_coupon: '쿠폰 없음',
        account_settings: '계정 설정',
        preferences: '환경설정',
        payment_methods: '결제 수단',
        order_history: '주문 내역',
        help_support: '도움말 및 지원',
        logout: '로그아웃',
        login: '로그인',
        register: '등록',
        login_title: '로그인',
        login_description: '자격 증명을 입력하세요',
        email: '이메일',
        password: '비밀번호',
        remember_me: '로그인 상태 유지',
        forgot_password: '비밀번호를 잊으셨나요?',
        login_button: '로그인',
        or: '또는',
        google_login: 'Google로 계속하기',
        discord_login: 'Discord로 계속하기',
        register_title: '계정 생성',
        register_description: '프리미엄 제품 액세스를 위한 가입',
        username: '사용자 이름',
        username_or_email: '사용자 이름 또는 이메일',
        phone_number: '전화번호',
        confirm_password: '비밀번호 확인',
        accept_terms: '서비스 약관 및 개인정보 보호정책에 동의합니다',
        email_newsletter: '뉴스레터 구독',
        register_button: '계정 생성',
        google_register: 'Google로 가입',
        discord_register: 'Discord로 가입',
        store_name: 'Rickware - Labs - Launcher',
        auth_welcome: '디지털 제품의 미래에 오신 것을 환영합니다',
        feature_1: '제품에 즉시 액세스',
        feature_2: '안전한 결제 처리',
        feature_3: '프리미엄 지원',
        auto_setup: '자동 설정',
        install: '설치',
        uninstall: '제거',
        update: '업데이트',
        installed: '설치됨',
        buy_now: '지금 구매',
        select_duration: '기간 선택',
        description: '설명',
        specifications: '사양',
        system_requirements: '시스템 요구사항'
    },
    zh: {
        store: '商店',
        library: '库',
        customer_panel: '客户面板',
        discover: '发现',
        browse: '浏览',
        news: '新闻',
        search_store: '搜索商店',
        wishlist: '愿望清单',
        cart: '购物车',
        show: '显示:',
        new_release: '新发布',
        price_low: '价格: 从低到高',
        price_high: '价格: 从高到低',
        popular: '最受欢迎',
        filters: '筛选',
        reset: '重置',
        keywords: '关键词',
        events: '活动',
        price: '价格',
        genre: '类型',
        features: '特性',
        types: '类型',
        apps: '应用',
        editor: '编辑器',
        stock_unlimited: '无限',
        stock_left: '剩余',
        add_to_cart: '添加到购物车',
        view_details: '查看详情',
        my_products: '我的产品',
        all: '全部',
        purchases: '购买记录',
        recent: '最近',
        name: '名称',
        category: '类别',
        date: '日期',
        product: '产品',
        amount: '金额',
        coupon: '优惠券',
        saved: '节省',
        no_coupon: '无优惠券',
        account_settings: '账户设置',
        preferences: '偏好设置',
        payment_methods: '支付方式',
        order_history: '订单历史',
        help_support: '帮助与支持',
        logout: '登出',
        login: '登录',
        register: '注册',
        login_title: '登录',
        login_description: '输入您的凭据',
        email: '电子邮件',
        password: '密码',
        remember_me: '记住我',
        forgot_password: '忘记密码？',
        login_button: '登录',
        or: '或',
        google_login: '使用Google继续',
        discord_login: '使用Discord继续',
        register_title: '创建账户',
        register_description: '注册以访问高级产品',
        username: '用户名',
        username_or_email: '用户名或邮箱',
        phone_number: '电话号码',
        confirm_password: '确认密码',
        accept_terms: '我接受服务条款和隐私政策',
        email_newsletter: '订阅电子邮件通讯',
        register_button: '创建账户',
        google_register: '使用Google注册',
        discord_register: '使用Discord注册',
        store_name: 'Rickware - Labs - Launcher',
        auth_welcome: '欢迎来到数字产品的未来',
        feature_1: '即时访问产品',
        feature_2: '安全的支付处理',
        feature_3: '高级支持',
        auto_setup: '自动设置',
        install: '安装',
        uninstall: '卸载',
        update: '更新',
        installed: '已安装',
        buy_now: '立即购买',
        select_duration: '选择时长',
        description: '描述',
        specifications: '规格',
        system_requirements: '系统要求'
    }
};

const languageNames = {
    en: 'English',
    de: 'Deutsch',
    ru: 'Русский',
    fr: 'Français',
    es: 'Español',
    it: 'Italiano',
    pt: 'Português',
    ja: '日本語',
    ko: '한국어',
    zh: '中文'
};

async function getUserIP() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        return data.ip;
    } catch (error) {
        console.error('Error getting IP:', error);
        return null;
    }
}

function getBrowserInfo() {
    const ua = navigator.userAgent;
    let browser = 'Unknown';
    if (ua.indexOf('Firefox') > -1) browser = 'Firefox';
    else if (ua.indexOf('Chrome') > -1) browser = 'Chrome';
    else if (ua.indexOf('Safari') > -1) browser = 'Safari';
    else if (ua.indexOf('Edge') > -1) browser = 'Edge';
    return browser;
}

function getOSInfo() {
    const ua = navigator.userAgent;
    let os = 'Unknown';
    if (ua.indexOf('Win') > -1) os = 'Windows';
    else if (ua.indexOf('Mac') > -1) os = 'MacOS';
    else if (ua.indexOf('Linux') > -1) os = 'Linux';
    else if (ua.indexOf('Android') > -1) os = 'Android';
    else if (ua.indexOf('iOS') > -1) os = 'iOS';
    return os;
}

function generateProductKey(username, accountType) {
    const randomPart1 = Math.floor(Math.random() * 10000000000);
    const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomPart2 = Array.from({length: 5}, () => randomChars[Math.floor(Math.random() * randomChars.length)]).join('');
    const randomPart3 = Array.from({length: 30}, () => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        return chars[Math.floor(Math.random() * chars.length)];
    }).join('');
    const randomPart4 = Math.floor(Math.random() * 100000);
    const randomPart5 = Array.from({length: 10}, () => randomChars[Math.floor(Math.random() * randomChars.length)]).join('');
    return `R1ckwar3-${randomPart1}-Lab$-${randomPart2}-Launcher-${randomPart3}-${accountType}-${randomPart4}-${accountType}-${randomPart5}`;
}

async function getGitHubFileContent() {
    try {
        const response = await fetch(`https://api.github.com/repos/${github_repo_owner}/${github_repo_name1}/contents/${github_account_file_path}`, {
            headers: {
                'Authorization': `token ${github_database_1_token}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });
        
        if (!response.ok) {
            throw new Error('Failed to fetch file');
        }
        
        const data = await response.json();
        const content = atob(data.content);
        return {content: JSON.parse(content), sha: data.sha};
    } catch (error) {
        console.error('Error fetching GitHub file:', error);
        return null;
    }
}

async function updateGitHubFile(content, sha, message) {
    try {
        const response = await fetch(`https://api.github.com/repos/${github_repo_owner}/${github_repo_name1}/contents/${github_account_file_path}`, {
            method: 'PUT',
            headers: {
                'Authorization': `token ${github_database_1_token}`,
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: message,
                content: btoa(JSON.stringify(content, null, 2)),
                sha: sha
            })
        });
        
        if (!response.ok) {
            throw new Error('Failed to update file');
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error updating GitHub file:', error);
        return null;
    }
}

function validateUsername(username) {
    if (username.length < 7 || username.length > 20) return false;
    if (!/^[A-Za-z]/.test(username)) return false;
    if (!/[A-Z]/.test(username)) return false;
    if (!/[0-9]/.test(username)) return false;
    if (/^[._-]/.test(username) || /[._-]$/.test(username)) return false;
    if (!/^[A-Za-z0-9._-]+$/.test(username)) return false;
    return true;
}

async function registerUser(username, email, phone, password, newsletter) {
    if (!validateUsername(username)) {
        alert('Username does not meet requirements:\n- 7-20 characters\n- Must start with a letter\n- Must contain at least one uppercase letter\n- Must contain at least one number\n- Can only contain letters, numbers, dots, hyphens, underscores\n- Cannot start or end with dot, hyphen, or underscore');
        return false;
    }

    const fileData = await getGitHubFileContent();
    if (!fileData) {
        alert('Failed to connect to database. Please try again later.');
        return false;
    }

    const accounts = fileData.content.accounts;
    
    if (accounts.some(acc => acc.username.toLowerCase() === username.toLowerCase())) {
        alert('Username already exists');
        return false;
    }
    
    if (accounts.some(acc => acc.email_adress && acc.email_adress.toLowerCase() === email.toLowerCase())) {
        alert('Email already exists');
        return false;
    }

    const userIP = await getUserIP();
    const maxId = Math.max(...accounts.map(acc => parseInt(acc.account_id)), 0);
    
    const newAccount = {
        account_id: (maxId + 1).toString(),
        system_ban: false,
        system_timeout: false,
        system_rate_limit: "10",
        username: username,
        password: password,
        "2_fa": false,
        email_newsletter: newsletter,
        email_adress: email,
        phone_number: phone || null,
        discord_linked: false,
        google_linked: false,
        profile_picture: `${username}/profile_picture_1.png`,
        account_type: "User",
        account_permissions: "User",
        database_main_product_key: generateProductKey(username, "User"),
        purchased_products: [],
        paid_products: [],
        product_types: [],
        product_license_keys: [],
        paused_license_keys: [],
        banned_products: [],
        user_last_ip: userIP,
        user_last_login: new Date().toISOString(),
        user_login_count: "1",
        user_last_os: getOSInfo(),
        user_os_version: navigator.platform,
        user_os_systems: getOSInfo(),
        user_time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        user_hwid: null,
        user_mac: null,
        user_uuid: null,
        user_system_user: null,
        user_user_agent: navigator.userAgent,
        user_fingerprint: null,
        user_browser: getBrowserInfo(),
        user_discord_username: null,
        user_discord_displayname: null,
        user_discord_user_id: null,
        user_discord_user_server: "false",
        user_discord_user_roles: [],
        user_discord_user_ticket_ids: [],
        user_discord_user_coin_amount: 100,
        user_discord_user_xp_amount: 100,
        user_discord_user_invited_user: []
    };

    accounts.push(newAccount);
    fileData.content.accounts = accounts;

    const result = await updateGitHubFile(fileData.content, fileData.sha, `New user registration: ${username}`);
    
    if (result) {
        return newAccount;
    } else {
        alert('Failed to create account. Please try again.');
        return false;
    }
}

async function loginUser(usernameOrEmail, password, rememberMe) {
    const fileData = await getGitHubFileContent();
    if (!fileData) {
        alert('Failed to connect to database. Please try again later.');
        return false;
    }

    const accounts = fileData.content.accounts;
    const account = accounts.find(acc => 
        (acc.username.toLowerCase() === usernameOrEmail.toLowerCase() || 
         (acc.email_adress && acc.email_adress.toLowerCase() === usernameOrEmail.toLowerCase())) &&
        acc.password === password
    );

    if (!account) {
        alert('Invalid username/email or password');
        return false;
    }

    if (account.system_ban) {
        alert('This account has been banned');
        return false;
    }

    const userIP = await getUserIP();
    account.user_last_ip = userIP;
    account.user_last_login = new Date().toISOString();
    account.user_login_count = (parseInt(account.user_login_count) + 1).toString();
    account.user_last_os = getOSInfo();
    account.user_os_version = navigator.platform;
    account.user_user_agent = navigator.userAgent;
    account.user_browser = getBrowserInfo();

    const accountIndex = accounts.findIndex(acc => acc.account_id === account.account_id);
    accounts[accountIndex] = account;
    fileData.content.accounts = accounts;
    
    await updateGitHubFile(fileData.content, fileData.sha, `User login: ${account.username}`);

    if (rememberMe) {
        const cookieData = {
            username: account.username,
            account_id: account.account_id,
            timestamp: Date.now()
        };
        document.cookie = `rickware_session=${btoa(JSON.stringify(cookieData))}; max-age=${30*24*60*60}; path=/`;
    } else {
        sessionStorage.setItem('rickware_user', JSON.stringify(account));
    }

    return account;
}

async function checkLoginStatus() {
    const cookie = document.cookie.split('; ').find(row => row.startsWith('rickware_session='));
    
    if (cookie) {
        try {
            const data = JSON.parse(atob(cookie.split('=')[1]));
            const fileData = await getGitHubFileContent();
            
            if (fileData) {
                const account = fileData.content.accounts.find(acc => acc.account_id === data.account_id);
                if (account && !account.system_ban) {
                    currentUser = account;
                    updateUIForLoginStatus(true);
                    return true;
                }
            }
        } catch (error) {
            console.error('Error checking cookie:', error);
            document.cookie = 'rickware_session=; max-age=0; path=/';
        }
    }

    const sessionData = sessionStorage.getItem('rickware_user');
    if (sessionData) {
        try {
            currentUser = JSON.parse(sessionData);
            updateUIForLoginStatus(true);
            return true;
        } catch (error) {
            console.error('Error checking session:', error);
            sessionStorage.removeItem('rickware_user');
        }
    }

    updateUIForLoginStatus(false);
    return false;
}

function updateUIForLoginStatus(isLoggedIn) {
    const authButtons = document.getElementById('authButtons');
    const profileBtn = document.getElementById('profileBtn');
    const profileName = document.getElementById('profileName');
    const profileEmail = document.getElementById('profileEmail');
    
    if (authButtons && profileBtn) {
        if (isLoggedIn && currentUser) {
            authButtons.style.display = 'none';
            profileBtn.style.display = 'flex';
            if (profileName) profileName.textContent = currentUser.username;
            if (profileEmail && currentUser.email_adress) profileEmail.textContent = currentUser.email_adress;
        } else {
            authButtons.style.display = 'flex';
            profileBtn.style.display = 'none';
        }
    }
}

async function loadConfig() {
    try {
        const response = await fetch('./config/config.json');
        config = await response.json();
        initializeDiscordButton();
    } catch (error) {
        console.error('Error loading config:', error);
    }
}

function initializeDiscordButton() {
    const discordBtn = document.getElementById('discordBtn');
    if (discordBtn && config.discord_invite) {
        discordBtn.href = config.discord_invite;
        discordBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.open(config.discord_invite, '_blank');
        });
    }
}

function translate(key) {
    return translations[currentLanguage][key] || translations['en'][key] || key;
}

function updateLanguage() {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translate(key);
    });

    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        element.placeholder = translate(key);
    });

    const currentLangElement = document.getElementById('currentLang');
    const currentLangAuthElement = document.getElementById('currentLangAuth');
    
    if (currentLangElement) {
        currentLangElement.textContent = currentLanguage.toUpperCase();
    }
    
    if (currentLangAuthElement) {
        currentLangAuthElement.textContent = currentLanguage.toUpperCase();
    }
}

function setupLanguageSelector() {
    const languageBtn = document.getElementById('languageBtn');
    const languageDropdown = document.getElementById('languageDropdown');

    if (languageBtn && languageDropdown) {
        languageDropdown.innerHTML = Object.keys(languageNames).map(code => `
            <button class="language-option" data-lang="${code}">
                ${languageNames[code]}
            </button>
        `).join('');

        languageBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            languageDropdown.classList.toggle('active');
        });

        document.addEventListener('click', () => {
            languageDropdown.classList.remove('active');
        });

        languageDropdown.querySelectorAll('.language-option').forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                currentLanguage = option.getAttribute('data-lang');
                updateLanguage();
                languageDropdown.classList.remove('active');
            });
        });
    }
}

function setupAuthLanguageSelector() {
    const languageBtnAuth = document.getElementById('languageBtnAuth');
    const languageDropdownAuth = document.getElementById('languageDropdownAuth');

    if (languageBtnAuth && languageDropdownAuth) {
        languageDropdownAuth.innerHTML = Object.keys(languageNames).map(code => `
            <button class="language-option" data-lang="${code}">
                ${languageNames[code]}
            </button>
        `).join('');

        languageBtnAuth.addEventListener('click', (e) => {
            e.stopPropagation();
            languageDropdownAuth.classList.toggle('active');
        });

        document.addEventListener('click', () => {
            languageDropdownAuth.classList.remove('active');
        });

        languageDropdownAuth.querySelectorAll('.language-option').forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                currentLanguage = option.getAttribute('data-lang');
                updateLanguage();
                languageDropdownAuth.classList.remove('active');
            });
        });
    }
}

function updateCartBadge() {
    const cartBadge = document.getElementById('cartBadge');
    if (cartBadge) {
        cartBadge.textContent = cart.length;
        cartBadge.style.display = cart.length > 0 ? 'flex' : 'none';
    }
}

function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    productsGrid.innerHTML = '<p style="text-align: center; padding: 40px; color: var(--text-secondary);">Products will be loaded here</p>';
}

function renderCustomerProducts() {
    const customerProductsGrid = document.getElementById('customerProductsGrid');
    if (!customerProductsGrid) return;
    customerProductsGrid.innerHTML = '<p style="text-align: center; padding: 40px; color: var(--text-secondary);">Your purchased products will appear here</p>';
}

function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item[data-page]');
    const storePage = document.getElementById('storePage');
    const customerPage = document.getElementById('customerPage');
    const productDetailPage = document.getElementById('productDetailPage');
    const backBtn = document.getElementById('backBtn');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            const page = item.getAttribute('data-page');

            if (storePage) storePage.classList.add('hidden');
            if (customerPage) customerPage.classList.add('hidden');
            if (productDetailPage) productDetailPage.classList.add('hidden');
            if (backBtn) backBtn.style.display = 'none';

            if (page === 'store') {
                if (storePage) storePage.classList.remove('hidden');
            } else if (page === 'customer') {
                if (customerPage) customerPage.classList.remove('hidden');
                renderCustomerProducts();
                renderPurchasesTable();
            } else if (page === 'library') {
            }
        });
    });

    if (backBtn) {
        backBtn.addEventListener('click', () => {
            if (productDetailPage) productDetailPage.classList.add('hidden');
            if (storePage) storePage.classList.remove('hidden');
            backBtn.style.display = 'none';
        });
    }

    const customerTabs = document.querySelectorAll('.customer-tab');
    const customerAllTab = document.getElementById('customerAllTab');
    const customerPurchasesTab = document.getElementById('customerPurchasesTab');

    customerTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            customerTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const tabName = tab.getAttribute('data-tab');

            if (tabName === 'all') {
                if (customerAllTab) customerAllTab.classList.remove('hidden');
                if (customerPurchasesTab) customerPurchasesTab.classList.add('hidden');
            } else if (tabName === 'purchases') {
                if (customerAllTab) customerAllTab.classList.add('hidden');
                if (customerPurchasesTab) customerPurchasesTab.classList.remove('hidden');
                renderPurchasesTable();
            }
        });
    });
}

function renderPurchasesTable() {
    const purchasesTableBody = document.getElementById('purchasesTableBody');
    if (!purchasesTableBody) return;

    if (userPurchases.length === 0) {
        purchasesTableBody.innerHTML = `
            <tr>
                <td colspan="5" style="text-align: center; padding: 40px; color: var(--text-secondary);">No purchases yet</td>
            </tr>
        `;
        return;
    }

    purchasesTableBody.innerHTML = userPurchases.map(purchase => {
        const date = new Date(purchase.date).toLocaleString(currentLanguage);
        const saved = purchase.coupon ? (purchase.originalAmount - purchase.amount).toFixed(2) : '0.00';

        return `
            <tr>
                <td>${date}</td>
                <td>${purchase.productName}</td>
                <td>${config.currency || '$'}${purchase.amount.toFixed(2)}</td>
                <td>${purchase.coupon || translate('no_coupon')}</td>
                <td>${config.currency || '$'}${saved}</td>
            </tr>
        `;
    }).join('');
}

function setupProfileSidebar() {
    const profileBtn = document.getElementById('profileBtn');
    const profileSidebar = document.getElementById('profileSidebar');
    const overlay = document.getElementById('overlay');

    if (profileBtn) {
        profileBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (profileSidebar) profileSidebar.classList.toggle('active');
            if (overlay) overlay.classList.toggle('active');
        });
    }

    if (overlay) {
        overlay.addEventListener('click', () => {
            if (profileSidebar) profileSidebar.classList.remove('active');
            overlay.classList.remove('active');
        });
    }

    const logoutBtn = document.querySelector('.logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            document.cookie = 'rickware_session=; max-age=0; path=/';
            sessionStorage.removeItem('rickware_user');
            currentUser = null;
            window.location.href = './sites/login_register.html';
        });
    }
}

function setupLoginRegisterButtons() {
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            window.location.href = './sites/login_register.html?tab=login';
        });
    }
    
    if (registerBtn) {
        registerBtn.addEventListener('click', () => {
            window.location.href = './sites/login_register.html?tab=register';
        });
    }
}

function initAuthPage() {
    const authTabs = document.querySelectorAll('.auth-tab');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get('tab');
    
    if (tab === 'register' && authTabs.length > 1) {
        authTabs.forEach(t => t.classList.remove('active'));
        authTabs[1].classList.add('active');
        if (loginForm) loginForm.classList.add('hidden');
        if (registerForm) registerForm.classList.remove('hidden');
    }

    authTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            authTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const tabName = tab.getAttribute('data-tab');

            if (tabName === 'login') {
                if (loginForm) loginForm.classList.remove('hidden');
                if (registerForm) registerForm.classList.add('hidden');
            } else {
                if (loginForm) loginForm.classList.add('hidden');
                if (registerForm) registerForm.classList.remove('hidden');
            }
        });
    });

    const togglePasswordBtns = document.querySelectorAll('.toggle-password');
    togglePasswordBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            const input = document.getElementById(targetId);
            
            if (input) {
                if (input.type === 'password') {
                    input.type = 'text';
                } else {
                    input.type = 'password';
                }
            }
        });
    });

    const loginFormElement = document.getElementById('loginForm');
    if (loginFormElement) {
        loginFormElement.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const usernameOrEmail = document.getElementById('login-username-email').value;
            const password = document.getElementById('login-password').value;
            const rememberMe = document.getElementById('remember-me').checked;

            const user = await loginUser(usernameOrEmail, password, rememberMe);
            if (user) {
                currentUser = user;
                window.location.href = '../index.html';
            }
        });
    }

    const registerFormElement = document.getElementById('registerForm');
    if (registerFormElement) {
        registerFormElement.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const username = document.getElementById('register-username').value;
            const email = document.getElementById('register-email').value;
            const phone = document.getElementById('register-phone').value;
            const password = document.getElementById('register-password').value;
            const confirmPassword = document.getElementById('register-confirm-password').value;
            const newsletter = document.getElementById('email-newsletter').checked;

            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }

            if (password.length < 6) {
                alert('Password must be at least 6 characters long');
                return;
            }

            const user = await registerUser(username, email, phone, password, newsletter);
            if (user) {
                currentUser = user;
                sessionStorage.setItem('rickware_user', JSON.stringify(user));
                window.location.href = '../index.html';
            }
        });
    }

    loadConfig().then(() => {
        setupAuthLanguageSelector();
        updateLanguage();
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    if (window.location.pathname.includes('login_register')) {
        return;
    }

    await loadConfig();
    
    await checkLoginStatus();
    setupNavigation();
    setupLanguageSelector();
    setupProfileSidebar();
    setupLoginRegisterButtons();
    updateLanguage();
    updateCartBadge();

    userPurchases = [];
});