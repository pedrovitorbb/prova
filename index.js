function preencherTabela() {
    // Obter os valores dos inputs
    const nome = document.getElementById('nome').value;
    const matricula = document.getElementById('matricula').value;
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);

    // Calcular a média
    const media = (nota1 + nota2) / 2;
    const status = media >= 5 ? 'Aprovado' : 'Reprovado';

    // Preencher a tabela de informações
    const tabelaInfo = document.getElementById('tabelaInfo');
    tabelaInfo.innerHTML = `
        <tr>
            <th>Nome</th>
            <th>Matrícula</th>
            <th>Nota 1º Bimestre</th>
            <th>Nota 2º Bimestre</th>
        </tr>
        <tr>
            <td>${nome}</td>
            <td>${matricula}</td>
            <td>${nota1}</td>
            <td>${nota2}</td>
        </tr>
    `;

    // Preencher a tabela de média e status
    const tabelaMedia = document.getElementById('tabelaMedia');
    tabelaMedia.innerHTML = `
        <tr>
            <th>Nome</th>
            <th>Matrícula</th>
            <th>Média</th>
            <th>Status</th>
        </tr>
        <tr>
            <td>${nome}</td>
            <td>${matricula}</td>
            <td>${media.toFixed(2)}</td>
            <td>${status}</td>
        </tr>
    `;
}