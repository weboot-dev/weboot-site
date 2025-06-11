<script setup lang="ts">
import { ref } from 'vue';

const technologies = ref([
  {
    id: 1,
    name: 'WordPress',
    description: 'Criação de sites com o CMS mais popular do mundo, oferecendo flexibilidade e facilidade de gestão.',
    logo: 'https://static-00.iconduck.com/assets.00/wordpress-icon-2048x2048-a17bib4w.png',
    category: 'CMS'
  },
  {
    id: 2,
    name: 'Elementor',
    description: 'Construtor visual que permite criar layouts personalizados de forma intuitiva e sem código.',
    logo: 'https://elementor.com/marketing/wp-content/uploads/2021/10/Elementor-Logo-Symbol-Red.png',
    category: 'Page Builder'
  },
  {
    id: 3,
    name: 'WooCommerce',
    description: 'Solução completa de e-commerce para WordPress, ideal para lojas online de todos os tamanhos.',
    logo: 'https://hiilite.com/wp-content/uploads/2019/03/app-logo-woocommerce.png',
    category: 'E-commerce'
  },
  {
    id: 4,
    name: 'Vue.js',
    description: 'Framework JavaScript progressivo para construção de interfaces de usuário dinâmicas e reativas.',
    logo: 'https://vuejs.org/images/logo.png',
    category: 'Frontend'
  },
  {
    id: 5,
    name: 'Tailwind CSS',
    description: 'Framework CSS utilitário que permite criar designs personalizados com rapidez e consistência.',
    logo: 'https://velog.velcdn.com/images/diso592/post/8c07ebac-2637-48b8-ae55-41915e2e30bf/image.png',
    category: 'CSS'
  },
  {
    id: 6,
    name: 'Spring Boot',
    description: 'Framework Java para desenvolvimento de APIs robustas e de alto desempenho para aplicações web.',
    logo: 'https://spring.io/img/spring.svg',
    category: 'Backend'
  }
]);
</script>

<template>
  <section id="technologies" class="section-padding bg-gradient-to-br from-gray-900 to-gray-800">
    <div class="container">
      <h2 class="section-title" style="color: white;">Nossas Tecnologias</h2>
      <p class="section-subtitle" style="color: white;">
        Utilizamos as tecnologias mais modernas e eficientes para criar soluções digitais de alta qualidade
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="tech in technologies" 
          :key="tech.id" 
          class="bg-gray-800/50 backdrop-blur p-6 rounded-xl border border-gray-700 hover:border-gray-500 transition-all duration-300 group"
        >
          <div class="h-16 mb-4 flex items-center">
            <img 
              :src="tech.logo" 
              :alt="tech.name" 
              class="h-12 max-w-[150px] object-contain" 
            />
          </div>
          <span class="inline-block px-3 py-1 rounded-full bg-primary-800/60 text-primary-300 text-xs mb-2">
            {{ tech.category }}
          </span>
          <h3 class="text-xl font-bold mb-2 text-white group-hover:text-primary-400 transition-colors">{{ tech.name }}</h3>
          <p class="text-gray-400">{{ tech.description }}</p>
        </div>
      </div>
      
      <div class="mt-16 text-center">
        <h3 class="text-2xl font-bold mb-4 text-white">Buscamos as melhores soluções para seu projeto</h3>
        <p class="max-w-2xl mx-auto mb-8 text-gray-300">
          Nossa equipe está sempre atualizada com as mais recentes tecnologias para oferecer soluções modernas e eficientes para o seu negócio.
        </p>
        <a href="#contact" class="btn btn-primary">Fale com um especialista</a>
      </div>
    </div>
  </section>
</template>