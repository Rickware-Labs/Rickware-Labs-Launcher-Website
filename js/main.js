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


function translate(key) {
    const t = translations[currentLanguage] || translations['en'];
    return t[key] || translations['en'][key] || key;
}

function updateLanguage() {
    document.querySelectorAll('[data-translate]').forEach(function(el) {
        var key = el.getAttribute('data-translate');
        var val = translate(key);
        if (el.tagName === 'INPUT') {
            el.placeholder = val;
        } else {
            el.textContent = val;
        }
    });
}

function updateCartBadge() {
    var badge = document.getElementById('cartBadge');
    if (badge) badge.textContent = cart.length;
}

async function loadConfig() {
    try {
        var res = await fetch('./config/config.json');
        if (res.ok) config = await res.json();
    } catch(e) {
        config = {};
    }
    return config;
}

async function checkLoginStatus() {
    var authButtons = document.getElementById('authButtons');
    var userProfileBtn = document.getElementById('userProfileBtn');
    var token = sessionStorage.getItem('rickware_token');
    if (token) {
        try {
            var parts = token.split('.');
            if (parts.length === 3) {
                var decoded = JSON.parse(atob(parts[1]));
                currentUser = decoded;
                updateUserProfile(decoded);
                if (authButtons) authButtons.style.display = 'none';
                if (userProfileBtn) userProfileBtn.style.display = 'flex';
                return;
            }
        } catch(e) {}
        sessionStorage.removeItem('rickware_token');
    }
    currentUser = null;
    if (authButtons) authButtons.style.display = 'flex';
    if (userProfileBtn) userProfileBtn.style.display = 'none';
}

function updateUserProfile(user) {
    document.querySelectorAll('#usernameDisplay, #usernameDisplaySidebar').forEach(function(el) {
        el.textContent = user.username || 'Guest';
    });
    document.querySelectorAll('#userType, #userTypeSidebar').forEach(function(el) {
        el.textContent = user.account_type || 'User';
    });
    document.querySelectorAll('#profileImage, #profileImageLarge').forEach(function(img) {
        img.src = user.profile_picture || '';
    });
}

async function loginUser(usernameOrEmail, password) {
    try {
        var res = await fetch('https://prem-eu4.bot-hosting.net:20940/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: usernameOrEmail, password: password })
        });
        if (res.ok) {
            var data = await res.json();
            sessionStorage.setItem('rickware_token', data.token);
            var decoded = JSON.parse(atob(data.token.split('.')[1]));
            sessionStorage.setItem('rickware_user', JSON.stringify(decoded));
            return decoded;
        } else {
            alert('Invalid credentials');
            return null;
        }
    } catch(e) {
        alert('Login failed');
        return null;
    }
}

async function registerUser(username, email, phone, password) {
    try {
        var res = await fetch('https://prem-eu4.bot-hosting.net:20940/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: username, password: password, email: email, phone: phone })
        });
        if (res.ok) {
            return await loginUser(username, password);
        } else {
            alert('Registration failed');
            return null;
        }
    } catch(e) {
        alert('Registration failed');
        return null;
    }
}

function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(function(el) {
        el.classList.remove('active');
        el.style.display = 'none';
    });
    var target = document.getElementById(tabId);
    if (target) {
        target.classList.add('active');
        target.style.display = 'block';
    }
}

function setupTabs() {
    var tabs = document.querySelectorAll('.top-tab');
    tabs.forEach(function(btn) {
        btn.addEventListener('click', function() {
            tabs.forEach(function(b) { b.classList.remove('active'); });
            btn.classList.add('active');
            var key = btn.getAttribute('data-tab');
            if (key === 'discover') showTab('discoverTab');
            else if (key === 'partner') showTab('partnerTab');
            else if (key === 'news') showTab('newsTab');
        });
    });
}

function setupNavigation() {
    var navItems = document.querySelectorAll('.nav-item[data-page]');
    navItems.forEach(function(item) {
        item.addEventListener('click', function() {
            var page = item.getAttribute('data-page');
            if (page === 'customer' && !currentUser) {
                window.location.href = './sites/login_register.html?tab=login';
                return;
            }
            navItems.forEach(function(n) { n.classList.remove('active'); });
            item.classList.add('active');
        });
    });
}

function setupLoginRegisterButtons() {
    var loginBtn = document.getElementById('loginBtn');
    var registerBtn = document.getElementById('registerBtn');
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            window.location.href = './sites/login_register.html?tab=login';
        });
    }
    if (registerBtn) {
        registerBtn.addEventListener('click', function() {
            window.location.href = './sites/login_register.html?tab=register';
        });
    }
}

