    // Мобильное меню бургер
    function burgerMenu() {
        const burger = document.querySelector('.burger')
        const menu = document.querySelector('.menu')
        const body = document.querySelector('body')
        const btn = document.querySelector('.sign__btn')

        burger.addEventListener('click', () => {
            if (!menu.classList.contains('active')) {
                menu.classList.add('active')
                burger.classList.add('active-burger')
                body.classList.add('locked')
                btn.classList.add('active')
            } else {
                menu.classList.remove('active')
                burger.classList.remove('active-burger')
                body.classList.remove('locked')
                btn.classList.remove('active')
            }
        })
        // Вот тут мы ставим брейкпоинт навбара
        window.addEventListener('resize', () => {
            if(window.innerWidth > 767.98) {
                menu.classList.remove('active')
                burger.classList.remove('active-burger')
                body.classList.remove('locked')
                btn.classList.remove('active')
            }    
        })
    }
    burgerMenu()
    
    
        // Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
        function fixedNav() {
            const nav = document.querySelector('nav')
    
            // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало зафиксированным
            const breakpoint = 1
            if (window.scrollY >= breakpoint) {
                nav.classList.add('fixed__nav')
            } else {
                nav.classList.remove('fixed__nav')
            }
        }
        window.addEventListener('scroll', fixedNav)