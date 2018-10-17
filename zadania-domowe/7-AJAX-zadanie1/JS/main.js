const btn = $('#btn');
const output = $('#dane-programisty');

const address = "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php";

let even = true;

btn.click(function () {
    console.log("Pobierz dane");
    $.ajax({
        url: address,
        method: "GET",
        success: function (result) {
            let data = JSON.parse(result);
            console.log(data);
            let html = `<div><h2>${data.imie} ${data.nazwisko}</h2><h4>${data.zawod} ${data.firma}</h4></div>`;
            if (even) {
                output.append(html);
                console.log($('div:last'));
                $('div:last').addClass('even');
                even = false;
                return;
            }
            output.append(html);
            $('div:last').addClass('odd');
            even = true;
        }
    });

});