function setupProfileSidebar() {
    var profileBtn = document.getElementById('userProfileBtn');
    var sidebar = document.getElementById('profileSidebar');
    var overlay = document.getElementById('overlay');
    var logoutBtn = document.getElementById('logoutBtn');
    if (profileBtn) {
        profileBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            if (sidebar) sidebar.classList.toggle('active');
            if (overlay) overlay.classList.toggle('active');
        });
    }
    if (overlay) {
        overlay.addEventListener('click', function() {
            if (sidebar) sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });
    }
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            sessionStorage.clear();
            currentUser = null;
            var ab = document.getElementById('authButtons');
            var up = document.getElementById('userProfileBtn');
            if (ab) ab.style.display = 'flex';
            if (up) up.style.display = 'none';
            window.location.reload();
        });
    }
}

var discordCache = {};

async function fetchDiscordCount(inviteUrl) {
    if (!inviteUrl) return null;
    if (discordCache[inviteUrl] !== undefined) return discordCache[inviteUrl];
    try {
        var code = inviteUrl.split('/').pop().split('?')[0];
        var res = await fetch('https://discord.com/api/v10/invites/' + code + '?with_counts=true');
        if (!res.ok) return null;
        var data = await res.json();
        discordCache[inviteUrl] = data.approximate_member_count;
        return data.approximate_member_count;
    } catch(e) {
        return null;
    }
}

function fmtCount(n) {
    if (n === null || n === undefined) return '...';
    if (n >= 1000) return (n / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
    return String(n);
}

function platformIcon(name) {
    if (name === 'discord') return '<svg width="14" height="14" viewBox="0 0 71 55" fill="currentColor"><path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.3087 23.0133 30.1353 26.2532 30.1067 30.1693C30.1067 34.1136 27.2801 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9006 23.0133 53.7272 26.2532 53.6986 30.1693C53.6986 34.1136 50.9006 37.3253 47.3178 37.3253Z"/></svg>';
    if (name === 'website') return '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>';
    if (name === 'github') return '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>';
    if (name === 'tiktok') return '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>';
    if (name === 'instagram') return '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>';
    return '';
}

function buildPartnerCard(p) {
    var card = document.createElement('div');
    card.className = 'partner-card';

    var imgArea = document.createElement('div');
    imgArea.className = 'partner-image-area';

    if (p.preview_image_url && p.preview_image_url.trim()) {
        var img = document.createElement('img');
        img.className = 'partner-preview-img';
        img.src = p.preview_image_url;
        img.alt = p.title;
        img.onerror = function() { img.remove(); };
        imgArea.appendChild(img);
    }

    if (p.banner && p.banner.trim()) {
        var bannerEl = document.createElement('div');
        bannerEl.className = 'partner-banner-label';
        bannerEl.textContent = p.banner;
        imgArea.appendChild(bannerEl);
    }

    if (p.owner_name && p.owner_name.trim()) {
        var ownerEl = document.createElement('div');
        ownerEl.className = 'partner-owner-label';
        ownerEl.textContent = 'Owner: ' + p.owner_name;
        imgArea.appendChild(ownerEl);
    }

    var primaryDiscord = (p.discord_url && p.discord_url.trim()) ? p.discord_url : ((p.discord_url_2 && p.discord_url_2.trim()) ? p.discord_url_2 : null);
    if (primaryDiscord) {
        var counter = document.createElement('div');
        counter.className = 'partner-discord-counter';
        counter.innerHTML = '<span class="partner-discord-dot"></span><span class="dc-count">...</span>';
        imgArea.appendChild(counter);
        fetchDiscordCount(primaryDiscord).then(function(n) {
            var span = counter.querySelector('.dc-count');
            if (span) span.textContent = fmtCount(n) + ' members';
        });
        setInterval(function() {
            delete discordCache[primaryDiscord];
            fetchDiscordCount(primaryDiscord).then(function(n) {
                var span = counter.querySelector('.dc-count');
                if (span) span.textContent = fmtCount(n) + ' members';
            });
        }, 30000);
    }

    card.appendChild(imgArea);

    var body = document.createElement('div');
    body.className = 'partner-body';

    var titleEl = document.createElement('div');
    titleEl.className = 'partner-title';
    titleEl.textContent = p.title;
    body.appendChild(titleEl);

    if (p.description && p.description.trim()) {
        var desc = document.createElement('div');
        desc.className = 'partner-description';
        desc.textContent = p.description;
        body.appendChild(desc);
    }

    var btns = document.createElement('div');
    btns.className = 'partner-buttons';

    function addBtn(url, cls, label, icon) {
        if (!url || !url.trim()) return;
        var a = document.createElement('a');
        a.className = 'partner-btn ' + cls;
        a.href = url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.innerHTML = platformIcon(icon) + ' ' + label;
        btns.appendChild(a);
    }

    addBtn(p.discord_url,   'partner-btn-discord',   'Discord',   'discord');
    addBtn(p.discord_url_2, 'partner-btn-discord',   'Discord 2', 'discord');
    addBtn(p.website_url,   'partner-btn-website',   'Website',   'website');
    addBtn(p.github_url,    'partner-btn-github',    'GitHub',    'github');
    addBtn(p.tiktok_url,    'partner-btn-tiktok',    'TikTok',    'tiktok');
    addBtn(p.instagram_url, 'partner-btn-instagram', 'Instagram', 'instagram');

    body.appendChild(btns);
    card.appendChild(body);
    return card;
}

async function loadPartners() {
    var grid = document.getElementById('partnerGrid');
    if (!grid) return;

    var data = null;
    var paths = ['./config/partner.json', './partner.json'];
    for (var i = 0; i < paths.length; i++) {
        try {
            var res = await fetch(paths[i]);
            if (res.ok) { data = await res.json(); break; }
        } catch(e) {}
    }

    grid.innerHTML = '';

    if (!data || !data.partners || data.partners.length === 0) {
        grid.innerHTML = '<p style="color:#808080;padding:30px;">Keine Partner gefunden. Prüfe config/partner.json</p>';
        return;
    }

    var sorted = data.partners.slice().sort(function(a, b) { return a.id - b.id; });
    sorted.forEach(function(p) {
        grid.appendChild(buildPartnerCard(p));
    });
}

function initAuthPage() {
    var authTabs = document.querySelectorAll('.auth-tab');
    var loginForm = document.getElementById('login-form');
    var registerForm = document.getElementById('register-form');
    var params = new URLSearchParams(window.location.search);

    if (params.get('tab') === 'register' && authTabs.length > 1) {
        authTabs.forEach(function(t) { t.classList.remove('active'); });
        authTabs[1].classList.add('active');
        if (loginForm) loginForm.classList.add('hidden');
        if (registerForm) registerForm.classList.remove('hidden');
    }

    authTabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
            authTabs.forEach(function(t) { t.classList.remove('active'); });
            tab.classList.add('active');
            var name = tab.getAttribute('data-tab');
            if (loginForm) loginForm.classList.toggle('hidden', name !== 'login');
            if (registerForm) registerForm.classList.toggle('hidden', name !== 'register');
        });
    });

    document.querySelectorAll('.toggle-password').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var inp = document.getElementById(btn.getAttribute('data-target'));
            if (inp) inp.type = inp.type === 'password' ? 'text' : 'password';
        });
    });

    var loginFormEl = document.getElementById('loginForm');
    if (loginFormEl) {
        loginFormEl.addEventListener('submit', async function(e) {
            e.preventDefault();
            var user = await loginUser(
                document.getElementById('login-username-email').value,
                document.getElementById('login-password').value
            );
            if (user) window.location.href = '../index.html';
        });
    }

    var registerFormEl = document.getElementById('registerForm');
    if (registerFormEl) {
        registerFormEl.addEventListener('submit', async function(e) {
            e.preventDefault();
            var pw = document.getElementById('register-password').value;
            var pw2 = document.getElementById('register-confirm-password').value;
            if (pw !== pw2) { alert('Passwords do not match!'); return; }
            if (pw.length < 6) { alert('Password must be at least 6 characters'); return; }
            var user = await registerUser(
                document.getElementById('register-username').value,
                document.getElementById('register-email').value,
                document.getElementById('register-phone').value,
                pw
            );
            if (user) window.location.href = '../index.html';
        });
    }
}

