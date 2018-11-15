document.addEventListener('DOMContentLoaded', function () {
    let num = 0;

    const count_button = document.getElementById('count_button');
    const reset_button = document.getElementById('reset');
    const github = document.getElementById('github');

    document.getElementById('counter').value = num;
    
    count_button.addEventListener('click', function () {
        num = document.getElementById('counter').value;
        num++;
        document.getElementById('counter').value = num;
    });

    reset_button.addEventListener('click', function () {
        num = 0;
        document.getElementById('counter').value = num;
    });

    github.addEventListener('click', function () {
        chrome.tabs.create({ url: 'https://github.com/Jacobawesome82/simple-Counter' });
    });
});

//Mark, just so you know, you cant put counter.value as a constant because it is an integer.