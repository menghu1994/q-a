<template>
  <section class="wrapper">
    <div class="container">

      <div id="scene" class="scene" data-hover-only="false">


        <div class="circle" data-depth="1.2"></div>

        <div class="one" data-depth="0.9">
          <div class="content">
            <span class="piece"></span>
            <span class="piece"></span>
            <span class="piece"></span>
          </div>
        </div>

        <div class="two" data-depth="0.60">
          <div class="content">
            <span class="piece"></span>
            <span class="piece"></span>
            <span class="piece"></span>
          </div>
        </div>

        <div class="three" data-depth="0.40">
          <div class="content">
            <span class="piece"></span>
            <span class="piece"></span>
            <span class="piece"></span>
          </div>
        </div>

        <p class="p404" data-depth="0.50">404</p>
        <p class="p404" data-depth="0.10">404</p>

      </div>

      <div class="text">
        <article>
          <p>Uh oh! Looks like you got lost. <br>Go back to the homepage if you dare!</p>
          <button>i dare!</button>
        </article>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
$font-01: "Barlow",
sans-serif;
$font-02: "Barlow Condensed",
sans-serif;

$m-01: #FB8A8A;
$m-02: #FFEDC0;

$bg-01: #695681;
$bg-02: #36184F;
$bg-03: #32243E;

