import AboutMe from '@/components/organism/AboutMe'
import Hero from '@/components/organism/Hero'
import JumbotronPage from '@/components/organism/Jumbtron'
import Project from '@/components/organism/Project'
import Question from '@/components/organism/Question'
import Review from '@/components/organism/Review'
import WhyMe from '@/components/organism/WhyMe'
import ContainerLanding from '@/components/templates/ContainerLanding'

export default function Home() {
  return (
    <ContainerLanding>
      <JumbotronPage />
      <WhyMe />
      <Project />
      <AboutMe />
      <Review />
      <Question />
      <Hero />
    </ContainerLanding>
  )
}
