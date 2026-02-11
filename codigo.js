function guardar() {
    const nome = document.getElementById("nome").value;
    const senha = document.getElementById("senha").value;

    localStorage.setItem("nomeUsuario", nome);

    window.location.href = "index.html";
}




/*function guardar() {
    console.log(document.getElementById("text").value);
}
/*curiosidade o ola mundo aqui em baixo o vscd criou sozinho */
/*E ele colocou até isso <button onclick="mostrar()">Mostrar</button>*/
/*function mostrar() {
    document.getElementById("text").value = "seu nome aqui";
}
/*    <input id="text">
<button onclick="guardar()">Salvar</button>
<button onclick="mostrar()">Mostrar</button>

<script src="codigo.js"></script>
  */  
