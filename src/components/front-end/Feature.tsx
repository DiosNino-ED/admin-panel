import { MdSupportAgent } from "react-icons/md";
import { RiRefund2Fill } from "react-icons/ri";
import { TbDiscount, TbTruckDelivery } from "react-icons/tb";
import FeatureCard from "./FeatureCard";

const data = [
  {
    icon: <TbTruckDelivery className="text-4xl" />,
    title: "Free Deliveries",
    desc: "Orders from all items",
  },
  {
    icon: <RiRefund2Fill className="text-4xl" />,
    title: "Return & Refund",
    desc: "Money back guarantee",
  },
  {
    icon: <TbDiscount className="text-4xl" />,
    title: "Member Discount",
    desc: "On orders over $99.00",
  },
  {
    icon: <MdSupportAgent className="text-4xl" />,
    title: "Customer Support",
    desc: "24/7 Customer Service",
  },
];

const Feature = () => {
  return (
    <div className="container grid gri gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-8">
      {data.map((item) => (
        <FeatureCard
          key={item.title}
          icon={item.icon}
          title={item.title}
          desc={item.desc}
        />
      ))}
    </div>
  );
};

export default Feature;