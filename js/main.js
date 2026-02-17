let config = {};
let products = [];
let currentLanguage = 'en';
let cart = [];
let wishlist = [];
let userPurchases = [];
let accounts = [];
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
        stock_unlimited: 'Unlimited',
        stock_left: 'left',
        add_to_cart: 'Add to Cart',
        view_details: 'View Details',
        my_products: 'My Products',
        all: 'All',
        purchases: 'Purchases',
        recent: 'Recent',
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
        login_register: 'Login / Register',
        auto_setup: 'Auto Setup',
        install: 'Install',
        uninstall: 'Uninstall',
        update: 'Update',
        installed: 'Installed',
        buy_now: 'Buy Now',
        select_duration: 'Select Duration',
        description: 'Description',
        specifications: 'Specifications',
        system_requirements: 'System Requirements',
        dashboard: 'Dashboard'
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
        stock_unlimited: 'Unbegrenzt',
        stock_left: 'übrig',
        add_to_cart: 'In den Warenkorb',
        view_details: 'Details anzeigen',
        my_products: 'Meine Produkte',
        all: 'Alle',
        purchases: 'Käufe',
        recent: 'Neueste',
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
        login_register: 'Anmelden / Registrieren',
        auto_setup: 'Auto-Setup',
        install: 'Installieren',
        uninstall: 'Deinstallieren',
        update: 'Aktualisieren',
        installed: 'Installiert',
        buy_now: 'Jetzt kaufen',
        select_duration: 'Dauer wählen',
        description: 'Beschreibung',
        specifications: 'Spezifikationen',
        system_requirements: 'Systemanforderungen',
        dashboard: 'Dashboard'
    },
    ru: {
        store: 'Магазин',
        library: 'Библиотека',
        customer_panel: 'Панель клиента',
        discover: 'Открыть',
        browse: 'Обзор',
        news: 'Новости',
        search_store: 'Поиск в магазине',
        wishlist: 'Избранное',
        cart: 'Корзина',
        show: 'Показать:',
        new_release: 'Новые релизы',
        price_low: 'Цена: По возрастанию',
        price_high: 'Цена: По убыванию',
        popular: 'Популярное',
        stock_unlimited: 'Неограниченно',
        stock_left: 'осталось',
        add_to_cart: 'В корзину',
        view_details: 'Подробнее',
        my_products: 'Мои продукты',
        all: 'Все',
        purchases: 'Покупки',
        recent: 'Недавние',
        date: 'Дата',
        product: 'Продукт',
        amount: 'Сумма',
        coupon: 'Купон',
        saved: 'Сэкономлено',
        no_coupon: 'Нет купона',
        account_settings: 'Настройки аккаунта',
        preferences: 'Предпочтения',
        payment_methods: 'Способы оплаты',
        order_history: 'История заказов',
        help_support: 'Помощь и поддержка',
        logout: 'Выйти',
        login_register: 'Войти / Регистрация',
        auto_setup: 'Авто установка',
        install: 'Установить',
        uninstall: 'Удалить',
        update: 'Обновить',
        installed: 'Установлено',
        buy_now: 'Купить сейчас',
        select_duration: 'Выбрать период',
        description: 'Описание',
        specifications: 'Характеристики',
        system_requirements: 'Системные требования',
        dashboard: 'Панель управления'
    }
};

async function loadConfig() {
    const apiUrl = `https://api.github.com/repos/${github_repo_owner}/${github_repo_name2_read_only}/contents/${github_website_config_file_path_read_only}`;
    config = await fetchGitHubFile(github_database_2_token_read_only, apiUrl);
}

async function loadProducts() {
    const apiUrl = `https://api.github.com/repos/${github_repo_owner}/${github_repo_name2_read_only}/contents/${github_products_file_path_read_only}`;
    const data = await fetchGitHubFile(github_database_2_token_read_only, apiUrl);
    products = data.products;
}

async function loadAccounts() {
    const data = await fetchGitHubFile(github_database_1_token, github_api_url_accounts);
    accounts = data.accounts;
}

