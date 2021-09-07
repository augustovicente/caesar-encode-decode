import { encrypt } from './encrypt.mjs'
import { decrypt } from './decrypt.mjs'
import * as readline from 'readline';

// criação da interface
const readline_interface = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    // função de finalizar
    , finaliza = (ob) =>
    {
        console.log("Tente novamente");
        ob.close();
    }

// iniciando interface
readline_interface.question('Selecione a opção:\n1: Criptografar\n2: Desciptografar\n', (menu) => 
{
    if(!!menu)
    {
        readline_interface.question('\nDigite a frase: ', (valor) => 
        {
            if(!!valor)
            {
                let a = (menu == 2) ? 
                    " ou pressione ENTER para descobrir a chave correta: ":
                    ": "
                
                readline_interface.question('\nDigite a chave (número inteiro)'+a, (chave) => 
                {
                    if(menu == 1)
                        encrypt(valor, +chave);
                    
                    else
                        decrypt(valor, +chave)
                    
                    readline_interface.close(); 
                });
            }

            else finaliza(readline_interface);
        });
    }
    else finaliza(readline_interface);
});