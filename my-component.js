// Import the LitElement base class and html helper function
import { LitElement, html, css } from "lit-element";
import "fa-icons";

// Extend the LitElement base class
class MyComponent extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        color: var(--my-component-text-color);
        background: var(--my-component-background-color);
        font-family: var(--my-component-font-family);
      }

      .directory__wrapper--card {
        background-color: orange;
        width: var(--my-component-width, 210px);
        height: var(--my-component-height, 16rem);
        border: #ff7900 solid 5px;
        background-color: #ffffff;
        margin: 1.5rem 0.7rem;
        padding: 1.5rem 0;
        text-align: center;
        border-radius: 1rem;
      }

      .main__directory--link {
        text-decoration: none;
      }

      .card__wrapper {
        width: 150px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .card__icon {
        font-size: 5.5rem;
        padding: 0 0 1rem;
        color: #ff7900;
      }

      .card__title {
        color: #212121;
        padding-bottom: 0.75rem;
        font-size: 24px;
        margin: 0 auto;
      }

      .card__description {
        color: #575756;
        margin: 0 auto;
      }
    `;
  }

  render() {
    return html`
      <article class="directory__wrapper--card">
        <a
          class="main__directory--link"
          target="blank"
          href="http://kairosnav.westeurope.cloudapp.azure.com:8081/Account/Principal.aspx"
        >
          <div class="card__wrapper">
            <div class="card__icon">
              <fa-icon
                class="far fa-clock"
                color="#ff7900"
                size="88px"
              ></fa-icon>
            </div>
            <h3 class="card__title">
              Kaihoras
            </h3>
            <p class="card__description">
              Registra tus horas
            </p>
          </div>
        </a>
      </article>
    `;
  }
}
// Register the new element with the browser.
customElements.define("my-component", MyComponent);
