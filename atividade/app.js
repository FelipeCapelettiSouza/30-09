function handleClick() {
    document.getElementById('mensagem').innerHTML = "Você clicou no botão!";
    mostrarMensagem();
}

function handleMouseOver() {
    document.getElementById('mensagem').innerHTML = "Você passou o mouse sobre o botão!";
    mostrarMensagem();
}

function handleMouseOut() {
    document.getElementById('mensagem').innerHTML = "Você saiu do botão!";
    mostrarMensagem();
}

function handleChange() {
    const input = document.getElementById('inputOnChange').value;
    document.getElementById('mensagem').innerHTML = `Você digitou: ${input}`;
    mostrarMensagem();
}

function handleKeyDown() {
    document.getElementById('mensagem').innerHTML = "Você pressionou uma tecla!";
    mostrarMensagem();
}

// Evento onload
window.onload = function() {
    document.getElementById('mensagem').innerHTML = "Página carregada!";
    mostrarMensagem();
};

function mostrarMensagem() {
    const resultado = document.getElementById('mensagem');
    resultado.classList.remove('visible'); // Remove a classe de visibilidade
    setTimeout(() => {
        resultado.classList.add('visible'); // Adiciona a classe para animação
    }, 10); // Pequeno delay para garantir que a animação ocorra
}
