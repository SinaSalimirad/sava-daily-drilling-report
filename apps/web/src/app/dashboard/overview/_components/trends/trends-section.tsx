import { ActivitiesCard } from "@/app/dashboard/overview/_components/trends/activities-card";
import { FluidCostCard } from "@/app/dashboard/overview/_components/trends/fluid-cost-card";
import { MetresDrilledCard } from "@/app/dashboard/overview/_components/trends/metres-drilled-card";
import { MudPropertiesCard } from "@/app/dashboard/overview/_components/trends/mud-properties-card";
import { ProductsUsedCard } from "@/app/dashboard/overview/_components/trends/products-used-card";
import { SurfacePitsCard } from "@/app/dashboard/overview/_components/trends/surface-pits-card";
import { TrendsFilters } from "@/app/dashboard/overview/_components/trends/trends-filters";

export function TrendsSection() {
  return (
    <>
      <TrendsFilters />
      <div className="grid gap-4 lg:grid-cols-[1.7fr_1.35fr_1fr]">
        <MetresDrilledCard />
        <MudPropertiesCard />
        <SurfacePitsCard />
        <ProductsUsedCard />
        <FluidCostCard />
        <ActivitiesCard />
      </div>
    </>
  );
}
