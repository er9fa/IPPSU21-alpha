var page_num = 1;
var i = 0;
var search_string = "bitcoin";

function updateNews() {
  console.log(`https://newsapi.org/v2/everything?apiKey=a791d1a1c2674ac8914503c53d9a1e8b&language=en&q=${search_string}&page=${page_num}`);
  fetch(`/newsdata?search_string=${search_string}&page_num=${page_num}`).then(r => r.json()).then(data => {
      var num_articles = data.totalResults;
      console.log(num_articles + " articles found");
      var news_descript = data.articles[i].content.substring(0, 200);
      var ellipses = news_descript.charAt(199);
      var last_space = news_descript.lastIndexOf(" ");
      var last_period = news_descript.lastIndexOf(".");
      if (last_space > last_period) {
        var pretty_descript = news_descript.substring(0, last_space+1) + ellipses;
      }
      else if (last_period > last_space) {
        var pretty_descript = news_descript.substring(0, last_period) + ellipses;
      }
      else {
        var pretty_descript = news_descript;
      }
      document.getElementById("title_0").innerHTML = data.articles[i].title;
      document.getElementById("title_0").href = data.articles[i].url;
      document.getElementById("image_0").src = data.articles[i].urlToImage;
      document.getElementById("preview_0").innerHTML = pretty_descript;
      var news_descript = data.articles[i+1].content.substring(0, 200);
      var ellipses = news_descript.charAt(199);
      var last_space = news_descript.lastIndexOf(" ");
      var last_period = news_descript.lastIndexOf(".");
      if (last_space > last_period) {
        var pretty_descript = news_descript.substring(0, last_space+1) + ellipses;
      }
      else if (last_period > last_space) {
        var pretty_descript = news_descript.substring(0, last_period) + ellipses;
      }
      else {
        var pretty_descript = news_descript;
      }
      document.getElementById("title_1").innerHTML = data.articles[i+1].title;
      document.getElementById("title_1").href = data.articles[i+1].url;
      document.getElementById("image_1").src = data.articles[i+1].urlToImage;
      document.getElementById("preview_1").innerHTML = pretty_descript;
      var news_descript = data.articles[i+2].content.substring(0, 200);
      var ellipses = news_descript.charAt(199);
      var last_space = news_descript.lastIndexOf(" ");
      var last_period = news_descript.lastIndexOf(".");
      if (last_space > last_period) {
        var pretty_descript = news_descript.substring(0, last_space+1) + ellipses;
      }
      else if (last_period > last_space) {
        var pretty_descript = news_descript.substring(0, last_period) + ellipses;
      }
      else {
        var pretty_descript = news_descript;
      }
      document.getElementById("title_2").innerHTML = data.articles[i+2].title;
      document.getElementById("title_2").href = data.articles[i+2].url;
      document.getElementById("image_2").src = data.articles[i+2].urlToImage;
      document.getElementById("preview_2").innerHTML = pretty_descript;
      var news_descript = data.articles[i+3].content.substring(0, 200);
      var ellipses = news_descript.charAt(199);
      var last_space = news_descript.lastIndexOf(" ");
      var last_period = news_descript.lastIndexOf(".");
      if (last_space > last_period) {
        var pretty_descript = news_descript.substring(0, last_space+1) + ellipses;
      }
      else if (last_period > last_space) {
        var pretty_descript = news_descript.substring(0, last_period) + ellipses;
      }
      else {
        var pretty_descript = news_descript;
      }
      document.getElementById("title_3").innerHTML = data.articles[i+3].title;
      document.getElementById("title_3").href = data.articles[i+3].url;
      document.getElementById("image_3").src = data.articles[i+3].urlToImage;
      document.getElementById("preview_3").innerHTML = pretty_descript;
      var news_descript = data.articles[i+4].content.substring(0, 200);
      var ellipses = news_descript.charAt(199);
      var last_space = news_descript.lastIndexOf(" ");
      var last_period = news_descript.lastIndexOf(".");
      if (last_space > last_period) {
        var pretty_descript = news_descript.substring(0, last_space+1) + ellipses;
      }
      else if (last_period > last_space) {
        var pretty_descript = news_descript.substring(0, last_period) + ellipses;
      }
      else {
        var pretty_descript = news_descript;
      }
      document.getElementById("title_4").innerHTML = data.articles[i+4].title;
      document.getElementById("title_4").href = data.articles[i+4].url;
      document.getElementById("image_4").src = data.articles[i+4].urlToImage;
      document.getElementById("preview_4").innerHTML = pretty_descript;
      var news_descript = data.articles[i+5].content.substring(0, 200);
      var ellipses = news_descript.charAt(199);
      var last_space = news_descript.lastIndexOf(" ");
      var last_period = news_descript.lastIndexOf(".");
      if (last_space > last_period) {
        var pretty_descript = news_descript.substring(0, last_space+1) + ellipses;
      }
      else if (last_period > last_space) {
        var pretty_descript = news_descript.substring(0, last_period) + ellipses;
      }
      else {
        var pretty_descript = news_descript;
      }
      document.getElementById("title_5").innerHTML = data.articles[i+5].title;
      document.getElementById("title_5").href = data.articles[i+5].url;
      document.getElementById("image_5").src = data.articles[i+5].urlToImage;
      document.getElementById("preview_5").innerHTML = pretty_descript;
      var news_descript = data.articles[i+6].content.substring(0, 200);
      var ellipses = news_descript.charAt(199);
      var last_space = news_descript.lastIndexOf(" ");
      var last_period = news_descript.lastIndexOf(".");
      if (last_space > last_period) {
        var pretty_descript = news_descript.substring(0, last_space+1) + ellipses;
      }
      else if (last_period > last_space) {
        var pretty_descript = news_descript.substring(0, last_period) + ellipses;
      }
      else {
        var pretty_descript = news_descript;
      }
      document.getElementById("title_6").innerHTML = data.articles[i+6].title;
      document.getElementById("title_6").href = data.articles[i+6].url;
      document.getElementById("image_6").src = data.articles[i+6].urlToImage;
      document.getElementById("preview_6").innerHTML = pretty_descript;
      var news_descript = data.articles[i+7].content.substring(0, 200);
      var ellipses = news_descript.charAt(199);
      var last_space = news_descript.lastIndexOf(" ");
      var last_period = news_descript.lastIndexOf(".");
      if (last_space > last_period) {
        var pretty_descript = news_descript.substring(0, last_space+1) + ellipses;
      }
      else if (last_period > last_space) {
        var pretty_descript = news_descript.substring(0, last_period) + ellipses;
      }
      else {
        var pretty_descript = news_descript;
      }
      document.getElementById("title_7").innerHTML = data.articles[i+7].title;
      document.getElementById("title_7").href = data.articles[i+7].url;
      document.getElementById("image_7").src = data.articles[i+7].urlToImage;
      document.getElementById("preview_7").innerHTML = pretty_descript;
      var news_descript = data.articles[i+8].content.substring(0, 200);
      var ellipses = news_descript.charAt(199);
      var last_space = news_descript.lastIndexOf(" ");
      var last_period = news_descript.lastIndexOf(".");
      if (last_space > last_period) {
        var pretty_descript = news_descript.substring(0, last_space+1) + ellipses;
      }
      else if (last_period > last_space) {
        var pretty_descript = news_descript.substring(0, last_period) + ellipses;
      }
      else {
        var pretty_descript = news_descript;
      }
      document.getElementById("title_8").innerHTML = data.articles[i+8].title;
      document.getElementById("title_8").href = data.articles[i+8].url;
      document.getElementById("image_8").src = data.articles[i+8].urlToImage;
      document.getElementById("preview_8").innerHTML = pretty_descript;
      var news_descript = data.articles[i+9].content.substring(0, 200);
      var ellipses = news_descript.charAt(199);
      var last_space = news_descript.lastIndexOf(" ");
      var last_period = news_descript.lastIndexOf(".");
      if (last_space > last_period) {
        var pretty_descript = news_descript.substring(0, last_space+1) + ellipses;
      }
      else if (last_period > last_space) {
        var pretty_descript = news_descript.substring(0, last_period) + ellipses;
      }
      else {
        var pretty_descript = news_descript;
      }
      document.getElementById("title_9").innerHTML = data.articles[i+9].title;
      document.getElementById("title_9").href = data.articles[i+9].url;
      document.getElementById("image_9").src = data.articles[i+9].urlToImage;
      document.getElementById("preview_9").innerHTML = pretty_descript;
  })
}

