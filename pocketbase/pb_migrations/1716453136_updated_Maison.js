/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5ewh9oouv30zp6e")

  // remove
  collection.schema.removeField("elvpsoop")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5ewh9oouv30zp6e")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "elvpsoop",
    "name": "field",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "427dbku4bbuy14g",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