document.addEventListener('DOMContentLoaded', async function() {
    if (window.location.pathname.includes('login_register')) {
        await loadConfig();
        initAuthPage();
        return;
    }

    await loadConfig();
    await checkLoginStatus();
    setupNavigation();
    setupTabs();
    setupLoginRegisterButtons();
    setupProfileSidebar();
    updateLanguage();
    updateCartBadge();

    if (config.discord_invite) {
        var db = document.getElementById('discordBtn');
        if (db) db.href = config.discord_invite;
    }

    loadPartners();
    setupDropdowns();
    loadProducts();
});

var productsData = null;
var currentCategory = 'all';

async function loadProducts() {
    var paths = ['./config/products.json', './products.json'];
    for (var i = 0; i < paths.length; i++) {
        try {
            var res = await fetch(paths[i]);
            if (res.ok) { productsData = await res.json(); break; }
        } catch(e) {}
    }
    if (!productsData) return;
    buildCategoryTabs();
    renderProducts('all');
    setupSortSelect();
}

function buildCategoryTabs() {
    var bar = document.getElementById('categoryTabsBar');
    if (!bar || !productsData) return;
    var cats = {};
    if (productsData.categorys && productsData.categorys.length > 0) {
        var c = productsData.categorys[0];
        Object.keys(c).forEach(function(k) { cats[c[k]] = true; });
    }
    bar.innerHTML = '<button class="category-tab active" data-category="all">All</button>';
    Object.keys(cats).forEach(function(name) {
        var btn = document.createElement('button');
        btn.className = 'category-tab';
        btn.setAttribute('data-category', name);
        btn.textContent = name;
        btn.addEventListener('click', function() {
            document.querySelectorAll('.category-tab').forEach(function(b) { b.classList.remove('active'); });
            btn.classList.add('active');
            currentCategory = name;
            renderProducts(name);
        });
        bar.appendChild(btn);
    });
    var allBtn = bar.querySelector('[data-category="all"]');
    if (allBtn) {
        allBtn.addEventListener('click', function() {
            document.querySelectorAll('.category-tab').forEach(function(b) { b.classList.remove('active'); });
            allBtn.classList.add('active');
            currentCategory = 'all';
            renderProducts('all');
        });
    }
}

