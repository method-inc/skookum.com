var defaultTags = [
  {name: 'title', content: 'Skookum'},
  {name: 'description', content: 'Skookum is a full service software development company with capabilities spanning product strategy, UI/UX design, development and support.'},
  {itemProp: 'name', content: 'Skookum'},
  {itemProp: 'description', content: 'Skookum is a full service software development company with capabilities spanning product strategy, UI/UX design, development and support.'},
  /// {itemProp: 'image', content: skookumLogoUrl},
  {name: 'twitter:card', content: 'summary'},
  {name: 'twitter:site', content: '@skookum'},
  {name: 'twitter:title', content: 'Skookum'},
  {name: 'twitter:description', content: 'Skookum is a full service software development company with capabilities spanning product strategy, UI/UX design, development and support.'},
  {name: 'twitter:creator', content: '@skookum'},
  {name: 'twitter:image', content: 'http://pbs.twimg.com/profile_images/648570516459008000/26E19ffH.png'},
  {property: 'og:title', content: 'Skookum'},
  {property: 'og:type', content: 'website'},
  {property: 'og:url', content: 'http://skookum.com/'},
  {property: 'og:image', content: 'http://pbs.twimg.com/profile_images/648570516459008000/26E19ffH.png'},
  {property: 'og:description', content: 'Skookum is a full service software development company with capabilities spanning product strategy, UI/UX design, development and support.'},
  {property: 'og:site_name', content: 'Skookum'},
];

var tagType = tag => {
  if (tag.hasOwnProperty('name')) {
    return tag.name;
  }

  if (tag.hasOwnProperty('itemProp')) {
    return tag.itemProp;
  }

  return tag.property;
};


export var getDefaultTags = newTags => {
  if (!newTags) {
    return defaultTags;
  }
  for (var i = 0; i < newTags.length; i++) {
    var newTag = newTags[i];
    var addAsNew = true;
    for (var j = 0; j < defaultTags.length; j++) {

      if (tagType(newTag) === tagType(defaultTags[j])) {
        defaultTags[j] = newTag;
        addAsNew = false;
        break;
      }
    }
    if (addAsNew) {
      defaultTags.push(newTag);
    }
  }

  return defaultTags;
};
