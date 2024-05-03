<script setup lang="ts">
import type { MaisonRecord } from '@/types'

defineProps<MaisonRecord>()
</script>
<template>
  <div class="maison-card border-2 p-1">
    <p>{{ adresse }}</p>
    <p>{{ prix }}</p>
    <p>{{ favori ? 'oui' : 'non' }}</p>
    <p>{{ nbChambres }}</p>
    <p>{{ nbSdb }}</p>
    <p>{{ nomMaison }}</p>
    <p>{{ surface }}</p>
  </div>
</template>