function updateSearch() {
    console.log("Success!");
    search_string = "bitcoin+" + document.getElementById("search_bar").value;
    updateNews();
    return false;
}

updateNews();

function oneClicked() {
  page_num = 1;
  i = 0;
  updateNews();
  document.getElementById("prevButton").disabled = true;
  document.getElementById("prevButton").style.backgroundColor = '#2980B9';
  document.getElementById("prevButton").onclick = function () { oneClicked(); };

  document.getElementById("firstButton").disabled = true;
  document.getElementById("firstButton").style.backgroundColor = '#2980B9';
  document.getElementById("firstButton").innerHTML = "1";
  document.getElementById("firstButton").onclick = function () { oneClicked(); };

  document.getElementById("secondButton").disabled = false;
  document.getElementById("secondButton").style.backgroundColor = '#141d26';
  document.getElementById("secondButton").innerHTML = "2";
  document.getElementById("secondButton").onclick = function () { twoClicked(); };

  document.getElementById("thirdButton").disabled = false;
  document.getElementById("thirdButton").style.backgroundColor = '#141d26';
  document.getElementById("thirdButton").innerHTML = "3";
  document.getElementById("thirdButton").onclick = function () { threeClicked(); };

  document.getElementById("fourthButton").disabled = true;
  document.getElementById("fourthButton").style.backgroundColor = '#141d26';
  document.getElementById("fourthButton").innerHTML = "...";
  document.getElementById("fourthButton").onclick = function () { fourClicked(); };

  document.getElementById("fifthButton").disabled = false;
  document.getElementById("fifthButton").style.backgroundColor = '#141d26';
  document.getElementById("fifthButton").innerHTML = "10";
  document.getElementById("fifthButton").onclick = function () { tenClicked(); };

  document.getElementById("nextButton").disabled = false;
  document.getElementById("nextButton").style.backgroundColor = '#141d26';
  document.getElementById("nextButton").onclick = function () { twoClicked(); };
}

