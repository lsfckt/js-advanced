function getArticleGenerator(articles) {

    const div = document.querySelector('#content');
    const copied = articles.slice();

    return function showNext() {

        if (copied[0] !== undefined) {

            const firstEl = copied.shift();
            const article = document.createElement('article');

            article.innerHTML = firstEl;
            div.appendChild(article);
        }
        return showNext;
    };
}