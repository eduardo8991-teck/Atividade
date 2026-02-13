console.log("JS carregado");

const supabaseUrl = "COLE_SUA_PROJECT_URL_AQUI";
const supabaseKey = "COLE_SUA_PUBLISHABLE_KEY_AQUI";

const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

async function salvar() {
  console.log("Botão clicado");

  const nome = document.getElementById("nome").value;
  const senha = document.getElementById("senha").value;

  const { data, error } = await supabase
    .from("usuários")
    .insert([
      { nome: nome, senha: senha }
    ]);

  if (error) {
    console.log(error);
    alert("Erro: " + error.message);
  } else {
    alert("Salvo com sucesso!");
  }
}
