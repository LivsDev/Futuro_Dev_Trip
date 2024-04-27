
    const nome = prompt("Digite seu nome:");
    const idade = prompt("Digite sua idade:");
    const email = prompt("Digite seu e-mail:");
    localStorage.setItem("nome", nome);
    localStorage.setItem("idade", idade);
    localStorage.setItem("email", email);
    const user = {
       nome: nome,
       idade: idade,
       email: email
    };





