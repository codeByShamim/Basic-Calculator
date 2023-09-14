let result = document.getElementById("output");
function numShow(num){
    result.value += num;
}

let Result=()=>{
    try{
        result.value=eval(result.value);
    }
    catch(err){
        alert("Enter the valid input");
    }
}

function clrAll(){
    result.value = "";
}
function del(){
    result.value = result.value.slice(0, -1);
};

function calculate(){
    let x = result.value;
    let y = eval(x);
    result.value = y;
}

