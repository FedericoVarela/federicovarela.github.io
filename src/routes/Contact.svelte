<style>
  div {
    display: grid;
    grid-template-areas:
      "form aside-head"
      "form aside-cont";
    grid-column-gap: 2rem;
    grid-template-rows: 1fr 5fr;
    width: 70%;
  }
  form {
    grid-area: form;
    display: flex;
    flex-direction: column;
  }
  input,
  textarea {
    background-color: var(--bg-dark);
    color: var(--text);
    padding: 10px 90px 10px 20px;
    margin: 10px;
    border-radius: 14px;
  }
  ::placeholder {
    color: var(--text-secondary);
  }

  textarea {
    resize: none;
  }

  aside {
    grid-area: aside-cont;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-around;
    text-align: center;
  }
  h3 {
    color: var(--text);
    grid-area: aside-head;
    font-size: 150%;
    white-space: nowrap;
  }
  img {
    filter: grayscale(100%) brightness(150%);
    transition: filter ease-in-out 200ms;
    width: min(10vw, 99px);
    min-width: 65px;
  }
  img:hover {
    filter: grayscale(0%) brightness(100%);
  }

  button {
    margin: 10px;
    max-width: 700px;
  }
  button:hover {
    background: var(--accent-hover);
  }

  h1, p {
    margin-bottom: 30px;
    margin-left: 10px;
  }

  @media only screen and (max-width: 683px) {
    div {
      grid-template-areas:
        "   form   "
        "aside-head"
        "aside-cont";
      grid-template-rows: 3fr .5fr 2fr;

    }
    aside {
      flex-direction: row;
    }
  }
  a.email {
    color: var(--accent);
  }
</style>

<h1>Contact Me</h1>
  <p>
    Send me a message here or email me at <a class="email" href="mailto:federicovr02@gmail.com	">federicovr02@gmail.com</a>
  </p>
<div>
  <form>
    <input type="text" name="_name" placeholder="Your name" />
    <input type="email" name="_email" placeholder="Your email" />
    <textarea
      name="_message"
      cols="30"
      rows="10"
      placeholder="Your message here..." />
    <button type="submit" class="main-action">SUBMIT</button>
  </form>

  <h3>Also find me at...</h3>
  <aside>
    <a rel="nofollow" href="https://github.com/FedericoVarela">
      <img src="./svg/github.svg" alt="My Github" />
    </a>
    <a rel="nofollow" href="https://dev.to/federicovarela">
      <img src="./svg/devto.svg" alt="My dev.to profile" />
    </a>
    <a
      rel="nofollow"
      href="https://stackoverflow.com/users/11141825/federico-varela">
      <img src="./svg/stack.svg" alt="My StackOverflow" />
    </a>
  </aside>
</div>
