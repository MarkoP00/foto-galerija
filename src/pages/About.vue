<template>
  <AnimatedBackground></AnimatedBackground>
  <SimpleHeader></SimpleHeader>
  <GlobalSocial></GlobalSocial>
  <section>
    <div class="gridMain">
      <div class="first box">
        <div class="firstImage">
          <img
            src="https://johnlewis.scene7.com/is/image/johnlewis/suit-styling-lead-thumb"
            alt="" />
        </div>
        <div class="firstText">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi,
            adipisci.
          </p>
        </div>
      </div>

      <div class="second">
        <div class="personBg">
          <img
            src="https://louisphilippe.abfrl.in/blog/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-11-at-3.32.53-PM.jpeg"
            alt="" />
        </div>
      </div>
      <div class="third box">
        <div class="secondSkills">
          <div class="title">
            <h2>Usluge</h2>
          </div>
          <div class="list">
            <ul>
              <li>Portreti</li>
              <li>Rođendani</li>
              <li>Utaknice</li>
              <li>Personal Photo-shooting</li>
              <li>FHD - Slike</li>
              <li>Slikanje događaja</li>
            </ul>
          </div>
          <div class="contactButton">
            <button>Kontakt</button>
          </div>
        </div>
      </div>
      <div class="forth box">
        <div class="forthTitle">
          <h3>Aleksandar Petrovic <br />Fotograf</h3>
        </div>
        <div class="forthText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          est? Aspernatur nam odio necessitatibus amet, modi autem officiis ad
          aut! Nobis beatae facilis velit consequuntur sunt hic vero totam
          eaque, consectetur impedit!
        </div>
        <div class="forthCircles">
          <div class="icon">
            <a href="">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
          </div>
          <div class="icon">
            <a href="">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </div>
          <div class="icon">
            <a href="">
              <i class="fa-regular fa-envelope"></i>
            </a>
          </div>
        </div>
        <div class="forthImage">
          <img
            src="https://bandofoutsiders.com/wp-content/uploads/2024/01/Basic-Fashion-Rules-2.jpg"
            alt="" />
        </div>
        <div class="forthText">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum porro
          doloribus, obcaecati facere iure deserunt?
        </div>
        <div class="forthButton"><button>Kontakt</button></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AnimatedBackground from "../components/AnimatedBackground.vue";
import GlobalSocial from "../global/GlobalSocial.vue";
import SimpleHeader from "../components/SimpleHeader.vue";
</script>

<style scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
}
.first img,
.forth img {
  height: 200px;
}
.gridMain {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: repeat(5, 1fr);
  gap: 10px;
  width: 1200px;
  height: 85%;
  padding: 20px;
  margin-top: 80px;
}
.box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 15px;
}
.first {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid #9c9b9b;
  border-radius: 10px;
  color: #fff;
  text-align: center;
}

.second {
  grid-column: 2 / 3;
  grid-row: 1 / 6;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid #9c9b9b;
  border-radius: 10px;
  color: #fff;
}

.third {
  grid-column: 1 / 2;
  grid-row: 3 / 6;
  background: #fff;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid #9c9b9b;
  color: #fff;
}

.forth {
  grid-column: 3 / 4;
  grid-row: 1 / 6;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid #9c9b9b;
  border-radius: 10px;
  color: #fff;
}
/*  */

.personBg {
  width: 100%;
  height: 100%;
}
.personBg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}
.forth img,
.first img {
  border-radius: 20px;
}

.third {
  text-align: center;
  justify-content: space-between;
}
.forth {
  text-align: center;
  gap: 20px;
}

.forthCircles {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
}

.forthCircles .icon {
  height: 50px;
  width: 50px;
  border: 1px solid #008cff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
}

.icon i {
  font-size: 2rem;
  color: #008cff;
}

.third {
  display: flex;
  justify-content: center;
  row-gap: 20px;
}
.title h2 {
  margin-bottom: 20px;

  color: #008cff;
  text-transform: uppercase;
  letter-spacing: 2px;
}
.forthTitle h3 {
  color: #008cff;
}
.list ul {
  list-style-type: none;
  padding: 0;
}
.list li {
  font-size: 1.2rem;
  padding: 10px 0;
  color: #fff;
  border-bottom: 1px solid #ddd;
  padding: 10px;
}
.list li:last-child {
  border-bottom: none;
}
.contactButton {
  margin-top: 20px;
}

button {
  padding: 10px 20px;
  text-transform: uppercase;
  border-radius: 8px;
  font-size: 17px;
  font-weight: 500;
  color: #ffffff80;
  text-shadow: none;
  background: transparent;
  cursor: pointer;
  box-shadow: transparent;
  border: 1px solid #008cff;
  color: #008cff;
  transition: 0.5s ease;
  user-select: none;
}

button:hover,
:focus,
.icon:hover {
  color: #ffffff;
  background: #008cff;
  border: 1px solid #008cff;
  text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff;
  box-shadow: 0 0 5px #008cff, 0 0 20px #008cff, 0 0 50px #008cff,
    0 0 100px #008cff;
}

.icon:hover i {
  color: #fff;
}

@media (max-width: 1440px) {
  .gridMain {
  }
}
</style>
