<template>
  <header ref="headerRef">
    <div class="logo">
      <img
        src="/images/BELI-LOGO.png"
        alt="" />
    </div>
    <ul class="headerList">
      <li><router-link to="/mainPage">Početna</router-link></li>
      <li><router-link to="/simple">O meni</router-link></li>
      <li><router-link to="/services">Usluge</router-link></li>
      <li><router-link to="/admin">Dodaj slike</router-link></li>
    </ul>
    <div class="mobileHamburger">
      <div class="icon">
        <i
          v-if="!hamburgerMenuVisible"
          class="fa-solid fa-bars"
          @click="toggleHamburger"></i>
        <i
          v-else
          class="fa-solid fa-xmark"
          @click="toggleHamburger"></i>
      </div>
      <Transition name="fade">
        <div
          class="mobileList"
          v-if="hamburgerMenuVisible"
          :class="{ menuVisible: hamburgerMenuVisible }">
          <ul>
            <li @click="() => router.push('/mainPage')">
              <a href="">Početna</a>
            </li>
            <li @click="() => router.push('/simple')">
              <router-link to="/simple">O meni</router-link>
            </li>
            <li><router-link to="/services">Usluge</router-link></li>
            <li @click="() => router.push('/admin')">
              <router-link to="/admin">Dodaj slike</router-link>
            </li>
            <div class="mobileSocial">
              <li
                @click="
                  navigation(
                    'https://www.facebook.com/Aleksandarpetrovicphotography013/'
                  )
                ">
                <a
                  href="https://www.facebook.com/Aleksandarpetrovicphotography013/"
                  ><i class="fa-brands fa-facebook"></i
                ></a>
              </li>

              <li @click="navigation('https://www.instagram.com/app09.08/')">
                <a href="https://www.instagram.com/app09.08/">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li
                @click="
                  navigation('https://www.youtube.com/@aleksandarpetrovic3531')
                ">
                <a href="https://www.youtube.com/@aleksandarpetrovic3531">
                  <i class="fab fa-youtube yt"></i>
                </a>
              </li>
            </div>
          </ul>
        </div>
      </Transition>
    </div>
  </header>
  <div class="banner">
    <img
      src="/images/bg-noLogo.jpg"
      alt="image not found" />
    <div class="banner-text">
      <h1>Vaše uspomene</h1>
      <h2>naša umetnost</h2>
      <span>
        Svaki trenutak je jedinstven, a mi smo tu da ga zabeležimo na poseban
        način.
      </span>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { RouterLink, useRouter } from "vue-router";

const router = useRouter();
const headerRef = ref(null);
const hamburgerMenuVisible = ref(false);

function toggleHamburger() {
  hamburgerMenuVisible.value = !hamburgerMenuVisible.value;
}
function navigation(link) {
  window.location.href = link;
}
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      if (!entry.isIntersecting) {
        headerRef.value.classList.add("sticky");
      } else {
        headerRef.value.classList.remove("sticky");
      }
    },
    { threshold: 0.1 }
  );

  const banner = document.querySelector(".banner");
  observer.observe(banner);
});
</script>

<style scoped>
/* Header Styles */
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.6s;
  padding: 0 50px;
  z-index: 100;
  backdrop-filter: blur(2px);
  background-color: rgba(255, 255, 255, 0.1);
}

header.sticky {
  padding: 10px 100px;
  background: rgba(0, 0, 0, 0.4);
}

header img {
  height: 100px;
  width: 160px;
  margin: 5px;
  cursor: pointer;
}

.headerList {
  display: flex;
  justify-content: center;
  align-items: center;
}

.headerList li {
  list-style: none;
}

.headerList li a {
  margin: 0 15px;
  text-decoration: none;
  color: #fff;
  letter-spacing: 2px;
  font-weight: 500;
  position: relative;
  overflow: hidden;
  transition: color 0.6s;
}

.headerList li a::before {
  content: "";
  position: absolute;
  width: 0%;
  height: 3px;
  bottom: -30%;
  left: 0;
  background-color: #ff6347;
  transition: width 0.6s;
  border-radius: 20px;
}

