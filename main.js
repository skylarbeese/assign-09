function dupMenu() {
 let list =  document.querySelectorAll('ul#primaryNavigation li a')

 let newList = document.createElement('ul')

 list.forEach(menu =>  {
   let newLi = document.createElement('li')
   let newA = document.createElement('a')

   newA.setAttribute('href', menu.getAttribute('href'))
   newA.textContent = menu.textContent
   newLi.appendChild(newA)
   let div = document.querySelector('#smallNavArea')
   div.appendChild(newLi)
 })

}
dupMenu()