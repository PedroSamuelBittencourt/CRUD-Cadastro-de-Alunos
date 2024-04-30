var alunos= []

//guarda o objeto que esta sendo alterado
var alunoAlterado = null


function mostrarModal(){
    let containerModal = document.getElementById("container-modal")
    containerModal.style.display = "flex"
}
function adicionar(){
    document.getElementById("ra").disabled = false
    alunoAlterado = null
    mostrarModal()
    limparform()
}
function cancelar(){
    ocultarModal()
}
function salvar(){
    let ra = document.getElementById('ra').value
    let nome = document.getElementById('nome').value
    let cidade = document.getElementById('cidade').value
    let estado = document.getElementById('estado').value
    let curso = document.getElementById('curso').value

    if(alunoAlterado==null){
        let aluno= {
            "ra": ra,
            "nome": nome,
            "cidade": cidade,
            "estado": estado,
            "curso": curso
        }
        //add o objeto aluno no vetor de alunos
        alunos.push(aluno)
    }else{
        alunoAlterado.ra = ra
        alunoAlterado.nome = nome
        alunoAlterado.cidade = cidade
        alunoAlterado.estado = estado
        alunoAlterado.curso = curso
    }
    alunoAlterado = null
    exibirDados()
    limparform()
    ocultarModal()
}
function ocultarModal(){
    let containerModal = document.getElementById("container-modal")
    containerModal.style.display = "none"
}
function exibirDados() {

    //antes de listar os alunos, limpa todas as linhas
  
    let tbody = document.querySelector("#table-customers tbody")

    tbody.innerHTML=""

    for (let i = 0; i < alunos.length; i++) {
        let linha= `
                <tr>
                <td>${alunos[i].ra}</td>
                <td>${alunos[i].nome}</td>
                <td>${alunos[i].cidade}</td>
                <td>${alunos[i].estado}</td>
                <td>${alunos[i].curso}</td>
                <td>
                    <button onclick="alterar('${alunos[i].ra}')">Alterar</button>
                    <button onclick="excluir('${alunos[i].ra}')">Excluir</button>
                </td>
                </tr>
                 `
        let tr = document.createElement("tr")
        tr.innerHTML = linha

        tbody.appendChild(tr)
}
}
function limparform(){
    document.getElementById("ra").value = ""
    document.getElementById("nome").value = ""   
    document.getElementById("cidade").value = ""
    document.getElementById("estado").value = ""
    document.getElementById("curso").value = ""
}

function alterar(ra){
    for (let i = 0; i < alunos.length; i++) {
        let aluno = alunos[i]
       if(ra==aluno.ra){
       
        document.getElementById("nome").value = aluno.nome
        document.getElementById("ra").value = aluno.ra
        document.getElementById("cidade").value = aluno.cidade
        document.getElementById("curso").value = aluno.curso
        document.getElementById("estado").value = aluno.estado
       
        alunoAlterado = aluno
       }
        
    }
    document.getElementById("ra").disabled = true
    mostrarModal()
  
}
function excluir(ra){
    if(confirm("Voce deseja realmente excluir?")){
        for(let i = 0; i<alunos.length; i++){
            let aluno = alunos[i]
            if(aluno.ra == ra){
                //remove o elemento encontrado na posição "i"
                alunos.splice(i,1)
            }
        }
        exibirDados()
    }
    
}