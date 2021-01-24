var text=document.querySelector('.Text')
var FindMe=document.querySelector('.FindMe')

FindMe.addEventListener('click',TableOf)
function TableOf(){
    let i=1;
    do{
        console.log(`${i}*${text.value}=${i*text.value}`)
        var x = document.createElement("P");
        var t = document.createTextNode(`${text.value}*${i}=${i*text.value}`);
        x.appendChild(t);
        document.body.appendChild(x);
        i++
    }while(i<=10)

}

