O Windows PowerShell
Copyright (C) Microsoft Corporation. Todos os direitos reservados.

Instale o PowerShell mais recente para obter novos recursos e aprimoramentos! https://aka.ms/PSWindows

PS C:\Users\charl\Desktop\Damas\sketch2558667> const socket = io();
No linha:1 caractere:19
+ const socket = io();
+                   ~
Uma expressão era esperada após '('.
    + CategoryInfo          : ParserError: (:) [], ParentContainsErrorRecordException
    + FullyQualifiedErrorId : ExpectedExpression

PS C:\Users\charl\Desktop\Damas\sketch2558667>
PS C:\Users\charl\Desktop\Damas\sketch2558667> // Evento de clique no botão "Entrar"
// : O termo '//' não é reconhecido como nome de cmdlet, função, arquivo de script ou programa operável. Verifique a
grafia do nome ou, se um caminho tiver sido incluído, veja se o caminho está correto e tente novamente.
No linha:1 caractere:1
+ // Evento de clique no botão "Entrar"
+ ~~
    + CategoryInfo          : ObjectNotFound: (//:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException

PS C:\Users\charl\Desktop\Damas\sketch2558667> document.getElementById("entrar").addEventListener("click", () => {
>>     const nome = document.getElementById("nome").value;
>>     const codigoSala = document.getElementById("codigo-sala").value;
>>
>>     if (nome && codigoSala) {
>>         socket.emit("entrarSala", { nome, codigoSala });
>>     }
>> });
No linha:1 caractere:62
+ document.getElementById("entrar").addEventListener("click", () => {
+                                                              ~
Uma expressão era esperada após '('.
No linha:1 caractere:63
+ document.getElementById("entrar").addEventListener("click", () => {
+                                                               ~
')' ausente na chamada do método.
No linha:5 caractere:14
+     if (nome && codigoSala) {
+              ~~
O token '&&' não é um separador de instruções válido nesta versão.
No linha:6 caractere:41
+         socket.emit("entrarSala", { nome, codigoSala });
+                                         ~
Argumento ausente na lista de parâmetros.
No linha:8 caractere:2
+ });
+  ~
Token ')' inesperado na expressão ou instrução.
    + CategoryInfo          : ParserError: (:) [], ParentContainsErrorRecordException
    + FullyQualifiedErrorId : ExpectedExpression

PS C:\Users\charl\Desktop\Damas\sketch2558667>
PS C:\Users\charl\Desktop\Damas\sketch2558667> // Recebe confirmação do servidor ao entrar na sala
// : O termo '//' não é reconhecido como nome de cmdlet, função, arquivo de script ou programa operável. Verifique a
grafia do nome ou, se um caminho tiver sido incluído, veja se o caminho está correto e tente novamente.
No linha:1 caractere:1
+ // Recebe confirmação do servidor ao entrar na sala
+ ~~
    + CategoryInfo          : ObjectNotFound: (//:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException

PS C:\Users\charl\Desktop\Damas\sketch2558667> socket.on("salaEntrou", (dados) => {
>>     document.getElementById("sala-info").classList.add("hidden");
>>     document.getElementById("jogo-container").classList.remove("hidden");
>>     document.getElementById("status-jogo").innerText = `Jogador ${dados.nome} entrou na sala ${dados.codigoSala}`;
>> });
No linha:1 caractere:11
+ socket.on("salaEntrou", (dados) => {
+           ~~~~~~~~~~~~
A expressão de atribuição não é válida. A entrada para um operador de atribuição deve ser um objeto que seja capaz de
aceitar atribuições, como uma variável ou uma propriedade.
No linha:1 caractere:26
+ socket.on("salaEntrou", (dados) => {
+                          ~~~~~
A expressão de atribuição não é válida. A entrada para um operador de atribuição deve ser um objeto que seja capaz de
aceitar atribuições, como uma variável ou uma propriedade.
    + CategoryInfo          : ParserError: (:) [], ParentContainsErrorRecordException
    + FullyQualifiedErrorId : InvalidLeftHandSide

PS C:\Users\charl\Desktop\Damas\sketch2558667>
PS C:\Users\charl\Desktop\Damas\sketch2558667> // Evento para sair da sala
// : O termo '//' não é reconhecido como nome de cmdlet, função, arquivo de script ou programa operável. Verifique a
grafia do nome ou, se um caminho tiver sido incluído, veja se o caminho está correto e tente novamente.
No linha:1 caractere:1
+ // Evento para sair da sala
+ ~~
    + CategoryInfo          : ObjectNotFound: (//:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException

PS C:\Users\charl\Desktop\Damas\sketch2558667> document.getElementById("sair").addEventListener("click", () => {
>>     socket.emit("sairSala");
>>     document.getElementById("sala-info").classList.remove("hidden");
>>     document.getElementById("jogo-container").classList.add("hidden");
>> });
No linha:1 caractere:60
+ document.getElementById("sair").addEventListener("click", () => {
+                                                            ~
Uma expressão era esperada após '('.
No linha:1 caractere:61
+ document.getElementById("sair").addEventListener("click", () => {
+                                                             ~
')' ausente na chamada do método.
No linha:5 caractere:2
+ });
+  ~
Token ')' inesperado na expressão ou instrução.
    + CategoryInfo          : ParserError: (:) [], ParentContainsErrorRecordException
    + FullyQualifiedErrorId : ExpectedExpression

PS C:\Users\charl\Desktop\Damas\sketch2558667>
PS C:\Users\charl\Desktop\Damas\sketch2558667> // Confirmação do servidor ao sair da sala
// : O termo '//' não é reconhecido como nome de cmdlet, função, arquivo de script ou programa operável. Verifique a
grafia do nome ou, se um caminho tiver sido incluído, veja se o caminho está correto e tente novamente.
No linha:1 caractere:1
+ // Confirmação do servidor ao sair da sala
+ ~~
    + CategoryInfo          : ObjectNotFound: (//:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException

PS C:\Users\charl\Desktop\Damas\sketch2558667> socket.on("salaSaiu", () => {
>>     document.getElementById("sala-info").classList.remove("hidden");
>>     document.getElementById("jogo-container").classList.add("hidden");
>> });
No linha:1 caractere:24
+ socket.on("salaSaiu", () => {
+                        ~
Uma expressão era esperada após '('.
No linha:1 caractere:11
+ socket.on("salaSaiu", () => {
+           ~~~~~~~~~~
A expressão de atribuição não é válida. A entrada para um operador de atribuição deve ser um objeto que seja capaz de
aceitar atribuições, como uma variável ou uma propriedade.
No linha:1 caractere:24
+ socket.on("salaSaiu", () => {
+                        ~
A expressão de atribuição não é válida. A entrada para um operador de atribuição deve ser um objeto que seja capaz de
aceitar atribuições, como uma variável ou uma propriedade.
    + CategoryInfo          : ParserError: (:) [], ParentContainsErrorRecordException
    + FullyQualifiedErrorId : ExpectedExpression

PS C:\Users\charl\Desktop\Damas\sketch2558667>
