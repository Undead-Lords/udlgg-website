<template>
  <div class="container">
    <div class="h-screen w-screen flex items-center justify-center bg-black">
        <div class="text-white mt-0 py-0 w-full h-full bg-cover" style="background-image:url('images/udl-background.jpg')">
        <header class="flex md:justify-between p-8">
            <div class="flex align-items-center">
                <h1 class="inline text-white sm:text-3xl text-2xl font-bold uppercase"><a href="http://undeadlords.net"><img src="images/udl-logotype.png"></a></h1>
            </div>
            <div class="lg:flex md:text-white hidden">
              <ul class="align-items-center pt-2">
                  <li class="ml-4 p-1"><a href="http://undeadlords.net">Website</a></li>
                  <li class="ml-4 p-1"><a href="http://discord.undeadlords.net">Discord</a></li>
                  <li class="ml-4 p-1"><a href="http://undeadlords.net/history">History</a></li>
                  <li class="ml-4 p-1"><a href="http://undeadlords.net/campaigns">Campaigns</a></li>
                  <li class="ml-4 p-1"><a href="http://undeadlords.net/lore">Lore</a></li>
              </ul>
            </div>
        </header>
        <section class="px-2 lg:px-0 mt-16 sm:mt-32 flex w-full container mx-auto pb-16">
            <div class="w-full text-white flex justify-center md:justify-start text-center md:text-left">
                <div class="md:w-3/4 w-full">
                  <h2 class="mb-8 leading-none font-bold text-2xl xs:text-2x1 md:text-4xl lg:5x1 uppercase center">Harvesting Souls Since <span class="text-red-800">1994</span></h2>
                  <div class="udl-shroud rounded-lg p-5">
                    <p class="m-3">You are travelling through Myrkul's domain. You will be teleported to your destination shortly.</p>
                    <p class="m-3">Your selected destination is <a :href="shortlink.udl_destination" class="text-red-800 font-bold">{{ shortlink.udl_destination }}</a> and has been visited by <span class="text-red-800 font-bold">{{ shortlink.udl_visitors }}</span> travelers before you. The last traveler used this path on <span class="text-red-800 font-bold">{{ shortlink.udl_last_visited }}</span>.</p>
                    <p class="m-3">This route was originally harvested by <span class="text-red-800 font-bold">{{ shortlink.udl_creator }}</span> on <span class="text-red-800 font-bold">{{ shortlink.udl_created }}</span>.</p>
                  </div>
                </div>
                <div class="md:w-1/4 md:justify-center md:flex hidden">
                    <img src="images/udl-logo.png" class="w-full" alt="Undead Lords Skull Logo" />
                </div>
            </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 async asyncData({ app, params, error }) {
   return app.$axios.$get(`https://api.udl.gg/${params.id}`)
     .then((res) => {
        return {
          shortlink: res,
          destination: res.udl_destination
        }
     })
     .catch(e=>{
       console.log(e.stack);
       return { destination: 'https://undeadlords.net'}
     })
   },
   head () {
    return {
      title: 'Link Shortener',
      meta: [
        { charset: 'utf-8' },
        { "http-equiv": 'Refresh', content: `20; url=${this.destination}`}
      ]
    }
  }
}
</script>
<style>
.udl-shroud {
  background: rgba(0, 0, 0, .65);
  backdrop-filter: blur(3px);
}
</style>
