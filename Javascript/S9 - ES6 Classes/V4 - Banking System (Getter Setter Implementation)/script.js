function main() {
    //create your class here with the name Account with all the private properties and getter and setter
   class Account{
       #accountNumber;
       #balance;
       constructor(accountNumber){
           this.#accountNumber=accountNumber
           this.#balance=0
       }
       get getbalance(){
           return this.#balance
       }
       set setbalance(updatedVal){
           if (updatedVal>=0){
               this.#balance=updatedVal
           }
           else{
              console.log('Please enter a positive value for the balance.') 
           }
       }
       deposit(amount){
          this.#balance+=amount
       }
       withdraw(amount){
          this.#balance-=amount
       }
   }
    const myAccount = new Account("1234567890");
    myAccount.deposit(500);
    myAccount.withdraw(200);
    console.log(myAccount.getbalance); // output: 300
    //Do not modify the return statement
    return Account;
  }
  main();