function setupSortSelect() {
    var sel = document.getElementById('sortSelect');
    if (sel) {
        sel.addEventListener('change', function() {
            renderProducts(currentCategory);
        });
    }
}

function getProductPriceInfo(p) {
    if (p.price !== null && p.price !== undefined && p.price !== '') {
        return { type: 'fixed', price: p.price, original: p.original_price || null };
    }
    var cats = p.license_categories && p.license_categories[0] ? p.license_categories[0] : {};
    var keys = Object.keys(cats);
    if (keys.length === 0) return { type: 'free' };
    if (keys.length === 1 && keys[0] === 'free') return { type: 'free' };
    var prices = p.license_categorie_prices && p.license_categorie_prices[0] ? p.license_categorie_prices[0] : {};
    var vals = [];
    keys.forEach(function(k) {
        if (k === 'free') return;
        var v = prices[k];
        if (v !== undefined && v !== null) {
            var num = parseFloat(String(v).replace(',', '.'));
            if (!isNaN(num)) vals.push(num);
        }
    });
    if (vals.length === 0) return { type: 'free' };
    if (vals.length === 1) return { type: 'single', price: vals[0] };
    vals.sort(function(a,b){return a-b;});
    return { type: 'range', min: vals[0], max: vals[vals.length-1] };
}

function formatUSD(val) {
    return '$' + parseFloat(val).toFixed(2).replace('.', ',');
}

function renderPriceArea(p) {
    var info = getProductPriceInfo(p);
    var html = '<div class="product-price-area">';
    if (info.type === 'free') {
        html += '<div class="product-price"><span class="product-price-free">$0.00</span><span class="product-price-free-tag">Free</span></div>';
    } else if (info.type === 'fixed') {
        html += '<div class="product-price">' + formatUSD(info.price) + '</div>';
        if (info.original) html += '<div class="product-price-original">' + formatUSD(info.original) + '</div>';
    } else if (info.type === 'single') {
        html += '<div class="product-price-range">' + formatUSD(info.price) + '</div>';
    } else {
        html += '<div class="product-price-range">' + formatUSD(info.min) + ' – ' + formatUSD(info.max) + '</div>';
    }
    html += '</div>';
    return html;
}

function isFreeProduct(p) {
    var info = getProductPriceInfo(p);
    return info.type === 'free';
}

function isInWishlist(p) {
    return wishlist.some(function(w) { return w._uid === (p.category + '_' + p.id); });
}

function toggleWishlistProduct(p) {
    var uid = p.category + '_' + p.id;
    var idx = wishlist.findIndex(function(w) { return w._uid === uid; });
    if (idx >= 0) {
        wishlist.splice(idx, 1);
    } else {
        wishlist.push(Object.assign({ _uid: uid, name: p.title, price: null }, p));
    }
    var badge = document.getElementById('wishlistBadge');
    if (badge) badge.textContent = wishlist.length;
}

