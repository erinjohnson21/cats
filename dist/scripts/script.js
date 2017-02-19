//Initial Call
$.ajax({
  url: "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=9a7911c0a69e332abff43825a0b5d6b8&extras=url_m&format=json",
  // url: "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=9a7911c0a69e332abff43825a0b5d6b8&tags=cats&animal&extras=url_m&format=json",
  dataType: "jsonp",
  data: {
    tags : 'cat, animal, kitten',
    tag_mode : 'all',
    safe_search: 1,
    content_type: 1,
    per_page: 32,
  },
  jsonp: 'jsonFlickrApi',
});

function jsonFlickrApi(data) {
  console.info(data);
  var kittyPics = '<div class="list">'
  data.photos.photo.forEach(function (cat) {
    kittyPics += '<div class="box">';
    kittyPics += '<img src="' + cat.url_m + '" class="images"/></div>';
  });
  kittyPics += '</div>'
  $('.gallery').html(kittyPics);


  var pageNum = data.photos.page;
  $('#right-btn').click(function() {
    if(pageNum !== data.photos.pages) {
      pageNum += 1;
      $.ajax({
        url: "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=9a7911c0a69e332abff43825a0b5d6b8&extras=url_m&format=json",
        dataType: "jsonp",
        data: {
          tags : 'cat, animal, kitten',
          tag_mode : 'all',
          safe_search: 1,
          content_type: 1,
          per_page: 32,
          page: pageNum
        },
        jsonp: 'jsonFlickrApi',
      });
      scrollToTop();
    }
  });
  $('#left-btn').click(function() {
    if(pageNum !== 1) {
      pageNum -= 1;
      $.ajax({
        url: "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=9a7911c0a69e332abff43825a0b5d6b8&extras=url_m&format=json",
        dataType: "jsonp",
        data: {
          tags : 'cat, animal, kitten',
          tag_mode : 'all',
          safe_search: 1,
          content_type: 1,
          per_page: 32,
          page: pageNum
        },
        jsonp: 'jsonFlickrApi',
      });
      scrollToTop();
    }
  });
}
var timeOut;
function scrollToTop() {
  if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
    window.scrollBy(0,-50);
    timeOut=setTimeout('scrollToTop()',15);
  }
  else clearTimeout(timeOut);
}
