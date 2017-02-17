$.ajax({
  url: "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=9a7911c0a69e332abff43825a0b5d6b8&extras=url_m&format=json",
  // url: "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=9a7911c0a69e332abff43825a0b5d6b8&tags=cats&animal&extras=url_m&format=json",
  dataType: "jsonp",
  data: {
    tags : 'cat, animal, photograph, kitten',
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


  //offset photos so they are more centered
  //I know this is probably wrong but it's a start
  // var width = document.getElementsByClassName('images').width;
  // var height = document.getElementsByClassName('images').height;
  // function offsets () {
  //   if (width >= 500) {
  //     offsetX = width/2;
  //   } else if (height >= 500) {
  //     offsetY = height/2;
  //   }
  // }


  //loop through each page?
  //move these into their own functions
  var pageNum = data.photos.page;
  console.log(data.photos.pages)
  $('#right-btn').click(function() {
    if(pageNum !== data.photos.pages) {
      //move to the next page
      pageNum += 1;
      console.log(pageNum);
    }
  });
  $('#left-btn').click(function() {
    if(pageNum !== 1) {
      //move to the previous page
      pageNum -= 1;
      console.log(pageNum);
    }
  });
}
