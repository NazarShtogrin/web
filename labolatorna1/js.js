alert("Nazar");
var name= "Nazar";
alert (name);
var a =19;
var b=6;
var c;
c=a-b;
var d=7;
var result;
result=c+d;
alert (result);

var prompt = prompt("Вкажіть номер вашого варіанта");
if (prompt >=7){
	alert( "Вірно");
}
else  {
	alert ( "Не вірно" );
}




 if (a % 2 == 0) {
a=a+7;
alert(a);  }
else  {  a=a-3;
alert(a); }

var a=19;

alert(" Піднесення числа до квадрату")
//4
function pow(x,n){
	var resultat=x;
	for ( var i=1;i<n;i++){
		resultat*=x;
	}
	return resultat;
}
for (var i=0 ;i<=a+10 ; i++){
	alert(i+'^2='+pow (i,2));
}
alert("Виведення простих чисел")

 //5
 function prosti (begin, end ){
next:
for (var i=begin; i<=end;i++){
	for (var j=2;j<i; j++){
		if (i%j==0) continue next;
	}
	alert (i);
}


 }
 alert (prosti(2,a+10))



