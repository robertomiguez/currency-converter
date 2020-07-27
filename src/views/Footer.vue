<template>
    <div class="footer">
        <div class="follow">
            Dummy content | Follow me:
            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin' }" @click="openUrl('https://linkedin.com/in/miguezr')" class='icon'/>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    openUrl (url) {
      window.open(url, '_blank')
    }
  }
}
</script>

<style scoped>
.footer {
   position: fixed;
   bottom: 0;
   width: 100%;
   background-color: #4ACD64;
   color: white;
   text-align: center;
   height: 30px;

}
.follow {
    padding: 5px 15px 0 0;
}
.icon {
    cursor: pointer;
    padding-left: 7px;
}
</style>
