//=include libs/jquery.min.js
'use strict';

$( document ).ready(() => {
  console.log('run script');

  // Change simple checkbox status on click
  $('.checkbox').map((index, checkbox) => {
    $(checkbox).on('click', (event) => onCheckboxClick(event, checkbox));
  });

  // Change .plan active status
  $('.plan').map((index, el) => {
    $(el).click(() => onPlanClick(el));
  });

  // other events
  const $popupActivate = $('#popup-activate');
  const $btnClose = $('#btn-close-activate');

  $btnClose.click(function () {
    $($popupActivate).addClass('hide');
  });

  const $popupPayment = $('#popup-payment');
  const $btnClosePayment = $('#btn-close-payment');

  $btnClosePayment.click(function () {
    $($popupPayment).addClass('hide');
  })

});

function onCheckboxClick(evt, checkbox) {
  evt.stopPropagation();
  evt.preventDefault();

  const isChecked = $(checkbox).hasClass('checked');

  if (isChecked) {
    $(checkbox).removeClass('checked');
    $(checkbox).find('input:checkbox:first').removeAttr('checked');
  } else {
    $(checkbox).addClass('checked');
    $(checkbox).find('input:checkbox:first').attr('checked', true);
  }
}

function onPlanClick(el) {
  $('.plan.active').removeClass('active');
  $(el).addClass('active');
}

const input = document.querySelector('.value');
const progressEl = document.querySelector('.circle__progress');

function showProgress (value) {
  const radius = 8;
  const circimference = 2 * Math.PI * radius; // https://en.wikipedia.org/wiki/Circumference
  const progress = value / 100;
  const dashOffset = circimference * (1 - progress);

  progressEl.style.strokeDashoffset = dashOffset;
}

input.addEventListener('input', function (e) {
  showProgress(e.target.value);
});

