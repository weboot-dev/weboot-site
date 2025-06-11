<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import Services from './components/Services.vue';
import Portfolio from './components/Portfolio.vue';
import Technologies from './components/Technologies.vue';
import Testimonials from './components/Testimonials.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
import WhatsAppButton from './components/WhatsAppButton.vue';
</script>

<template>
  <div class="min-h-screen bg-white">
    <Navbar />
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <Technologies />
      <Testimonials />
      <Contact />
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
</template>