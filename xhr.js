let xhr = new XMLHttpRequest();
xhr.open('get', 'https://api.scrapestack.com/scrape?access_key=97f595b59788a92ebfe408938f35a1d7&url=https://proxyscrape.com/free-proxy-list');
xhr.send();

xhr.onload = function() {
    console.log(xhr.response);
};
