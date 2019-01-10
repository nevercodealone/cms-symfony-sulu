$(window).load(function(){

(function ($) {
	var $container = $('#container-thumbs'),
		colWidth = function () {
			var w = $container.width(), 
				columnNum = 1,
				columnWidth = 0;
			if (w > 992) {
				columnNum  = 4;
			}  else if (w > 768) {
				columnNum  = 3;
			}	else if (w > 475) {
				columnNum  = 2;
			}
			columnWidth = Math.floor(w/columnNum);
			$container.find('.item').each(function() {
				var $item = $(this),
					multiplier_w = $item.attr('class').match(/item-w(\d)/),
					multiplier_h = $item.attr('class').match(/item-h(\d)/),
					width = multiplier_w ? columnWidth*multiplier_w[1]-1 : columnWidth-1,
					height = multiplier_h ? columnWidth*multiplier_h[1]*0.7-1 : columnWidth*0.7-1;
				$item.css({
					width: width,
					height: height
				});
			});
			return columnWidth;
		},
		isotope = function () {
			$container.isotope({
				resizable: true,
				itemSelector: '.item',
				masonry: {
					columnWidth: colWidth(),
					gutterWidth: 1
				}
			});
		};
	isotope();
	$(window).smartresize(isotope);
}(jQuery));

    
    var $container = $('#container-thumbs');

      var $optionSets = $('#options .option-set'),
          $optionLinks = $optionSets.find('a');

      $optionLinks.click(function(){
        var $this = $(this);
        // don't proceed if already selected
        if ( $this.hasClass('selected') ) {
          return false;
        }
        var $optionSet = $this.parents('.option-set');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
  
        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value');
        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[ key ] = value;
        if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
          // changes in layout modes need extra logic
          changeLayoutMode( $this, options )
        } else {
          // otherwise, apply new options
          $container.isotope( options );
        }
        
        return false;
      });
    
  });





