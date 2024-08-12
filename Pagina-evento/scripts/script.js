document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio do formulário para validação

        // Limpar mensagens de erro
        document.querySelectorAll('.error-message').forEach(elem => elem.textContent = '');
        document.getElementById('form-success').textContent = '';

        // Obter valores dos campos
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Variáveis para controle de erros
        let isValid = true;

        // Validação do Nome
        if (!name) {
            document.getElementById('name-error').textContent = 'O nome é obrigatório.';
            isValid = false;
        }

        // Validação do E-mail
        if (!email) {
            document.getElementById('email-error').textContent = 'O e-mail é obrigatório.';
            isValid = false;
        } else if (!validateEmail(email)) {
            document.getElementById('email-error').textContent = 'O e-mail não é válido.';
            isValid = false;
        }

        // Validação da Mensagem
        if (!message) {
            document.getElementById('message-error').textContent = 'A mensagem é obrigatória.';
            isValid = false;
        }

        // Se todos os campos forem válidos
        if (isValid) {
            document.getElementById('form-success').textContent = 'Formulário enviado com sucesso!';
            form.reset(); 
        }
    });

    function validateEmail(email) {
        // Expressão regular para validação de e-mail. (Pesquisar mais sobre)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});