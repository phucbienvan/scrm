/* eslint-disable no-new */
/* eslint-disable no-undef */
import SimpleBar from 'simplebar';

export default {
  sidebarToggle () {
    new SimpleBar(document.getElementsByClassName('js-simplebar')[0]);

    $('.sidebar-toggle').on('click', () => {
      $('.sidebar')
        .toggleClass('collapsed')
        // Triger resize after animation
        .one('transitionend', () => {
          setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
          }, 100);
        });
    });
  },
};
