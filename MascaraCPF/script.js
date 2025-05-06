let inputCpf = document.querySelector("#cpf")

inputCpf.addEventListener("keypress", ()=> {
    let tamanhoCpf = inputCpf.value.length
    if(tamanhoCpf == 3 || tamanhoCpf == 7){
        inputCpf.value += "."
    }else if(tamanhoCpf == 11){
        inputCpf.value += "-"
    }
}) 

    let inputCnpj = document.querySelector("#cnpj")

    inputCnpj.addEventListener("keypress", ()=> {
        let tamanhoCnpj = inputCnpj.value.length
        if(tamanhoCnpj == 2 || tamanhoCnpj == 6){
            inputCnpj.value +="."
        } 
        if(tamanhoCnpj == 10){
            inputCnpj.value += "/"
        }else if(tamanhoCnpj == 15){
            inputCnpj.value += "-"
        }
    })

    let inputRg = document.querySelector("#rg")

    inputRg.addEventListener("jeypress", ()=> {
        
    })