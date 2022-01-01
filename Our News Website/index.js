console.log('This is News Website Tutorial');

let newsAccording = document.getElementById('newsAccording');

let source = 'bbc-news'
let api_key = '7b0fb2ffe1b84d84ac011978578acce7'

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${api_key}`, true);

xhr.onload = function() {
    // console.log("Your Request OnLoad");

    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";

        articles.forEach(function(element, index) {
            //console.log(element, index);
            //let length = `${element["publishedAt"].length = 10}`;
            getDate = `${element["publishedAt"]}`
            date = getDate.slice(0, 10)
            getTime = `${element["publishedAt"]}`
            time = getTime.slice(11, 19)
            let news = `
                    <div class="accordion" id="newsAccording">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="heading${index}">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                            <em><strong style = "color: #5F5F5F;"> Breaking News ${index + 1 + ' : '}</strong></em> <div style = "text-transform:uppercase;">&nbsp;${element["title"]} <strong><em>Date : ${date}</em></strong><strong><em> | Time : ${time}</em></strong></div> 
                        </button>
                        </h2>
                        <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#newsAccording">
                            <div class="accordion-body">
                                ${element["content"]}<a href="${element["url"]}" target="_blank"><br>Read More</a>
                            </div>
                        </div>
                    </div>
                </div>`;
            newsHtml += news;
        });
        newsAccording.innerHTML = newsHtml;
    } else {
        console.log('Sorry! Your Request Cant Loaded');
        newsAccording.innerHTML = '<strong>Sorry!</strong> Your Request Cant Resolve';
    }
}

xhr.send();




/*
// Initialize the news api parameters
let source = 'the-times-of-india';
let apiKey = 'd093053d72bc40248998159804e0e67d'

// Grab the news container
let newsAccordion = document.getElementById('newsAccording');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

// What to do when response is ready
xhr.onload = function() {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            // console.log(element, index)
            let news = `
            <div id="newsAccording">
            <p>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">${element["title"]}</a></button>
            </p>
            <div class="row">
            <div class="col">
                <div class="collapse multi-collapse" id="multiCollapseExample1">
                    <div class="card card-body">${element["content"]}</div>
                </div>
            </div>
        </div>
        </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    } else {
        console.log("Some error occured")
    }
}

xhr.send()
*/