export function fibonacci(n){
   if(n==0) {return 0}
   if(n==1||n==2){return 1}
   else{return fibonacci(n-1)+fibonacci(n-2)};
   /*implementation refactoring 
   const partialFibonacci=(n)=>{
       n==1
       ?1
       : fibonacci (n-1) + fibonacci (n-2)
       return n==0
       ?0
       :partialFibonacci(n)*/
   }
//} 
    