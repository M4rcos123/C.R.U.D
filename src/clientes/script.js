//referência do DOM - HTML

const inpCodcli = document.getElementById('inpCodcli');
const inpNome = document.getElementById('inpNome');
const inpEmail = document.getElementById('inpEmail');
const inpUf = document.getElementById('inpUf');
const inpSenha = document.getElementById('inpSenha');
const inpLevel = document.getElementById('inpLevel');
const inpData = document.getElementById('inpData');

const btnCon = document.getElementById('btnCon');
const btnCad = document.getElementById('btnCad');
const btnAlt = document.getElementById('btnAlt');
const btnExc = document.getElementById('btnExc');
//logíca de programação

const api = axios.create({
    baseURL : 'https://bonco.onrender.com'
});

async function consultaNome(){
    const nome = inpNome.value;
    const response = await api.get('/listclient/' + nome);

    console.log(response.data.result[0]);

    inpCodcli.value = response.data.result[0].codcli;
    inpNome.value = response.data.result[0].nome;
    inpEmail.value = response.data.result[0].email;
    inpUf.value = response.data.result[0].uf;
    inpSenha.value = response.data.result[0].password;
    inpData.value = response.data.result[0].createdat;

    console.log(response.data.result[0].codcli);

    }

    async function inclusao(){
        const nome = inpNome.value;
        const email = inpEmail.value;
        const uf = inpUf.value;
        const password = inpSenha.value;
        const level = 0
        
    
        data ={
            "nome" : nome,
            "email" : email,
            "uf" : uf, 
            "password" : password,
            "level" : level
        }
        console.log(data);
        const response = await api.post('/createclient/', data);
    
    }

    async function Alteracao(){
        const codcli =  inpCodcli.value;

        const Nome = inpNome.value;
        const Email = inpEmail.value;
        const UF = inpUf.value;
        const Password = inpSenha.value;
        
    
        data ={
            "nome" : Nome,
            "email" : Email,
            "uf" : UF,
            "password" : Password
            
        }
        console.log(data);
        const response = await api.put('/client/' + codcli, data);
    
    }

    async function exclusao(){
        const codcli =  inpCodcli.value;
    
    
        const response = await api.delete('/client/' + codcli);
        alert('Registro Excluido !!!')
    }

    btnCon.onclick = ()=>{
        consultaNome();
    }
    
    btnCad.onclick = ()=>{
        inclusao();
    }
    
    btnAlt.onclick =()=>{
        Alteracao();
    }
    
    btnExc.onclick = ()=>{
        exclusao();
    }

//berinbau
const btnLim =  document.getElementById('btnLim');

function lim(){
    inpCodcli.value = "";
    inpNome.value = "";
    inpEmail.value = "";
    inpUf.value = "";
    inpSenha.value = "";
    inpData.value = "";
}

btnLim.onclick = ()=>{
    lim();
}
