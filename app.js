let amigosParticipantes = []

function adicionarAmigo(){
    let nomeInput = document.getElementById('amigo').value.toUpperCase().trim(); //Busca valor do input o trim é para eliminar espaços vazios
    if(amigosParticipantes.includes(nomeInput)){
        alert('Nome repetido');
    }
    else if(nomeInput == '' ){
        alert('Você deve informar corretamente o Nome do seu amigo.');
    }
    else{
        amigosParticipantes.push(nomeInput); //adiciona input à lista
        nomeInput = document.querySelector('ul');
       
        nomeInput.innerHTML = `<p id="lista-amigos">${amigosParticipantes.join(', ')}</p>`;//adiciona a lista no front no campo Amigos incluídos
    }
    document.getElementById('amigo').value = '';//limpa o campo input
}

function sortearAmigo(){

    
        if(amigosParticipantes.length == 0){
           
        alert ('Impossível sortear pois você ainda não adicionou nenhum nome de amigo ao jogo. \n Pelas regras do nosso jogo, você deve inserir três ou mais nomes de amigos para executar um sorteio.');
        }


        if(amigosParticipantes.length > 0 && amigosParticipantes.length < 3){
        let quantidadeParticipantes = amigosParticipantes.length > 1 ? `${amigosParticipantes.length} participantes ao jogo` : `1 participante ao jogo`;
         
        alert(`Adicione pelo menos três participantes para validar o sorteio! \n Atualmente você adicionou apenas ${quantidadeParticipantes}`);
        }
        else {


            const listaNomes = amigosParticipantes;
            console.log(listaNomes);
            const numero = Math.floor(Math.random() * amigosParticipantes.length);
            console.log(listaNomes[numero]); // resultado aleatório
            console.log(listaNomes +  ` array`);
            console.log(numero + ` isto é numero`) ; // resultado aleatório
            console.log(listaNomes[numero]  + ` istoé listaNomes[numero]` ); // resultado aleatório
            let nomeSorteado = listaNomes[numero];
            console.log(nomeSorteado + ` numeroSorteado`) ;

            

        
            if(amigosParticipantes.length > 0){
            nomeSorteado.innerHTML = listaNomes[numero];
            document.getElementById("listaAmigos").innerHTML = `O Sorteado(a) foi: <strong> <font color = #4B69FD> ${nomeSorteado} </font> </strong> - Ele era o ${numero+1}º nome da lista de amigos`;
            amigosParticipantes = [];
            }
            else{
                document.getElementById("listaAmigos").innerHTML = ``;

            }
        
       
            
        
      
        }
}

