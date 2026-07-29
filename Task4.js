function main(num,len){
   res=[];
    for(i=1;i<=len;i++){
        let res1=num*i
       res.push(res1)
    }
    return res
}
console.log(main(7,5))
console.log(main(12,10))
console.log(main(17,6))