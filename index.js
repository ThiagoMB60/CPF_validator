function ValidaCpf(cpf) {
  Object.defineProperty(this, 'cleanCpf', {
    enumerable: true,
    get: function () {
      return cpf.replace(/\D+/g, '');
    }
  });
}

ValidaCpf.prototype.valida = function () {
  // param 1: validacao de valor a varivel se n]ap é nula, vazia ou undefined
  // param 3: se o cpf sem a mascara tem 11 digitos
  // param 4: 
  if (!this.cleanCpf || this.cleanCpf.length !== 11 || this.isSequence()) return false;

  const cpfParcial = this.cleanCpf.slice(0, -2);
  const digit1 = this.criaDigito(cpfParcial);
  const digit2 = this.criaDigito(cpfParcial + digit1);

  const newCpf = cpfParcial + digit1 + digit2;
  return newCpf === this.cleanCpf;
}

ValidaCpf.prototype.criaDigito = function (cpfParcial) {
  const arrayDigits = Array.from(cpfParcial)
  let regressivo = arrayDigits.length + 1;
  const total = arrayDigits.reduce((acumulador, value) => {
    acumulador += (regressivo * Number(value))
    regressivo--;
    return acumulador;
  }, 0)

  const digito = 11 - (total % 11);
  return digito > 9 ? '0' : String(digito);
}

ValidaCpf.prototype.isSequence = function () {
  return (this.cleanCpf[0].repeat(this.cleanCpf.length) === this.cleanCpf);
}

const cpfTeste = '948.785.990-06';
const cpf = new ValidaCpf(cpfTeste);
console.log(cpf.valida());