function twoClicked() {
  page_num = 1;
  i = 10;
  updateNews();
  document.getElementById("prevButton").disabled = false;
  document.getElementById("prevButton").style.backgroundColor = '#141d26';
  document.getElementById("prevButton").onclick = function () { oneClicked(); };

  document.getElementById("firstButton").disabled = false;
  document.getElementById("firstButton").style.backgroundColor = '#141d26';
  document.getElementById("firstButton").innerHTML = "1";
  document.getElementById("firstButton").onclick = function () { oneClicked(); };

  document.getElementById("secondButton").disabled = true;
  document.getElementById("secondButton").style.backgroundColor = '#2980B9';
  document.getElementById("secondButton").innerHTML = "2";
  document.getElementById("secondButton").onclick = function () { twoClicked(); };

  document.getElementById("thirdButton").disabled = false;
  document.getElementById("thirdButton").style.backgroundColor = '#141d26';
  document.getElementById("thirdButton").innerHTML = "3";
  document.getElementById("thirdButton").onclick = function () { threeClicked(); };

  document.getElementById("fourthButton").disabled = true;
  document.getElementById("fourthButton").style.backgroundColor = '#141d26';
  document.getElementById("fourthButton").innerHTML = "...";
  document.getElementById("fourthButton").onclick = function () { fourClicked(); };

  document.getElementById("fifthButton").disabled = false;
  document.getElementById("fifthButton").style.backgroundColor = '#141d26';
  document.getElementById("fifthButton").innerHTML = "10";
  document.getElementById("fifthButton").onclick = function () { tenClicked(); };

  document.getElementById("nextButton").disabled = false;
  document.getElementById("nextButton").style.backgroundColor = '#141d26';
  document.getElementById("nextButton").onclick = function () { threeClicked(); };
}

function threeClicked() {
  page_num = 2;
  i = 0;
  updateNews();
  document.getElementById("prevButton").disabled = false;
  document.getElementById("prevButton").style.backgroundColor = '#141d26';
  document.getElementById("prevButton").onclick = function () { twoClicked(); };

  document.getElementById("firstButton").disabled = false;
  document.getElementById("firstButton").style.backgroundColor = '#141d26';
  document.getElementById("firstButton").innerHTML = "1";
  document.getElementById("firstButton").onclick = function () { oneClicked(); };

  document.getElementById("secondButton").disabled = false;
  document.getElementById("secondButton").style.backgroundColor = '#141d26';
  document.getElementById("secondButton").innerHTML = "2";
  document.getElementById("secondButton").onclick = function () { twoClicked(); };

  document.getElementById("thirdButton").disabled = true;
  document.getElementById("thirdButton").style.backgroundColor = '#2980B9';
  document.getElementById("thirdButton").innerHTML = "3";
  document.getElementById("thirdButton").onclick = function () { threeClicked(); };

  document.getElementById("fourthButton").disabled = true;
  document.getElementById("fourthButton").style.backgroundColor = '#141d26';
  document.getElementById("fourthButton").innerHTML = "...";
  document.getElementById("fourthButton").onclick = function () { fourClicked(); };

  document.getElementById("fifthButton").disabled = false;
  document.getElementById("fifthButton").style.backgroundColor = '#141d26';
  document.getElementById("fifthButton").innerHTML = "10";
  document.getElementById("fifthButton").onclick = function () { tenClicked(); };

  document.getElementById("nextButton").disabled = false;
  document.getElementById("nextButton").style.backgroundColor = '#141d26';
  document.getElementById("nextButton").onclick = function () { fourClicked(); };
}

