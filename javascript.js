
1. //FIZZ AND BUZZ PROGRAM

for(let i=1;i<=100;i++)
    {
        if(i%3==0&&i%5!=0)
    {
        console.log("FIZZ");
    }
    else if(i%5==0&&i%3!=0)
    {
        console.log("BUZZ");
    }
    else if(i%3==0&&i%5==0)
    {
        console.log("FIZZBUZZ");
    }
    }
    2.//PALLINDROME PROGRAM
    let str="radar";
    function revs(str){
        let rev1="";
        for(let i=str.length-1;i>=0;i--)
        {
            rev1+=str[i];
        }
        if(rev1===str)
            {
                console.log("palindrome");
            }
            else
            {
                console.log("not palindrome");
            }
    }
    console.log(revs(str));

    3. //LARGEST NUMBER

    let arr=[4,9,5,6,7,8];
    let len=arr.length-1;
    function large(arr){
        arr.sort();
        return arr[len];
    }
    console.log(large(arr));

    // 6.FACTORIAL
    function fact(num)
    {
        let fact=1;
        for(let i=1;i<=num;i++)
        {
            fact=fact*i;
        }
        return fact;
    }
    console.log(fact(5));

    // 7. CELSIUS TO FAHRENHEIT
    let temp=120;
    function celtofah(temp)
    {
        let fahren=(temp*9/5)+32;
        return fahren;
    }
    console.log(celtofah(temp));

    //5. RETURN LONGEST WORD IN THE STRING
        function lon(str)
        {
            let word=str.split(" ");
            let max=0,lar,i;
            for(i=0;i<word.length;i++)
            {
                if(word[i].length>max)
                {
                    max=word[i].length;
                }
               // console.log(word.length);
               //console.log(max);
            }
            for( i=0;i<word.length;i++)
            {
                if(word[i].length==max)
                {
                        lar=word[i];
                }
            }
            return lar;
        }
        console.log(lon("I am a football player"));

    //     // 4.occurrences as the value.
        function Count(str)
        {
            let new1={};
            for(let i=0;i<str.length;i++)
            {
                let char=str[i];
                if(new1[char])
                {
                    new1[char]++;
                }
                else
                {
                    new1[char]=1;
                }
            }
            return new1;
        }
        console.log(Count("i am kishore"));
