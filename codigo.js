const supabaseUrl = "SUA_URL_AQUI";
const supabaseKey = "SUA_CHAVE_AQUI";

const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

async function salvar() {
  const nome = document.getElementById("nome").value;
  const senha = document.getElementById("senha").value;

  const { data, error } = await supabase
    .from("usuários")
    .insert([
      { nome: nome, senha: senha }
    ]);

  if (error) {
    alert("Erro: " + error.message);
  } else {
    alert("Salvo com sucesso!");
  }
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

