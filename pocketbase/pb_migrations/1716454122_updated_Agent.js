/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("427dbku4bbuy14g")

  collection.name = "agent"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("427dbku4bbuy14g")

  collection.name = "Agent"

  return dao.saveCollection(collection)
})
