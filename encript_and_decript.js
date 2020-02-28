let a = {
    1 :'a',
    2 :'b',
    3 :'c',
    4 :'d',
    5 :'e',
    6 :'f',
    7 :'g',
    8 :'h',
    9 :'i',
    10 :'j',
    11 :'k',
    12 :'l',
    13 :'m',
    14 :'n',
    15 :'o',
    16 :'p',
    17 :'q',
    18 :'r',
    19 :'s',
    20 :'t',
    21 :'u',
    22 :'v',
    23 :'w',
    24 :'x',
    25 :'y',
    26 :'z',
},
    b = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5,
    'f': 6,
    'g': 7,
    'h': 8,
    'i': 9,
    'j': 10,
    'k': 11,
    'l': 12,
    'm': 13,
    'n': 14,
    'o': 15,
    'p': 16,
    'q': 17,
    'r': 18,
    's': 19,
    't': 20,
    'u': 21,
    'v': 22,
    'w': 23,
    'x': 24,
    'y': 25,
    'z': 26,
};
// FUNCOES DE CRIPTOGRAFIA
/**
 * Função de descriptografia
 * @param {*} valor - É o valor a ser descriptografado
 * @param {*} chave - É a chave pra descriptografar (opicional)
 */
let decript = (valor, chave)=>
{
    valor = valor.toLowerCase();
    if(!!chave) // se já possuir a chave
    {
        let new_value = "";
        for(let f = 0; f < valor.length; f++) // percorrendo o valor
        {
            if(valor[f] == " ") new_value += " "; // se for espaço só adiciona
            else
            {
                let n_o = +(b[valor[f]]), // recebendo o número correspondente a palavra original
                    n_f = n_o+chave; // convertendo para a chave passada
                new_value += (n_f > 26)?a[n_f-26]:a[n_f];
            }
        }
        console.log("Chave "+chave+": "+new_value);
    }
    else // se não mostra todas as possibilidades
    {
        for (let i = 0; i < 26; i++) // mostrar as 26 posibilidades
        {
            let new_value = "";
            for(let f = 0; f < valor.length; f++) // percorrendo o valor
            {
                if(valor[f] == " ") new_value += " "; // se for espaço só adiciona
                else
                {
                    let n_o = b[valor[f]], // recebendo o número correspondente a palavra original
                        n_f = n_o+i;
                    new_value += (n_f > 26)?a[n_f-26]:a[n_f];
                }
            }
            console.log("Chave "+i+": "+new_value);
        }
    }
}
/**
 * @param {*} valor - É o valor a ser encriptografado
 * @param {*} chave - É a chave pra encriptografar (opicional)
 */
let encript = (valor, chave)=>
{
    valor = valor.toLowerCase();
    let new_value = "";
    for(let f = 0; f < valor.length; f++) // percorrendo o valor
    {
        if(valor[f] == " ") new_value += " "; // se for espaço só adiciona
        else
        {
            let n_o = b[valor[f]], // recebendo o número correspondente a palavra original
                n_f = n_o-chave;
            new_value += (n_f < 0)?a[n_f+26]:a[n_f];
        }
    }
    console.log("Chave "+chave+": "+new_value);
}
// criação da interface
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// função de finalizar
let finaliza = (ob) =>
{
    console.log("Tente novamente");
    ob.close();
}
// iniciando interface
rl.question('Selecione a opção:\n1: Criptografar\n2: Desciptografar\n', (menu) => 
{
    if(!!menu)
    {
        rl.question('Digite a frase:', (valor) => 
        {
            if(!!valor)
            {
                let a = (menu == 2)?" ou pressione ENTER para descobrir a chave correta:":"";
                rl.question('Digite a chave (número inteiro)'+a, (chave) => 
                {
                    if(menu == 1) encript(valor, +chave);
                    else decript(valor, +chave)
                    rl.close(); 
                });
            }
            else finaliza(rl);
        });
    }
    else finaliza(rl);
});