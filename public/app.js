document.addEventListener('DOMContentLoaded', function () {
  const divs = document.querySelectorAll('div');
  divs.forEach(div => {
    const bgColor = window.getComputedStyle(div).backgroundColor;
    if (!bgColor || bgColor === 'rgba(0, 0, 0, 0)' || bgColor === 'transparent') {
      div.style.backgroundColor = '#f9f9f9';
      console.log('Background color applied to:', div);
    }
  });
});