.headerList li a:hover::before {
  width: 100%;
}

.headerList li a:hover {
  color: #ff6347;
}

.mobileHamburger {
  display: none;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
  z-index: 101;
  transition: all 0.3s;
}

.mobileHamburger .icon {
  padding: 10px;
}

.mobileList {
  flex-direction: column;
  position: absolute;
  top: 100%;
  right: 0;
  backdrop-filter: blur(2px);
  background-color: rgba(255, 255, 255, 0.1);
  padding: 20px;
  z-index: 100;
  transform: translateX(-200px);
  transition: all 0.3s;
  animation: fade-in 0.3s;
}

.menuVisible {
  transform: translateX(0);
}

header.sticky .mobileList {
  width: 100%;
  backdrop-filter: blur(2px);
  background: rgba(0, 0, 0, 0.4);
}

.mobileList ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: center;
}

.mobileList ul li {
  margin: 10px 0;
  border: 1px solid #fff;
  padding: 10px;
  background-color: rgb(22, 147, 230, 0.4);
  border-radius: 10px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
}

.mobileList ul li a {
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  letter-spacing: 2px;
  transition: 0.3s;
}

.mobileHamburger.active + .mobileList {
  display: flex;
  animation: slideDown 0.4s ease forwards;
}
header.sticky .mobileSocial {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.mobileSocial li i {
  font-size: 20px;
  padding: 5px;
}
.banner {
  position: relative;
  width: 100%;
  height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.banner img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: fill;
  z-index: -1;
}

.banner-text {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  color: #fff;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
}

.banner-text h1 {
  font-size: 4em;
  margin-bottom: 10px;
  opacity: 0;
  animation: animate 1s ease-in-out 0.6s 1 forwards;
  /* text-shadow: 0 0 10px rgba(255, 255, 255, 1), 0 0 20px rgba(255, 255, 255, 1),
    0 0 40px rgba(255, 255, 255, 1), 0 0 80px rgba(255, 255, 255, 1),
    0 0 100px rgba(255, 255, 255, 1); */
}

.banner-text h2 {
  font-size: 3em;
  margin-bottom: 15px;
  opacity: 0;
  animation: animate 1s ease-in-out 0.9s 1 forwards;
}

.banner-text span {
  opacity: 0;
  font-size: 1.2em;
  animation: animate 1s ease-in-out 1.2s 1 forwards;
}

@media (max-width: 1441px) {
  .banner img {
    object-fit: cover;
  }
}
@media (max-width: 1024px) {
  .headerList {
    display: none;
  }
  .mobileHamburger {
    display: block;
  }
}

@media (max-width: 670px) {
  header.sticky {
    padding: 10px 10px;
  }
}

@media (max-width: 426px) {
  header {
    padding: 0 40px 0 40px;
  }
  .mobileList {
    padding: 10px 10px;
  }
  .mobileList ul li {
    border: 1px solid #fff;
    padding: 10px;
    background-color: rgb(22, 147, 230, 0.4);
    border-radius: 10px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .mobileList ul li i {
    font-size: 25px;
  }
  header.sticky .mobileList ul li {
    backdrop-filter: blur(20px);
  }
  .mobileList ul li a {
    font-size: 1rem;
  }
  header img {
    height: 100px;
    width: 140px;
  }
}

@media (max-width: 400px) {
  header img {
    height: 80px;
    width: 105px;
    margin-left: 20px;
  }
  header {
    padding: 0 10px 0 10px;
  }
  .mobileList ul li i {
    font-size: 20px;
  }
  .banner-text h1 {
    font-size: 2.5em;
  }

  .banner-text h2 {
    font-size: 2.5em;
    margin-bottom: 15px;
  }
  .banner-text span {
    font-size: 1.1em;
  }
}
@media (max-width: 325px) {
  header.sticky .mobileSocial {
    gap: 10px;
  }
  .mobileSocial li i {
    font-size: 15px;
    padding: 4px;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateX(200px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes animate {
  from {
    opacity: 0;
    transform: translate(0, 100px);
    filter: blur(33px);
  }

  to {
    opacity: 1;
    transform: translate(0);
    filter: blur(0);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
