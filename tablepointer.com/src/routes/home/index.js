import { h } from 'preact'
import style from './style'

import CircleHeading from '../../components/circleHeading'
import BenefitsSection from '../../components/sections/benefitsSection'
import KitchensSection from '../../components/sections/kitchensSection'
import BottomCTASection from '../../components/sections/bottomCTASection'
import Footer from '../../components/sections/footer'
import SolutionsSection from '../../components/sections/solutionSection'

const Home = () => (
	<div>
		<CircleHeading headingText={"Your Complete Energy Partner"} showButton={true} buttonHref={"google.com"} buttonText={"Start Saving"}/>
		<BenefitsSection />
		<KitchensSection />
		<SolutionsSection />
		<BottomCTASection />
		<Footer />
	</div>
);

export default Home;
