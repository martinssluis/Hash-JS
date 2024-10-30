const name = "Luis Martins"; // Declara a variável com a string para a qual queremos calcular o hash

// Função assíncrona que calcula o hash de uma string
async function getHash(string) {
  // Converte a string para um formato binário usando TextEncoder
  const encoder = new TextEncoder();
  const data = encoder.encode(string);

  // Calcula o hash SHA-256 usando a API crypto.subtle.digest e obtém um ArrayBuffer com o hash
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);

  // Converte o ArrayBuffer para uma Array de bytes (Uint8Array), pois facilita a manipulação
  const hashArray = Array.from(new Uint8Array(hashBuffer));

  // Transforma cada byte em um valor hexadecimal de 2 dígitos e junta em uma única string
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

  // Retorna o hash no formato hexadecimal
  return hashHex;
}

// Chama a função e exibe o hash no console
getHash(name).then(hash => console.log(hash));
