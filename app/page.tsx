import Brands from "@/components/home/Brands";
import Building from "@/components/home/Building";
import Core from "@/components/home/Core";
import Hero from "@/components/home/Hero";
import Testimonials from "@/components/home/Testimonials";
import WhyUs from "@/components/home/WhyUs";

const page = () => {
	return (
		<div>
			<Hero />
			<Building />
			<WhyUs />
			<Brands />
			<Core />
			<Testimonials />
		</div>
	);
};
export default page;
