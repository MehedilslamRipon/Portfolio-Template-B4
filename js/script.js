// init Isotope
let $grid = $('.grid').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    let filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });