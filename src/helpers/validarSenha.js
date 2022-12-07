import { decryptCesar } from "./criptografia";

export function validarSenha(senha, senhaCriptografada) {
    const senhaDescriptografada = decryptCesar(senhaCriptografada);
    if (senha === senhaDescriptografada) {
        return true;
    }
    return false;
}