function fourClicked() {
  page_num = 2;
  i = 10;
  updateNews();
  document.getElementById("prevButton").disabled = false;
  document.getElementById("prevButton").style.backgroundColor = '#141d26';
  document.getElementById("prevButton").onclick = function () { threeClicked(); };

  document.getElementById("firstButton").disabled = false;
  document.getElementById("firstButton").style.backgroundColor = '#141d26';
  document.getElementById("firstButton").innerHTML = "2";
  document.getElementById("firstButton").onclick = function () { twoClicked(); };

  document.getElementById("secondButton").disabled = false;
  document.getElementById("secondButton").style.backgroundColor = '#141d26';
  document.getElementById("secondButton").innerHTML = "3";
  document.getElementById("secondButton").onclick = function () { threeClicked(); };

  document.getElementById("thirdButton").disabled = true;
  document.getElementById("thirdButton").style.backgroundColor = '#2980B9';
  document.getElementById("thirdButton").innerHTML = "4";
  document.getElementById("thirdButton").onclick = function () { fourClicked(); };

  document.getElementById("fourthButton").disabled = true;
  document.getElementById("fourthButton").style.backgroundColor = '#141d26';
  document.getElementById("fourthButton").innerHTML = "...";
  document.getElementById("fourthButton").onclick = function () { fiveClicked(); };

  document.getElementById("fifthButton").disabled = false;
  document.getElementById("fifthButton").style.backgroundColor = '#141d26';
  document.getElementById("fifthButton").innerHTML = "10";
  document.getElementById("fifthButton").onclick = function () { tenClicked(); };

  document.getElementById("nextButton").disabled = false;
  document.getElementById("nextButton").style.backgroundColor = '#141d26';
  document.getElementById("nextButton").onclick = function () { fiveClicked(); };
}

function fiveClicked() {
  page_num = 3;
  i = 0;
  updateNews();
  document.getElementById("prevButton").disabled = false;
  document.getElementById("prevButton").style.backgroundColor = '#141d26';
  document.getElementById("prevButton").onclick = function () { fourClicked(); };

  document.getElementById("firstButton").disabled = false;
  document.getElementById("firstButton").style.backgroundColor = '#141d26';
  document.getElementById("firstButton").innerHTML = "3";
  document.getElementById("firstButton").onclick = function () { threeClicked(); };

  document.getElementById("secondButton").disabled = false;
  document.getElementById("secondButton").style.backgroundColor = '#141d26';
  document.getElementById("secondButton").innerHTML = "4";
  document.getElementById("secondButton").onclick = function () { fourClicked(); };

  document.getElementById("thirdButton").disabled = true
  document.getElementById("thirdButton").style.backgroundColor = '#2980B9';
  document.getElementById("thirdButton").innerHTML = "5";
  document.getElementById("thirdButton").onclick = function () { fiveClicked(); };

  document.getElementById("fourthButton").disabled = true;
  document.getElementById("fourthButton").style.backgroundColor = '#141d26';
  document.getElementById("fourthButton").innerHTML = "...";
  document.getElementById("fourthButton").onclick = function () { sixClicked(); };

  document.getElementById("fifthButton").disabled = false;
  document.getElementById("fifthButton").style.backgroundColor = '#141d26';
  document.getElementById("fifthButton").innerHTML = "10";
  document.getElementById("fifthButton").onclick = function () { tenClicked(); };

  document.getElementById("nextButton").disabled = false;
  document.getElementById("nextButton").style.backgroundColor = '#141d26';
  document.getElementById("nextButton").onclick = function () { sixClicked(); };
}

