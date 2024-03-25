let input=document.querySelector("#fname")
input.addEventListener("blur",()=>{capitalise(input.value)})
function capitalise(str){
    let res=str.toUpperCase()
    // console.log(res);
    input.value=res
}