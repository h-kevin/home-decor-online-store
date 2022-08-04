/**
 * Assigns an svg file to an icon html node.
 * 
 * @param {Element | null} iconNode The icon node to be assigned
 * @param {string} iconName The name of the svg icon from the img folder (without extension)
 * 
 * @returns {void}
 */

export default async (iconNode, iconName) => {
  if (iconNode && iconName) {
    const svgFileContents = await fetch(`../../img/${iconName}.svg`);
    let svgHtml = await svgFileContents.text();
    svgHtml = svgHtml.replaceAll(/height="\d+px"/g, '');
    svgHtml = svgHtml.replaceAll(/width="\d+px"/g, '');
    svgHtml = svgHtml.replaceAll(/viewBox="[\d\s]+"/g, '');
    svgHtml = svgHtml.replaceAll(/fill="#[A-Fa-f0-9]+"/g, '');

    iconNode.innerHTML = svgHtml;
  }
};
