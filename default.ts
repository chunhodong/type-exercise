class Account{
    balance:number;
    constructor(public age:number){

    }
    
    get getBalance(){
        return this.balance;
    }
    getAge():number{
        return this.age;
    }
}
let account = new Account(12);
