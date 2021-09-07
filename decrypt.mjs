import { processa_valor } from "./processa_valor.mjs";
import { qtd_letras } from "./var-mapping.mjs";

/**
 * Função de descriptografia
 * @param {string} valor - É o valor a ser descriptografado
 * @param {number} chave - É a chave pra descriptografar (opicional)
 */

/**
 * Função de descriptografia
 * @param {*} valor - É o valor a ser descriptografado
 * @param {*} chave - É a chave pra descriptografar (opicional)
 */
export const decrypt = (valor, chave)=>
{
    valor = valor.toLowerCase();

    // se já possuir a chave
    if(!!chave) 
        processa_valor(valor, chave, 2);
    
    // se não mostra todas as possibilidades
    else
    {
        // mostrar as 26 posibilidades
        for(let tmp_chave = 1; tmp_chave < qtd_letras; tmp_chave++)
            processa_valor(valor, tmp_chave, 2)
    }
}