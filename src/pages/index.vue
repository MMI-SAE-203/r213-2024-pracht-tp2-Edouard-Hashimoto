<script setup lang="ts">
import { pb } from '@/backend'
import MaisonCard from '@/components/MaisonCard.vue'
// import type { MaisonRecord } from '@/types'

/* const maisonListe:MaisonRecord[] = [
    {
        "adresse": "2821 Lake Sevilla, Palm Harbor, TX",
        "collectionId": "sidpkt9hmbfwoeb",
        "collectionName": "maison",
        "created": "2023-05-01 14:00:54.598Z",
        "favori": false,
        "id": "64l3n8nar836i5j",
        "image": "pexels_binyamin_mellish_106399_bnHdy6H03e.jpg",
        "nbChambres": 4,
        "nbSdb": 2,
        "nomMaison": "Beverly Springfield",
        "prix": 2700,
        "surface": 45,
        "updated": "2024-04-02 13:49:11.230Z"
    },
    {
        "adresse": "2699 Green Valley, Highland Lake",
        "collectionId": "sidpkt9hmbfwoeb",
        "collectionName": "maison",
        "created": "2024-04-02 13:48:47.643Z",
        "favori": true,
        "id": "lo831zeg10hpm9y",
        "image": "pexels_binyamin_mellish_106399_YpoLMcQJsi.png",
        "nbChambres": 4,
        "nbSdb": 2,
        "nomMaison": "Palm Harbor",
        "prix": 2095,
        "surface": 42,
        "updated": "2024-04-02 13:48:47.643Z"
    },
    {
        "adresse": "909 Woodland St, Michigan, IN",
        "collectionId": "sidpkt9hmbfwoeb",
        "collectionName": "maison",
        "created": "2024-04-02 13:52:17.823Z",
        "favori": false,
        "id": "s1zuhj19x8eb242",
        "image": "faulkner_ave_ZHz3nhmJzC.png",
        "nbChambres": 4,
        "nbSdb": 3,
        "nomMaison": "Faulkner Ave",
        "prix": 4550,
        "surface": 80,
        "updated": "2024-04-02 13:52:17.823Z"
    }
] */
const maisonListe = await pb.collection('Maison').getFullList({ filter: 'favoris=true' })
console.log(maisonListe)

/* const agentListe = await pb.collection('Agent').getFullList()
console.log(agentListe) */
</script>

<template>
  <MaisonCard v-for="uneMaison in maisonListe" :key="uneMaison.id" v-bind="uneMaison" />
</template>
