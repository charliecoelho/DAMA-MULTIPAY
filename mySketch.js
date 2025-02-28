/* style.css */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    background-color: #f5f5f5;
    padding: 20px;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
}

h1 {
    text-align: center;
    color: #333;
    margin-bottom: 10px;
}

h2 {
    color: #444;
    margin-bottom: 15px;
}

p {
    margin-bottom: 15px;
    text-align: center;
}

.form-container {
    max-width: 400px;
    margin: 20px auto;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #555;
}

input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 5px;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #3e8e41;
}

#separador {
    display: flex;
    align-items: center;
    text-align: center;
    margin: 20px 0;
}

#separador::before, #separador::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #ddd;
}

#separador span {
    padding: 0 10px;
    color: #777;
}

.hidden {
    display: none;
}

#sala-info {
    margin-bottom: 20px;
}

#sala-codigo-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
}

#sala-codigo-container button {
    width: auto;
    padding: 8px 15px;
    margin-top: 0;
}

#info-aposta {
    background-color: #f9f9f9;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 15px;
}

#info-aposta p {
    margin-bottom: 5px;
    text-align: left;
}

#status-jogo {
    margin-bottom: 15px;
    text-align: center;
}

#sua-vez-mensagem {
    color: #4CAF50;
    font-weight: bold;
}

#vez-oponente-mensagem {
    color: #f44336;
}

#info-jogadores {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
}

.jogador-container {
    display: flex;
    align-items: center;
    gap: 10px;
}

.peca-jogador {
    width: 30px;
    height: 30px;
    border-radius: 50%;
}

.peca-vermelha {
    background-color: #f44336;
}

.peca-preta {
    background-color: #212121;
}

.versus {
    font-weight: bold;
    color: #777;
}

#jogo-container {
    display: flex;
    justify-content: center;
    margin: 20px 0;
}

#resultado-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.resultado-box {
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    max-width: 400px;
    width: 90%;
    text-align: center;
}

#vencedor-texto {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
}

.resultado-info {
    background-color: #f9f9f9;
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 20px;
}

.resultado-info p {
    margin-bottom: 10px;
    text-align: left;
}

#sair-btn {
    background-color: #f44336;
    margin-top: 10px;
}

#sair-btn:hover {
    background-color: #d32f2f;
}

/* Responsividade */
@media (max-width: 600px) {
    .container {
        padding: 15px;
    }
    
    #info-jogadores {
        flex-direction: column;
        gap: 10px;
    }
    
    .versus {
        margin: 10px 0;
    }
    
    #jogo-container canvas {
        width: 100% !important;
        height: auto !important;
    }
}