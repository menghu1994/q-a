<script setup lang="ts">

</script>

<template>
  <Teleport to="body">
    <div class="canvas">
      <div class="container">

        <div class="cauldronBody"></div>
        <div class="cauldronLid">
          <div class="innerLid"></div>
          <div class="outerLid"></div>

        </div>
        <div class="ladle"></div>
        <div class="bubbles">
          <div class="bubbleContainer">
            <div class="bubbleBound" id="bubbleBound1">
              <div class="bubble" id="bubble1">
                <div class="opaqueBackground"></div>
              </div>
            </div>
            <div class="bubbleBound" id="bubbleBound2">
              <div class="bubble" id="bubble2">
                <div class="opaqueBackground"></div>
              </div>
            </div>
            <div class="bubbleBound" id="bubbleBound3">
              <div class="bubble" id="bubble3">
                <div class="opaqueBackground"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="cauldronLegs">
          <div class="leg" id="leg1"></div>
          <div class="leg" id="leg2"></div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
.canvas {
  background: rgba(135, 135, 135, 0.4);
  backdrop-filter: blur(10px);
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 99999;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  box-sizing: border-box;
}

.cauldronBody {
  position: absolute;
  top: 0px;
  width: 75px;
  height: 70px;
  background: dimgrey;
  border-radius: 50px;
}

.cauldronLid {
  position: relative;
  top: -5px;
  width: 70px;
  height: 35px;
  border-radius: 50%;
  border: solid beige 1px;
  background-color: dimgrey;
  display: flex;
  justify-content: center;
}

.outerLid {
  position: absolute;
  border: solid dimgrey 10px;
  width: 70px;
  height: 35px;
  border-radius: 50%;
  box-sizing: border-box;
}

.innerLid {
  position: absolute;
  top: 14px;
  width: 50px;
  height: 15px;
  background-color: beige;
  border-radius: 50%;
}

.cauldronLegs {
  position: absolute;
  top: 60px;
  display: flex;
  width: 55px;
  justify-content: space-between;
  border-top-color: dimgrey;
}

.leg {
  height: 15px;
  width: 10px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: dimgrey;
}

#leg1 {
  transform: skew(-10deg);
}

#leg2 {
  transform: skew(10deg);
}

.ladle {
  position: absolute;
  top: -26px;
  width: 5px;
  height: 40px;
  background-color: dimgrey;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border: solid 1px beige;
  animation: rotateLadle 3s linear infinite;
}

.bubbles {
  position: absolute;
  top: -80px;
  width: 50px;
  height: 100px;
  display: flex;
  align-items: end;
  justify-content: center;
}

.bubbleContainer {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: end;
}

.bubbleBound {
  position: absolute;
  display: flex;
  align-items: end;
  box-sizing: border-box;
}

#bubbleBound1 {
  width: 10px;
  height: 10px;
  left: 10px;
}

#bubbleBound2 {
  width: 20px;
  height: 20px;
  left: 20px;
}

#bubbleBound3 {
  width: 15px;
  height: 15px;
  left: 30px;
}

.bubble {
  border-radius: 50%;
  border: solid 2px beige;
  box-sizing: border-box;
}

.opaqueBackground {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: beige;
  opacity: 0.5;
}

#bubble1 {
  animation: animateBubble ease-in-out 6s 2s infinite;
}

#bubble2 {
  animation: animateBubble ease-in-out 5s 1s infinite;
}

#bubble3 {
  animation: animateBubble ease-in-out 4s infinite;
}

@keyframes animateBubble {
  0% {
    transform: scale(0);
  }
  15% {
    width: 100%;
    height: 100%;
    border-color: dimgrey;
    transform: scale(1) translate(0, -5px);
  }
  95% {
    width: 100%;
    height: 100%;
    border-color: dimgrey;
    transform: translate(0, -100px);
  }
  99% {
    width: 100%;
    height: 100%;
    transform: translate(0, -100px) scale(1.2);
  }
  100% {
    width: 100%;
    height: 100%;
    transform: translate(0, -100px) scale(0);
  }
}

@keyframes rotateLadle {
  0% {
    transform: translate(20px, 2px) rotate(15deg);
  }
  25% {
    transform: translate(0, -1px) rotate(0);
  }
  50% {
    transform: translate(-20px, 2px) rotate(-15deg);
  }
  75% {
    transform: translate(0, 5px) rotate(0);
  }
  100% {
    transform: translate(20px, 2px) rotate(15deg);
  }
}

</style>