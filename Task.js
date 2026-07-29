function main(num){
    let res=[]
   for(i=0;i<num.length;i++){
    if(num[i]%2===0){
        res.push("even")
    }else{
       res.push(num[i])
    }
   }
   return res
}
console.log(main([1, 2, 3, 4, 5]))
console.log(main([10, 15, 20, 25]))
console.log(main([1, 3, 5, 7] ))