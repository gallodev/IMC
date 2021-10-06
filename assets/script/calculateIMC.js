function getIMC(weight,height) {
    height = height / 100;
    console.log(` Height : ${height}`);
    console.log(` Weight : ${weight}`);
    console.log(` Calculated IMC : ${weight / (Math.pow(height,2))}`);
    return (weight / (Math.pow(height,2)));
}

function getTextIMC(weight,height) {
    const IMC = getIMC(weight,height);

    if (IMC < 18.5) {
        alert('Magreza')
        return { value: MC ,label: 'Magreza'};
    }

    if (IMC < 24.9) {
        alert('Normal')
        return { value: IMC ,result: 'Normal'};
    }

    if (IMC < 30) {
        alert('Sobrepeso')
        return { value: IMC ,result: 'Sobrepeso'};
    } 

    alert('Obesidade')
    return { value: IMC ,result: 'Obesidade'};
}

function handleCalculateIMC(e) {
    e.preventDefault(); 
    const weight = document.getElementById('inputWeight').value;
    const height = document.getElementById('inputHeight').value;

    if(weight === '') {
        alert("É necessário preencher o peso em kg.");
        return false;
    }
    
    if(height === '') {
        alert('É necessário preencher o tamanho em cm.');
        return false;
    }

    const IMC = getTextIMC(weight,height);
    document.getElementById('labelResult').innerHTML(`Seu IMC é : ${IMC.value}, resultado - ${IMC.result}`);
}
