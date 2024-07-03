// Ini Javascript

function validateForm() {
    let firstName = document.querySelector('#firstname').value;
    let lastName = document.querySelector('#lastname').value;

    console.log(firstName);
    console.log(lastName);

    if (firstName != '' && lastName != '') {
        document.querySelector('#result').innerHTML = firstName + ' ' + lastName;
    } else {
        alert('Inputan ada yang kosong');
    }
}

let indexSlide = 0; // [0, 1, 2]
showSlide(1);

function nextSlide(n) {
    showSlide(indexSlide += n);
    console.log('IndexSlide kita tambah ' + n);
    console.log(indexSlide + ' Ini NextSlide');
}

function showSlide(n) {
    let listImage = document.getElementsByClassName('banner-item');
    if (n >= listImage.length) indexSlide = 0;
    console.log(listImage.length + ' Ini Jumlah Gambarnya');
    console.log(n + ' Ini N di ShowSlide');

    let index = 0;
    while (index < listImage.length) {
        listImage[index].style.display = 'none';
        index++;
    }

    console.log(indexSlide + ' Ini indexSlide di ShowSlide');
    listImage[indexSlide].style.display = 'block';
}