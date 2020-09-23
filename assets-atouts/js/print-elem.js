/**
 * @title Print Element
 * @overview Takes a HTML element, opens it in a new window, and calls print on that window
 */
// eslint-disable-next-line
function PrintElem(elem, title, offset)
{
  // Title constructor
  title = title || $('title').text();
  // Offset for the print
  offset = offset || 0;

  // Loading start
  var dStart = Math.round(new Date().getTime()/1000),
      $html = $('html'),
      i = 0;

  // Start building HTML
  var HTML = '<html';

  if(typeof ($html.attr('lang')) !== 'undefined') {
      HTML+=' lang=' + $html.attr('lang');
  }

  if(typeof ($html.attr('id')) !== 'undefined') {
      HTML+=' id=' + $html.attr('id');
  }

  if(typeof ($html.attr('xmlns')) !== 'undefined') {
      HTML+=' xmlns=' + $html.attr('xmlns');
  }

  // Close HTML and start build HEAD
  HTML+='><head>';

  // Get all meta tags
  $('head > meta').each(function(){
      var $this = $(this),
          $meta = '<meta';

      if(typeof ($this.attr('charset')) !== 'undefined') {
          $meta+=' charset=' + $this.attr('charset');
      }
      if(typeof ($this.attr('name')) !== 'undefined') {
          $meta+=' name=' + $this.attr('name');
      }
      if(typeof ($this.attr('http-equiv')) !== 'undefined') {
          $meta+=' http-equiv=' + $this.attr('http-equiv');
      }
      if(typeof ($this.attr('content')) !== 'undefined') {
          $meta+=' content=' + $this.attr('content');
      }

      $meta+=' />';
      HTML+= $meta;
      i++;
  }).promise().done(function(){

      // Insert title
      HTML+= '<title>' + title  + '</title>';

      // Let's pickup all CSS files for the formatting
      $('head > link[rel="stylesheet"]').each(function(){
          HTML+= '<link rel="stylesheet" href="' + $(this).attr('href') + '" />';
          i++;
      }).promise().done(function(){
          // Finish HTML
          HTML+= '</head><body>';
          HTML+= '<h1 class="text-center mb-3">' + title  + '</h1>';
          HTML+= elem.html();
          HTML+= '</body></html>';

          // Open new window
          var printWindow = window.open('', 'PRINT', 'height=' + $(window).height() + ',width=' + $(window).width());
          // Append new window HTML
          printWindow.document.write(HTML);

          printWindow.document.close(); // necessary for IE >= 10
          printWindow.focus(); // necessary for IE >= 10*/
          console.log(printWindow.document);
          /* Make sure that page is loaded correctly */
          $(printWindow).on('load', function(){
              setTimeout(function(){
                  // Open print
                  printWindow.print();

                  // Close on print
                  setTimeout(function(){
                      printWindow.close();
                      return true;
                  }, 3);

              }, (Math.round(new Date().getTime()/1000) - dStart)+i+offset);
          });
      });
  });
}
