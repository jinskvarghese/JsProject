var posts = JSON.parse(localStorage.getItem('posts')) || [
    {id: 1, title: 'Daily JS Use'},
    {id: 2, title: 'Daily HTML Use'},
    {id: 3, title: 'Daily CSS Use'},
    {id: 4, title: 'Daily Bootstrap Use'}
];
var tableBody = document.querySelector('tbody');
if (tableBody) {
    var rowsHTML = "";
    posts.forEach(post => {
        rowsHTML += `<tr>
                        <td>${post.id}</td>
                        <td>${post.title}</td>
                    </tr>`;
    });
    tableBody.innerHTML = rowsHTML;
}
document.getElementById('submit')?.addEventListener('click', function(event) {
    event.preventDefault();
    
    var newID = document.getElementById("idf").value;
    var newTitle = document.getElementById("title").value;
    if(newID && newTitle) {
        var newObject = {
            id: parseInt(newID),
            title: newTitle
        }
        posts.push(newObject);
        localStorage.setItem('posts', JSON.stringify(posts));
        window.location.href = "index.html";
    }
});
