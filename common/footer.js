const footer = () => {
  const markup = `
    <div class="footer">
      <h1 class="logo">MIRACLE</h1>
      <div class="catalogue footer-column">
        <p class="footer-section-header">Catalogue</p>
        <a
          class="link"
          href="#"
        >
          Candles
        </a>
        <a
          class="link"
          href="#"
        >
          Vases
        </a>
        <a
          class="link"
          href="#"
        >
          Textile
        </a>
        <a
          class="link"
          href="#"
        >
          Cosmetic
        </a>
        <a
          class="link"
          href="#"
        >
          All products
        </a>
      </div>
      <div class="for-buyers footer-column">
        <p class="footer-section-header">For buyers</p>
        <a
          class="link"
          href="#"
        >
          About us
        </a>
        <a
          class="link"
          href="#"
        >
          How to place an order
        </a>
        <a
          class="link"
          href="#"
        >
          Discounts
        </a>
        <a
          class="link"
          href="#"
        >
          Instagram
        </a>
      </div>
      <div class="subscribe-to-newsletter footer-column">
        <p class="footer-section-header">Subscribe to our newsletter</p>
        <form class="newsletter-subscription-form">
          <div class="form-group">
            <input
              type="email"
              name="email"
              class="input"
              placeholder="E-mail"
            />
            <span class="submit-action material-icons">arrow_forward_ios</span>
          </div>
        </form>
        <a
          class="link"
          href="#"
        >
          Privacy policy
        </a>
        <a
          class="link"
          href="#"
        >
          Contract offers
        </a>
      </div>
    </div>
  `;

  const placeholder = document.createElement('div');
  placeholder.innerHTML = markup;

  return placeholder.children[0];
};

export default footer;
