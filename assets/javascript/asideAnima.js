function ativaAside(){
  const aside = document.querySelector('aside#aside')
  const main = document.querySelector('main#main')
  if(aside.style.width == '240px'){ 
    return (
      aside.style.width = '0',
     main.style.marginLeft = '0',
     main.style.width = '100%'
     )
  }
  aside.style.width = '240px'
  main.style.width = 'calc(100% - 240px)'
  main.style.marginLeft = '240px'
}