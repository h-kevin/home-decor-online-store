const button = (text, customClassName) => {
  const markup = `
    <button class="common-button ${customClassName || ''}">
      ${text}
    </button>
  `;

  const placeholder = document.createElement('div');
  placeholder.innerHTML = markup;

  return placeholder.children[0];
};

export default button;
