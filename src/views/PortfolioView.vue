<template>
  <div class="portfolio container-fluid">
    <Beginning/>
    <Middle/>
    <div>
      <button type="button" class="btn btn-primary floatButton fs-4">
        <a class="arowBackTop" href="#portfolio-beginning">Go up</a>
      </button>
    </div> 
  </div>
</template>

<script setup>
import Beginning from '../components/Beginning.vue'
import Middle from '../components/Middle.vue'
</script>