async function fetchGitHubFile(token, apiUrl) {
    const response = await fetch(apiUrl, {
        headers: {
            'Authorization': `token ${token}`,
            'Accept': 'application/vnd.github.v3.raw'
        }
    });
    if (!response.ok) throw new Error('Failed to fetch file');
    return await response.json();
}

function getProductImageUrl(product, imagePath) {
    return `https://raw.githubusercontent.com/${github_repo_owner}/${github_repo_name2_read_only}/main/${github_products_images_path_read_only}/${product.id}/${imagePath}`;
}

function getProfileImageUrl(username) {
    return `https://raw.githubusercontent.com/${github_repo_owner}/${github_repo_name1}/main/${github_account_images_path}/${username}/profile_picture.png`;
}

function translate(key) {
    return translations[currentLanguage][key] || key;
}

function updateLanguage() {
    document.querySelectorAll('[data-translate]').forEach(el => {
        el.textContent = translate(el.getAttribute('data-translate'));
    });
    document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
        el.placeholder = translate(el.getAttribute('data-translate-placeholder'));
    });
    renderProducts();
    renderCustomerProducts();
    renderPurchasesTable();
}

function setupLanguageSelector() {
    const languageBtn = document.getElementById('languageBtn');
    const languageDropdown = document.getElementById('languageDropdown');
    const supportedLanguages = config.supported_languages.filter(lang => translations[lang]);

    supportedLanguages.forEach(lang => {
        const btn = document.createElement('button');
        btn.classList.add('language-option');
        btn.textContent = lang.toUpperCase();
        btn.addEventListener('click', () => {
            currentLanguage = lang;
            document.getElementById('currentLang').textContent = lang.toUpperCase();
            updateLanguage();
            languageDropdown.classList.remove('active');
        });
        languageDropdown.appendChild(btn);
    });

    languageBtn.addEventListener('click', () => {
        languageDropdown.classList.toggle('active');
    });
}

