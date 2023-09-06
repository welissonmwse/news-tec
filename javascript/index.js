import {noticias} from './dados.js'

function renderizarNoticias(){
  const divNoticias = document.querySelector('.noticias')
  noticias.forEach(noticia => {
    divNoticias.innerHTML += `
    <a class="card-noticia d-block card border-0 mb-3 icon-link icon-link-hover link-success link-underline-success link-underline-opacity-25" role="button" data-js-id="${noticia.id}">
      <div class="row g-0">
        <div class="col-4">
          <img src="${noticia.thumbnail}" class="h-100 w-100 rounded-start" alt="...">
        </div>
        <div class="col-8">
          <div class="card-body">
            <p class="text-white m-0 ">
              <i class="fa fa-user"></i>
              ${noticia.autor}
            </p>
            <p class="card-text m-0 ">
              ${noticia.titulo}
            </p>
          </div>
        </div>
      </div>
    </a>
    `
  });
}
function renderizarArtigos(){
  const divArtigos = document.querySelector('.artigos')
  noticias.forEach((noticia, index) => {
    if(index < 4){
      divArtigos.innerHTML += `
      <a class="card-noticia d-block card border-0 mb-3 icon-link icon-link-hover link-success link-underline-success link-underline-opacity-25" role="button" data-js-id="${noticia.id}">
        <div class="row g-0">
          <div class="col-4">
            <img src="${noticia.thumbnail}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-8">
            <div class="card-body p-0 ps-2">
              <p class="text-white m-0 ">
                <i class="fa fa-user"></i>
                ${noticia.autor}
              </p>
              <p class="card-text m-0 text-truncate " style="font-size: 14px;">
                ${noticia.titulo}
              </p>
            </div>
          </div>
        </div>
      </a>
      `
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderizarNoticias()
  renderizarArtigos()

  Array.from(document.querySelectorAll('.card-noticia'))
    .forEach(item => item.addEventListener('click', (event) => {
      const id = event.currentTarget.dataset.jsId

      window.location = `noticia.html?artigo=${id}`
  }))
})