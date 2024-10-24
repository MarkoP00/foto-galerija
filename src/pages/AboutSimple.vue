<template>
  <!-- <AnimatedBackground></AnimatedBackground> -->
  <GlobalSocial></GlobalSocial>
  <SimpleHeader></SimpleHeader>
  <section class="about">
    <div class="aboutContent">
      <img
        src="https://www.thefashionisto.com/wp-content/uploads/2023/05/Mens-Trenchcoat.jpg"
        alt="" />
      <div class="aboutWrapper">
        <div class="about-text">
          <h1>O meni</h1>
          <h5>Profesionalni <span>Fotograf</span></h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            qui, quibusdam voluptas ducimus ad incidunt blanditiis sint maiores,
            nisi, voluptatibus suscipit! Minus quasi sunt ab labore repellat
            dignissimos non corporis consequuntur suscipit?
          </p>
        </div>
        <!-- <button>Konakt</button>
        <button>Email</button> -->
      </div>
    </div>
  </section>
</template>

<script setup>
// import AnimatedBackground from "../components/AnimatedBackground.vue";
import SimpleHeader from "../components/SimpleHeader.vue";
import GlobalSocial from "../global/GlobalSocial.vue";
</script>

<style scoped>
.about {
  min-height: 950px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.aboutContent {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  padding: 20px;
  gap: 20px;
}

.about img {
  width: 50%;
  border-radius: 20px;
  border: 3px solid #008cff;
  box-shadow: 0 0 10px #008cff, 0 0 25px #008cff;
  transition: transform 0.3s ease;
}

.aboutWrapper {
  width: 50%;
  color: white;
  padding-left: 40px;
}
.about-text {
  margin-bottom: 20px;
}
.about-text h1 {
  font-size: 48px;
  margin-bottom: 10px;
}

.about-text h5 {
  font-size: 24px;
  color: #fff;
}

.about-text p {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

.about-text span {
  color: #008cff;
}

/* button {
  margin-right: 15px;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 8px;
  background: transparent;
  border: 2px solid #008cff;
  color: #008cff;
  transition: all 0.3s ease;
}

button:hover {
  background-color: #008cff;
  color: white;
  box-shadow: 0 0 10px #008cff, 0 0 30px #008cff;
} */

@media (max-width: 768px) {
  .aboutContent {
    flex-direction: column;
    text-align: center;
    max-width: 600px;
    gap: 0;
  }
  .about-text {
    margin-bottom: 0px;
  }
  .about img {
    width: 70%;
    margin-bottom: 20px;
  }

  .aboutWrapper {
    width: 100%;
    padding-left: 0;
  }

  .about-text h1 {
    font-size: 36px;
  }

  .about-text h5 {
    font-size: 20px;
  }

  .about-text p {
    font-size: 16px;
  }
}
@media screen and (max-width: 500px) {
  .about {
    min-height: 850px;
  }
}
@media (max-width: 425px) {
  .aboutContent {
    gap: 0px;
  }
  .about img {
    width: 75%;
  }
}
</style>
