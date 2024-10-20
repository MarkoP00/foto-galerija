<template>
  <div class="container">
    <a href="#">
      <i class="fab fa-facebook-f"></i>
      <span>Facebook</span>
    </a>
    <a href="#">
      <i class="fa-brands fa-x-twitter"></i>
      <span>Twitter</span>
    </a>
    <a href="#">
      <i class="fab fa-instagram"></i>
      <span>Instagram</span>
    </a>
    <a href="#">
      <i class="fa-brands fa-whatsapp"></i>
      <span>Whatsapp</span>
    </a>

    <a href="#">
      <i class="fab fa-youtube yt"></i>
      <span>YouTube</span>
    </a>
  </div>
</template>

<style scoped>
.container {
  position: fixed;
  width: 65px;
  top: 30%;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.4);
  z-index: 99;
}
.container a {
  position: relative;
  display: block;
  height: 60px;
  width: 100%;
  color: white;
  line-height: 60px;
  padding-left: 25%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  text-decoration: none;
}
.container a i {
  position: absolute;
  top: 17px;
  left: 20px;
  font-size: 27px;
  margin: 0 auto;
}
.container a span {
  position: relative;
  margin-left: 30px;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 15px 13px;
  border-radius: 3px;
  transition: all 0.4s;
  opacity: 0;
  visibility: hidden;
  font-family: "Open Sans", sans-serif;
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.4);
}

.container a:nth-child(1),
.container a:nth-child(1) span,
.container a:nth-child(1) span:before {
  background: #4267b2;
}
.container a:nth-child(2),
.container a:nth-child(2) span,
.container a:nth-child(2) span:before {
  background: #333;
}
.container a:nth-child(3),
.container a:nth-child(3) span,
.container a:nth-child(3) span:before {
  background: #e1306c;
}
.container a:nth-child(4),
.container a:nth-child(4) span,
.container a:nth-child(4) span:before {
  background: #25d336;
}
/* .container a:nth-child(5),
.container a:nth-child(5) span,
.container a:nth-child(5) span:before {
  background: #333;
} */
.container a:nth-child(5),
.container a:nth-child(5) span,
.container a:nth-child(5) span:before {
  background: #ff0000;
}
.container a:hover span {
  margin-left: 55px;
  opacity: 1;
  visibility: visible;
}

@media (max-width: 425px) {
  .container {
    position: absolute;
    display: flex;
    background: #000;
    top: 95%;
    left: 12%;
  }
}
@media (max-width: 375px) {
  .container {
    display: flex;
    top: 91%;
    width: 57px;
  }
}
@media (max-width: 320px) {
  .container {
    display: none;
  }
}
</style>
