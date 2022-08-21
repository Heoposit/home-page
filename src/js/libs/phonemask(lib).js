    // ССЫЛКА на плагин: https://imask.js.org/
    // Подключаем через npm: https://www.npmjs.com/package/imask
    // Подключаем через CDN : <script src="https://unpkg.com/imask"></script>

const element = document.querySelector('.phone_input')
const maskOptions = {
    mask: '+{3}(000)000-00-00'
}
const mask = Imask(element, maskOptions)