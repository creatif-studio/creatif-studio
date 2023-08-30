// core modules
import { memo } from "react";
// internal modules
import CollapseGroup from "components/atoms/collapse/Group";
import { FAQ_COLLAPSE_DATA } from "utils/constants/products/creatif-pricing.jsx";

const FaqCollapse = () => {
  return (
    <section className="w-full mt-14">
      <CollapseGroup items={FAQ_COLLAPSE_DATA} />
    </section>
  );
};

export default memo(FaqCollapse);
