const colors = ['green',  'red', 'rgba(133, 122, 200)', '#f15025'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// events listeners

btn.addEventListener('click', function(){
 // get raddom number between 0-3 colors [0]
  const randomNum = getRandomNumber();
  console.log(randomNum)
  document.body.style.backgroundColor = colors[randomNum];
  color.textContent = colors[randomNum]
})

function getRandomNumber(){
  return Math.floor(Math.random() * colors.length);
}