//console.log(1)
function sutitZinu()
{
    console.log('sutitZinu()darbojas');
    let zina = document.querySelector('zina').value;
    let zinas = document.querySelector('CataZina');
    zinas.innerHTML = zinas.innerHTML+ '<br>'+zina.value;

}