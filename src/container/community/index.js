import '../../script/test'

console.log('container вилазить, все добре')

const div1 = { classToSet: 'header', id: 1 }
const div2 = { classToSet: 'nav', id: 2 }

function createDiv({
  classToSet = '',
  parent = 'main',
  id = '',
}) {
  const parentSet = document.querySelector(parent)
  const element = document.createElement('div')
  if (classToSet.trim()) {
    element.classList.add(classToSet)
  }
  if (id) {
    element.setAttribute('id', id)
  }
  parentSet.appendChild(element)
}

function createComponent({
  tagToSet = 'div',
  classToSet = '',
  parent = 'main',
  parentID = '',
  content = '',
  src = '',
  href = '',
  onclick = '',
}) {
  let parentSet

  if (parentID) {
    parentSet = document.getElementById(parentID)
  } else {
    parentSet = document.querySelector(parent)
  }

  const element = document.createElement(tagToSet)

  if (classToSet.trim()) {
    element.classList.add(classToSet)
  }

  if (src.trim()) {
    element.setAttribute('src', src)
  }

  if (href.trim()) {
    element.setAttribute('href', href)
  }

  if (onclick.trim()) {
    element.setAttribute('onclick', onclick)
  }

  element.innerHTML = content

  parentSet.appendChild(element)
}

// Создаем div.header
createDiv(div1)

let imgSrc = '<img src="/img/arrow-back.png">'

// Создаем стрелку назад
createComponent({
  tagToSet: 'a',
  href: '/',
  parent: 'div.header',
  content: imgSrc,
})

// аватарка
createComponent({
  tagToSet: 'img',
  classToSet: 'avatar',
  parent: 'div.header',
  src: '/img/avatar.jpeg',
})

// Title Community
createComponent({
  tagToSet: 'h2',
  classToSet: '',
  content: 'Community',
})

// create div.nav
createDiv(div2)

createComponent({
  tagToSet: 'a',
  classToSet: 'a-enable',
  parent: 'div.nav',
  href: '#',
  content: 'База знань',
})

createComponent({
  tagToSet: 'a',
  classToSet: 'a-disable',
  parent: 'div.nav',
  href: '#',
  content: 'Інформація',
})

createComponent({
  tagToSet: 'img',
  classToSet: 'orange',
  src: 'img/orange.png',
})

createComponent({
  tagToSet: 'h3',
  classToSet: '',
  content: 'Що таке база знань?',
})

createComponent({
  tagToSet: 'p',
  classToSet: '',
  content:
    'База знаний - база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач.',
})

createComponent({
  tagToSet: 'a',
  classToSet: 'orangebtn',
  href: '/',
  content: "Перейти до ком'юніті у Телеграм",
})
