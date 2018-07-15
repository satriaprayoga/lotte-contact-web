import 'bootstrap';

import './main.scss';
import './img';

(function($){

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });
    
   
}(jQuery))