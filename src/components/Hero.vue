<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
});
</script>

<template>
  <section id="home" class="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-primary-600 to-primary-800 text-white relative overflow-hidden">
    <div class="absolute inset-0 z-0 opacity-10">
      <div class="absolute top-0 left-0 w-full h-full bg-[url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center"></div>
    </div>
    
    <div class="container relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div class="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Transformando ideias em <span class="text-accent-400">experiências digitais</span> incríveis
          </h1>
          <p class="text-lg md:text-xl mb-8 text-gray-100 max-w-lg">
            Desenvolvemos soluções digitais personalizadas que elevam sua marca e impulsionam seus resultados no mundo digital.
          </p>
          <div class="flex flex-wrap gap-4">
            <a href="#contact" class="btn bg-white text-primary-600 hover:bg-gray-100">
              Iniciar Projeto
            </a>
            <a href="#services" class="btn btn-outline border-white text-white hover:bg-white/10">
              Nossos Serviços
            </a>
          </div>
        </div>
        
        <div class="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300">
          <img
            src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Web Development Illustration"
            class="w-full h-auto rounded-lg shadow-xl animate-float"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-on-scroll {
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.animate-on-scroll.show {
  opacity: 1;
  transform: translateY(0);
}
</style>