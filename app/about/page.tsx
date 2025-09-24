import AboutHero from "@/components/about/AboutHero";
import Cause from "@/components/about/Cause";
import OurStand from "@/components/about/OurStand";
import Vision from "@/components/about/Vision";
import Testimonials from "@/components/home/Testimonials";

const page = () => {
	return (
		<div>
			<AboutHero />
			<Cause />
			<Vision />
			<OurStand />
			<Testimonials />
		</div>
	);
};
export default page;
