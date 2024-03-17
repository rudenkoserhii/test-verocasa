import React from 'react'
import { Hero } from 'components/Hero/Hero'
import { News } from 'components/News/News'
import { Top } from 'components/Top/Top'
import { Subscription } from 'components/Subscription/Subscription'
import { Opinions } from 'components/Opinions/Opinions'

const Home = () => (
  <>
    <Hero />
    <News />
    <Top />
    <Subscription />
    <Opinions />
  </>
)

export default Home
