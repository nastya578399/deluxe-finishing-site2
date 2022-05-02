// let animItems = document.querySelectorAll('._anim-items');

// if (animItems.length > 0 ){
//   function animOnScroll(params) {
//     window.addEventListener('scroll', animOnScroll);
//     for (let index = 0; index < array.length; index++) {
//       const animItem = animItems[index];
//       const animItemHeight = animItem.offsetHeight;
//       const animItemOffset = offset(animItem).top;
//       const animStart = 4;

//       let animItemPoint = window.innerHeight - animItemHeight / animStart;

//       if(animItemHeight) {
//         animItemPoint = window.innerHeight - window.innerHeight / animStart;
//       }

//       if((pageXOffset > animItemOffset - animItemPoint) && pageXOffset < (animItemOffset + animItemHeight)) {
//         animItem.classList.add('_active');
//       } else {
//         animItem.classList.remove('_active');
//       }
//     }
//   }
//   function offset(el) {
//     const rect = el.getBoundingClientRect(),
//       scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//       scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
//   }
// }

// console.log(animItems)


(function () {
  var square = document.querySelector('.square');

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }

      if (entry.isIntersecting) {
        entry.target.classList.add('square-animation');
      }
    });
  });

  observer.observe(square);
})();

(function () {
  var square = document.querySelector('.square2');

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }

      if (entry.isIntersecting) {
        entry.target.classList.add('square-animation2');
      }
    });
  });

  observer.observe(square);
})();

(function () {
  var square = document.querySelector('.square3');

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }

      if (entry.isIntersecting) {
        entry.target.classList.add('square-animation2');
      }
    });
  });

  observer.observe(square);
})();



(function () {
  var square = document.querySelector('.square4');

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }

      if (entry.isIntersecting) {
        entry.target.classList.add('square-animation2');
      }
    });
  });

  observer.observe(square);
})();



(function () {
  var square = document.querySelector('.square5');

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }

      if (entry.isIntersecting) {
        entry.target.classList.add('square-animation2');
      }
    });
  });

  observer.observe(square);
})();


(function () {
  var square = document.querySelector('.square6');

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }

      if (entry.isIntersecting) {
        entry.target.classList.add('square-animation2');
      }
    });
  });

  observer.observe(square);
})();

(function () {
  var square = document.querySelector('.square7');

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }

      if (entry.isIntersecting) {
        entry.target.classList.add('square-animation2');
      }
    });
  });

  observer.observe(square);
})();

(function () {
  var square = document.querySelector('.square7-3');

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }

      if (entry.isIntersecting) {
        entry.target.classList.add('square-animation3');
      }
    });
  });

  observer.observe(square);
})();

(function () {
  var square = document.querySelector('.square7-2');

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }

      if (entry.isIntersecting) {
        entry.target.classList.add('square-animation2');
      }
    });
  });

  observer.observe(square);
})();

(function () {
  var square = document.querySelector('.square8');

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }

      if (entry.isIntersecting) {
        entry.target.classList.add('square-animation2');
      }
    });
  });

  observer.observe(square);
})();

(function () {
  var square = document.querySelector('.square8-4');

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }

      if (entry.isIntersecting) {
        entry.target.classList.add('square-animation4');
      }
    });
  });

  observer.observe(square);
})();

(function () {
  var square = document.querySelector('.square8-4-2');

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }

      if (entry.isIntersecting) {
        entry.target.classList.add('square-animation4');
      }
    });
  });

  observer.observe(square);
})();

(function () {
  var square = document.querySelector('.square8-4-3');

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }

      if (entry.isIntersecting) {
        entry.target.classList.add('square-animation4');
      }
    });
  });

  observer.observe(square);
})();

(function () {
  var square = document.querySelector('.square8-4-4');

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }

      if (entry.isIntersecting) {
        entry.target.classList.add('square-animation4');
      }
    });
  });

  observer.observe(square);
})();

(function () {
  var square = document.querySelector('.square8-2');

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }

      if (entry.isIntersecting) {
        entry.target.classList.add('square-animation2');
      }
    });
  });

  observer.observe(square);
})();

(function () {
  var square = document.querySelector('.square9');

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }

      if (entry.isIntersecting) {
        entry.target.classList.add('square-animation2');
      }
    });
  });

  observer.observe(square);
})();

(function () {
  var square = document.querySelector('.square9-vertical');

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }

      if (entry.isIntersecting) {
        entry.target.classList.add('square-animation5');
      }
    });
  });

  observer.observe(square);
})();
