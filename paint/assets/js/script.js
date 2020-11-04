function Sum1(Arr,N)
{
    var len = Arr.length, sum = 0;
    
    for (var i=0; i<10; i++)
     { if (Arr[i]>N) sum += Arr[i]*Arr[i]; }
     
    return sum;
}

alert(Sum1(2,3));