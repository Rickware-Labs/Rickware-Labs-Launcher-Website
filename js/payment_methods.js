document.addEventListener('DOMContentLoaded', async () => {
    const user = await getCurrentUser();
    if (!user) {
        window.location.href = './login_register.html';
        return;
    }

    loadConfig().then(() => {
        const discordLink = document.getElementById('discordServerLink');
        if (discordLink && config.discord_invite) {
            discordLink.href = config.discord_invite;
            discordLink.addEventListener('click', (e) => {
                e.preventDefault();
                window.open(config.discord_invite, '_blank');
            });
        }
    });
});

async function getCurrentUser() {
    const cookie = document.cookie.split('; ').find(row => row.startsWith('rickware_session='));
    if (cookie) {
        try {
            const data = JSON.parse(atob(cookie.split('=')[1]));
            const fileData = await getGitHubFileContent();
            if (fileData) {
                return fileData.content.accounts.find(acc => acc.account_id === data.account_id);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const sessionData = sessionStorage.getItem('rickware_user');
    if (sessionData) {
        return JSON.parse(sessionData);
    }

    return null;
}