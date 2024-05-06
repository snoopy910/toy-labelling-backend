const DEFAULT_DOCUMENTS = require("../consts/documents");

exports.migrate = (db) => {
  const Document = db.documents;
  DEFAULT_DOCUMENTS.map((document) => {
    const data = {
      title: document.title,
      body: document.body,
      url: document.url,
      label: [],
    };
    Document.create(data);
  });
};
