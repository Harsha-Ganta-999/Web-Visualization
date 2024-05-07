// Example AJAX request to the backend
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            console.log(xhr.responseText);
        } else {
            console.error('Error:', xhr.status);
        }
    }
};

xhr.open('GET', 'api.php', true);
xhr.send();
