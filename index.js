function calcular(event){   
    const parentNode = event.target.parentNode
    const idade = parseFloat(parentNode.children.idade.value)
    const alturaCm = parseFloat(parentNode.children.altura.value)
    const alturaM = alturaCm / 100
    const peso = parseFloat(parentNode.children.peso.value)
    const precoABasico = parseFloat(operadoraABasico(idade, alturaM, peso))
    const precoAStandart = parseFloat(operadoraAStandart(idade, alturaM, peso))
    const precoAPremiun = parseFloat(operadoraAPremiun(idade, alturaM, peso))
    const precoBBasico = parseFloat(operadoraBBasico(alturaM, peso))
    const precoBStandart =  parseFloat(operadoraBStandart(alturaM, peso))
    const precoBPremiun = parseFloat(operadoraBPremiun(alturaM, peso))

    const div = document.getElementById('resultado-text')
    div.innerHTML = ''
    const text1 = document.createElement('p')
    text1.className = 'comparacao-text'
    text1.innerText = 'Após realiazar os cálculos temos os seguintes preços:'
    const text2 = document.createElement('p')
    text2.className = 'comparacao-text'
    text2.innerText = 'Preços Operadora A:'
    const ul1 = document.createElement('ul')
    const liA1 = document.createElement('li')
    liA1.className = 'lista'
    liA1.innerText = 'Preço Básico ' + 'R$ ' + precoABasico
    const liA2 = document.createElement('li')
    liA2.className = 'lista'
    liA2.innerText = 'Preço Standart ' + 'R$ ' + precoAStandart
    const liA3 = document.createElement('li') 
    liA3.className = 'lista'
    liA3.innerText = 'Preço Premiun '+ 'R$ '  + precoAPremiun

    ul1.append(liA1, liA2, liA3)

    const text3 = document.createElement('p')
    text3.className = 'comparacao-text'
    text3.innerText = 'Preços Operadora B:'
    const ul2 = document.createElement('ul')
    const liB1 = document.createElement('li')
    liB1.className = 'lista'
    liB1.innerText = 'Preço Básico '+ 'R$ '  + precoBBasico
    const liB2 = document.createElement('li')
    liB2.className = 'lista'
    liB2.innerText = 'Preço Standart '+ 'R$ ' + precoBStandart
    const liB3 = document.createElement('li')
    liB3.className = 'lista'
    liB3.innerText = 'Preço Premiun '+ 'R$ ' + precoBPremiun

    ul2.append(liB1, liB2, liB3)


    div.append(text1, text2, ul1, text3, ul2)

    const title2 = document.createElement('h3')
    title2.className = 'comparacao-title'
    title2.innerText = 'Conclusão'
    
    const title3 = document.createElement('h4')
    title3.className = 'comparacao-title'
    title3.innerText = 'Plano Básico'

    const text4 = document.createElement('p')
    text4.className = 'comparacao-text'
    if(precoABasico > precoBBasico){
        text4.innerText = 'A operadora B tem o menor preço.'
    }else{
        text4.innerText = 'A operadora A tem o menor preço.'
    }

    const title4 = document.createElement('h4')
    title4.className = 'comparacao-title'
    title4.innerText = 'Plano Standart'
    const text5 = document.createElement('p')
    text5.className = 'comparacao-text'
    if(precoAStandart > precoBStandart){
        text5.innerText = 'A operado B tem o menor preço'
    }else{
        text5.innerText = 'A operadora A tem o menor preço'
    }

    const title5 = document.createElement('h4')
    title5.className = 'comparacao-title'
    title5.innerText = 'Plano Premiun'
    const text6 = document.createElement('p')
    text6.className = 'comparacao-text'
    if(precoAPremiun > precoBPremiun){
        text6.innerText = 'A operado B tem o menor preço'
    }else{
        text6.innerText = 'A operadora A tem o menor preço'
    }
    div.append(title2, title3, text4, title4, text5, title5, text6 )

}

function operadoraABasico(idade, altura, peso){

    const alturaIMC = Math.pow(altura, 2)
    const imcA = peso / alturaIMC

    const planoBasico = 100 + (idade * 10 * (imcA / 10))
    return planoBasico.toFixed(2) 
}


function operadoraAStandart(idade, altura, peso){

    const alturaIMC = Math.pow(altura, 2)
    const imcA = peso / alturaIMC
    const planoStandart = (150 + (idade * 15)) * (imcA /10)
    return planoStandart.toFixed(2)    
}

function operadoraAPremiun(idade, altura, peso){

    const alturaIMC = Math.pow(altura, 2)
    const imcA = peso / alturaIMC
    const planoPremiun = (200 - (imcA *10) + (idade * 20)) * (imcA / 10)
    return planoPremiun.toFixed(2) 
      
}

function fatorComorbidade(altura, peso){
    const alturaIMC = Math.pow(altura, 2)
    const imcB = peso / alturaIMC

    if (imcB < 18.5) {
        return 10;
    } else if (imcB <= 24.9) {
        return 1;
    } else if (imcB <= 29.9) {
        return 6;
    } else if (imcB <= 34.9) {
        return 10;
    } else if (imcB <= 39.9) {
        return 20;
    } else {
        return 30;
    }
}

function operadoraBBasico(altura, peso){

    const alturaIMC = Math.pow(altura, 2)
    const imcB = peso / alturaIMC
    const fator = fatorComorbidade(altura, peso)
    const planoBasico = 100 + (fator * 10 * (imcB / 10))
    return planoBasico.toFixed(2)   
}

function operadoraBStandart(altura, peso){

    const alturaIMC = Math.pow(altura, 2)
    const imcB = peso / alturaIMC
    const fator = fatorComorbidade(altura, peso)
    const planoStandart = (150 + (fator * 15)) * (imcB /10)
    return planoStandart.toFixed(2) 
}

function operadoraBPremiun(altura, peso){

    const alturaIMC = Math.pow(altura, 2)
    const imcB = peso / alturaIMC
    const fator = fatorComorbidade(altura, peso)
    const planoPremiun = (200 - (imcB *10) + (fator * 20)) * (imcB / 10)
    return planoPremiun.toFixed(2) 
}


const button = document.getElementById('calculadora-btn')
button.addEventListener('click', calcular)




