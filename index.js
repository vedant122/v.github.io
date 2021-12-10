// 369594d0bea94441a35e4982588a9444

const news = document.getElementById("news");

const xhr = new XMLHttpRequest();


xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=369594d0bea94441a35e4982588a9444', true);


xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);

        var ar = json.articles;

        let newshtml = "";

        for (items in ar) {
    
        console.log(json);

            let n = `
          <p class="title">${ar[items].title}<p>
            <div  class="img">
            <div id="carouselExampleIndicators${items}" class="carousel slide" data-bs-ride="carousel">
          
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="${ar[items].urlToImage}" class="d-block w-100" alt="..." >
                  <p id="dis" class="dis">${ar[items].title}</p>
                </div>
                <div class="carousel-item">
                  <img src="${ar[items].urlToImage}" class="d-block w-100" alt="..." >
                  <p id="dis" class="dis">${ar[items].content}</p>
                </div>
                <div class="carousel-item">
                  <img src="${ar[items].urlToImage}" class="d-block w-100" alt="..." >
                  <p id="dis" class="dis">${ar[items].description}</p>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators${items}" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators${items}" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <a href=${ar[items].url} class="title1">Read full article</a>
          <hr>
           `
          

        newshtml +=n;
        }
        news.innerHTML=newshtml;



    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()

