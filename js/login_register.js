// login_register.js
let currentLanguage = 'en';
let accounts = [];

const translations = {
    en: {
        login: 'Login',
        register: 'Register',
        login_title: 'Sign In',
        login_description: 'Enter your credentials to access your account',
        username: 'Username',
        password: 'Password',
        remember_me: 'Remember me',
        forgot_password: 'Forgot password?',
        login_button: 'Sign In',
        or: 'OR',
        google_login: 'Continue with Google',
        discord_login: 'Continue with Discord',
        register_title: 'Create Account',
        register_description: 'Sign up to get started with premium products',
        email: 'Email',
        confirm_password: 'Confirm Password',
        accept_terms: 'I accept the Terms of Service and Privacy Policy',
        register_button: 'Create Account',
        google_register: 'Sign up with Google',
        discord_register: 'Sign up with Discord',
        store_name: 'Rickware - Labs - Launcher',
        auth_welcome: 'Welcome to the future of digital products',
        feature_1: 'Instant Access to Products',
        feature_2: 'Secure Payment Processing',
        feature_3: 'Premium Support'
    },
    de: {
        login: 'Anmelden',
        register: 'Registrieren',
        login_title: 'Anmelden',
        login_description: 'Geben Sie Ihre Anmeldedaten ein',
        username: 'Benutzername',
        password: 'Passwort',
        remember_me: 'Angemeldet bleiben',
        forgot_password: 'Passwort vergessen?',
        login_button: 'Anmelden',
        or: 'ODER',
        google_login: 'Mit Google fortfahren',
        discord_login: 'Mit Discord fortfahren',
        register_title: 'Konto erstellen',
        register_description: 'Registrieren Sie sich für Premium-Produkte',
        email: 'E-Mail',
        confirm_password: 'Passwort bestätigen',
        accept_terms: 'Ich akzeptiere die Nutzungsbedingungen und Datenschutzrichtlinie',
        register_button: 'Konto erstellen',
        google_register: 'Mit Google registrieren',
        discord_register: 'Mit Discord registrieren',
        store_name: 'Rickware - Labs - Launcher',
        auth_welcome: 'Willkommen in der Zukunft digitaler Produkte',
        feature_1: 'Sofortiger Zugriff auf Produkte',
        feature_2: 'Sichere Zahlungsabwicklung',
        feature_3: 'Premium-Support'
    },
    ru: {
        login: 'Войти',
        register: 'Регистрация',
        login_title: 'Вход',
        login_description: 'Введите данные для доступа к аккаунту',
        username: 'Имя пользователя',
        password: 'Пароль',
        remember_me: 'Запомнить меня',
        forgot_password: 'Забыли пароль?',
        login_button: 'Войти',
        or: 'ИЛИ',
        google_login: 'Продолжить с Google',
        discord_login: 'Продолжить с Discord',
        register_title: 'Создать аккаунт',
        register_description: 'Зарегистрируйтесь для доступа к премиум продуктам',
        email: 'Email',
        confirm_password: 'Подтвердите пароль',
        accept_terms: 'Я принимаю Условия использования и Политику конфиденциальности',
        register_button: 'Создать аккаунт',
        google_register: 'Регистрация через Google',
        discord_register: 'Регистрация через Discord',
        store_name: 'Rickware - Labs - Launcher',
        auth_welcome: 'Добро пожаловать в будущее цифровых продуктов',
        feature_1: 'Мгновенный доступ к продуктам',
        feature_2: 'Безопасная обработка платежей',
        feature_3: 'Премиум поддержка'
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

function translate(key) {
    return translations[currentLanguage][key] || key;
}

function updateLanguage() {
    document.querySelectorAll('[data-translate]').forEach(el => {
        el.textContent = translate(el.getAttribute('data-translate'));
    });
}

function setupAuthLanguageSelector() {
    const languageBtn = document.getElementById('languageBtnAuth');
    const languageDropdown = document.getElementById('languageDropdownAuth');
    const supportedLanguages = ['en', 'de', 'ru'];

    supportedLanguages.forEach(lang => {
        const btn = document.createElement('button');
        btn.classList.add('language-option-auth');
        btn.textContent = lang.toUpperCase();
        btn.addEventListener('click', () => {
            currentLanguage = lang;
            document.getElementById('currentLangAuth').textContent = lang.toUpperCase();
            updateLanguage();
            languageDropdown.classList.remove('active');
        });
        languageDropdown.appendChild(btn);
    });

    languageBtn.addEventListener('click', () => {
        languageDropdown.classList.toggle('active');
    });
}

async function initAuthPage() {
    const authTabs = document.querySelectorAll('.auth-tab');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    authTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            authTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const tabName = tab.getAttribute('data-tab');

            if (tabName === 'login') {
                loginForm.classList.remove('hidden');
                registerForm.classList.add('hidden');
            } else {
                loginForm.classList.add('hidden');
                registerForm.classList.remove('hidden');
            }
        });
    });

    const togglePasswordBtns = document.querySelectorAll('.toggle-password');
    togglePasswordBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            const input = document.getElementById(targetId);
            
            if (input.type === 'password') {
                input.type = 'text';
            } else {
                input.type = 'password';
            }
        });
    });

    const loginFormElement = document.getElementById('loginForm');
    if (loginFormElement) {
        loginFormElement.addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = document.getElementById('login-username').value;
            const password = document.getElementById('login-password').value;

            const user = accounts.find(acc => acc.username === username && acc.password === password);
            if (user) {
                localStorage.setItem('username', username);
                window.location.href = '../index.html';
            } else {
                alert('Invalid credentials');
            }
        });
    }

    const registerFormElement = document.getElementById('registerForm');
    if (registerFormElement) {
        registerFormElement.addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = document.getElementById('register-username').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            const confirmPassword = document.getElementById('register-confirm-password').value;

            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }

            const newAccount = {
                account_id: (accounts.length + 1).toString(),
                system_ban: false,
                system_timeout: false,
                system_rate_limit: "10",
                username: username,
                password: password,
                "2_fa": false,
                email_newsletter: false,
                email_adress: email,
                phone_number: null,
                discord_linked: false,
                google_linked: false,
                profile_picture: `${username}/profile_picture.png`,
                account_type: "User",
                account_permissions: "User",
                database_main_product_key: `R1ckwar3-${Math.random().toString(36).substr(2,10)}-Lab$-${Math.random().toString(36).substr(2,5).toUpperCase()}-Launcher-${Math.random().toString(36).substr(2,20).toUpperCase()}-User-${Math.floor(Math.random()*100000)}-User-${Math.random().toString(36).substr(2,10).toUpperCase()}`,
                purchased_products: [],
                paid_products: [],
                product_types: [],
                product_license_keys: [],
                paused_license_keys: [],
                banned_products: [],
                user_last_ip: null,
                user_last_login: null,
                user_login_count: "0",
                user_last_os: null,
                user_os_version: null,
                user_os_systems: null,
                user_time_zone: null,
                user_hwid: null,
                user_mac: null,
                user_uuid: null,
                user_system_user: null,
                user_user_agent: null,
                user_fingerprint: null,
                user_browser: null,
                user_discord_username: null,
                user_discord_displayname: null,
                user_discord_user_id: null,
                user_discord_user_server: "false",
                user_discord_user_roles: [],
                user_discord_user_ticket_ids: [],
                user_discord_user_coin_amount: 0,
                user_discord_user_xp_amount: 0,
                user_discord_user_invited_user: []
            };

            accounts.push(newAccount);
            await updateAccounts(accounts);
            localStorage.setItem('username', username);
            window.location.href = '../index.html';
        });
    }

    setupAuthLanguageSelector();
    updateLanguage();
}

document.addEventListener('DOMContentLoaded', async () => {
    await loadAccounts();
    initAuthPage();
});