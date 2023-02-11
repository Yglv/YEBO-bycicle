const  header = document.querySelector('.header'),
  startPage = document.querySelector('.start-page'),
  height = header.clientHeight + startPage.clientHeight;

document.addEventListener('scroll',() =>{
  let scrollOffset = this.scrollY;
  checkScroll(scrollOffset);
});

const checkScroll = scrollOffset => {
  if (scrollOffset > height){
    header.classList.add('fixed');
  }
  else{
    header.classList.remove('fixed');
  }
}


