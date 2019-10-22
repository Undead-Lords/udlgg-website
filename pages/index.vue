<template>
  <div class="container">
    <div class="h-screen w-screen flex items-center justify-center bg-black">
        <div class="text-white mt-0 border bg-black py-0 w-full h-full bg-cover" style="background-image:url('images/udl-background.jpg')">
        <header class="flex md:justify-between p-8">
            <div class="flex align-items-center">
                <h1 class="inline text-white sm:text-3xl text-2xl font-bold uppercase"><a href="http://undeadlords.net"><img src="images/udl-logotype.png"></a></h1>
            </div>
            <div class="lg:flex md:text-white hidden">
              <ul class="align-items-center pt-2">
                  <li class="ml-4 p4"><a href="http://undeadlords.net">Website</a></li>
                  <li class="ml-4 p4"><a href="http://discord.undeadlords.net">Discord</a></li>
                  <li class="ml-4 p4"><a href="http://undeadlords.net/history">History</a></li>
                  <li class="ml-4 p4"><a href="http://undeadlords.net/lore">Lore</a></li>
                  <li class="ml-4 p4"><a href="http://undeadlords.net/campaigns">Campaigns</a></li>
              </ul>
            </div>
        </header>
        <section class="px-2 lg:px-0 mt-16 sm:mt-32 flex w-full container mx-auto pb-16">
            <div class="w-full text-white flex justify-center md:justify-start text-center md:text-left">
                <div class="md:w-1/2 w-full">
                    <h2 class="leading-none font-bold text-2xl xs:text-2x1 md:text-4xl lg:6x1 uppercase">Harvesting Souls</h2>
                    <h2 class="leading-none font-bold text-2xl xs:text-2x1 md:text-4xl lg:6x1 uppercase">Since <span class="text-red-800">1994</span></h2>
                </div>
                <div class="md:w-1/2 md:justify-center md:flex hidden">
                    <img src="images/udl-logo.png" alt="Undead Lords Skull Logo" />
                </div>
            </div>
        </section>
    </div>
  </div>
  </div>
</template>

<script>
  head: {
    title: 'Welcome'
  }
</script>
