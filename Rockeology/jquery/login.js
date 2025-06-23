const users = [];

document.getElementById("cadastro").addEventListener("click", () => {
    document.getElementById("forms2").classList.toggle("showForms")
});

document.getElementById("forms-cad").addEventListener("submit", (e) => {
    e.preventDefault();

    const newUser = {
        user: document.getElementById("newuser").value,
        pass: document.getElementById("newpssw").value
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

    const user_able = users.find((u) => u.user === nUser && u.pass === nPass);

    if (user_able) {
        alert("Acesso autorizado!");
        window.open("index.html", "_blank");
    } else {
        alert("Usuário ou senha inválido!");
    }
});

document.getElementById("cadastro").addEventListener("click", function () {
    const form2 = document.getElementById("forms2");
    form2.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const formLogin = document.getElementById("forms-cad1");
    const formCad = document.getElementById("forms2");
    const btnCad = document.getElementById("cadastro");
    const cadForm = document.getElementById("forms-cad");

    const saveUsers = () => {
        localStorage.setItem('users', JSON.stringify(users));
    };

    btnCad.addEventListener("click", () => {
        formCad.classList.toggle("showForms");
    });

    cadForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const nUserInput = document.getElementById("newuser");
        const nPassInput = document.getElementById("newpass");

        const newUser = {
            user: nUserInput.value.trim(),
            pass: nPassInput.value.trim()
        };

        if (newUser.user === "" || newUser.pass === "") {
            alert("Para cadastrar, por favor, digite seu usuário e senha.");
            return;
        }

        const userExist = users.find((u) => u.user === newUser.user);

        if (userExist) {
            alert("Este nome de usuário já existe!")
        } else {
            users.push(newUser);
            saveUsers();
            alert("Cadastro realizado com sucesso!");
            formCad.classList.add("showForms");
            nUserInput.value = "";
            nPassInput.value = "";
        }
    });

    formLogin.addEventListener("submit", (e) => {
        e.preventDefault();

        const nUser = document.getElementById("user").value;
        const nPass = document.getElementById("pass").value;

        const user_able = users.find((u) => u.user === nUser && u.pass === nPass);

        if (user_able) {
            alert("Acesso autorizado!");
            window.open("../index.html", "_blank");
        } else {
            alert("Usuário ou senha inválidos!");
        }
    });
})