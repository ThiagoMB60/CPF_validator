function validaCpf(cpf) {
  Object.defineProperty(this, 'cleanCpf', {
    enumerable: true,
    get: function () {
      return cpf.replace(/\D+/g, '');
    }
  });
}

validaCpf.prototype.valida = function () {
  if (!this.cleanCpf || this.cleanCpf.length !== 11) return false;

  const cpfParcial = this.cleanCpf.slice(0, -2);
  const digito1 = this.criaDigito(cpfParcial);
  return true;
}

validaCpf.prototype.criaDigito = function (cpfParcial) {
  const arrayDigits = Array.from(cpfParcial)
  let regressivo = arrayDigits.length + 1;
  const digito = arrayDigits.reduce((acumulador, value) => {
    acumulador += (regressivo * Number(value))
    regressivo--;
    return acumulador;
  }, 0)
  console.log(digito)
}


const cpfTeste = '126.200.796-83';
const cpf = new validaCpf(cpfTeste);
console.log(cpf.valida());