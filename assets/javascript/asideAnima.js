function ativaAside(){
  const aside = document.querySelector('aside#aside')
  const main = document.querySelector('main#main')
  if(aside.style.width == '240px'){ 
    return (
      aside.style.width = '0',
     main.style.marginLeft = '0'
     )
  }
  aside.style.width = '240px'
  main.style.marginLeft = '240px'
}