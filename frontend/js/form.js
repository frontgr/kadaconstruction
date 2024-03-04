let table_data = {
    rough: [
      {
        type: "1-комнатные",
        area: "1-55м²",
        materialPrice: "45 000 ₽",
        workPrice: "80 000 ₽",
        price: "125 000 ₽",
        avgSquareMeterPrice: "40-55"
      },
      {
        type: "2х-комнатные",
        area: "55-75м²",
        materialPrice: "50 000 ₽",
        workPrice: "90 000 ₽",
        price: "140 000 ₽",
        avgSquareMeterPrice: "45-60"
      },
      {
        type: "3х-комнатные",
        area: "75-85м²",
        materialPrice: "60 000 ₽",
        workPrice: "100 000 ₽",
        price: "160 000 ₽",
        avgSquareMeterPrice: "60-75"
      },
      {
        type: "4х-комнатные",
        area: "90-110м²",
        materialPrice: "68 000 ₽",
        workPrice: "125 000 ₽",
        price: "193 000 ₽",
        avgSquareMeterPrice: "75-90"
      },
      {
        type: "5х-комнатные",
        area: "100-140м²",
        materialPrice: "72 000 ₽",
        workPrice: "136 000 ₽",
        price: "208 000 ₽",
        avgSquareMeterPrice: "85-110"
      },
    ],
    cosmetic: [
      {
        type: "1-комнатные",
        area: "35-55м²",
        materialPrice: "20 000 ₽",
        workPrice: "35 000 ₽",
        price: "55 000 ₽",
        avgSquareMeterPrice: "45-50"
      },
      {
        type: "2х-комнатные",
        area: "55-75м²",
        materialPrice: "30 000 ₽",
        workPrice: "55 000 ₽",
        price: "85 000 ₽",
        avgSquareMeterPrice: "45-60"
      },
      {
        type: "3х-комнатные",
        area: "75-85м²",
        materialPrice: "38 000 ₽",
        workPrice: "72 000 ₽",
        price: "110 000 ₽",
        avgSquareMeterPrice: "55-70"
      },
      {
        type: "4х-комнатные",
        area: "90-110м²",
        materialPrice: "45 000 ₽",
        workPrice: "87 000 ₽",
        price: "132 000 ₽",
        avgSquareMeterPrice: "75-90"
      },
      {
        type: "5х-комнатные",
        area: "100-140м²",
        materialPrice: "53 000 ₽",
        workPrice: "100 000 ₽",
        price: "153 000 ₽",
        avgSquareMeterPrice: "80-100"
      },
    ],
    capital: [
      {
        type: "1-комнатные",
        area: "35-55м²",
        materialPrice: "60 000 ₽",
        workPrice: "110 000 ₽",
        price: "170 000 ₽",
        avgSquareMeterPrice: "55-70"
      },
      {
        type: "2х-комнатные",
        area: "55-75м²",
        materialPrice: "70 000 ₽",
        workPrice: "125000 ₽",
        price: "195 000 ₽",
        avgSquareMeterPrice: "65-80"
      },
      {
        type: "3х-комнатные",
        area: "75-85м²",
        materialPrice: "85 000 ₽",
        workPrice: "145 000 ₽",
        price: "230 000 ₽",
        avgSquareMeterPrice: "70-85"
      },
      {
        type: "4х-комнатные",
        area: "90-110м²",
        materialPrice: "97 000 ₽",
        workPrice: "169 000 ₽",
        price: "266 000 ₽",
        avgSquareMeterPrice: "85-100"
      },
      {
        type: "5х-комнатные",
        area: "100-140м²",
        materialPrice: "115 000 ₽",
        workPrice: "187 000 ₽",
        price: "302 000 ₽",
        avgSquareMeterPrice: "95-110"
      },
    ]
  };
let typeRepair = {
    1: "rough",
    2: "cosmetic",
    3: "capital"
}
let calculator = {
    counts_room: 1,
    type_repair: 1,
    area_room: 40
};


let counts_room_inputs = $('.form__left-parameters-count-radio-container').children().filter((index, value)=>value.localName=='input');
let type_repair_inputs = $('.form__left-parameters-type-radio-container').children().children().filter((index, value)=>value.localName=='input');
let area_room_input = $('.form__left-parameters-area-input');

