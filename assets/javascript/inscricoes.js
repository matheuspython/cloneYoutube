let inscri = document.querySelector('#inscri')

let listCanais = []

function addCanais(img, text){
  const newLi = document.createElement('li')
  const newA = document.createElement('a')
  const newImg = document.createElement('img')
  const newText = document.createTextNode(text)
  newImg.src = img
  newLi.appendChild(newA)
  newA.appendChild(newImg)
  newA.appendChild(newText)
  newA.setAttribute('href', '#')
  inscri.appendChild(newLi)
}

addCanais('https://thepixelglitch.files.wordpress.com/2020/08/dororo.jpg?w=730','dororo')
addCanais('https://i1.wp.com/yohstore.com.br/wp-content/uploads/2018/04/Luffy_Wax.png?ssl=1','one piece')
addCanais('https://images-na.ssl-images-amazon.com/images/I/81lpQYNjXLL.jpg','dragon ball')
addCanais('https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2020/11/legiao_S8rGOd_sjvtA.jpg.jpeg','goku')
addCanais('https://i.pinimg.com/originals/2a/92/06/2a9206a4a0d1d23cf92636c42115d054.jpg','naruto')
addCanais('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRId3fkzk9Fk_paWkG0iduatKeApmLT3LaTRw&usqp=CAU','programação')
addCanais('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvq8sATt0OSR5J3zgfhBFlVpu8sHVVu-VFfw&usqp=CAU','programação para crianças')
addCanais('http://pplware.sapo.pt/wp-content/uploads/2016/02/clean-coding-best-practices-720x405.jpg','programação de games')
addCanais('https://blog.chefsclub.com.br/wp-content/uploads/2019/08/historia_do_cafe-968x660.jpg','melhores cafes')
