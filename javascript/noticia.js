import { noticias } from './dados.js'

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);

  const myParam = urlParams.get('artigo');

  const noticia = noticias.findIndex(item => item.id == myParam)
  rederizaArtigo(noticia)
})

function rederizaArtigo(id){
  document.querySelector('main').innerHTML = `
    <h1 class="mb-5">${noticias[id].titulo}</h1>
    ${noticias[id].imagem !== '' ? '<img src="'+noticias[id].imagem+'" class="img-fluid rounded mb-5 " alt="...">': ''}
    ${noticias[id].conteudo}
  `
}