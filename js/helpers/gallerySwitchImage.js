/**
 * Gets an array of gallery items and a direction.
 * Scrolls to the next element in the given direction and if there is no
 * next element, scrolls to the last element in the opposite direction.
 * 
 * @param {Array<Element>} galleryItems - The elements of the gallery
 * @param {string} direction - The wanted scroll direction
 */

export default (galleryItems, direction) => {
  if (!direction || galleryItems?.length === 1) {
    return;
  }

  const currentActiveItemIndex = galleryItems.findIndex(item => item.classList.contains('active'));
  const currentActiveItem = galleryItems.find(item => item.classList.contains('active'));

  if (currentActiveItemIndex !== -1) {
    if (direction === 'left') {
      const nextItem = galleryItems[currentActiveItemIndex - 1];
      const lastItem = galleryItems[galleryItems.length - 1];
      currentActiveItem.classList.remove('active');

      if (nextItem) {
        nextItem.classList.add('active');
        nextItem.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'end',
        });
      } else {
        lastItem.classList.add('active');
        lastItem.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'end',
        });
      }
    } 
    
    if (direction == 'right') {
      const nextItem = galleryItems[currentActiveItemIndex + 1];
      const firstItem = galleryItems[0];
      currentActiveItem.classList.remove('active');

      if (nextItem) {
        nextItem.classList.add('active');
        nextItem.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start',
        });
      } else {
        firstItem.classList.add('active');
        firstItem.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start',
        });
      }
    }
  }
};
