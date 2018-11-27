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
  const $popup = $('#popup_activate');
  const $btnClose = $('#btn-close');

  $btnClose.click(function () {
    $($popup).addClass('hide');
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

