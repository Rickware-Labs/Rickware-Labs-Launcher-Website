let config = {};
let products = [];
let currentLanguage = 'en';
let cart = [];
let wishlist = [];
let userPurchases = [];
let accounts = [];

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
        popular: 'Самые популярные',
        stock_unlimited: 'Неограничено',
        stock_left: 'осталось',
        add_to_cart: 'В корзину',
        view_details: 'Подробности',
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
        payment_methods: 'Методы оплаты',
        order_history: 'История заказов',
        help_support: 'Помощь и поддержка',
        logout: 'Выйти',
        auto_setup: 'Авто установка',
        install: 'Установить',
        uninstall: 'Удалить',
        update: 'Обновить',
        installed: 'Установлено',
        buy_now: 'Купить сейчас',
        select_duration: 'Выбрать длительность',
        description: 'Описание',
        specifications: 'Спецификации',
        system_requirements: 'Системные требования'
    }
};

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

async function loadConfig() {
    config = await fetchGitHubFile(github_database_2_token_read_only, `https://api.github.com/repos/${github_repo_owner}/${github_repo_name2_read_only}/contents/${github_website_config_file_path_read_only}`);
}

async function loadProducts() {
    const data = await fetchGitHubFile(github_database_2_token_read_only, github_api_url_products_read_only);
    products = data.products;
    renderProducts();
    renderCustomerProducts();
}

async function loadAccounts() {
    const data = await fetchGitHubFile(github_database_1_token, github_api_url_accounts);
    accounts = data.accounts;
}

async function updateAccounts(newAccounts) {
    const content = btoa(JSON.stringify({ accounts: newAccounts }, null, 2));
    const response = await fetch(github_api_url_accounts, {
        method: 'GET',
        headers: {
            'Authorization': `token ${github_database_1_token}`
        }
    });
    const { sha } = await response.json();

    await fetch(github_api_url_accounts, {
        method: 'PUT',
        headers: {
            'Authorization': `token ${github_database_1_token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message: 'Update accounts',
            content: content,
            sha: sha
        })
    });
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
                                ${price.original_price ? `<span class="price-original">${config.currency}${price.original_price}</span>` : ''}
                                <span class="price-current">${config.currency}${price.price}</span>
                            </div>
                        </label>
                    </div>
                `).join('')}
                <button class="btn-primary buy-now" data-translate="buy_now">Buy Now</button>
            </div>
        </div>
    `;

    content.innerHTML = `
        <section class="product-section">
            <h2 data-translate="description">Description</h2>
            <p>${product.full_description[currentLanguage]}</p>
        </section>
        <section class="product-section">
            <h2 data-translate="specifications">Specifications</h2>
        </section>
        <section class="product-section">
            <h2 data-translate="system_requirements">System Requirements</h2>
        </section>
    `;
}

function renderCustomerProducts() {
    const customerProductsGrid = document.getElementById('customerProductsGrid');
    if (!customerProductsGrid) return;

    const ownedProducts = products.filter(p => userPurchases.some(up => up.productId === p.id));

    customerProductsGrid.innerHTML = ownedProducts.map(product => `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image">
                <img src="${getProductImageUrl(product, product.preview_image)}" alt="${product.title[currentLanguage]}">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title[currentLanguage]}</h3>
                <p class="product-description">${product.preview_description[currentLanguage]}</p>
                <div class="product-actions">
                    ${product.product_auto_setup ? `<button class="btn-secondary">${translate('auto_setup')}</button>` : ''}
                    ${product.product_auto_install ? `<button class="btn-primary">${translate('install')}</button>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item[data-page]');
    const storePage = document.getElementById('storePage');
    const customerPage = document.getElementById('customerPage');
    const productDetailPage = document.getElementById('productDetailPage');
    const backBtn = document.getElementById('backBtn');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            const page = item.getAttribute('data-page');

            storePage.classList.add('hidden');
            customerPage.classList.add('hidden');
            productDetailPage.classList.add('hidden');
            backBtn.style.display = 'none';

            if (page === 'store') {
                storePage.classList.remove('hidden');
            } else if (page === 'customer') {
                customerPage.classList.remove('hidden');
                renderCustomerProducts();
                renderPurchasesTable();
            }
        });
    });

    backBtn.addEventListener('click', () => {
        productDetailPage.classList.add('hidden');
        storePage.classList.remove('hidden');
        backBtn.style.display = 'none';
    });

    const customerTabs = document.querySelectorAll('.customer-tab');
    const customerAllTab = document.getElementById('customerAllTab');
    const customerPurchasesTab = document.getElementById('customerPurchasesTab');

    customerTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            customerTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const tabName = tab.getAttribute('data-tab');

            if (tabName === 'all') {
                customerAllTab.classList.remove('hidden');
                customerPurchasesTab.classList.add('hidden');
            } else if (tabName === 'purchases') {
                customerAllTab.classList.add('hidden');
                customerPurchasesTab.classList.remove('hidden');
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
    const profileBtn = document.getElementById('profileBtn');
    const profileSidebar = document.getElementById('profileSidebar');
    const overlay = document.getElementById('overlay');
    const profileName = document.getElementById('profileName');
    const profileEmail = document.getElementById('profileEmail');
    const profileImg = document.getElementById('profileImg');
    const profileSidebarImg = document.getElementById('profileSidebarImg');
    const username = localStorage.getItem('username');
    const user = accounts.find(acc => acc.username === username);

    if (user) {
        profileName.textContent = user.username;
        profileEmail.textContent = user.email_adress || 'No email';
        const imgUrl = getProfileImageUrl(username);
        profileImg.src = imgUrl;
        profileSidebarImg.src = imgUrl;
    }

    if (profileBtn) {
        profileBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            profileSidebar.classList.toggle('active');
            overlay.classList.toggle('active');
        });
    }

    if (overlay) {
        overlay.addEventListener('click', () => {
            profileSidebar.classList.remove('active');
            overlay.classList.remove('active');
        });
    }

    const logoutBtn = document.querySelector('.logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('username');
            window.location.href = 'login_register.html';
        });
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    if (!localStorage.getItem('username')) {
        window.location.href = 'login_register.html';
        return;
    }

    await loadConfig();
    await loadProducts();
    await loadAccounts();
    
    setupNavigation();
    setupLanguageSelector();
    setupProfileSidebar();
    updateLanguage();

    userPurchases = [
        { productId: 'discord_status_rotator', date: '2024-01-15T10:30:00', amount: 49.99, originalAmount: 79.99, coupon: 'SAVE30' },
        { productId: 'whatsapp_mass_dm_tool', date: '2024-01-10T14:20:00', amount: 19.99, originalAmount: 29.99, coupon: null }
    ];
});