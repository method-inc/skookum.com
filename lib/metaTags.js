var getDefaultTags = () => {
  return [
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
};

var tagType = tag => {
  if (tag.hasOwnProperty('name')) {
    return tag.name;
  }

  if (tag.hasOwnProperty('itemProp')) {
    return tag.itemProp;
  }

  return tag.property;
};

var sameKeys = (newTag, oldTag) => {
  var newKeys = Object.keys(newTag).sort();
  var oldKeys = Object.keys(oldTag).sort();
  return JSON.stringify(newKeys) === JSON.stringify(oldKeys);
};


export var setDefaultTags = newTags => {
  var defaultTags = getDefaultTags();
  if (!newTags) {
    return defaultTags;
  }
  for (var i = 0; i < newTags.length; i++) {
    var newTag = newTags[i];
    var addAsNew = true;
    if (typeof newTag.content !== 'undefined' && newTag.content) {
      for (var j = 0; j < defaultTags.length; j++) {
        var oldTag = defaultTags[j];
        if (sameKeys(newTag, oldTag) && tagType(newTag) === tagType(oldTag)) {
          defaultTags[j] = newTag;
          addAsNew = false;
          break;
        }
      }
      if (addAsNew) {
        defaultTags.push(newTag);
      }
    }
  }

  return defaultTags;
};
