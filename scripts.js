// CADASTRAR USUÁRIO
function cadastrarUsuario() {
    // 2 Inputs necessários: Nome e Email
    // Obter inputs utilizando DOM 
    const nome = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Interagir com a API usando fetch
    // Salvar as infos na API usando post
    fetch("https://crudcrud.com/api/80c065fdf6f44ac1803bb43804c12b17/clientes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "nome": nome,
            "email": email
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log("erro:", error)
    })
}