function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;

    productsGrid.innerHTML = products.map(product => `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image">
                <img src="${getProductImageUrl(product, product.preview_image)}" alt="${product.title[currentLanguage]}">
                ${product.banner ? `<div class="product-banner" style="background-color: ${product.color};">${product.banner.text[currentLanguage]}</div>` : ''}
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title[currentLanguage]}</h3>
                <p class="product-description">${product.preview_description[currentLanguage]}</p>
                <div class="product-footer">
                    <div class="product-price">
                        ${product.pricing[0].original_price ? `<span class="price-original">${config.currency}${product.pricing[0].original_price}</span>` : ''}
                        <span class="price-current">${config.currency}${product.pricing[0].price}</span>
                    </div>
                    <div class="product-stock">
                        ${product.stock ? `${product.stock} ${translate('stock_left')}` : translate('stock_unlimited')}
                    </div>
                </div>
                <div class="product-actions">
                    <button class="btn-secondary add-cart" data-translate="add_to_cart">Add to Cart</button>
                    <button class="btn-primary view-details" data-translate="view_details">View Details</button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderProductDetail(product) {
    const hero = document.getElementById('productDetailHero');
    const content = document.getElementById('productDetailContent');

    hero.innerHTML = `
        <div class="product-detail-images">
            <img src="${getProductImageUrl(product, product.detail_images[0])}" alt="${product.title[currentLanguage]}" class="product-detail-main-image">
            <div class="product-detail-thumbnails">
                ${product.detail_images.map(img => `<img src="${getProductImageUrl(product, img)}" alt="Thumbnail">`).join('')}
            </div>
        </div>
        <div class="product-detail-info">
            <h1 class="product-detail-title">${product.title[currentLanguage]}</h1>
            <p class="product-detail-description">${product.full_description[currentLanguage]}</p>
            <div class="product-detail-pricing">
                <h3 data-translate="select_duration">Select Duration</h3>
                ${product.pricing.map((price, index) => `
                    <div class="pricing-option">
                        <label>
                            <input type="radio" name="duration" value="${price.product_type}" ${index === 0 ? 'checked' : ''}>
                            <span>${price.product_type.replace('_', ' ').toUpperCase()}</span>
                            <div class="pricing-prices">
                                ${price.original_price ? `<span class="original">${config.currency}${price.original_price}</span>` : ''}
                                <span class="current">${config.currency}${price.price}</span>
                            </div>
                        </label>
                    </div>
                `).join('')}
            </div>
            <button class="btn-primary btn-large" data-translate="buy_now">Buy Now</button>
        </div>
    `;

    content.innerHTML = `
        <div class="product-tabs">
            <button class="product-tab active" data-tab="description">${translate('description')}</button>
            <button class="product-tab" data-tab="specs">${translate('specifications')}</button>
            <button class="product-tab" data-tab="requirements">${translate('system_requirements')}</button>
        </div>
        <div class="product-tab-content">
            <div class="tab-pane active" id="description-tab">
                <p>${product.detailed_description[currentLanguage]}</p>
            </div>
            <div class="tab-pane hidden" id="specs-tab">
                <ul>
                    ${product.features[currentLanguage].map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            <div class="tab-pane hidden" id="requirements-tab">
                <p>${product.system_requirements[currentLanguage]}</p>
            </div>
        </div>
    `;
}

function renderCustomerProducts() {
    const customerProductsGrid = document.getElementById('customerProductsGrid');
    if (!customerProductsGrid) return;

    const username = localStorage.getItem('username');
    const user = accounts.find(acc => acc.username === username);
    
    if (!user || !user.purchased_products || user.purchased_products.length === 0) {
        customerProductsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
                <p style="font-size: 18px; color: var(--text-secondary);">No products yet</p>
            </div>
        `;
        return;
    }

    const purchasedProducts = products.filter(p => user.purchased_products.includes(p.id));

    customerProductsGrid.innerHTML = purchasedProducts.map(product => `
        <div class="customer-product-card" data-id="${product.id}">
            <div class="customer-product-image">
                <img src="${getProductImageUrl(product, product.preview_image)}" alt="${product.title[currentLanguage]}">
            </div>
            <div class="customer-product-info">
                <h3>${product.title[currentLanguage]}</h3>
                <div class="customer-product-actions">
                    <button class="btn-primary" data-translate="auto_setup">Auto Setup</button>
                    <button class="btn-secondary" data-translate="install">Install</button>
                    <button class="btn-secondary" data-translate="update">Update</button>
                </div>
            </div>
        </div>
    `).join('');
}

