function xac_dinh_tam_giac(a, b, c)
{
    var a = number (document.getElementById("a").value);

    var b = number (document.getElementById("b").value); 

    var c = number (document.getElementById("c").value); 

    if( a<b+c && b<a+c && c<a+b ){
        if( a*a==b*b+c*c || b*b==a*a+c*c || c*c== a*a+b*b)
            alert ("Đây là tam giác vuông");
        else if(a==b && b==c)
            alert ("Đây là tam giác đều");
        else if(a==b || a==c || b==c)
            alert ("Đây là tam giác cân");

    }else
        alert ("3 cạnh a, b, c không phải là 3 cạnh của 1 tam giác.");   
        
}