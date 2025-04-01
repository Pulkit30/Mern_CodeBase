function sumOfArray(arr){
    return arr.filter((num,i,arr)=>{
          return  num%2==0 && num%5!=0
        }).reduce((acc, num) => acc + num, 0)
      }
              