alert('Vamos a Calcular el promedio de tus notas');



function calcular() { 
    let nota1 = Number(prompt('Ingresa la 1era nota'));
    let nota2 = Number(prompt('Ingresa la 2da nota'));
    let nota3 = Number(prompt('Ingresa la 3era nota'));

    return (nota1 + nota2 + nota3) / 3;
}

document.write('Tu promedio es: ' + calcular());




