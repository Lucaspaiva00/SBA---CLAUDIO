const mobileToggle = document.getElementById("mobileToggle");
const menu = document.getElementById("menu");

mobileToggle.addEventListener("click", () => {

    if (menu.classList.contains("active")) {

        menu.classList.remove("active");
        mobileToggle.innerHTML = "☰";

    } else {

        menu.classList.add("active");
        mobileToggle.innerHTML = "✕";

    }

});

const form = document.getElementById("whatsappForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const empresa = document.getElementById("empresa").value;
    const responsavel = document.getElementById("responsavel").value;
    const telefone = document.getElementById("telefone").value;
    const servico = document.getElementById("servico").value;
    const descricao = document.getElementById("descricao").value;

    const mensagem = `
Olá Luis, gostaria de solicitar um orçamento.

Empresa: ${empresa}
Responsável: ${responsavel}
Telefone: ${telefone}

Serviço: ${servico}

Descrição:
${descricao}
`;

    const numero = "5519999999999";

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");

});