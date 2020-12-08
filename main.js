(function(){
 const icons = [
     'fa-gift',
     'fa-key',
     'fa-wifi',
     'fa-plus',
     'fa-phone',
 ];

 const getOneCard = (icon) => {
     const div = document.createElement('div');
     div.classList.add('col-2');
     div.classList.add('card');
     div.innerHTML = `<div class="card__front">
        <i class="fa ${icon}"></i>
        </div>
        <div class="card__back">
        <img src = "/pair-game/img/cbg.png" alt = "back">
        </div>`;
 return div;

 };
 const shuffle =(array) => {
    let currentIndex = array.length, temporaryValue, randomIndex;
  
        while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
       
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  const iconArray = icons.concat(icons);
  shuffle(iconArray);
  const row1 = document.querySelector('.card-row:nth-child(2)')
  const row1 = document.querySelector('.card-row:nth-child(3)')
  let i = 0;
  for (const icon of iconArray) {
      i++;
      const card = getOneCard(icon);
     if (i < 6) {
         row1.appendChild(card);

     }else
     row2.appendChild(card);

  }
  const cardClick = (ev) => {
      ev.currentTarget.classList.toggle('flipped');
  };
  const cards = document.querySelectorAll('.card');
  cards.forEach( card => {
      card.addEventListener( 'click', cardClick);
  })
  



})();