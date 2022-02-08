![](https://i.imgur.com/xG74tOh.png)

# Exercício 02

## RoundControllerEvolution.com

Para este exercício deverá ser criado um servidor com nodejs para controlar rodadas de um jogo. Dado um array de nomes de jogadores que estará no script do servidor, deveremos a cada requisição ao servidor, responder com uma mensagem dizendo de quem é a vez de jogar.

O servidor deverá utilizar a porta 8000 e ser acessado através de http://localhost:8000 onde ficará o recurso principal da letra a) abaixo.

Para todas as letras a seguir do exercício, utilizaremos o array **jogadores** abaixo:

```javascript=
const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
```

Todos os passos (letras) do exercício deverão ser implementadas no mesmo script do servidor.

Vamos aos recursos do servidor:

**a)** Crie um recurso na home (http://localhost:8000) do servidor para que seja retornada uma mensagem informando de quem é a vez de jogar.
A mensagem retornada ao navegador deverá seguir o seguinte formato:

```
É a vez de {nomeDoJogador} jogar!
```

Portanto, considerando o array de exemplo acima, na primeira requisição deverá ser retornado:

```
É a vez de José jogar!
```

Na segunda requisição:

```
É a vez de Maria jogar!
```


-   [ ] Resolver o exercício revendo a aula se necessário
-   [ ] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
-   [ ] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
-   [ ] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)

###### tags: `backend` `lógica` `exercício` `nodeJS` `JavaScript`
