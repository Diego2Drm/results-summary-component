
const data = `[
    {
      "category": "Reaction",
      "score": 80,
      "icon": "./assets/images/icon-reaction.svg"
    },
    {
      "category": "Memory",
      "score": 92,
      "icon": "./assets/images/icon-memory.svg"
    },
    {
      "category": "Verbal",
      "score": 61,
      "icon": "./assets/images/icon-verbal.svg"
    },
    {
      "category": "Visual",
      "score": 72,
      "icon": "./assets/images/icon-visual.svg"
    }
  ]
  `
console.log(typeof data);
const jsonData = JSON.parse(data)
console.log(typeof jsonData);

for (let i = 0; i < jsonData.length; i++) {
  const element = jsonData[i];
  console.log(element);

}

{
  const article = document.querySelector('.b-yellow')
  const div = document.createElement('div');
  const img = document.createElement('img');
  const category = document.createElement('p');
  const span = document.createElement('span');
  div.classList.add('info-content')
  img.src = jsonData[1].icon
  category.innerHTML = jsonData[1].category
  span.innerHTML = `${jsonData[1].score}/100`
  div.append(img, category, span);
  article.appendChild(div)
}

{
  const article = document.querySelector('.b-green')
  const div = document.createElement('div');
  const img = document.createElement('img');
  const category = document.createElement('p');
  const span = document.createElement('span');
  div.classList.add('info-content')
  img.src = jsonData[2].icon
  category.innerHTML = jsonData[2].category
  span.innerHTML = `${jsonData[2].score}/100`
  div.append(img, category, span);
  article.appendChild(div)
}
{
  const article = document.querySelector('.b-blue')
  const div = document.createElement('div');
  const img = document.createElement('img');
  const category = document.createElement('p');
  const span = document.createElement('span');
  div.classList.add('info-content')
  img.src = jsonData[3].icon
  category.innerHTML = jsonData[3].category
  span.innerHTML = `${jsonData[3].score}/100`
  div.append(img, category, span);
  article.appendChild(div)
}

console.log(typeof []);