<style>
  div.container {
    position: fixed;
    width: 105vw;
    height: 100vh;
    margin: 0 auto;
    top: 3em;
    left: -10px;
    z-index: -99;
    background: radial-gradient(
      61.49% 60.79% at 50% 60.79%,
      #81ecf2 42.16%,
      #589ef0 100%
    );
  }

  div.agua {
    position: absolute;
    background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url("../images/agua.png");
    height: 299px;
    filter: url("#turbulence");
    bottom: 0;
    width: 105vw;
    margin: 0 auto;
    z-index: -1;
    float: right;
  }

  div.tierra {
    position: absolute;
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url("../images/tierra.png");
    background-position: 8px -12px;
    height: calc(100% - 279px);
    width: 105%;
    z-index: 1;
    top: 0;
  }

  div.hielo {
    position: absolute;
    background: url("../images/hielo.png");
    z-index: 2;
    width: 100%;
    height: 80px;
    left: 0;
    bottom: 201px;
  }
</style>

<div class="container">
  <div class="agua" />
  <div class="tierra" />
  <div class="hielo" />
  <div class="nube-uno" />
  <div class="nube-dos" />
</div>
<svg>
  <filter id="turbulence" x="0" y="0" width="100%" height="100%">
    <feTurbulence
      id="sea-filter"
      numOctaves="3"
      seed="2"
      baseFrequency="0.02 0.05" />
    <feDisplacementMap scale="20" in="SourceGraphic" />
    <animate
      xlink:href="#sea-filter"
      attributeName="baseFrequency"
      dur="60s"
      keyTimes="0;0.5;1"
      values="0.02 0.06;0.04 0.08;0.02 0.06"
      repeatCount="indefinite" />
  </filter>
</svg>
