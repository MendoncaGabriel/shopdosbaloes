// remover repetidos

const data = {

}

const chavesUnicas = Object.keys(data).filter((chave, index, self) => {
    return self.indexOf(chave) === index;
});

const objetoSemDuplicatas = {};

chavesUnicas.forEach(chave => {
    objetoSemDuplicatas[chave] = data[chave];
});

console.log(objetoSemDuplicatas);