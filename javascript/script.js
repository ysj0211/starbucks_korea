'use strict';

jQuery(document).ready(function(){
  // search
  const searchEl = document.querySelector('.search');
  const searchInputEl = searchEl.querySelector('input');
  searchEl.addEventListener('click', () => {
    searchInputEl.focus();
  });
  searchInputEl.addEventListener('focus', (e) => {
    searchEl.classList.add('focused');
    e.target.setAttribute('placeholder', '통합검색');
  });
  searchInputEl.addEventListener('blur', (e) => {
    searchEl.classList.remove('focused');
    e.target.setAttribute('placeholder', '');
  });

  // fade
  $(function(){
    let currentIndex = 0; // 현재 이미지
    setInterval(function(){ // 3초에 한번씩 실행
        let nextIndex = (currentIndex + 1) % 3; // 1 2 0 1 2 무한반복
        $(".fade-img").eq(currentIndex).fadeOut(1000); // 첫번째 이미지 사라짐
        $(".fade-img").eq(nextIndex).fadeIn(1000); // 두번째 이미지 나타남
        currentIndex = nextIndex; // 두번째 인덱값을 현재 인덱값에 저장
    }, 3000);
  });
});