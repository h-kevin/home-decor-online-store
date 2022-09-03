const sectionHeader = (text, customClassName) => {
  const markup = `
    <h1 class="common-section-header ${customClassName || ''}">
      ${text}
    </h1>
  `;

  const placeholder = document.createElement('div');
  placeholder.innerHTML = markup;

  return placeholder.children[0];
};

export default sectionHeader;
