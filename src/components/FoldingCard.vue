<template>
  <div class="card">
    <div class="imgBx">
      <img
        src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
        alt="" />
    </div>
    <div class="content">
      <div class="details">
        <h2>Aleksandar Petrovic <br /><span>Profesionalni Fotograf</span></h2>
        <div class="data">
          <!-- <h3>342 <br /><span>Posts</span></h3>
          <h3>120k <br /><span>Followers</span></h3>
          <h3>285 <br /><span>Following</span></h3> -->
          <h3>KONTAKT</h3>
        </div>
        <div class="actionBtn">
          <a
            class="icon"
            href="https://www.facebook.com/Aleksandarpetrovicphotography013/">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a
            class="icon"
            href="https://www.instagram.com/app09.08/">
            <i class="fab fa-instagram"></i>
          </a>
          <a
            class="icon"
            href="https://www.youtube.com/@aleksandarpetrovic3531">
            <i class="fab fa-youtube yt"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  position: relative;
  width: 350px;
  /* height: 190px; */
  height: 450px;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  box-shadow: 0 35px 80px rgba(0, 0, 0, 0.15);
  transition: 0.5s;
  border: 1px solid #008cff;
}

.imgBx {
  position: absolute;
  /* width: 150px;
  height: 150px; */
  width: 250px;
  height: 250px;
  background-color: #fff;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 20px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.45);
  overflow: hidden;
  transition: all 0.5s;
}
.imgBx img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
/* .card:hover .imgBx {
  width: 250px;
  height: 250px;
} */
.card .content {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
}
.card .content .details {
  padding: 40px;
  text-align: center;
  width: 100%;
  transition: 0.5s;
  /* transform: translateY(150px); */
}
/* .card:hover .content .details {
  transform: translateY(0px);
} */
.card .content .details h2 {
  font-size: 1.25em;
  font-weight: 600;
  color: #008cff;
  line-height: 1.2em;
  font-weight: 700;
}
.card .content .details h2 span {
  font-size: 0.75em;
  font-weight: 500;
  color: #fff;
}
.card .content .details .data {
  display: flex;
  justify-content: center;
  margin: 30px 0;
}
.card .content .details .data h3 {
  font-size: 1em;
  color: #fff;
  line-height: 1.2em;
  font-weight: 600;
}
.card .content .details .data h3 span {
  font-size: 0.85em;
  font-weight: 400;
  opacity: 0.5;
}
.card .content .details .actionBtn {
  display: flex;
  justify-content: space-between;
  /* gap: 20px; */
}

.card .content .details .actionBtn:nth-child(2) {
  border: 1px solid #999;
  color: #999;
  background-color: #fff;
}

.icon {
  height: 50px;
  width: 50px;
  border: 1px solid #008cff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
  cursor: pointer;
  text-decoration: none;
}
.icon i {
  font-size: 25px;
  color: #008cff;
}
.icon:hover {
  color: #ffffff;
  background: #008cff;
  border: 1px solid #008cff;
  text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff;
  box-shadow: 0 0 5px #008cff, 0 0 20px #008cff, 0 0 50px #008cff,
    0 0 100px #008cff;
}

@media (max-width: 768px) {
  .imgBx {
    height: 200px;
    width: 200px;
  }
  .card {
    height: 350px;
  }
  .card .content .details .data {
    margin: 10px 0;
  }
  .card .content .details .actionBtn {
    justify-content: center;
    gap: 30px;
    margin-top: 10px;
  }
  .card .content .details {
    padding: 30px;
  }
}

@media (max-width: 426px) {
  .imgBx {
    height: 150px;
    width: 150px;
  }
  .card {
    height: 250px;
    width: 300px;
  }
  .card .content .details .data {
    margin: 0px;
  }
  .card .content .details .actionBtn {
    justify-content: center;
    gap: 30px;
    margin-top: 10px;
  }
  .data h3 {
    margin-top: 5px;
  }
  .card .content .details {
    padding: 10px;
  }
  .icon {
    height: 40px;
    width: 40px;
  }
  .icon i {
    font-size: 20px;
  }
}
</style>
