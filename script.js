/*mobile*/
function toggleMenu() {
    const menu= document.getElementById('navMenu');
    menu.classList.toggle('active');
    console.log('Menu toggled');
}

/*scroll leve*/
fuction scrollHeader(sectionId) {
    const section = document.getElementById(sectionId);

    if(!section) return;
    const headerHeitght = 70; // Altura do cabeçalho fixa
    const sectionTop = section.offsetTop - headerHeight;

    window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
    });

    const menu= document.getElementById('navMenu');
    menu.classList.remove('active');
}

/*cadastrado*/

function handleSubmit(event) {
    event.preventDefault();

    const form = document.getElementById('volunteerForm');

    const formData ={
        nome: form.nome.value,
        email: form.email.value,
        telefone: form.telefone.value,
        idade: form.idade.value,
        areainteresse: form.areainteresse.value,
        experiencia: form.experiencia.value,
        motivacao: form.motivacao.value,
        dataCadastro: new Date().toLocalDateString()
    }
let voluntarios = JSON.parse(localStorage.getItem('voluntarios')) || [];
voluntarios.push(formData);
localStorage.setItem('voluntarios', JSON.stringify(voluntarios));

const successMessage = document.getElementById('successMessage');
successMessage.classList.add('show');
successMessage.scrossIntoView({behavior: 'smooth', block: 'center'  });

setTimeout(() => form.reset(), 2000);
setTimeout(() => successMessage.classList.remove('show'), 3000);

exibirVoluntarios();


}

function exibirVoluntarios() {
    const voluntarios = JSON.parse(localStorage.getItem('voluntarios')) || [];
    const listaVoluntarios = document.getElementById('tabelaVoluntarios');
    
    if(!tabelaContainer) return;
    if(voluntarios.length === 0) {
        tabelaContainer.innerHTML = '<p>Nenhum voluntário cadastrado ainda.</p>';
        return;
    }