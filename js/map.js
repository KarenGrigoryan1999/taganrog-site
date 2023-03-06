const { ref, createApp, watch } = Vue
createApp({
    setup() {
        const firstGroup = ref({
            groupTitle: 'Земельные участки',
            isVisible: true,
            marks: [
                {
                    top: 30,
                    left: 30,
                    title: 'Муниципальная инвестиционная площадка №61:58:0000000:45471',//Николаевское шоссе 19
                    subscription: 'Николаевское шоссе 19',
                    text: 'Самый красный котельщик из всех красных котельщиков',
                    photo: 'http://photos.wikimapia.org/p/00/06/77/48/11_1280.jpg'
                },
                {
                    top: 33,
                    left: 33,
                    title: 'Муниципальная инвестиционная площадка №61:58:0005283:109',//Поляковское 39
                    subscription: 'Поляковское 39',
                    text: 'Очень много всего очень красивого',
                    photo: 'https://nashzernograd.ru/_nw/22/13891834.jpg'
                }
            ]
        });

        const secondGroup = ref({
            groupTitle: 'Инвестиционные объекты',
            isVisible: true,
            marks: [
                {
                    top: 80,
                    left: 28,
                    title: 'Инвестиционная площадка ООО "Альянс"',
                    subscription: 'Инструментальная 2-10, 2-29',
                    text: 'Парк был назван так, потому что рядом море',
                    photo: 'https://photo.foto-planeta.com/view/9/3/8/7/taganrog-938785.jpg'
                },
                {
                    top: 80,
                    left: 30,
                    title: 'Инвестиционная площадка ООО "УК ИнвестДевелопмент"',
                    subscription: 'Инструментальная 2-3',
                    text: 'Всем рекомендую тут жить',
                    photo: 'https://10-img.onrealt.ru/files/09-2022/07/85/98/selo-bessergenovka-kypit-dom-1883125201.jpg'
                }
            ]
        });

        const thirdGroup = ref({
            groupTitle: 'Промпарки',
            isVisible: true,
            marks: [
                {
                    top: 30,
                    left: 40,
                    title: 'Инвестиционная площадка А0 "Таганрогский завод "Прибой""',
                    subscription: 'Большая бульварная 13-1',
                    text: 'Парк был назван так, потому что рядом море',
                    photo: 'https://photo.foto-planeta.com/view/9/3/8/7/taganrog-938785.jpg'
                },
                {
                    top: 12,
                    left: 40,
                    title: 'Инвестиционная площадка ПАО ТКЗ "Красный котельщик"',
                    subscription: 'Ленина 220',
                    text: 'Всем рекомендую тут жить',
                    photo: 'https://10-img.onrealt.ru/files/09-2022/07/85/98/selo-bessergenovka-kypit-dom-1883125201.jpg'
                }
            ]
        });

        const hide = (data) => {
            const groups = [
                firstGroup.value,
                secondGroup.value,
                thirdGroup.value
            ];

            groups.forEach((element) => {
                element.isVisible = data ? false : true;
            });
            if (data) {
                data.isVisible = true;
            }

            marksArray.value = [
                ...groups
            ];
        }

        const selectGroup = (event) => {
            const allButtons = document.getElementsByClassName('button-control__action-button');
            [...allButtons].forEach((element) => {
                element.classList.remove('active');
            });
            event.target.classList.toggle('active');
        }

        const showPlaceInfo = (place) => {
            const dialog = document.getElementById("dialog");
            const dialogTitle = document.getElementById("dialog-title");
            const dialogSubscription = document.getElementById("dialog-subscription");
            const dialogText = document.getElementById("dialog-text");

            dialogTitle.innerHTML = place.title;
            dialogSubscription.innerHTML = place.subscription;
            dialogText.innerHTML = place.text;
            if(window.screen.width <= 610) dialog.style.display = 'block';
            
        }

        const marksArray = ref([]);

        hide();

        return {
            marksArray,
            hide,
            selectGroup,
            showPlaceInfo
        }
    }
}).mount('#map')

function cardExit() {
    const dialog = document.getElementById("dialog");
    dialog.style.display = 'none';
}
