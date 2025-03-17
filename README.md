# Sorteador de Amigo Secreto

Este projeto consiste em um simples script JavaScript para sortear um amigo secreto a partir de uma lista de nomes.

## Propósito

O objetivo deste código é facilitar a realização de sorteios de amigo secreto de forma rápida e aleatória, exibindo o resultado na tela.

## Estrutura do Código

O código é composto por uma única função JavaScript, `sortearAmigo()`, que realiza as seguintes etapas:

1.  **Obtém a lista de amigos:** A função recupera os nomes dos participantes do amigo secreto a partir de um elemento HTML com o ID `listaAmigos`. Assume-se que os nomes estejam separados por vírgulas.
2.  **Realiza o sorteio:** A função gera um índice aleatório dentro do intervalo da lista de amigos e seleciona o nome correspondente.
3.  **Exibe o resultado:** O nome do amigo sorteado é exibido em um elemento HTML com o ID `resultadoSorteio`.
