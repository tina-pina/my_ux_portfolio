<template>
  <div class="avatar">
    <div v-if="textWrapper" class="avatar_textWrapper row justify-content-center">
      <p class="me row display-5 justify-content-center">Hi, i am Christina. This is my UX story...</p>
      <div class="me row display-5 justify-content-center">
        <p class="me col-md-4 h6 text-end">Hover to explore...</p>
        <a class="me col-md-4 avatar_hand text-start" @mouseover="showAnimationHandler">
        <img src="../assets/handMoving.png" class="avatar_img col img-fluid" alt="moving hand">
        </a>
      </div>
    </div>
    <div v-if="showAnimation" class="avatarWrapper">
    </div>
    <div class="avatarWrapperMobile">
      <img src="../assets/aboutMyPortfolioMobile.png" class="col img-fluid" alt="about my portfolio">
    </div>
  </div>
</template>

<script>

export default {
    name:  "Avatar",
    data() {
      return {
        showAnimation: false,
        textWrapper: true,
      }
    },
    methods: {
      showAnimationHandler() {
        this.showAnimation = true
        this.textWrapper = !this.textWrapper
      }
    }
}
</script>

