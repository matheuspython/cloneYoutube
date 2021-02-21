function ativaAside(){
  const aside = document.querySelector('aside#aside')
  if(aside.style.width == '240px') return aside.style.width = '0'
  aside.style.width = '240px'
}