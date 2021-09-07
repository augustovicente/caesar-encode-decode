import { qtd_letras } from './var-mapping.mjs';
import { numero_letra, letra_numero } from './var-mapping.mjs'

/**
 * Função de descriptografia
 * @param {string} valor - É o valor a ser descriptografado
 * @param {number} chave - É a chave pra descriptografar (opicional)
 * @param {number} tipo - Tipo de processamento. 1 - criptografar, 2 - descriptografar
 */
export const processa_valor = (valor, chave, tipo) =>
{
    let novo_valor = "";
    // percorrendo o valor
    for(let index_valor = 0; index_valor < valor.length; index_valor++) 
    {
        // se for espaço só adiciona, sem modificar
        if(valor[index_valor] == " ")
            novo_valor += " ";
        
        // se for letra
        else
        {
            if(tipo == 1)
            {
                // recebendo o número correspondente a palavra original
                let numero_original = +(letra_numero[valor[index_valor]])
                    // convertendo para a chave passada
                    , numero_final = numero_original + chave;
                
                novo_valor += (numero_final > qtd_letras) ? numero_letra[numero_final - qtd_letras] : numero_letra[numero_final];
            }
            else
            {
                let numero_original = +(letra_numero[valor[index_valor]])
                    , numero_final = numero_original - chave
                    , teste = (numero_final < 0) ? numero_letra[numero_final + qtd_letras] : numero_letra[numero_final]

                if(teste == undefined || teste == 'undefined')
                    console.log(numero_original, chave, teste, numero_final+qtd_letras, numero_letra[numero_final+qtd_letras], numero_final, qtd_letras);
                
                novo_valor += (numero_final < 0) ? numero_letra[numero_final + qtd_letras] : numero_letra[numero_final];
            }
        }
    }
    console.log("\nChave "+chave+": "+novo_valor);
}