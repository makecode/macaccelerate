//=include libs/jquery.min.js
'use strict';

$( document ).ready(() => {
  console.log('run script');

  // Change checkbox status on click
  $('.checkbox').map((index, checkbox) => {
    $(checkbox).on('click', function(evt) {
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
    });
  });

});