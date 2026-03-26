// LISTAR USUÁRIO
document.addEventListener("DOMContentLoaded", () =>  {
    // Fetch no endpoint
    fetch("https://crudcrud.com/api/9843cb2768ee4eb6bb727a584faf9d39/clientes")
    .then(response => response.json())
    .then(data => {
        // Receber dados 
        console.log(data);
            // Cria o elemento pai ul
            const clientesUl = document.createElement("ul");
            data.forEach(item => {
                // Cria a lista com nome e email
                const li = document.createElement("li");
                li.textContent = `Nome: ${item.nome} - Email: ${item.email}`
                // Adiciona a lista ao elemento pai
                clientesUl.appendChild(li);
            });
            // Adiciona o elemento pai com a lista ao HTML
            document.getElementById("listarClientes").appendChild(clientesUl);

    })
    .catch(error => {
        console.error("Erro:" , error);
    })
})



// CADASTRAR USUÁRIO
function cadastrarUsuario() {
    // 2 Inputs necessários: Nome e Email
    // Obter inputs utilizando DOM 
    const nome = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Interagir com a API usando fetch
    // Salvar as infos na API usando post
    fetch("https://crudcrud.com/api/9843cb2768ee4eb6bb727a584faf9d39/clientes", {
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
