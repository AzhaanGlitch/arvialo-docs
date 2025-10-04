---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'


const coreMembers = [
  {
    avatar: '../images/team/azhaan.jpg',
    name: 'Azhaan Ali Siddiqui',
    title: 'Co-Founder, Core Developer',
    links: [
      { icon: 'github', link: 'https://github.com/AzhaanGlitch' },
    ]
  },
  {
    avatar: '../images/team/ekjot.jpg',
    name: 'Ekjot Singh',
    title: 'Co-Founder, Core Developer',
    links: [
      { icon: 'github', link: 'https://github.com/ekjotsinghmakhija' },
    ]
  }
]

</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Arvialo Team
    </template>
    <template #lead>
      The development of Arvialo is guided by two partners.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers size="small" :members="coreMembers" />
</VPTeamPage>
