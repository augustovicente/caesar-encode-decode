import { processa_valor } from "./processa_valor.mjs";

/**
 * @param {string} valor - É o valor a ser encriptografado
 * @param {number} chave - É a chave pra encriptografar (opicional)
 */
export const encrypt = (valor, chave)=>
{
    valor = valor.toLowerCase();
    processa_valor(valor, chave, 1);
}