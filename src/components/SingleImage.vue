<template>
  <section @click="props.onClose">
    <main @click.stop>
      <div
        class="image-container"
        :style="containerStyle">
        <img
          :src="currentImage"
          :key="currentImage"
          class="fade"
          alt="Selected Image" />
        <div class="swipeButtons">
          <div
            class="left"
            @keydown.arrow-left="nextImage"
            @click="prevImage">
            <i class="fa-solid fa-chevron-left"></i>
          </div>
          <div
            class="right"
            @keydown.arrow-right="nextImage"
            @click="nextImage">
            <i class="fa-solid fa-chevron-right"></i>
          </div>
        </div>
        <div class="closeWindow">
          <i
            class="fa-solid fa-xmark"
            @click="props.onClose"></i>
        </div>
      </div>
    </main>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { watch } from "vue";
import { onMounted } from "vue";

const props = defineProps({
  selectedImageURL: {
    type: String,
    required: true,
  },
  images: {
    type: Array,
    required: true,
  },
  onClose: {
    type: Function,
    required: true,
  },
});

const currentImageIndex = ref(
  props.images.findIndex((img) => img.imageURL === props.selectedImageURL)
);
const currentImage = ref(props.images[currentImageIndex.value].imageURL);

function prevImage() {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--;
  } else {
    currentImageIndex.value = props.images.length - 1;
  }
  currentImage.value = props.images[currentImageIndex.value].imageURL;
}

function nextImage() {
  if (currentImageIndex.value < props.images.length - 1) {
    currentImageIndex.value++;
  } else {
    currentImageIndex.value = 0;
  }
  currentImage.value = props.images[currentImageIndex.value].imageURL;
}
const containerStyle = ref({
  width: "auto",
  height: "auto",
});

const updateContainerStyle = (imgSrc) => {
  const img = new Image();
  img.src = imgSrc;

  img.onload = () => {
    const aspectRatio = img.width / img.height;

    const isSmallScreen = window.innerWidth <= 430;

    if (aspectRatio > 1.33) {
      containerStyle.value = {
        overflow: "hidden",
      };
    } else {
      containerStyle.value = {
        width: "600px",
        height: isSmallScreen ? "60vh" : "80vh",
      };
    }
  };
};
onMounted(() => {
  updateContainerStyle(currentImage.value);
});

watch(currentImage, (newImage) => {
  updateContainerStyle(newImage);
});
</script>

<style scoped>
section {
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s ease-in-out;
}

.image-container {
  min-width: 200px;
  max-width: 1200px;
  min-height: 350px;
  max-height: 750px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out;
  position: relative;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 1;
  transition: opacity 0.5s ease-in-out;
}

img.fade {
  opacity: 0;
  animation: fadeIn 0.5s forwards ease-in-out;
}

.swipeButtons {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.closeWindow {
  position: absolute;
  width: 100%;
  height: 20%;
  inset: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 15px;
}

.left,
.right,
.closeWindow i {
  background: rgba(0, 0, 0, 0.4);
  padding: 10px;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s;
}

.left:hover,
.right:hover,
.closeWindow i:hover {
  background: rgba(0, 0, 0, 0.8);
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

@media (max-width: 769px) {
  .image-container {
    max-width: 500px;
    min-height: 250px;
  }
  .image-container img {
    border-radius: 10px;
  }
  .closeWindow {
    padding: 20px;
  }
}
@media (max-width: 700px) {
  .image-container {
    max-width: 430px;
    min-height: 0px;
  }
}

@media (max-width: 430px) {
  .image-container {
    max-width: 380px;
    min-height: 0px;
  }
  .swipeButtons {
    padding: 10px;
  }
  .closeWindow {
    padding: 10px;
  }
  .left,
  .right,
  .closeWindow i {
    padding: 5px;
  }
}

@media (max-width: 376px) {
  .image-container {
    max-width: 350px;
  }
}

@media (max-width: 325px) {
  .image-container {
    max-width: 300px;
    min-height: 0px;
  }
  .closeWindow {
    top: 5%;
  }
}
</style>
