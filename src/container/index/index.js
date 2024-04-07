import '../../script/test'

console.log('container вилазить, все добре')

const div1 = { classToSet: 'header', id: 1 }
const div2 = { classToSet: 'new', id: 2 }
const div3 = { classToSet: 'read', id: 3 }
const div4 = { classToSet: 'new', id: 4 }
const div5 = { classToSet: 'read', id: 5 }

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

// const imgSet = document.querySelector('img')
// const attrImg = imgSet.getAttributeNames()
// console.log(attrImg)

// Создаем div.header
createDiv(div1)

let imgSrc = '<img src="/img/arrow-back.png">'

// Создаем стрелку назад
createComponent({
  tagToSet: 'a',
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

// Title My blog
createComponent({
  tagToSet: 'h2',
  classToSet: '',
  content: 'Мій блог',
})

//Перший впис та його компоненти
createDiv(div2)

createComponent({
  tagToSet: 'span',
  classToSet: 'fresh',
  parent: 'div.new',
  content: 'Новий',
})

createComponent({
  tagToSet: 'span',
  classToSet: 'important',
  parent: 'div.new',
  content: 'Важливо',
})

createComponent({
  tagToSet: 'span',
  classToSet: 'date',
  parent: 'div.new',
  content: '25.01',
})

createComponent({
  tagToSet: 'p',
  parent: 'div.new',
  content:
    'До біса інженерів та їх розробки, наймаємо пілотів та готуємося до старту, як Маск.',
})

//Другий впис та його компоненти
createDiv(div3)

createComponent({
  tagToSet: 'span',
  classToSet: 'important',
  parent: 'div.read',
  content: 'Важливо',
})

createComponent({
  tagToSet: 'span',
  classToSet: 'date',
  parent: 'div.read',
  content: '15.01',
})

createComponent({
  tagToSet: 'p',
  parent: 'div.read',
  content:
    'Ми хотіли, щоб у цій розвалині вмістилося близько 150 людей, щоб їм не було ані сумно, ані смутно.',
})

//Третій впис та його компоненти
createDiv(div4)

createComponent({
  tagToSet: 'span',
  classToSet: 'fresh',
  parentID: 4,
  content: 'Новий',
})

createComponent({
  tagToSet: 'span',
  classToSet: 'important',
  parentID: 4,
  content: 'Важливо',
})

createComponent({
  tagToSet: 'span',
  classToSet: 'date',
  parentID: 4,
  content: '25.01',
})

createComponent({
  tagToSet: 'p',
  parentID: 4,
  content:
    'До біса інженерів та їх розробки, наймаємо пілотів та готуємося до старту, як Маск.',
})

//Третій впис та його компоненти
createDiv(div5)

createComponent({
  tagToSet: 'span',
  classToSet: 'important',
  parentID: 5,
  content: 'Важливо',
})

createComponent({
  tagToSet: 'span',
  classToSet: 'date',
  parentID: 5,
  content: '01.01',
})

createComponent({
  tagToSet: 'p',
  parentID: 5,
  content:
    'Що цей Марті собі дозволяє, що значить "зміни ділера"? Теж мені, експерт.',
})

// кнопка переходу
createComponent({
  tagToSet: 'a',
  classToSet: 'newbtn',
  href: '/community',
  content: 'C o m m u n i t y',
})
