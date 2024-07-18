function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if(username === 'admin' && password === 'admin') {
        alert('Login bem-sucedido!');
        // Redirecionar para outra página ou realizar outra ação
    } else {
        alert('Usuário ou senha incorretos.');
    }
}