function buildProductCard(p) {
    var card = document.createElement('div');
    card.className = 'product-card';

    var imgArea = document.createElement('div');
    imgArea.className = 'product-image-area';

    if (p.preview_image_url && p.preview_image_url.trim()) {
        var img = document.createElement('img');
        img.className = 'product-preview-img';
        img.src = p.preview_image_url;
        img.alt = p.title;
        img.onerror = function() { img.remove(); };
        imgArea.appendChild(img);
    }

    if (p.banner && p.banner.trim()) {
        var bannerEl = document.createElement('div');
        bannerEl.className = 'product-banner-label';
        bannerEl.textContent = p.banner;
        imgArea.appendChild(bannerEl);
    }

    if (p.owner_name && p.owner_name.trim()) {
        var ownerEl = document.createElement('div');
        ownerEl.className = 'product-owner-label';
        ownerEl.textContent = 'by ' + p.owner_name;
        imgArea.appendChild(ownerEl);
    }

    if (p.version && p.version.trim()) {
        var verEl = document.createElement('div');
        verEl.className = 'product-version-label';
        verEl.textContent = p.version;
        imgArea.appendChild(verEl);
    }

    card.appendChild(imgArea);

    var body = document.createElement('div');
    body.className = 'product-body';

    var titleEl = document.createElement('div');
    titleEl.className = 'product-title';
    titleEl.textContent = p.title;
    body.appendChild(titleEl);

    if (p.description && p.description.trim()) {
        var desc = document.createElement('div');
        desc.className = 'product-description';
        desc.textContent = p.description;
        body.appendChild(desc);
    }

    if (p.auto_update || p.auto_setup) {
        var togglesDiv = document.createElement('div');
        togglesDiv.className = 'product-auto-toggles';
        if (p.auto_setup) {
            var lbl1 = document.createElement('label');
            lbl1.className = 'auto-toggle-label';
            lbl1.innerHTML = '<input type="checkbox" checked> Auto Setup';
            lbl1.querySelector('input').addEventListener('click', function(e) { e.stopPropagation(); });
            togglesDiv.appendChild(lbl1);
        }
        if (p.auto_update) {
            var lbl2 = document.createElement('label');
            lbl2.className = 'auto-toggle-label';
            lbl2.innerHTML = '<input type="checkbox" checked> Auto Update';
            lbl2.querySelector('input').addEventListener('click', function(e) { e.stopPropagation(); });
            togglesDiv.appendChild(lbl2);
        }
        body.appendChild(togglesDiv);
    }

    card.appendChild(body);

    var footer = document.createElement('div');
    footer.className = 'product-footer';

    var stockEl = document.createElement('div');
    stockEl.className = 'product-stock';
    stockEl.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg> ' + (p.Stock || '∞');
    footer.appendChild(stockEl);
    footer.innerHTML += renderPriceArea(p);
    card.appendChild(footer);

    var actions = document.createElement('div');
    actions.className = 'product-card-actions';

    var isFree = isFreeProduct(p);

    if (isFree) {
        var dlBtn = document.createElement('button');
        dlBtn.className = 'product-btn product-btn-download';
        dlBtn.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Download Free';
        dlBtn.addEventListener('click', function(e) { e.stopPropagation(); });
        actions.appendChild(dlBtn);
    }

    var wishBtn = document.createElement('button');
    wishBtn.className = 'product-btn product-btn-wishlist' + (isInWishlist(p) ? ' active' : '');
    wishBtn.title = 'Wishlist';
    wishBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="' + (isInWishlist(p) ? '#e74c3c' : 'none') + '" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>';
    wishBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleWishlistProduct(p);
        var inWL = isInWishlist(p);
        wishBtn.classList.toggle('active', inWL);
        wishBtn.querySelector('svg').setAttribute('fill', inWL ? '#e74c3c' : 'none');
    });
    actions.appendChild(wishBtn);

    if (!isFree) {
        var hasMultiLicense = false;
        if (p.license_categories && p.license_categories[0]) {
            var lkeys = Object.keys(p.license_categories[0]);
            hasMultiLicense = lkeys.length > 1;
        }
        var cartBtn = document.createElement('button');
        cartBtn.className = 'product-btn product-btn-cart';
        cartBtn.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>' + (hasMultiLicense ? ' Select' : ' Add to Cart');
        if (hasMultiLicense) {
            cartBtn.title = 'Select a license first';
            cartBtn.addEventListener('click', function(e) { e.stopPropagation(); openProductModal(p); });
        } else {
            cartBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                addToCart(p, null);
            });
        }
        actions.appendChild(cartBtn);
    }

    if (p.discord_url && p.discord_url.trim()) {
        var dcBtn = document.createElement('a');
        dcBtn.className = 'product-btn product-btn-discord';
        dcBtn.href = p.discord_url;
        dcBtn.target = '_blank';
        dcBtn.rel = 'noopener noreferrer';
        dcBtn.innerHTML = '<svg width="13" height="13" viewBox="0 0 71 55" fill="currentColor"><path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.3087 23.0133 30.1353 26.2532 30.1067 30.1693C30.1067 34.1136 27.2801 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9006 23.0133 53.7272 26.2532 53.6986 30.1693C53.6986 34.1136 50.9006 37.3253 47.3178 37.3253Z"/></svg>';
        dcBtn.addEventListener('click', function(e) { e.stopPropagation(); });
        actions.appendChild(dcBtn);
    }

    card.appendChild(actions);
    card.addEventListener('click', function() { openProductModal(p); });
    return card;
}

function renderProducts(category) {
    var grid = document.getElementById('productsGrid');
    if (!grid || !productsData || !productsData.products) return;

    var list = productsData.products.slice();
    if (category !== 'all') {
        list = list.filter(function(p) { return p.category === category; });
    }

    var sortVal = document.getElementById('sortSelect') ? document.getElementById('sortSelect').value : 'new';
    list.sort(function(a, b) {
        if (sortVal === 'price-low') {
            var ai = getProductPriceInfo(a), bi = getProductPriceInfo(b);
            var av = ai.type === 'free' ? 0 : (ai.min || ai.price || 0);
            var bv = bi.type === 'free' ? 0 : (bi.min || bi.price || 0);
            return av - bv;
        }
        if (sortVal === 'price-high') {
            var ai2 = getProductPriceInfo(a), bi2 = getProductPriceInfo(b);
            var av2 = ai2.type === 'free' ? 0 : (ai2.max || ai2.price || 0);
            var bv2 = bi2.type === 'free' ? 0 : (bi2.max || bi2.price || 0);
            return bv2 - av2;
        }
        return 0;
    });

    grid.innerHTML = '';
    if (list.length === 0) {
        grid.innerHTML = '<p style="color:var(--text-tertiary);padding:30px;">No products found.</p>';
        return;
    }
    list.forEach(function(p) {
        grid.appendChild(buildProductCard(p));
    });
}

