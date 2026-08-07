async function carregarComentarios() {
    try {
        const resposta = await fetch('http://localhost:3000/api/comments');
        const comentarios = await resposta.json();

        const container = document.getElementById('container-comentarios');
        
        container.innerHTML = '';

        comentarios.forEach(item => {
            const estrelas = '★'.repeat(item.rating);

            container.innerHTML += `
                <div class="card-comentario">
                    <img src="${item.avatar_url}" alt="Foto de ${item.author_name}">
                    <div class="estrelas">${estrelas}</div>
                    <h3>${item.author_name}</h3>
                    <p>${item.comment}</p>
                </div>
            `;
        });
    } catch (erro) {
        console.error('Erro ao conectar ao servidor:', erro);
    }
}

document.addEventListener('DOMContentLoaded', carregarComentarios);

const btnLogin = document.getElementById('btn-login');

if (btnLogin) {
btnLogin.addEventListener('click', () => {
    alert('Direcionando para a tela de autenticação...');
});
const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); 
    const idAlvo = link.getAttribute('href');
    const secao = document.querySelector(idAlvo);

    if (secao) {
      secao.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

const btnLogin = document.getElementById('btn-login');

if (btnLogin) {
  btnLogin.addEventListener('click', () => {
    console.log("Solicitação de login iniciada.");
    alert("🔒 Área restrita: Autenticação de usuário solicitada!");
  });
}
}
