$.ajax({
  url: "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=9a7911c0a69e332abff43825a0b5d6b8&extras=url_m&format=json",
  // url: "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=9a7911c0a69e332abff43825a0b5d6b8&tags=cats&animal&extras=url_m&format=json",
  dataType: "jsonp",
  data: {
    tags : 'cat, cats, animal, photograph, kitty, kitten',
    tag_mode : 'all',
    safe_search: 1,
    content_type: 1,
    per_page: 30
  },
  jsonp: 'jsonFlickrApi',
});

function jsonFlickrApi(data) {
  console.info(data);
  data.photos.photo.forEach(function (cat) {
    // var img = document.createElement('img');
    // img.src = cat.url_m;
    // document.body.appendChild(img);
  });
}
