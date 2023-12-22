const toggleMenu = document.getElementById('toggle-menu');
      const menu = document.getElementById('menu');

      toggleMenu.addEventListener('change', function() {
        if (this.checked) {
          menu.classList.remove('hidden');
        } else {
          menu.classList.add('hidden');
        }
      });


