<template>
    <div class="grid w-full gap-4" style="grid-template-columns: repeat(3, minmax(0, 1fr));">
        <Card
            v-for="(card, i) in cards" :key="i"
            :title="card.title" 
            :image-size="card.imageSize" 
            :image="card.image" 
            :imageAlt="card.imageAlt" 
            :link="card.url"
        />
    </div>
</template>

<script setup lang="ts">
// TODO: Relocate this cards object once we can directly use the <script setup> in overview.md, this seems to break the page at the moment 
// see /docs/content/company/teams.md for the desired pattern.
const cards = [
    {
        title: 'WordPress',
        image: 'https://arvialo.io/docs/_astro/arvialo-transparent.uB67yhAU.svg',
        imageAlt: 'WordPress - Website and blogging platform',
        imageSize: 'small',
        url: '/services/wordpress'
    }
]
</script>

