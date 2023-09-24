let choice;
let balance =1000;

function bank(){
  if(!document.querySelector('.acc_no').value){
    document.querySelector('.message').innerHTML=`Error: Enter your Bank Details`;
    return;
  }
  let amount=Number(document.querySelector('.amount').value);
  switch(choice){
    case 1:Credit(amount);
                  break;
    case 2:Debit(amount);
                break;
    case 3:display();
            break;
    default: console.log('ERROR');
  }
}
function Credit(x){
  balance+=x;
  document.querySelector('.message').innerHTML=`Succesful Transaction`;
  document.querySelector('.amount').value=null;
}
function Debit(x){
  if(balance<x){
    document.querySelector('.message').innerHTML=`Error: Amount Exceeds your balance`;
    return;
  }
  balance-=x;
  document.querySelector('.message').innerHTML=`Succesful Transaction`;
  document.querySelector('.amount').value=null;
}
function display(){
  document.querySelector('.message').innerHTML=`Balance: ${balance}`;
}