function addToCart(p, licenseKey) {
    var uid = p.category + '_' + p.id + (licenseKey ? '_' + licenseKey : '');
    var existing = cart.find(function(c) { return c._uid === uid; });
    if (existing) {
        existing.qty = (existing.qty || 1) + 1;
    } else {
        var prices = p.license_categorie_prices && p.license_categorie_prices[0] ? p.license_categorie_prices[0] : {};
        var priceVal = licenseKey ? prices[licenseKey] : (p.price || null);
        cart.push({
            _uid: uid,
            name: p.title + (licenseKey ? ' — ' + licenseKey.replace(/_/g, ' ') : ''),
            price: priceVal,
            qty: 1,
            product: p,
            licenseKey: licenseKey
        });
    }
    updateCartBadge();
}

var selectedLicenseKey = null;

function openProductModal(p) {
    selectedLicenseKey = null;
    var overlay = document.getElementById('productModalOverlay');
    var inner = document.getElementById('productModalInner');
    if (!overlay || !inner) return;

    var images = [p.preview_image_url];
    for (var i = 1; i <= 8; i++) {
        var u = p['image_url_' + i];
        if (u && u.trim()) images.push(u);
    }
    images = images.filter(Boolean);

    var currentImg = 0;

    var isFree = isFreeProduct(p);
    var licCats = p.license_categories && p.license_categories[0] ? p.license_categories[0] : {};
    var licKeys = Object.keys(licCats).filter(function(k) { return k !== 'free'; });
    var licPrices = p.license_categorie_prices && p.license_categorie_prices[0] ? p.license_categorie_prices[0] : {};
    var hasMultiLicense = licKeys.length > 1;
    var hasCoupon = p.coupon_codes === true;

    var inWL = isInWishlist(p);

    var html = '';

    if (images.length > 0) {
        html += '<div class="modal-image-gallery" id="modalGallery">';
        images.forEach(function(src, idx) {
            html += '<img class="modal-gallery-img' + (idx === 0 ? ' active' : '') + '" src="' + src + '" alt="Image ' + (idx+1) + '">';
        });
        if (images.length > 1) {
            html += '<button class="modal-gallery-nav modal-gallery-prev" id="galleryPrev"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg></button>';
            html += '<button class="modal-gallery-nav modal-gallery-next" id="galleryNext"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg></button>';
            html += '<div class="modal-gallery-counter" id="galleryCounter">1 / ' + images.length + '</div>';
        }
        html += '</div>';
    }

    html += '<div class="modal-header">';
    html += '<div class="modal-title">' + escHtml(p.title) + '</div>';
    html += '<div class="modal-badges">';
    if (p.version) html += '<span class="modal-version-badge">' + escHtml(p.version) + '</span>';
    if (p.category) html += '<span class="modal-category-badge">' + escHtml(p.category) + '</span>';
    html += '</div></div>';

    var descText = (p.full_description && p.full_description.trim()) ? p.full_description : (p.description || '');
    if (descText) {
        html += '<div class="modal-description">' + escHtml(descText) + '</div>';
    }

    if (p.auto_setup || p.auto_update) {
        html += '<div class="modal-toggles">';
        if (p.auto_setup) html += '<label class="modal-toggle-label"><input type="checkbox" id="modalAutoSetup" checked> Auto Setup</label>';
        if (p.auto_update) html += '<label class="modal-toggle-label"><input type="checkbox" id="modalAutoUpdate" checked> Auto Update</label>';
        html += '</div>';
    }

    if (!isFree && hasMultiLicense) {
        html += '<div class="modal-section-title">Select License</div>';
        html += '<div class="modal-license-grid" id="modalLicenseGrid">';
        licKeys.forEach(function(k) {
            var label = licCats[k] || k;
            var price = licPrices[k];
            var origKey = k + '_original';
            var orig = licPrices[origKey];
            html += '<div class="modal-license-option" data-key="' + k + '">';
            html += '<div class="modal-license-name">' + escHtml(label) + '</div>';
            html += '<div><span class="modal-license-price">' + formatUSD(parseFloat(String(price).replace(',','.'))) + '</span>';
            if (orig) html += '<span class="modal-license-original">' + formatUSD(parseFloat(String(orig).replace(',','.'))) + '</span>';
            html += '</div></div>';
        });
        html += '</div>';
    } else if (!isFree && licKeys.length === 1) {
        selectedLicenseKey = licKeys[0];
    }

    if (hasCoupon && !isFree) {
        html += '<div class="modal-section-title">Coupon Code</div>';
        html += '<div class="modal-coupon-row"><input class="modal-coupon-input" id="modalCouponInput" type="text" placeholder="Enter coupon code..."><button class="modal-coupon-btn" id="modalCouponApply">Apply</button></div>';
    }

    html += '<div class="modal-actions" id="modalActions">';
    if (isFree) {
        html += '<button class="modal-btn modal-btn-download" id="modalDlBtn"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg> Download Free</button>';
    } else {
        html += '<button class="modal-btn modal-btn-buy" id="modalBuyBtn">Buy Now</button>';
        html += '<button class="modal-btn modal-btn-cart" id="modalCartBtn"' + (hasMultiLicense ? ' disabled' : '') + '><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg> Add to Cart</button>';
    }
    html += '<button class="modal-btn modal-btn-wishlist' + (inWL ? ' active' : '') + '" id="modalWishBtn" title="Wishlist"><svg width="16" height="16" viewBox="0 0 24 24" fill="' + (inWL ? '#e74c3c' : 'none') + '" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></button>';
    if (p.discord_url && p.discord_url.trim()) {
        html += '<a class="modal-btn modal-btn-discord" href="' + p.discord_url + '" target="_blank" rel="noopener noreferrer"><svg width="14" height="14" viewBox="0 0 71 55" fill="currentColor"><path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.3087 23.0133 30.1353 26.2532 30.1067 30.1693C30.1067 34.1136 27.2801 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9006 23.0133 53.7272 26.2532 53.6986 30.1693C53.6986 34.1136 50.9006 37.3253 47.3178 37.3253Z"/></svg></a>';
    }
    html += '</div>';

    if (p.owner_name) {
        html += '<div class="modal-owner-row"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> by ' + escHtml(p.owner_name) + ' &nbsp; Stock: ' + escHtml(p.Stock || '∞') + '</div>';
    }

    inner.innerHTML = html;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    if (images.length > 1) {
        var prevBtn = document.getElementById('galleryPrev');
        var nextBtn = document.getElementById('galleryNext');
        var counter = document.getElementById('galleryCounter');
        var imgs = inner.querySelectorAll('.modal-gallery-img');

        function showImg(idx) {
            imgs.forEach(function(im) { im.classList.remove('active'); });
            imgs[idx].classList.add('active');
            if (counter) counter.textContent = (idx+1) + ' / ' + images.length;
            currentImg = idx;
        }

        if (prevBtn) prevBtn.addEventListener('click', function() { showImg((currentImg - 1 + images.length) % images.length); });
        if (nextBtn) nextBtn.addEventListener('click', function() { showImg((currentImg + 1) % images.length); });
    }

    if (hasMultiLicense) {
        var licGrid = inner.querySelector('#modalLicenseGrid');
        if (licGrid) {
            licGrid.querySelectorAll('.modal-license-option').forEach(function(opt) {
                opt.addEventListener('click', function() {
                    licGrid.querySelectorAll('.modal-license-option').forEach(function(o) { o.classList.remove('selected'); });
                    opt.classList.add('selected');
                    selectedLicenseKey = opt.getAttribute('data-key');
                    var cartBtn2 = inner.querySelector('#modalCartBtn');
                    if (cartBtn2) cartBtn2.disabled = false;
                });
            });
        }
    }

    var modalCartBtn = inner.querySelector('#modalCartBtn');
    if (modalCartBtn) {
        modalCartBtn.addEventListener('click', function() {
            if (!isFree) {
                if (hasMultiLicense && !selectedLicenseKey) { alert('Please select a license first.'); return; }
                addToCart(p, selectedLicenseKey);
                closeProductModal();
            }
        });
    }

    var modalBuyBtn = inner.querySelector('#modalBuyBtn');
    if (modalBuyBtn) {
        modalBuyBtn.addEventListener('click', function() {
            if (hasMultiLicense && !selectedLicenseKey) { alert('Please select a license first.'); return; }
            addToCart(p, selectedLicenseKey);
            alert('Redirecting to checkout...');
        });
    }

    var modalWishBtn = inner.querySelector('#modalWishBtn');
    if (modalWishBtn) {
        modalWishBtn.addEventListener('click', function() {
            toggleWishlistProduct(p);
            var inWL2 = isInWishlist(p);
            modalWishBtn.classList.toggle('active', inWL2);
            modalWishBtn.querySelector('svg').setAttribute('fill', inWL2 ? '#e74c3c' : 'none');
        });
    }

    var couponApply = inner.querySelector('#modalCouponApply');
    if (couponApply) {
        couponApply.addEventListener('click', function() {
            var val = inner.querySelector('#modalCouponInput').value.trim();
            if (val) alert('Coupon "' + val + '" applied (demo).');
        });
    }
}

