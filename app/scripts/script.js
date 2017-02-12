// $.ajax({
//   url: "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=9a7911c0a69e332abff43825a0b5d6b8&tags=cat&extras=url_m&format=json",
//   dataType: "jsonp",
//   jsonp: 'jsonFlickrApi',
// });
//
// function jsonFlickrApi(data) {
//   console.info(data);
//   data.photos.photo.forEach(function (cat) {
//     var img = document.createElement('img');
//     img.src = cat.url_m;
//     document.body.appendChild(img);
//   });
// }
