let tbody = document.querySelector('tbody')
if(tbody){
    let content = []
  for(let i = 0; i<tbody.children.length; i+=2){
    let object = {}
    object.url = tbody.childNodes[i].childNodes[3].childNodes[0].href
    content.push(object)
  }

  downloadArrayAsFile(content, `${tbody.children.length}`)
}

function downloadArrayAsFile(array, filename) {
    // Cria um Blob com o conteúdo do array
    const blob = new Blob([JSON.stringify(array)], { type: 'application/json' });
  
    // Cria um URL do Blob
    const url = URL.createObjectURL(blob);
  
    // Cria um elemento de ancoragem (link)
    const a = document.createElement('a');
  
    // Define o URL do link para o URL do Blob
    a.href = url;
  
    // Define o nome do arquivo para o link de download
    a.download = filename;
  
    // Adiciona o link ao documento
    document.body.appendChild(a);
  
    // Clica no link para iniciar o download
    a.click();
  
    // Remove o link do documento
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}