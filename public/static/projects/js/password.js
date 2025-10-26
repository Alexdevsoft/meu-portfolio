let passwordHistory = JSON.parse(localStorage.getItem('passwordHistory')) || [];

const charset = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
};

function updateLength() {
    const value = document.getElementById('lengthSlider').value;
    document.getElementById('lengthValue').textContent = value;
}

function generatePassword() {
    const length = parseInt(document.getElementById('lengthSlider').value);
    const useUppercase = document.getElementById('uppercase').checked;
    const useLowercase = document.getElementById('lowercase').checked;
    const useNumbers = document.getElementById('numbers').checked;
    const useSymbols = document.getElementById('symbols').checked;

    if (!useUppercase && !useLowercase && !useNumbers && !useSymbols) {
        alert('Por favor, selecione pelo menos um tipo de caractere!');
        return;
    }

    let chars = '';
    if (useUppercase) chars += charset.uppercase;
    if (useLowercase) chars += charset.lowercase;
    if (useNumbers) chars += charset.numbers;
    if (useSymbols) chars += charset.symbols;

    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    document.getElementById('passwordOutput').textContent = password;
    updateStrength(password);
    addToHistory(password);
}

function updateStrength(password) {
    let strength = 0;

    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    if (password.length >= 16) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^a-zA-Z0-9]/.test(password)) strength++;

    const strengthFill = document.getElementById('strengthFill');
    const strengthText = document.getElementById('strengthText');

    const percentage = (strength / 7) * 100;
    strengthFill.style.width = percentage + '%';

    if (strength <= 2) {
        strengthFill.style.background = '#dc3545';
        strengthText.textContent = 'Fraca';
        strengthText.style.color = '#dc3545';
    } else if (strength <= 4) {
        strengthFill.style.background = '#ffc107';
        strengthText.textContent = 'Média';
        strengthText.style.color = '#ffc107';
    } else if (strength <= 5) {
        strengthFill.style.background = '#28a745';
        strengthText.textContent = 'Forte';
        strengthText.style.color = '#28a745';
    } else {
        strengthFill.style.background = '#007bff';
        strengthText.textContent = 'Muito Forte';
        strengthText.style.color = '#007bff';
    }
}

function copyPassword() {
    const password = document.getElementById('passwordOutput').textContent;

    if (password === 'Clique em Gerar Senha') {
        alert('Gere uma senha primeiro!');
        return;
    }

    navigator.clipboard.writeText(password).then(() => {
        const btn = document.querySelector('.btn-copy');
        const originalText = btn.textContent;
        btn.textContent = '✅ Copiado!';

        setTimeout(() => {
            btn.textContent = originalText;
        }, 2000);
    });
}

function addToHistory(password) {
    passwordHistory.unshift(password);
    if (passwordHistory.length > 10) {
        passwordHistory = passwordHistory.slice(0, 10);
    }
    localStorage.setItem('passwordHistory', JSON.stringify(passwordHistory));
    renderHistory();
}

function renderHistory() {
    const historyList = document.getElementById('historyList');

    if (passwordHistory.length === 0) {
        historyList.innerHTML = '<div class="history-empty">Nenhuma senha gerada ainda</div>';
        return;
    }

    historyList.innerHTML = passwordHistory.map(password => `
                <div class="history-item">
                    <span>${password}</span>
                    <button class="btn-copy" onclick="copyHistoryPassword('${password}')">📋</button>
                </div>
            `).join('');
}

function copyHistoryPassword(password) {
    navigator.clipboard.writeText(password).then(() => {
        alert('Senha copiada!');
    });
}

function clearHistory() {
    if (confirm('Tem certeza que deseja limpar o histórico?')) {
        passwordHistory = [];
        localStorage.setItem('passwordHistory', JSON.stringify(passwordHistory));
        renderHistory();
    }
}

// Initial render
renderHistory();

// Generate password on load
generatePassword();