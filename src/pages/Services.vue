<template>
  <!-- <AnimatedBackground></AnimatedBackground> -->
  <GlobalSocial></GlobalSocial>
  <SimpleHeader></SimpleHeader>
  <section class="about">
    <div class="aboutContent">
      <FoldingCard></FoldingCard>
      <div class="aboutWrapper">
        <div class="about-text">
          <h1>Usluge</h1>
          <h5>Aleksandar <span>Petrović</span></h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            qui, quibusdam voluptas ducimus ad incidunt blanditiis sint maiores,
            nisi, voluptatibus suscipit! Minus quasi sunt ab labore repellat
            dignissimos non corporis consequuntur suscipit?
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// import AnimatedBackground from "../components/AnimatedBackground.vue";
import SimpleHeader from "../components/SimpleHeader.vue";
import FoldingCard from "../components/FoldingCard.vue";
</script>

<style scoped>
.about {
  min-height: 100vh;
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

/* .about img {
  width: 40%;
  border-radius: 20px;
  border: 3px solid #008cff;
  box-shadow: 0 0 10px #008cff, 0 0 25px #008cff;
  transition: transform 0.3s ease;
} */

.aboutWrapper {
  width: 50%;
  color: white;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  padding: 20px;
  border: 1px solid #008cff;
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
  margin-top: 20px;
}

.about-text span {
  color: #008cff;
}
.socialButtons {
  display: flex;
  align-items: center;
  gap: 20px;
}

@media (max-width: 768px) {
  .about {
    margin-top: 60px;
  }
  .aboutContent {
    flex-direction: column;
    text-align: center;
    max-width: 600px;
    gap: 10px;
  }
  .about-text {
    margin-bottom: 0px;
  }
  /* .about img {
    width: 70%;
    margin-bottom: 20px;
  } */

  .aboutWrapper {
    width: 100%;
    padding: 15px;
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
  .socialButtons {
    justify-content: center;
    margin-top: 10px;
  }
}
@media (max-width: 500px) {
  .aboutContent {
    flex-direction: column;
    text-align: center;
    max-width: 600px;
    gap: 30px;
    margin-top: 40px;
  }

  /* .about img {
    width: 75%;
  } */
}
@media (max-width: 425px) {
  .aboutContent {
    flex-direction: column;
    text-align: center;
    max-width: 600px;
    gap: 30px;
    margin-top: 00px;
  }
}
</style>
