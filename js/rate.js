document.addEventListener('DOMContentLoaded', () => {
    let calcSideFrom = document.querySelectorAll('.calc_switcher[data-id="from"] .calc_switcher_item')
    let calcSideTo = document.querySelectorAll('.calc_switcher[data-id="to"] .calc_switcher_item')
    let calcReverse = document.querySelector('.calc_reverse')

    let inputBoxRate = document.querySelector('.calc_input_box[data-id="from"].calc_input_box_rate')
    let outputBoxRate = document.querySelector('.calc_input_box[data-id="to"].calc_input_box_rate')


    function updateRates() {
        let activeFrom = document.querySelector('.calc_switcher[data-id="from"] .calc_switcher_item.active');
        let activeTo = document.querySelector('.calc_switcher[data-id="to"] .calc_switcher_item.active');

        let currentRateFrom = fx(1).from(activeFrom.textContent).to(activeTo.textContent);

        inputBoxRate.textContent = `1 ${activeFrom.textContent} = ${currentRateFrom} ${activeTo.textContent}`
    }

    function switchActiveClass(itemList, target) {
        itemList.forEach(item => {
            item.classList.remove('active')
        });

        target.classList.add('active')
    }

    calcSideFrom.forEach((item) => {
        item.addEventListener('click', () => {
            switchActiveClass(calcSideFrom, item)
        })
    })

    calcSideTo.forEach((item) => {
        item.addEventListener('click', () => {
            switchActiveClass(calcSideTo, item)
        })
    })

    calcReverse.addEventListener('click', () => {
        let activeFrom = document.querySelector('.calc_switcher[data-id="from"] .calc_switcher_item.active');
        let activeTo = document.querySelector('.calc_switcher[data-id="to"] .calc_switcher_item.active');

        activeFrom.classList.remove('active')
        activeTo.classList.remove('active')
        
        calcSideFrom.forEach((item) => {
            if (item.textContent == activeTo.textContent) {
                item.classList.add('active')
            }
        })

        calcSideTo.forEach((item) => {
            if (item.textContent == activeFrom.textContent) {
                item.classList.add('active')
            }
        })

    });

    updateRates()
});