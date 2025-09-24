import Core from "@/components/home/Core";
import ServiceOver from "@/components/services/ServiceOver";
import ServicesHero from "@/components/services/ServicesHero";

const page = () => {
	return (
		<div>
			<ServicesHero />
      <ServiceOver />
      <Core />
		</div>
	);
};
export default page;
