function getAge(){
  const today = new Date();

  const thisYearBirthday = new Date(today.getFullYear(), 9-1, 1);

  let age = today.getFullYear() - 1998;

  if (today < thisYearBirthday){
    age--;
  }

  return age;
}
document.getElementById("age").innerHTML = getAge() + "歳";

const workItems = document.querySelectorAll('.works-item')

for(let i = 0; i < workItems.length; i++){
  console.log(workItems[i].className);
  const workItem = workItems[i];
  workItems[i].addEventListener('click', () => {

    if(workItem.className.indexOf('close') != -1){
      workItem.className = 'works-item';
    } else{
      workItem.classList.add('close');
    }
  });
}