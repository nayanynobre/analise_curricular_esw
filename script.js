document.addEventListener("DOMContentLoaded", function () {
  const curriculumData = [
    {
      period: "1° Período",
      subjects: [
        "Pensamento Computacional",
        "Introdução a Química",
        "Resolução de Problemas para Engenharia I",
        "Introdução a Engenharia",
        "Expressão Gráfica",
        "Práticas Extensionistas Integradoras I",
      ],
    },
    {
      period: "2° Período",
      subjects: [
        "Gestão Empresarial",
        "Algoritmos",
        "Ética, Cidadania e Sociedade",
        "Prática de Leitura e Produção Textual",
        "Engenharia de Requisitos e Análise de Sistemas",
        "Laboratório de Programação de Web Sites",
        "Práticas Extensionistas Integradoras II",
      ],
    },
    {
      period: "3° Período",
      subjects: [
        "Física para Engenharia I",
        "Engenharia Econômica",
        "Estrutura de Dados",
        "Laboratório de Programação Front End",
        "Laboratório de Programação Orientada a Objetos",
        "Práticas Extensionistas Integradoras III",
      ],
    },
    {
      period: "4° Período",
      subjects: [
        "Empreendedorismo e Inovação",
        "Gestão Ambiental e Desenvolvimento Sustentável",
        "Estrutura de Dados Avançadas",
        "Processo de Desenvolvimento de Software",
        "Infraestrutura de TI para Engenharia de Software",
        "Interface Humano-Computador",
        "Banco de Dados Relacionais",
        "Práticas Extensionistas Integradoras IV",
      ],
    },
    {
      period: "5° Período",
      subjects: [
        "Resistência dos Materiais",
        "Banco de Dados Não Relacionais",
        "Internet das Coisas",
        "Laboratório de Programação Back End",
        "Arquitetura e Projeto de Software",
        "Práticas Extensionistas Integradoras V",
      ],
    },
    {
      period: "6° Período",
      subjects: [
        "Probabilidade e Estatística",
        "Fenômeno de Transportes",
        "Introdução a Eficiência Energética",
        "Tecnologia e Ciência dos Materiais",
        "Laboratório de Programação Full Stack",
        "Práticas Extensionistas Integradoras VI",
      ],
    },
    {
      period: "7° Período",
      subjects: [
        "Gestão da Manutenção e Evolução de Software",
        "Gestão da Qualidade e Teste de Software",
        "Direito e Ética de Computação",
        "Segurança e Auditoria de Software",
        "Laboratório de Desenvolvimento de Aplicativos Híbridos",
        "Desenvolvimento de Jogos Digitais",
        "Projeto Final de Curso I",
      ],
    },
    {
      period: "8° Período",
      subjects: [
        "Gestão de Projetos, Governança e Estimativas em TI",
        "Inteligência Artificial e Machine Learning",
        "Ciência de Dados",
        "Laboratório de Desenvolvimento de Aplicativos Nativos",
        "Complexidade de Algoritmos",
        "Engenharia de Software Contínua e Experimental",
        "Projeto Final de Curso II",
      ],
    },
  ];

  const subjectsBody = document.getElementById("subjects-body");
  let globalRowIndex = 0;

  curriculumData.forEach((periodData) => {
    periodData.subjects.forEach((subject, subjectIndex) => {
      const tr = document.createElement("tr");

      let content = "";

      if (subjectIndex === 0) {
        content += `<th rowspan="${periodData.subjects.length}" class="period-header">${periodData.period}</th>`;
      }

      content += `
                        <td>${subject}</td>
                        <td class="center"><input type="text" maxlength="4" /></td>
                        <td><textarea class="auto-resize" rows="1"></textarea></td>
                        <td class="center"><textarea class="auto-resize" rows="1"></textarea></td>
                        <td class="center"><input type="text" maxlength="4" /></td>
                        <td class="center"><input type="text" maxlength="4" /></td>
                        <td class="center"><input type="text" maxlength="4" /></td>
                        <td class="center"><input type="radio" name="isento_row_${globalRowIndex}" /></td>
                        <td class="center"><input type="radio" name="isento_row_${globalRowIndex}" /></td>
                        <td><textarea class="auto-resize" rows="1"></textarea></td>
                    `;

      tr.innerHTML = content;
      subjectsBody.appendChild(tr);
      globalRowIndex++;
    });
  });

  const textareas = document.querySelectorAll(".auto-resize");
  function autoResize() {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
  }
  textareas.forEach((textarea) => {
    textarea.addEventListener("input", autoResize, false);
    autoResize.call(textarea);
  });

  function formatLongDate(date) {
    const day = date.getDate();
    const month = date.toLocaleDateString("pt-BR", { month: "long" });
    const year = date.getFullYear();
    return `${day} de ${month.charAt(0).toUpperCase() + month.slice(1)} de ${year}`;
  }

  const now = new Date();
  const dateElement = document.getElementById("current-date");
  if (dateElement) {
    dateElement.textContent = formatLongDate(now);
  }

  const exportBtn = document.getElementById("export-pdf-btn");
  if (exportBtn) {
    exportBtn.addEventListener("click", function () {
      window.print();
    });
  }
});