function sixClicked() {
  page_num = 3;
  i = 10;
  updateNews();
  document.getElementById("prevButton").disabled = false;
  document.getElementById("prevButton").style.backgroundColor = '#141d26';
  document.getElementById("prevButton").onclick = function () { fiveClicked(); };

  document.getElementById("firstButton").disabled = false;
  document.getElementById("firstButton").style.backgroundColor = '#141d26';
  document.getElementById("firstButton").innerHTML = "4";
  document.getElementById("firstButton").onclick = function () { fourClicked(); };

  document.getElementById("secondButton").disabled = false;
  document.getElementById("secondButton").style.backgroundColor = '#141d26';
  document.getElementById("secondButton").innerHTML = "5";
  document.getElementById("secondButton").onclick = function () { fiveClicked(); };

  document.getElementById("thirdButton").disabled = true;
  document.getElementById("thirdButton").style.backgroundColor = '#2980B9';
  document.getElementById("thirdButton").innerHTML = "6";
  document.getElementById("thirdButton").onclick = function () { sixClicked(); };

  document.getElementById("fourthButton").disabled = true;
  document.getElementById("fourthButton").style.backgroundColor = '#141d26';
  document.getElementById("fourthButton").innerHTML = "...";
  document.getElementById("fourthButton").onclick = function () { sevenClicked(); };

  document.getElementById("fifthButton").disabled = false;
  document.getElementById("fifthButton").style.backgroundColor = '#141d26';
  document.getElementById("fifthButton").innerHTML = "10";
  document.getElementById("fifthButton").onclick = function () { tenClicked(); };

  document.getElementById("nextButton").disabled = false;
  document.getElementById("nextButton").style.backgroundColor = '#141d26';
  document.getElementById("nextButton").onclick = function () { sevenClicked(); };
}

function sevenClicked() {
  page_num = 4;
  i = 0;
  updateNews();
  document.getElementById("prevButton").disabled = false;
  document.getElementById("prevButton").style.backgroundColor = '#141d26';
  document.getElementById("prevButton").onclick = function () { sixClicked(); };

  document.getElementById("firstButton").disabled = false;
  document.getElementById("firstButton").style.backgroundColor = '#141d26';
  document.getElementById("firstButton").innerHTML = "5";
  document.getElementById("firstButton").onclick = function () { fiveClicked(); };

  document.getElementById("secondButton").disabled = false;
  document.getElementById("secondButton").style.backgroundColor = '#141d26';
  document.getElementById("secondButton").innerHTML = "6";
  document.getElementById("secondButton").onclick = function () { sixClicked(); };

  document.getElementById("thirdButton").disabled = true;
  document.getElementById("thirdButton").style.backgroundColor = '#2980B9';
  document.getElementById("thirdButton").innerHTML = "7";
  document.getElementById("thirdButton").onclick = function () { sevenClicked(); };

  document.getElementById("fourthButton").disabled = true;
  document.getElementById("fourthButton").style.backgroundColor = '#141d26';
  document.getElementById("fourthButton").innerHTML = "...";
  document.getElementById("fourthButton").onclick = function () { eightClicked(); };

  document.getElementById("fifthButton").disabled = false;
  document.getElementById("fifthButton").style.backgroundColor = '#141d26';
  document.getElementById("fifthButton").innerHTML = "10";
  document.getElementById("fifthButton").onclick = function () { tenClicked(); };

  document.getElementById("nextButton").disabled = false;
  document.getElementById("nextButton").style.backgroundColor = '#141d26';
  document.getElementById("nextButton").onclick = function () { eightClicked(); };
}

function eightClicked() {
  page_num = 4;
  i = 10;
  updateNews();
  document.getElementById("prevButton").disabled = false;
  document.getElementById("prevButton").style.backgroundColor = '#141d26';
  document.getElementById("prevButton").onclick = function () { sevenClicked(); };

  document.getElementById("firstButton").disabled = false;
  document.getElementById("firstButton").style.backgroundColor = '#141d26';
  document.getElementById("firstButton").innerHTML = "6";
  document.getElementById("firstButton").onclick = function () { sixClicked(); };

  document.getElementById("secondButton").disabled = false;
  document.getElementById("secondButton").style.backgroundColor = '#141d26';
  document.getElementById("secondButton").innerHTML = "7";
  document.getElementById("secondButton").onclick = function () { sevenClicked(); };

  document.getElementById("thirdButton").disabled = true;
  document.getElementById("thirdButton").style.backgroundColor = '#2980B9';
  document.getElementById("thirdButton").innerHTML = "8";
  document.getElementById("thirdButton").onclick = function () { eightClicked(); };

  document.getElementById("fourthButton").disabled = false;
  document.getElementById("fourthButton").style.backgroundColor = '#141d26';
  document.getElementById("fourthButton").innerHTML = "9";
  document.getElementById("fourthButton").onclick = function () { nineClicked(); };

  document.getElementById("fifthButton").disabled = false;
  document.getElementById("fifthButton").style.backgroundColor = '#141d26';
  document.getElementById("fifthButton").innerHTML = "10";
  document.getElementById("fifthButton").onclick = function () { tenClicked(); };

  document.getElementById("nextButton").disabled = false;
  document.getElementById("nextButton").style.backgroundColor = '#141d26';
  document.getElementById("nextButton").onclick = function () { nineClicked(); };
}

