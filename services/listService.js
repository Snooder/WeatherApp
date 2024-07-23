const {List} = require("../models");

// Create a new list for a user
async function createList(userId, name, locations) {
  try {
    const newList = await List.create({
      name,
      user_id: userId,
      locations,
    });
    return newList;
  } catch (error) {
    throw new Error(`Error creating list: ${error.message}`);
  }
}

// Add a location to a list
async function addLocationToList(listId, location) {
  try {
    const list = await List.findByPk(listId);
    if (!list) {
      throw new Error("List not found");
    }
    list.locations.push(location);
    await list.save();
    return list;
  } catch (error) {
    throw new Error(`Error adding location to list: ${error.message}`);
  }
}

// Remove a location from a list
async function removeLocationFromList(listId, location) {
  try {
    const list = await List.findByPk(listId);
    if (!list) {
      throw new Error("List not found");
    }
    list.locations = list.locations.filter((loc) => loc !== location);
    await list.save();
    return list;
  } catch (error) {
    throw new Error(`Error removing location from list: ${error.message}`);
  }
}

// Get all lists for a user
async function getLists(userId) {
  try {
    const lists = await List.findAll({
      where: {user_id: userId},
    });
    return lists;
  } catch (error) {
    throw new Error(`Error fetching lists: ${error.message}`);
  }
}

module.exports = {
  createList,
  addLocationToList,
  removeLocationFromList,
  getLists,
};
