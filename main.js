var ul = document.querySelector(".ul");


function display(arr){
    ul.innerHTML = arr.map(( item, index) => {
        return (
            `<li class = "list">
                <p class="postedby">Posted by u/${item.data.author}</p>
                <p class="post-title">${item.data.title}</p>
                <p class="self-text">${item.data.selftext}</p>
            </li>`
        )
    });

}
function fetchapi(){
    fetch(`http://www.reddit.com/r/javascript.json`)
        .then(res => res.json())
        .then(data => display(data.data.children));
}
fetchapi();