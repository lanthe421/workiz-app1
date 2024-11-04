document.getElementById('open-iframe').addEventListener('click', function() {
    document.getElementById('iframe-container').style.display = 'block';
});

window.addEventListener('message', function(event) {
    const { title, value } = event.data;
    createDeal(title, value);
});

function createDeal(title, value) {
    const apiKey = 'a6c3ababd93bed1fd51913c65797ae2682d2fd96';
    const url = 'https://api.pipedrive.com/v1/deals?api_token=' + apiKey;

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            value: value
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Сделка создана:', data);
        alert('Сделка успешно создана!');
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
}
