 function add(operator)
        {
            let a=parseInt(document.getElementById("txt1").value);
            let b=parseInt(document.getElementById("txt2").value);
            switch(operator){
                case "+":
                document.getElementById("res").innerHTML=a+b;
                break;
                case "-":
                document.getElementById("res").innerHTML=a-b;
                break;
                case "*":
                document.getElementById("res").innerHTML=a*b;
                break;
                case "/":
                document.getElementById("res").innerHTML=a%b;
                break;
            }
        }
