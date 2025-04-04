const BASE_URL = 'https://www.google.com/search?q='; //Define uma constante com a URL base para as pesquisas do Google.
const ICON_CLOCK = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path fill="#999" d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/></svg>'; // Define uma constante com o código SVG para um ícone de relógio, usado para representar o histórico.

const historyCache = JSON.parse(localStorage.getItem('clone-google-history')) || []; //Tenta obter o histórico de pesquisa armazenado localmente ('clone-google-history'). Se não existir, inicializa um array vazio.

const menuApp = document.getElementById('menuAplicativos'); //Obtém a referência para o elemento HTML com o ID 'menuAplicativos'.
const searchContent = document.getElementById('conteudoPesquisa'); //Obtém a referência para o elemento HTML com o ID 'conteudoPesquisa'.

function handleFocusInput() { //Define uma função chamada 'handleFocusInput'.
  searchContent.classList.add('active'); //Adiciona a classe 'active' ao elemento 'searchContent'. Isso pode alterar a aparência ou visibilidade quando o input recebe foco.
}

function handleBlurInput() { //Define uma função chamada 'handleBlurInput'.
  setTimeout(() => searchContent.classList.remove('active'), 200); //Remove a classe 'active' do elemento 'searchContent' após um atraso de 100 milissegundos quando o input perde o foco. O 'setTimeout' evita remoções acidentais.
}

function handleKeydown(event) { //Define uma função chamada 'handleKeydown' que recebe um objeto de evento como argumento.
  if (event.key === 'Enter') { //Verifica se a tecla pressionada foi a tecla 'Enter'.
    const value = event.target.value; //Obtém o valor do elemento que disparou o evento, ou seja, o input de pesuisa.
    historyCache.push(value); //Adiciona o valor da pesquisa ao array 'historyCache'.
    location.href = BASE_URL.concat(value); //Redireciona o navegador para a URL de pesquisa do Google, concatenando a URL base com o termo de pesquisa.
    localStorage.setItem('clone-google-history', JSON.stringify(historyCache)); //Salva o array 'historyCache' atualizado no armazenamento local, convertendo-o para uma string JSON.
  }
}

function handleHistory() { //Define uma função chamada 'handleHistory' para exibir o histórico de pesquisa.
  const listHistory = document.getElementById('historico'); //Obtém a referência para o elemento HTML com o ID 'historico', onde a lista de histórico será exibida.

  historyCache.map(historyItem => { //Itera sobre cada item no array 'historyCache'.
    const li = document.createElement('li'); //Cria um novo elemento de lista ('li').

    const anchor = document.createElement('a'); //Cria um novo elemento de link ('a').
    anchor.setAttribute('href', BASE_URL.concat(historyItem)); //Define o atributo 'href' do link para a URL de pesquisa do Google para este item do histórico.

    anchor.innerHTML = ICON_CLOCK + `<span>${historyItem}</span>` + '<button>excluir</button>'; //Define o conteúdo HTML do link, incluindo o ícone de relógio, o termo pesquisado dentro de um 'span' e um botão de 'excluir'.

    li.appendChild(anchor); //Adiciona o elemento de link ('anchor') como filho do elemento de lista ('li').

    listHistory.appendChild(li); //Adiciona o elemento de lista ('li') como filho da lista de histórico ('listHistory') no DOM.
  });
}

function handleVisibleMenuApp() { //Define uma função chamada 'handleVisibleMenuApp'.
  menuApp.classList.toggle('active'); //Alterna a classe 'active' no elemento 'menuApp'. Se a classe estiver presente, ela é removida; se não estiver, ela é adicionada. Isso controla a visibilidade do menu de aplicativos.
}

handleHistory(); //Chama a função 'handleHistory' quando o script é carregado para exibir o histórico armazenado.

//Eu não me lembro de metade das coisas que fiz aqui, por isso comentei.
//Desejo não ter que refazer isso nunca mais na minha vida, mas provavelmente esse desejo não se tornará realidade.
//Estoy cansado jefe...