$g-01: linear-gradient(90deg, #FFEDC0 0%, #FF9D87 100%);
$g-02: linear-gradient(90deg, #8077EA 13.7%, #EB73FF 94.65%);

$cubic: cubic-bezier(0.4, 0.35, 0, 1.53);
$cubic2: cubic-bezier(0.18, 0.89, 0.32, 1.15);

$circleShadow: inset 5px 20px 40px rgba($bg-02, 0.25),
inset 5px 0px 5px rgba($bg-03, 0.3),
inset 5px 5px 20px rgba($bg-03, 0.25),
2px 2px 5px rgba(white, 0.2);


@mixin sm {
  @media screen and (max-width: 799px) {
    @content;
  }
}

@mixin height {
  @media screen and (max-height: 660px) {
    @content;
  }
}

.logo {
  position: fixed;
  z-index: 5;
  bottom: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);

  img {

    width: 55%;
    height: 55%;
    transform: translateY(-1px);
    opacity: 0.8;
  }
}

.wrapper {
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #695681;

  .container {
    margin: 0 auto;
    transition: all 0.4s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .scene {
      position: absolute;
      width: 100vw;
      height: 100vh;
      vertical-align: middle;
    }

    .one,
    .two,
    .three,
    .circle,
    .p404 {
      width: 60%;
      height: 60%;
      top: 20% !important;
      left: 20% !important;
      min-width: 400px;
      min-height: 400px;

      .content {
        width: 600px;
        height: 600px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        animation: content 0.8s cubic-bezier(1, 0.06, 0.25, 1) backwards;

        @keyframes content {
          0% {
            width: 0;
          }
        }

        .piece {
          width: 200px;
          height: 80px;
          display: flex;
          position: absolute;
          border-radius: 80px;
          z-index: 1;

          animation: pieceLeft 8s cubic-bezier(1, 0.06, 0.25, 1) infinite both;


          @keyframes pieceLeft {
            50% {
              left: 80%;
              width: 10%;
            }
          }

          @keyframes pieceRight {
            50% {
              right: 80%;
              width: 10%;
            }
          }

        }
      }

      @include sm {
        width: 90%;
        height: 90%;
        top: 5% !important;
        left: 5% !important;
        min-width: 280px;
        min-height: 280px;
      }

      @include height {
        min-width: 280px;
        min-height: 280px;
        width: 60%;
        height: 60%;
        top: 20% !important;
        left: 20% !important;
      }
    }

    .text {
      width: 60%;
      height: 40%;
      min-width: 400px;
      min-height: 500px;
      position: absolute;
      margin: 40px 0;
      animation: text 0.6s 1.8s ease backwards;

      @keyframes text {
        0% {
          opacity: 0;
          transform: translateY(40px);
        }
      }

      @include sm {
        min-height: 400px;
        height: 80%;
      }

      article {
        width: 400px;
        position: absolute;
        bottom: 0;
        z-index: 4;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        left: 50%;
        transform: translateX(-50%);


        @include sm {
          width: 100%;
        }

        p {
          color: white;
          font-size: 18px;
          letter-spacing: 0.6px;
          margin-bottom: 40px;
          text-shadow: 6px 6px 10px $bg-03;
        }

        button {
          height: 40px;
          padding: 0 30px;
          border-radius: 50px;
          cursor: pointer;
          box-shadow: 0px 15px 20px rgba($bg-02, 0.5);
          z-index: 3;
          color: $bg-01;
          background-color: white;
          text-transform: uppercase;
          font-weight: 600;
          font-size: 12px;
          transition: all 0.3s ease;


          &:hover {
            box-shadow: 0px 10px 10px -10px rgba($bg-02, 0.5);
            transform: translateY(5px);
            background: $m-01;
            color: white;
          }
        }
      }
    }

    .p404 {
      font-size: 200px;
      font-weight: 700;
      letter-spacing: 4px;
      color: white;
      display: flex !important;
      justify-content: center;
      align-items: center;
      position: absolute;
      z-index: 2;
      animation: anime404 0.6s cubic-bezier(0.3, 0.8, 1, 1.05) both;
      animation-delay: 1.2s;

      @include sm {
        font-size: 100px;
      }

      @keyframes anime404 {
        0% {
          opacity: 0;
          transform: scale(10) skew(20deg, 20deg);
        }
      }

      &:nth-of-type(2) {
        color: $bg-02;
        z-index: 1;
        animation-delay: 1s;
        filter: blur(10px);
        opacity: 0.8;
      }


    }

    .circle {
      position: absolute;

      &:before {
        content: '';
        position: absolute;
        width: 800px;
        height: 800px;
        background-color: rgba($bg-02, 0.2);
        border-radius: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-shadow: $circleShadow;
        animation: circle 0.8s cubic-bezier(1, 0.06, 0.25, 1) backwards;


        @keyframes circle {
          0% {
            width: 0;
            height: 0;
          }
        }

        @include sm {
          width: 400px;
          height: 400px;
        }
      }
    }

    // Container 1
    .one {
      .content {

        // Smaller Circle
        &:before {
          content: '';
          position: absolute;
          width: 600px;
          height: 600px;
          background-color: rgba($bg-02, 0.3);
          border-radius: 100%;
          box-shadow: $circleShadow;
          animation: circle 0.8s 0.4s cubic-bezier(1, 0.06, 0.25, 1) backwards;

          @include sm {
            width: 300px;
            height: 300px;
          }
        }

        .piece {
          background: $g-02;

          &:nth-child(1) {
            right: 15%;
            top: 18%;
            height: 30px;
            width: 120px;
            animation-delay: 0.5s;
            animation-name: pieceRight;
          }

          &:nth-child(2) {
            left: 15%;
            top: 45%;
            width: 150px;
            height: 50px;
            animation-delay: 1s;
            animation-name: pieceLeft;
          }

          &:nth-child(3) {
            left: 10%;
            top: 75%;
            height: 20px;
            width: 70px;
            animation-delay: 1.5s;
            animation-name: pieceLeft;
          }

        }


      }
    }

    // Container 2
    .two {
      .content {
        .piece {
          background: $g-01;

          &:nth-child(1) {
            left: 0%;
            top: 25%;
            height: 40px;
            width: 120px;
            animation-delay: 2s;
            animation-name: pieceLeft;
          }

          &:nth-child(2) {
            right: 15%;
            top: 35%;
            width: 180px;
            height: 50px;
            animation-delay: 2.5s;
            animation-name: pieceRight;
          }

          &:nth-child(3) {
            right: 10%;
            top: 80%;
            height: 20px;
            width: 160px;
            animation-delay: 3s;
            animation-name: pieceRight;
          }

        }
      }
    }

    // Container 3
    .three {
      .content {
        .piece {
          background: $m-01;

          &:nth-child(1) {
            left: 25%;
            top: 35%;
            height: 20px;
            width: 80px;
            animation-name: pieceLeft;
            animation-delay: 3.5s;
          }

          &:nth-child(2) {
            right: 10%;
            top: 55%;
            width: 140px;
            height: 40px;
            animation-name: pieceRight;
            animation-delay: 4s;
          }

          &:nth-child(3) {
            left: 40%;
            top: 68%;
            height: 20px;
            width: 80px;
            animation-name: pieceLeft;
            animation-delay: 4.5s;
          }

        }


      }
    }


  }
}

</style>
