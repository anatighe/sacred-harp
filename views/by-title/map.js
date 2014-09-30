function(doc) {
    if (doc.Title) {
        emit(doc.Title,doc);
    }
}