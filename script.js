function myfunc() 
{
let FirstText = document. getElementById("ftext") . value;
let SecondText= document. getElementById("stext") . value;
let Result = FirstText.concat(' ', SecondText)
let output = document.getElementById("Rtext");
output.value = Result;
}

function revConFun()
{

    let FirstText = document. getElementById("ftext") . value;
    let SecondText= document. getElementById("stext") . value;

    let Result = FirstText.reverse(' ', SecondText)

    let output = document.getElementById("Rtext");
    output.value = Result;

}

