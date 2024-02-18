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


let table_btn = document.querySelectorAll('.costs__btns-btn');
table_btn.forEach((el, index)=>{
    el.addEventListener('click', ()=>{
        table_btn.forEach(el=>{
            el.classList.remove('active')
        })
        el.classList.add('active')
        changeTable(index)
    })
})

let table_body = document.querySelectorAll('.table__body');

function changeTable(index){
    table_body.forEach(el=>{
        el.classList.remove('active')
    })
    table_body[index].classList.add('active')
}