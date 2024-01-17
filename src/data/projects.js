import hsihero from '@/assets/images/hsi-hero.png'
import kvcore from '@/assets/images/kvcore-login.png'
import cbpkanon from '@/assets/images/cbpk-anon.png'
import blackhole from '@/assets/images/black-hole.png'
import eagle from '@/assets/images/eagle-scout.png'
const projects = [
  {
    id: 1,
    title: 'HighSpeedInternet.com',
    category: 'Back End Engineer',
    route: '/projects/hsi',
    img: hsihero
  },
  {
    id: 2,
    title: 'KvCore Marketplace Engineer',
    category: 'Full Stack Engineer',
    route: '/projects/kvcore',
    img: kvcore
  },
  {
    id: 3,
    title: 'Freelance Security Analyst',
    category: 'Information Security/Hacking',
    route: '/projects/freelance',
    img: cbpkanon
  },
  {
    id: 4,
    title: 'Game Jam',
    category: 'Game Development',
    route: '/projects/-project/game-jam',
    img: blackhole
  },
  {
    id: 5,
    title: 'Eagle Scout',
    category: 'Earned 2012',
    route: '/projects/single-project/eagle-scout',
    img: eagle
  }
]

export default projects
