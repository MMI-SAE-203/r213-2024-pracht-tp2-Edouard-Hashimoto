/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5ewh9oouv30zp6e")

  collection.name = "maison"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5ewh9oouv30zp6e")

  collection.name = "Maison"

  return dao.saveCollection(collection)
})
