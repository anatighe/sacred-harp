function(doc) {
    if (doc.PageNum) {
        emit(doc.PageNum,doc);
    }
}