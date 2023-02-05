
let collapse_menu = document.querySelectorAll(".collapse-item");

collapse_menu.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
        if (item.classList.contains('active')) {
            item.nextElementSibling.style.maxHeight = '500px';
        } else {
            item.nextElementSibling.style.maxHeight = '0';
        }
    });
});



// accordionItems.forEach(item => {
//     item.addEventListener('click', e => {
//       const content = item.nextElementSibling;
//       content.style.maxHeight = content.scrollHeight + 'px';
//       item.classList.toggle('active');
//     });
//   });