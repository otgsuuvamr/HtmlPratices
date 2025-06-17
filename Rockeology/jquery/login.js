const users = [];

document.getElementById("cadastro").addEventListener("click", () => {
    document.getElementById("forms2").classList.toggle("showForms")
});

document.getElementById("forms-cad").addEventListener("submit", (e) => {
    e.preventDefault();

    const newUser = {
        usuario: document.getElementById("newuser").value,
        senha: document.getElementById("newpssw").value
    };

    users.push(newUser);
    alert("Cadastro Ok!");

    document.getElementById("forms2").classList.toggle("showForms");
    document.getElementById("newuser").valeu = "";
    document.getElementById("newpassw").value = "";
});

document.getElementById("forms-cad1").addEventListener("submit", (e) => {
    e.preventDefault();

    const nUser = document.getElementById("user").value;
    const nPass = document.getElementById("pass").value;

    const user_able = users.find((u) => u.usuario === nUser && u.senha === nPass);

    if (user_able) {
        alert("Acesso autorizado!");
        window.open("../index.html", "_blank");
    } else {
        alert("Usuário ou senha inválido!");
    }
});

