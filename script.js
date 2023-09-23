let billInp= document.getElementById('billTotalInput')
console.log(billInp)
let tipInp = document.getElementById('tipInput')
let peopleInp = document.getElementById('numberOfPeople')
let totalPerPerson= document.getElementById('perPersonTotal')
 let num=Number(peopleInp.innerText)

const calculateBill = () => {
	
  let tip=(Number(billInp.value))*(Number(tipInp.value))/100
  let total=Number(billInp.value)+tip
  let totalperperson = total/Number(peopleInp.innerText)
  
  totalPerPerson.innerText=`$${totalperperson.toFixed(2)}`
}

const increasePeople = () => {
  num++
  peopleInp.innerText=num
  calculateBill()
}

const decreasePeople = () => {
  if(num==1){
    return
  }
  num--
  peopleInp.innerText=num
  calculateBill()
}