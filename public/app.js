document.addEventListener('DOMContentLoaded', function () {
  const divs = document.querySelectorAll('div');
  divs.forEach(div => {
    const style = window.getComputedStyle(div);
    const bgColor = style.backgroundColor;
    // Also check if the element has its own background image, otherwise nested divs will all get colored.
    const bgImage = style.backgroundImage;

    if ((!bgColor || bgColor === 'rgba(0, 0, 0, 0)' || bgColor === 'transparent') && (!bgImage || bgImage === 'none')) {
      // Avoid applying to root element which might be used for overlay effects
      if (div.id !== '__next') {
        div.style.backgroundColor = '#f9f9f9';
        console.log('Default background color applied to:', div);
      }
    }
  });
});