function nineClicked() {
  page_num = 5;
  i = 0;
  updateNews();
  document.getElementById("prevButton").disabled = false;
  document.getElementById("prevButton").style.backgroundColor = '#141d26';
  document.getElementById("prevButton").onclick = function () { eightClicked(); };

  document.getElementById("firstButton").disabled = false;
  document.getElementById("firstButton").style.backgroundColor = '#141d26';
  document.getElementById("firstButton").innerHTML = "6";
  document.getElementById("firstButton").onclick = function () { sixClicked(); };

  document.getElementById("secondButton").disabled = false;
  document.getElementById("secondButton").style.backgroundColor = '#141d26';
  document.getElementById("secondButton").innerHTML = "7";
  document.getElementById("secondButton").onclick = function () { sevenClicked(); };

  document.getElementById("thirdButton").disabled = false;
  document.getElementById("thirdButton").style.backgroundColor = '#141d26';
  document.getElementById("thirdButton").innerHTML = "8";
  document.getElementById("thirdButton").onclick = function () { eightClicked(); };

  document.getElementById("fourthButton").disabled = true;
  document.getElementById("fourthButton").style.backgroundColor = '#2980B9';
  document.getElementById("fourthButton").innerHTML = "9";
  document.getElementById("fourthButton").onclick = function () { nineClicked(); };

  document.getElementById("fifthButton").disabled = false;
  document.getElementById("fifthButton").style.backgroundColor = '#141d26';
  document.getElementById("fifthButton").innerHTML = "10";
  document.getElementById("fifthButton").onclick = function () { tenClicked(); };

  document.getElementById("nextButton").disabled = false;
  document.getElementById("nextButton").style.backgroundColor = '#141d26';
  document.getElementById("nextButton").onclick = function () { tenClicked(); };
}

function tenClicked() {
  page_num = 5;
  i = 10;
  updateNews();
  document.getElementById("prevButton").disabled = false;
  document.getElementById("prevButton").style.backgroundColor = '#141d26';
  document.getElementById("prevButton").onclick = function () { nineClicked(); };

  document.getElementById("firstButton").disabled = false;
  document.getElementById("firstButton").style.backgroundColor = '#141d26';
  document.getElementById("firstButton").innerHTML = "6";
  document.getElementById("firstButton").onclick = function () { sixClicked(); };

  document.getElementById("secondButton").disabled = false;
  document.getElementById("secondButton").style.backgroundColor = '#141d26';
  document.getElementById("secondButton").innerHTML = "7";
  document.getElementById("secondButton").onclick = function () { sevenClicked(); };

  document.getElementById("thirdButton").disabled = false;
  document.getElementById("thirdButton").style.backgroundColor = '#141d26';
  document.getElementById("thirdButton").innerHTML = "8";
  document.getElementById("thirdButton").onclick = function () { eightClicked(); };

  document.getElementById("fourthButton").disabled = false;
  document.getElementById("fourthButton").style.backgroundColor = '#141d26';
  document.getElementById("fourthButton").innerHTML = "9";
  document.getElementById("fourthButton").onclick = function () { nineClicked(); };

  document.getElementById("fifthButton").disabled = true;
  document.getElementById("fifthButton").style.backgroundColor = '#2980B9';
  document.getElementById("fifthButton").innerHTML = "10";
  document.getElementById("fifthButton").onclick = function () { tenClicked(); };

  document.getElementById("nextButton").disabled = true;
  document.getElementById("nextButton").style.backgroundColor = '#2980B9';
  document.getElementById("nextButton").onclick = function () { tenClicked(); };
}