function closeProductModal() {
    var overlay = document.getElementById('productModalOverlay');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
    selectedLicenseKey = null;
}

function escHtml(str) {
    if (!str) return '';
    return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function setupDropdowns() {
    var closeBtn = document.getElementById('productModalClose');
    if (closeBtn) closeBtn.addEventListener('click', closeProductModal);
    var modalOverlay = document.getElementById('productModalOverlay');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function(e) {
            if (e.target === modalOverlay) closeProductModal();
        });
    }

    var wishlistWrapper = document.getElementById('wishlistWrapper');
    var cartWrapper = document.getElementById('cartWrapper');
    var wishlistDropdown = document.getElementById('wishlistDropdown');
    var cartDropdown = document.getElementById('cartDropdown');
    var wishlistBtn = document.getElementById('wishlistBtn');
    var cartBtn = document.getElementById('cartBtn');

    function closeAll() {
        if (wishlistDropdown) wishlistDropdown.classList.remove('open');
        if (cartDropdown) cartDropdown.classList.remove('open');
    }

    if (wishlistBtn && wishlistDropdown) {
        wishlistBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            var isOpen = wishlistDropdown.classList.contains('open');
            closeAll();
            if (!isOpen) {
                renderWishlistDropdown();
                wishlistDropdown.classList.add('open');
            }
        });
    }

    if (cartBtn && cartDropdown) {
        cartBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            var isOpen = cartDropdown.classList.contains('open');
            closeAll();
            if (!isOpen) {
                renderCartDropdown();
                cartDropdown.classList.add('open');
            }
        });
    }

    document.addEventListener('click', function(e) {
        if (wishlistWrapper && !wishlistWrapper.contains(e.target)) {
            if (wishlistDropdown) wishlistDropdown.classList.remove('open');
        }
        if (cartWrapper && !cartWrapper.contains(e.target)) {
            if (cartDropdown) cartDropdown.classList.remove('open');
        }
    });
}

