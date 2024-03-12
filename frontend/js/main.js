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
        if(window.innerWidth<=768){
            changeTableAdaptive(index)
        }else{
            changeTable(index)

        }
    })
})

let table_body = document.querySelectorAll('.table__body');

function changeTable(index){
    table_body.forEach(el=>{
        el.classList.remove('active')
    })
    table_body[index].classList.add('active')
}

let table_body_adaptive = document.querySelectorAll('.table-adaptive');

function changeTableAdaptive(index){
    table_body_adaptive.forEach(el=>{
        el.classList.remove('active')
    })
    table_body_adaptive[index].classList.add('active')
    table_list.forEach((el, index)=>{
        el.classList.remove('active');
    })
}

let table_list = document.querySelectorAll('.table-adaptive__list')
let table_adaptiv_plus = document.querySelectorAll('.table-adaptive__box-btn')
table_adaptiv_plus.forEach((plus, index)=>{
    plus.addEventListener('click', ()=>{
        table_list[index].classList.toggle('active');
    })

})