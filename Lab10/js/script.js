
const url = 'https://usersdogs.dmytrominochkin.cloud/';

$.get(`${url}dogs`, massiv => {

    let dogs = $('.dog_item');
    dogs[0].style.visibility = 'visible';

    if (massiv.length == 0) dogs[0].style.visibility = 'hidden';
    for (let i = 1; i < massiv.length; i++) {
        dogs.after(dogs.clone());
    }

    dogs = $('.dog_item');

    const dogName = $('.dog_name');
    const dogSex = $('.dog_sex');
    const dogPhoto = $('.dog_photo img');

    for (let i = 0; i < massiv.length; i++) {
        dogs[i].id = massiv[i].id.toString();
        dogName[i].textContent = massiv[i].title;
        dogSex[i].textContent = massiv[i].sex.toLowerCase().replace(/\w/, c => `${c.toUpperCase()}`);
        dogPhoto[i].src = url + massiv[i].dogImage;
        dogPhoto[i].setAttribute('alt', `photo of a dog ${massiv[i].title}`);
    }

    const modal = $('.modal');
    const modalBody = $('.modal_body');
    const modalPhoto = $('.modal_photo img');
    const modalName = $('.modal_name');
    const modalSex = $('.sex');
    const modalAge = $('.age');
    const modalDesc = $('.description');

    let scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );

    modal[0].style.height = `${scrollHeight}px`;

    function modalInfo(id) {
        modalPhoto.attr('src', url +  massiv[id - 1].dogImage);
        modalPhoto.attr('alt', `photo of a dog ${massiv[id - 1].title}`);
        modalName.text(massiv[id - 1].title);
        modalSex.text(massiv[id - 1].sex.toLowerCase().replace(/\w/, c => `${c.toUpperCase()}`));
        modalAge.text(massiv[id - 1].age);
        modalDesc.text(massiv[id - 1].description);
    }

    $(document).on({
        'click': function (event) {
            if (event.target.closest('.dog_item')) {
                modal.show();
                modalBody[0].style.top = window.pageYOffset + 30 + 'px';
                modalInfo(Number(event.target.id));
            }
            else if (!event.target.closest('.modal_body')) {
                modal.hide();
            }
        },
        'keyup': function (event) {
            if (event.code === 'Escape') {
                modal.hide();
            }
        }
    })

})
.fail(() => {
    $('.dog_item')[0].style.visibility = 'hidden';
    $('body')[0].style.backgroundColor = 'red';
})