function renderWishlistDropdown() {
    var container = document.getElementById('wishlistItems');
    if (!container) return;
    if (!wishlist || wishlist.length === 0) {
        container.innerHTML = '<div class="dropdown-empty">Your wishlist is empty.</div>';
        return;
    }
    container.innerHTML = wishlist.map(function(item) {
        var info = getProductPriceInfo(item);
        var priceStr = '';
        if (info.type === 'free') priceStr = 'Free';
        else if (info.type === 'fixed') priceStr = formatUSD(item.price);
        else if (info.type === 'range') priceStr = formatUSD(info.min) + '+';
        else if (info.type === 'single') priceStr = formatUSD(info.price);
        return '<div class="dropdown-item"><span class="dropdown-item-name">' + escHtml(item.name || item.title || 'Item') + '</span><span class="dropdown-item-price">' + priceStr + '</span></div>';
    }).join('');
}

function renderCartDropdown() {
    var container = document.getElementById('cartItems');
    if (!container) return;
    if (!cart || cart.length === 0) {
        container.innerHTML = '<div class="dropdown-empty">Your cart is empty.</div>';
        return;
    }
    container.innerHTML = '';
    cart.forEach(function(item, idx) {
        var row = document.createElement('div');
        row.className = 'dropdown-item';
        row.style.flexDirection = 'column';
        row.style.alignItems = 'stretch';
        row.style.gap = '4px';
        row.innerHTML = '<div style="display:flex;justify-content:space-between;align-items:center;gap:8px"><span class="dropdown-item-name">' + escHtml(item.name) + '</span><span class="dropdown-item-price">' + (item.price ? formatUSD(parseFloat(String(item.price).replace(',','.'))) : 'Free') + '</span></div>' +
            '<div style="display:flex;align-items:center;gap:6px;margin-top:2px">' +
            '<button onclick="cartQty(' + idx + ',-1)" style="background:var(--bg-hover);border:1px solid var(--border-color);color:#fff;width:22px;height:22px;border-radius:4px;cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center;">−</button>' +
            '<span style="font-size:12px;color:var(--text-secondary);min-width:20px;text-align:center">' + (item.qty||1) + '</span>' +
            '<button onclick="cartQty(' + idx + ',1)" style="background:var(--bg-hover);border:1px solid var(--border-color);color:#fff;width:22px;height:22px;border-radius:4px;cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center;">+</button>' +
            '<button onclick="cartRemove(' + idx + ')" style="background:none;border:none;color:var(--text-tertiary);cursor:pointer;font-size:11px;margin-left:4px;">Remove</button>' +
            '</div>';
        container.appendChild(row);
    });
}

function cartQty(idx, delta) {
    if (!cart[idx]) return;
    cart[idx].qty = Math.max(1, (cart[idx].qty || 1) + delta);
    updateCartBadge();
    renderCartDropdown();
}

function cartRemove(idx) {
    cart.splice(idx, 1);
    updateCartBadge();
    renderCartDropdown();
}