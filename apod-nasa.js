$('.botao').on('click', async function () {
    $('.texto').css('display', 'none');
    let calendario = $('#data').val();
    const url = `https://api.nasa.gov/planetary/apod?api_key=nl18xPIdkg9n6wPeQsYq5fCzGZehTO0l8op46pEI&date=${calendario}`
    let api = await fetch(url).then(response => response.json());
    $('body').css('background-image', `url(${api.url})`);
    $('.titulo-foto').html(`${api.title}`);
    $('.texto-foto').html(`(${api.explanation})`);
    $('.copyright').html(`Copyright: ${api.copyright}`);
});
