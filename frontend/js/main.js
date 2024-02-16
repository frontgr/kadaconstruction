let table_element = document.querySelectorAll('.table__row-el');
let table_header = document.querySelectorAll('.table__head-el');

table_element.forEach((el, index) => {
    el.addEventListener('mouseover', () => {
        table_header[index%6].classList.add('hover');
    })
    el.addEventListener('mouseout', () => {
        table_header.forEach(el=>{
            el.classList.remove('hover')
        });
    })
})