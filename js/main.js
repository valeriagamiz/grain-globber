var $ul = $('ul');

grains.forEach(function (grain) {
  var $name = $('<h2>');
  var $img = $('<img>');
  var $desc = $('<p>');
  var $li = $('<li>');

  $img.attr('src', 'images/' + grain.img);
  $desc.html(grain.desc);
  $name.html(grain.name);

  $li.append($img);
  $li.append($name);
  $li.append($desc);
  $ul.append($li);
});
