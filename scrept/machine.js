//machine id -> input value
function getValueFrom(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id,value);
    return value;
}