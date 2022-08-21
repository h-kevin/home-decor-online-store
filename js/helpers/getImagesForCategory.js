import productCategories from "../constants/productCategories.js";

/**
 * Generates an array of two image sources for the category specified
 * 
 * @param {string} category - The product category
 * @param {string} pathToImg - The relative path to the images directory
 * 
 * @returns {Array<string>} Array of image sources
 */

export default (category, pathToImg) => {
  if (!category || !pathToImg) {
    return [];
  }

  switch (category) {
    case productCategories.CANDLE:
      return [
        `${pathToImg}/candles2.jpg`,
        `${pathToImg}/candles3.jpg`,
      ];
    case productCategories.VASE:
      return [
        `${pathToImg}/vases1.jpg`,
        `${pathToImg}/vases2.jpg`,
      ];
    case productCategories.TEXTILE:
      return [
        `${pathToImg}/textile1.jpg`,
        `${pathToImg}/textile2.jpg`,
      ];
    case productCategories.COSMETIC:
      return [
        `${pathToImg}/cosmetic1.jpg`,
        `${pathToImg}/cosmetic2.jpg`,
      ];
    default:
      return [];
  }
};
