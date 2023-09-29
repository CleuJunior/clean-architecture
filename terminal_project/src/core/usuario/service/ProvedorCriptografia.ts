// Na arquitetura hexagonal está interface é uma Porta
// A porta faz arte do core da aplicaçao
export default interface ProvedorCriptografia {
    criptografar(texto: string): string
}