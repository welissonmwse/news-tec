import {noticias} from './dados.js'

function renderizarNoticias(){
  const divNoticias = document.querySelector('.noticias')
  noticias.forEach(noticia => {
    divNoticias.innerHTML += `
    <div class="card-noticia card border-0 mb-3" role="button" data-js-id="${noticia.id}">
      <div class="row g-0">
        <div class="col-4">
          <img src="${noticia.thumbnail}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-8">
          <div class="card-body">
            <p class="text-white m-0">
              <i class="fa fa-user"></i>
              ${noticia.autor}
            </p>
            <p class="card-text m-0" style="font-size:14px">
              ${noticia.titulo}
            </p>
          </div>
        </div>
      </div>
    </div>
    `
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderizarNoticias()

  Array.from(document.querySelectorAll('.card-noticia'))
    .forEach(item => item.addEventListener('click', (event) => {
      const id = event.currentTarget.dataset.jsId

      window.location = `noticia.html?artigo=${id}`
  }))
})