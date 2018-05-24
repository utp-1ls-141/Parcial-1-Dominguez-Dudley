

    
function primoT(valor)
{
    var NumeroPrimo=true;

    for(i=1;i<valor;i++)
    {
        // If factor
        if(valor/i == Math.round(valor/i) && i!=1 && i!=valor)
        {
            NumeroPrimo=false;
            break;
        };
    };

        return NumeroPrimo;
}


function isIsomorphic() {

    str1 = document.getElementById("input1").value;
    str2 = document.getElementById("input2").value;
    str3 = document.getElementById("input3").value;
    
    var len1 = str1.length;
    var bool12 = true;
    var bool13 = true;
    var bool21 = true;
    var bool31 = true;
        
    if (str1==="" || str2==="" || str3==="" ) {
          $("#error").html("Falta un Campo por completar");
            $("#successm").html("");
            $('#myModal').modal("show");
    }
    else{    
    
    if (len1 != str2.length || len1!=str3.length  ) {
      $("#error").html("Las palabras deben ser de igual longitud");
      $("#successm").html("");
            bool12 = false;
            bool13 = false;
            bool21 = false;
            bool31 = false;
    } 
    else{
        var chMap = {};
        var chMap2 = {};
        var chMap3 = {};
        var chMap4 = {};
        for (var i = 0; i < len1; i++) {
            
            if (!chMap[str1[i]]) {   	
                chMap[str1[i]] = str2[i];
         
            } else if (chMap[str1[i]] !== str2[i] ) {
            bool12 = false;
            }
            
        }
        for (var i = 0; i < len1; i++) {
            
            if (!chMap2[str1[i]]) {   	
                chMap2[str1[i]] = str3[i];
         
            } else if (chMap2[str1[i]] !== str3[i] ) {
            bool13 = false;
            }
            
        }
        for (var i = 0; i < len1; i++) {
            
            if (!chMap3[str2[i]]) {   	
                chMap3[str2[i]] = str1[i];
         
            } else if (chMap3[str2[i]] !== str1[i] ) {
            bool21 = false;
            }
            
        }
        for (var i = 0; i < len1; i++) {
            
            if (!chMap4[str3[i]]) {   	
                chMap4[str3[i]] = str1[i];
         
            } else if (chMap4[str3[i]] !== str1[i] ) {
            bool31 = false;
            }
            
        }

        
        if (bool12 == false || bool13 == false || bool21 == false || bool31 == false) {
            $("#error").html("La Palabra no es Isomorfica");
            $("#successm").html("");
            $('#myModal').modal("show");
        }
    
        else if (bool12 == true && bool13 ==true && bool21 ==true && bool31 ==true ){
            $("#successm").html("La Palabra es Isomorfica");
            $("#error").html("");
            $('#myModal').modal("show"); 
        }
      }
    } 


};

function matrizG() {

  n = document.getElementById("inputn").value;
  var res = "";
  
  if (n==="") {
      $("#error").html("Falta un Campo por completar");
        $("#successm").html("");
        $('#myModal').modal("show");
  }
  else{
    var colum=[];
    //fila = new Array(p1)
        var result = "<table border=1>";
        for(var i=0; i<n; i++) {
            colum [i] = [];
            result += "<tr>";
            for(var j=0; j<n; j++){
                // (n-1)/2
              if (i===j) {

              do {
                  num = Math.floor(Math.random()* 100 + 1);
              } while (num%23!==0);
                
                  colum[i][j] = num;
              }

            else if(n-1-i === j) {

                do {
                    num = Math.floor(Math.random()* 100 + 1);
                  
                } while (!primoT(num));
                    colum[i][j] = num;

            }
            
              
              else{
                colum[i][j] = Math.floor(Math.random()* 100 + 1);
              }
              if (i===((n-1)/2) && j===((n-1)/2)) {
                  colum[i][j]= 23;
              }
            
                result += '<td style="width:25px; text-align:center; " >'+colum[i][j]+"</td>";  
            }
            
            // Cierra el For
            result += "</tr>";
        }
        result += "</table>";
  $("#error").html("");
  $("#successm").html(result);
  
  }   
  
  
  };

  function isPalindroN(number)
{
var resn = true; 
var value = 1;
 
	while (number/value > 10) {
		value = value * 10;
	}
 
	while (number > 0) {
		if(Math.floor(number/value) === number % 10) {
			number = Math.floor((number%value)/10);
			value = Math.floor(value/100);
    	} else resn = false;
        break;
    }
	return resn;
};

function isPalindroB(number)
{
var resb = true;
var value = 1;
    var bina = (+number).toString(2);
    while (bina/value > 10) {
		value = value * 10;
	}
 
	while (bina > 0) {
		if(Math.floor(bina/value) === bina % 10) {
			bina = Math.floor((bina%value)/10);
			value = Math.floor(value/100);
        } else resb = false;
        break;
	}
	return resb;
};


function palindromoT(num)
{


    n = document.getElementById("inputnp").value;

     if (n==="") {
        $("#error").html("Falta un Campo por completar");
          $("#successm").html("");
          $('#myModal').modal("show");
    }
    
    
     else if (n<10){ 
        $("#error").html("El Numero Ingresado No es Valido, Ingrse un numero mayor o igual a 10");
        $("#successm").html("");
        $('#myModal').modal("show");
    }

    else{

        if (isPalindroN(n) && isPalindroB(n)) {
            $("#error").html("");
              $("#successm").html("El numero es doble palindromo");
              $('#myModal').modal("show");
        }
        
        
         else{ 
            $("#error").html("El Numero Ingresado No es doble palindromo");
            $("#successm").html("");
            $('#myModal').modal("show");
        }

    }
 
    
};

function permutaP (){
     n = document.getElementById("inputnper").value;
     auxiliar=n;  
     lon= n.length; 
     resp="";
    for (var i=0; i < lon; i++) {
        if (primoT(auxiliar)) {
            resp = (resp + auxiliar + " " + "es un numero primo" + "<br>");
        }
        else if (primoT(auxiliar) == false){
            resp = (resp + auxiliar + " " + "no es un numero primo" + "<br>");
        }
        auxiliar=auxiliar.replace(auxiliar[0],"")+n[i]; 
        console.log(auxiliar);
    }

    $("#successm").html(resp);
    $('#myModal').modal("show");

}





// Dominguez, Eric      8-908-2323
// Dudley, Eduardo      8-920-232


