
module.exports = {

  views: {
    titles: {
      params: {},
      map: function(doc) {
        if (doc.type === 'Article') {
          emit(doc._id, doc.title);
        }
      },
      layout: function(cm, result, cb) {
        cb(null, result.rows.map(function(doc) {
          return doc.value;
        }));
      }
    }
  }
  
};