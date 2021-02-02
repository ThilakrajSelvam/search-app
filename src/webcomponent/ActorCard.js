class ActorCard extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  render() {
    this.shadow.innerHTML = `
    <style>
      .card-container {
        display: flex;
        flex-direction: column;
        max-width: 250px;
        height: 400px;
        background-color: #ffffff;
        border-radius: 20px;
        margin: 20px;
        box-shadow: 0 7px 30px -10px rgba(150,170,180,0.5);
      }
  
      .image-container {
        flex: 1;
        width: 100%;
        height: 300px;
      }
  
      img {
        width: 100%;
        height: 100%;
        object-fit: fill;
        border-radius: 20px;
      }
  
      .content-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        padding: 10px;
      }
    </style>
    <div class="card-container">
      <div class="image-container">
        <img src=${this.img} />
      </div>
      <div class="content-container">
        <div style="font-size: 24px">${this.name}</div>
        <p>${this.nickname}</p>
      </div>
    </div>
  `;
  }

  connectedCallback() {
    this.name = this.getAttribute("name");
    this.img = this.getAttribute("img");
    this.nickname = this.getAttribute("nickname");
    this.render();
  }
}

window.customElements.get("actor-card") ||
  window.customElements.define("actor-card", ActorCard);
