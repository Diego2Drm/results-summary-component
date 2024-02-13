
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

const jsonData = JSON.parse(data)
{
  const article = document.querySelector('.b-red')
  const div = document.createElement('div');
  const img = document.createElement('img');
  const category = document.createElement('p');
  const contentResult = document.createElement('p');
  const spanResult = document.createElement('span');
  const spanTotal = document.createElement('span');
  
  div.classList.add('info-content')
  img.src = jsonData[0].icon
  category.innerHTML = jsonData[0].category
  spanResult.innerHTML = `${jsonData[0].score}`
  spanTotal.innerHTML = "/ 100"
  contentResult.append(spanResult, spanTotal)
  div.append(img, category, contentResult);
  article.appendChild(div)
}
{
  const article = document.querySelector('.b-yellow')
  const div = document.createElement('div');
  const img = document.createElement('img');
  const category = document.createElement('p');
  const contentResult = document.createElement('p');
  const spanResult = document.createElement('span');
  const spanTotal = document.createElement('span');

  div.classList.add('info-content')
  img.src = jsonData[1].icon
  category.innerHTML = jsonData[1].category
  spanResult.innerHTML = `${jsonData[1].score}`
  spanTotal.innerHTML = "/ 100"
  contentResult.append(spanResult, spanTotal)
  div.append(img, category, contentResult);
  article.appendChild(div)
}

{
  const article = document.querySelector('.b-green')
  const div = document.createElement('div');
  const img = document.createElement('img');
  const category = document.createElement('p');
  const contentResult = document.createElement('p');
  const spanResult = document.createElement('span');
  const spanTotal = document.createElement('span');
  
  div.classList.add('info-content')
  img.src = jsonData[2].icon
  category.innerHTML = jsonData[2].category
  spanResult.innerHTML = `${jsonData[2].score}`
  spanTotal.innerHTML = "/ 100"
  contentResult.append(spanResult, spanTotal)
  div.append(img, category, contentResult);
  article.appendChild(div)
}
{
  const article = document.querySelector('.b-blue')
  const div = document.createElement('div');
  const img = document.createElement('img');
  const category = document.createElement('p');
  const contentResult = document.createElement('p');
  const spanResult = document.createElement('span');
  const spanTotal = document.createElement('span');
  
  div.classList.add('info-content')
  img.src = jsonData[3].icon
  category.innerHTML = jsonData[3].category
  spanResult.innerHTML = `${jsonData[3].score}`
  spanTotal.innerHTML = "/ 100"
  contentResult.append(spanResult, spanTotal)
  div.append(img, category, contentResult);
  article.appendChild(div)
}