function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const pages = {
        'store': document.getElementById('storePage'),
        'library': document.getElementById('storePage'),
        'customer': document.getElementById('customerPage')
    };

    const customerPanelBtn = document.getElementById('customerPanelBtn');
    if (customerPanelBtn) {
        customerPanelBtn.addEventListener('click', () => {
            const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
            if (!isLoggedIn) {
                window.location.href = './login_register.html';
                return;
            }
            showPage('customer');
        });
    }

    navItems.forEach(nav => {
        nav.addEventListener('click', () => {
            const page = nav.getAttribute('data-page');
            if (page && pages[page]) {
                if (page === 'customer') {
                    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
                    if (!isLoggedIn) {
                        window.location.href = './login_register.html';
                        return;
                    }
                }
                showPage(page);
                navItems.forEach(n => n.classList.remove('active'));
                nav.classList.add('active');
            }
        });
    });

    function showPage(pageName) {
        Object.values(pages).forEach(page => page?.classList.add('hidden'));
        const dashboardPage = document.getElementById('dashboardPage');
        const settingsPage = document.getElementById('settingsPage');
        const productDetailPage = document.getElementById('productDetailPage');
        dashboardPage?.classList.add('hidden');
        settingsPage?.classList.add('hidden');
        productDetailPage?.classList.add('hidden');
        pages[pageName]?.classList.remove('hidden');
    }

    const discordBtn = document.getElementById('discordBtn');
    if (discordBtn && config.social_media?.discord_invite) {
        discordBtn.href = config.social_media.discord_invite;
        discordBtn.target = '_blank';
    }

    const backBtn = document.getElementById('backBtn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            const productDetailPage = document.getElementById('productDetailPage');
            if (!productDetailPage.classList.contains('hidden')) {
                productDetailPage.classList.add('hidden');
                document.getElementById('storePage').classList.remove('hidden');
            }
        });
    }

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('view-details')) {
            const productCard = e.target.closest('.product-card');
            const productId = productCard.getAttribute('data-id');
            const product = products.find(p => p.id === productId);
            if (product) {
                document.getElementById('storePage').classList.add('hidden');
                document.getElementById('productDetailPage').classList.remove('hidden');
                renderProductDetail(product);
            }
        }
    });

    const customerTabs = document.querySelectorAll('.customer-tab');
    const customerAllTab = document.getElementById('customerAllTab');
    const customerPurchasesTab = document.getElementById('customerPurchasesTab');

    customerTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            customerTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const tabName = tab.getAttribute('data-tab');

            if (tabName === 'purchases') {
                customerAllTab.classList.add('hidden');
                customerPurchasesTab.classList.remove('hidden');
                renderPurchasesTable();
            } else {
                customerAllTab.classList.remove('hidden');
                customerPurchasesTab.classList.add('hidden');
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
                <td colspan="5" style="text-align: center; padding: 40px;">No purchases yet</td>
            </tr>
        `;
        return;
    }

    purchasesTableBody.innerHTML = userPurchases.map(purchase => {
        const product = products.find(p => p.id === purchase.productId);
        const productTitle = product ? product.title[currentLanguage] : 'Unknown Product';
        const date = new Date(purchase.date).toLocaleString(currentLanguage);
        const saved = purchase.coupon ? (purchase.originalAmount - purchase.amount).toFixed(2) : '0.00';

        return `
            <tr>
                <td>${date}</td>
                <td>${productTitle}</td>
                <td>${config.currency}${purchase.amount.toFixed(2)}</td>
                <td>${purchase.coupon || translate('no_coupon')}</td>
                <td>${config.currency}${saved}</td>
            </tr>
        `;
    }).join('');
}

function setupProfileSidebar() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const profileBtn = document.getElementById('profileBtn');
    const loginRegisterBtn = document.getElementById('loginRegisterBtn');
    const profileSidebar = document.getElementById('profileSidebar');
    const overlay = document.getElementById('overlay');

    if (isLoggedIn) {
        profileBtn.style.display = 'flex';
        loginRegisterBtn.style.display = 'none';
        
        const profileName = document.getElementById('profileName');
        const profileEmail = document.getElementById('profileEmail');
        const profileImg = document.getElementById('profileImg');
        const profileSidebarImg = document.getElementById('profileSidebarImg');
        const username = localStorage.getItem('username');
        const user = accounts.find(acc => acc.username === username);
        currentUser = user;

        if (user) {
            profileName.textContent = user.username;
            profileEmail.textContent = user.email_adress || 'No email';
            const imgUrl = getProfileImageUrl(username);
            profileImg.src = imgUrl;
            profileSidebarImg.src = imgUrl;
        }

        setupLoggedInProfileNav();

        profileBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            profileSidebar.classList.toggle('active');
            overlay.classList.toggle('active');
        });
    } else {
        profileBtn.style.display = 'none';
        loginRegisterBtn.style.display = 'flex';
        
        loginRegisterBtn.addEventListener('click', () => {
            window.location.href = './login_register.html';
        });

        setupGuestProfileNav();
    }

    if (overlay) {
        overlay.addEventListener('click', () => {
            profileSidebar.classList.remove('active');
            overlay.classList.remove('active');
        });
    }
}

function setupLoggedInProfileNav() {
    const profileSidebarNav = document.getElementById('profileSidebarNav');
    profileSidebarNav.innerHTML = `
        <button class="profile-nav-item" id="dashboardNavBtn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
            </svg>
            <span data-translate="dashboard">Dashboard</span>
        </button>

        <button class="profile-nav-item" id="settingsNavBtn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span data-translate="account_settings">Account Settings</span>
        </button>

        <button class="profile-nav-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
            <span data-translate="preferences">Preferences</span>
        </button>

        <button class="profile-nav-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <span data-translate="payment_methods">Payment Methods</span>
        </button>

        <button class="profile-nav-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            <span data-translate="order_history">Order History</span>
        </button>

        <button class="profile-nav-item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            <span data-translate="help_support">Help & Support</span>
        </button>

        <div class="profile-divider"></div>

        <button class="profile-nav-item logout-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
            <span data-translate="logout">Logout</span>
        </button>
    `;

    const logoutBtn = document.querySelector('.logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('username');
            localStorage.removeItem('isLoggedIn');
            window.location.href = './login_register.html';
        });
    }

    const dashboardNavBtn = document.getElementById('dashboardNavBtn');
    if (dashboardNavBtn) {
        dashboardNavBtn.addEventListener('click', () => {
            showDashboard();
            document.getElementById('profileSidebar').classList.remove('active');
            document.getElementById('overlay').classList.remove('active');
        });
    }

    const settingsNavBtn = document.getElementById('settingsNavBtn');
    if (settingsNavBtn) {
        settingsNavBtn.addEventListener('click', () => {
            showSettings();
            document.getElementById('profileSidebar').classList.remove('active');
            document.getElementById('overlay').classList.remove('active');
        });
    }
}

function setupGuestProfileNav() {
    const profileSidebarNav = document.getElementById('profileSidebarNav');
    profileSidebarNav.innerHTML = `
        <button class="profile-nav-item login-register-profile-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                <polyline points="10 17 15 12 10 7"></polyline>
                <line x1="15" y1="12" x2="3" y2="12"></line>
            </svg>
            <span data-translate="login_register">Login / Register</span>
        </button>
    `;
    
    const loginRegisterProfileBtn = document.querySelector('.login-register-profile-btn');
    if (loginRegisterProfileBtn) {
        loginRegisterProfileBtn.addEventListener('click', () => {
            window.location.href = './login_register.html';
        });
    }
}

function showDashboard() {
    document.getElementById('storePage')?.classList.add('hidden');
    document.getElementById('customerPage')?.classList.add('hidden');
    document.getElementById('productDetailPage')?.classList.add('hidden');
    document.getElementById('settingsPage')?.classList.add('hidden');
    document.getElementById('dashboardPage')?.classList.remove('hidden');
    
    loadDashboardData();
}

function showSettings() {
    document.getElementById('storePage')?.classList.add('hidden');
    document.getElementById('customerPage')?.classList.add('hidden');
    document.getElementById('productDetailPage')?.classList.add('hidden');
    document.getElementById('dashboardPage')?.classList.add('hidden');
    document.getElementById('settingsPage')?.classList.remove('hidden');
    
    loadSettingsData();
}

function loadDashboardData() {
    if (!currentUser) return;

    document.getElementById('dashAccountType').textContent = currentUser.account_type || 'User';
    document.getElementById('dashTotalPurchases').textContent = currentUser.purchased_products?.length || 0;
    document.getElementById('dashActiveProducts').textContent = currentUser.purchased_products?.length || 0;
    document.getElementById('dashLoginCount').textContent = currentUser.user_login_count || '0';
    document.getElementById('dashUsername').textContent = currentUser.username || '-';
    document.getElementById('dashEmail').textContent = currentUser.email_adress || '-';
    document.getElementById('dashAccountId').textContent = currentUser.account_id || '-';
    document.getElementById('dashLastLogin').textContent = currentUser.user_last_login ? new Date(currentUser.user_last_login).toLocaleString() : '-';
    document.getElementById('dashDiscord').textContent = currentUser.discord_linked ? 'Yes' : 'No';
    document.getElementById('dashGoogle').textContent = currentUser.google_linked ? 'Yes' : 'No';
}

function loadSettingsData() {
    if (!currentUser) return;

    document.getElementById('settingsUsername').value = currentUser.username || '';
    document.getElementById('settingsEmail').value = currentUser.email_adress || '';
}

document.addEventListener('DOMContentLoaded', async () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    await loadConfig();
    await loadProducts();
    await loadAccounts();
    
    setupNavigation();
    setupLanguageSelector();
    setupProfileSidebar();
    updateLanguage();

    userPurchases = [];
});