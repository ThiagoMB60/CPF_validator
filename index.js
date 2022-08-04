function validaCpf(cpf) {
  Object.defineProperty(this, 'cleanCpf', {
    enumerable: true,
    get: function () {
      return cpf.replace(/\D+/g, '');
    }
  });
}

validaCpf.prototype.valida = function () {
  if (!this.cleanCpf) return false;
  return true;
}
const cpfTeste = '126.200.796-83';
const cpf = new validaCpf(cpfTeste);
console.log(cpf.valida());