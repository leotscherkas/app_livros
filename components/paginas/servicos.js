let servicos = '';


const detalhes = [
    {
        titulo: 'Messi anão',
        descricao: 'KKKKKKKKKKKKKKKKK',
        imagem: './imagens/image1.jpg'
    },
    {
        titulo: 'NEYYEN',
        descricao: 'OH NEYMA',
        imagem: 'imagens/image2.jpg'
    },
    {
        titulo: 'ABNER',
        descricao: 'KKKKKKKKKKKKKKKKKKKKK',
        imagem: 'imagens/image3.webp'
    },
    {
        titulo: 'cerrote',
        descricao: 'siuuuuuuuu',
        imagem: 'imagens/image4.jpg'
    },
    {
        titulo: 'Mundial do palmeiras',
        descricao: 'parabens palmeiras',
        imagem: 'imagens/images.jpg'
    },
]
servicos += `<div class="bem-grid-auto">`
for(let i=0; i < detalhes.length; i++){
servicos +=`
        
        <div class="bem-card">
            <img class="bem-card__image" src="${detalhes[i].imagem}" alt="Image description">
            <div class="bem-card__body">
                <h3 class="bem-card__title">${detalhes[i].titulo}</h3>
                <p>${detalhes[i].descricao}</p>
            </div>
        </div>
        

    
`
}

servicos += `</div>`

export default servicos