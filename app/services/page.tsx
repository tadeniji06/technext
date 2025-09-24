import Core from "@/components/home/Core";
import OurDiff from "@/components/services/OurDiff";
import ServiceOver from "@/components/services/ServiceOver";
import ServicesHero from "@/components/services/ServicesHero";

const page = () => {
	return (
		<div>
			<ServicesHero />
      <ServiceOver />
      <Core />
      <OurDiff />
		</div>
	);
};
export default page;
