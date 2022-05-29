import * as React from "react"
import About from "../components/About/About"
import BannerModule from "../components/BannerModule/BannerModule"
import Contacts from "../components/Contacts/Contacts"
import Creator from "../components/Creator/Creator"
import Features from "../components/Features/Features"
import Layout from "../components/Layout"
import Modal from "../components/Modal/Modal"
import Perk from "../components/PerksModule/Perk"
import PerksModule from "../components/PerksModule/PerksModule"
import Quiez from "../components/Quiez/Quiez"
import Seo from "../components/SEO"
import Teachers from "../components/Teachers/Teachers"
import Why from "../components/Why/Why"

const Index = ({ location }) => {
  return (
    <>
      <Seo title="Angeles Latinos" />
      <Layout>
        <BannerModule
          title="Angeles Latinos"
          subTitle="Лушая школа латино-американских танцев в Москве"
        />
        <PerksModule>
          <Perk title="The Title" content="The content" />
        </PerksModule>
        <Features
          title="Наши направления."
          data={['bachata', 'salsa', 'reggeton']}
          introduction="Сальса, бачата, реггетон- это танцы, родившиеся на улицах Латинской Америки среди обычных людей! Поэтому научиться может каждый, с любым опытом, в любом возрасте!
Это всегда импровизация, где мужчина ведёт свою партнершу, а девушка следует его импульсам и украшает своей женственностью их пару."
        />
        <Teachers
          title="Наши преподаватели."
          data={['arley', 'mishel', 'yoel']}
          introduction="С Вами будут работать носители латиноамериканской культуры, 
Все наши преподаватели, болеют за Ваш результат и очаровывают своей харизмой и энергией!"
        />
        <About />
        {/* <LatestPosts
          title="The Latest from Barcadia"
          introduction="Cras scelerisque, tellus sed gravida tincidunt, velit tellus blandit justo, nec viverra augue erat in erat. Maecenas iaculis sed purus non fringilla."
        /> */}
        <Why />
        <Creator title="Angeles Latinos"
          subTitle="Лушая школа латино-американских танцев в Москве" />
        <Quiez />
        <Contacts />
        <Modal open={location.hash === '#enroll'} />
      </Layout>
    </>
  )
}

export default Index
