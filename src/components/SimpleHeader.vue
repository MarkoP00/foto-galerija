<template>
  <header ref="headerRef">
    <div class="logo">
      <img
        src="/images/BELI-LOGO.png"
        alt=""
        @click="() => router.push('/mainPage')" />
    </div>
    <ul class="headerList">
      <li><router-link to="/">Početna</router-link></li>
      <li><router-link to="/simple">O meni</router-link></li>
      <li><router-link to="/services">Usluge</router-link></li>
      <!-- <li><a href="">Kontakt</a></li> -->
      <!-- <li><a href="">Galerija</a></li> -->
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
              <li>
                <a
                  href="https://www.facebook.com/Aleksandarpetrovicphotography013/"
                  ><i class="fa-brands fa-facebook"></i
                ></a>
              </li>
              <li>
                <a href="https://www.instagram.com/app09.08/">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li>
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
</template>

<script setup>
import { ref } from "vue";
import { RouterLink, useRouter } from "vue-router";

const router = useRouter();
const headerRef = ref(null);
const hamburgerMenuVisible = ref(false);

function toggleHamburger() {
  hamburgerMenuVisible.value = !hamburgerMenuVisible.value;
}
</script>

<style scoped>
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
  background-color: rgba(0, 0, 0, 0.4);
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
  padding: 20px;
  width: 100%;
  backdrop-filter: blur(2px);
  background: rgba(0, 0, 0, 0.4);
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
.mobileSocial {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.mobileSocial li i {
  font-size: 25px;
  padding: 5px;
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
  header.sticky .mobileList ul li {
    backdrop-filter: blur(20px);
    background-color: rgba(255, 255, 255, 0.1);
  }
  .mobileList ul li a {
    font-size: 1rem;
  }
  header img {
    height: 100px;
    width: 140px;
  }
  .mobileSocial li i {
    font-size: 20px;
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
}
@media (max-width: 325px) {
  .mobileSocial {
    gap: 10px;
  }
  .mobileSocial li i {
    font-size: 20px;
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