counts_room_inputs.each((index, input)=>{
    input.addEventListener('change', ()=>{
        calculator.counts_room = +input.value[0];
    getCosts();

    })
});
type_repair_inputs.each((index, input)=>{
    input.addEventListener('change', ()=>{
        calculator.type_repair = +input.value[0];
        getCosts();
    })
});
area_room_input.on('input', ()=>{
    if(area_room_input[0].value<35){
        if(area_room_input[0].value<=0){
          area_room_input[0].value='';
        }
        calculator.area_room = 35;
    }else if(area_room_input[0].value>140){
        
        if(area_room_input[0].value>800){
            area_room_input[0].value=area_room_input[0].value.slice(0, area_room_input[0].value.length-1);
            calculator.area_room = 800;
        }else{
          calculator.area_room = area_room_input[0].value;
        }
    }else{
        calculator.area_room = +area_room_input[0].value;
    }
    getCosts();
})

function getCosts(){
    table_data[typeRepair[calculator.type_repair]].forEach((item, index)=>{

        let area_range = item.area.split('-');
        area_range[0] = +area_range[0]+1
        area_range[1] = +area_range[1].slice(0, area_range[1].length-2);
        if(area_room_input[0].value!='' && (area_range[0] <= calculator.area_room && area_range[1] >= calculator.area_room)){
            $('#form__left-results-heading').text(item.price);
        }else if(area_room_input[0].value=='' && item.type[0] == calculator.counts_room){
            $('#form__left-results-heading').text(item.price);
        }else if(index+1 == table_data[typeRepair[calculator.type_repair]].length && area_room_input[0].value>140){
          $('#form__left-results-heading').text(item.price);
        }
      })
    }

getCosts();



/* form */
let form_name = $('.form__right-inputs-name');
let form_phone = $('.form__right-inputs-phone');
let form_writeTo = $('.checkbox-input');
let form_comment = $('.comment__textarea');


let submitBtn = $('.form__right-send__button');


submitBtn.on('click', async (e)=>{
  e.preventDefault();
  if(form_name[0].value!=='' && form_phone[0].value!=='' && form_comment[0].value!=='' && area_room_input[0].value!==''){
    let message = {
        name: `${form_name[0].value}`,
        phone: `${form_phone[0].value}`,   
        textarea: form_comment[0].value,
        counts: `${calculator.counts_room}`,
        types: `${+calculator.type_repair-1}`,
        area_room: `${calculator.area_room}`,
        whatsapp: `${form_writeTo[0].checked}`,
        telegram: `${form_writeTo[1].checked}`,
        viber: `${form_writeTo[2].checked}`,
    }
    $('.form-sent')[0].style.display = 'flex';
    console.log(message);

    try {
      let response = await fetch('https://kadaconstruction.ru/notification', {
          method: 'POST',
          body: JSON.stringify(message),
      });
      if (response.ok) {
          let data = await response.json();
          console.log(data);
      } else {
          console.error('Ошибка HTTP: ' + response.status);
      }
    } catch (error) {
        console.error('Ошибка:', error);
    }
  }});

function cleanForm(){
  form_name[0].value = '';
  form_phone[0].value = '';
  form_comment[0].value = '';
  area_room_input[0].value = '';
  form_writeTo[0].checked = false;
  form_writeTo[1].checked = false;
  form_writeTo[2].checked = false;
  type_repair_inputs[0].checked = true;
  type_repair_inputs[1].checked = false;
  type_repair_inputs[2].checked = false;
  counts_room_inputs[0].checked = true;
  counts_room_inputs[1].checked = false;
  counts_room_inputs[2].checked = false;
  counts_room_inputs[3].checked = false;
  counts_room_inputs[4].checked = false;
  calculator.counts_room = 1;
  calculator.type_repair = 1;
  calculator.area_room = 40;

  getCosts();
}


$('.form-sent__close').on('click', ()=>{
  $('.form-sent')[0].style.display = 'none';
  cleanForm();
});
$('.form-sent__btn').on('click', ()=>{
  $('.form-sent')[0].style.display = 'none';
  cleanForm();
});

/* form */