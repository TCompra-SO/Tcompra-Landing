import React from 'react'
import { Section } from '../styles/components/home/section'
import { ContainerCss, ContainerContentCss } from '../styles/components/containers/container'
import imgBack from '../images/sections/home/back-01.svg'
import Header1 from '../modules/home/Header1'
import Header2 from '../modules/home/Header2'
import ButtonsLink from '../modules/home/ButtonsLink'
import GrowFromCenter from '../components/Motion/GrowFromCenter'
import VideoComponent from '../components/VideoComponent'
const Home = () => {
  return (
    <Section id='Homes' src={imgBack}>

      <ContainerCss>
        <GrowFromCenter>
          <ContainerContentCss $flexdirection='row'>
            <ContainerContentCss $marginbottom='4em' $margintop='4em'>

              <Header1 />
              <Header2 />
              <ButtonsLink />

            </ContainerContentCss>
            <VideoComponent width="500" height="400px" videoId="8Ci94hur6Oc" autoplay={true} marginTop='4em' />
          </ContainerContentCss>
        </GrowFromCenter>

      </ContainerCss>

    </Section>
  )
}

export default Home