import { TrendCard } from "@/app/dashboard/overview/_components/trends/trend-card";
import { TrendSparkline } from "@/app/dashboard/overview/_components/trends/trend-sparkline";
import {
  type MudProperty,
  mudProperties,
} from "@/app/dashboard/overview/_components/trends/trends-data";

const deltaColor = { good: "text-viz-good", bad: "text-viz-bad" };

function MudPropertyRow({ property }: { property: MudProperty }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-baseline justify-between">
        <h3 className="text-xs tracking-wide text-muted-foreground uppercase">
          {property.label}
        </h3>
        <p className="text-sm">
          <strong className="font-semibold">{property.value}</strong>{" "}
          <span className="text-xs text-muted-foreground">{property.unit}</span>{" "}
          <strong className={`font-semibold ${deltaColor[property.deltaTone]}`}>
            {property.delta}
          </strong>
        </p>
      </div>
      <TrendSparkline
        values={property.points}
        plan={property.plan}
        color={`var(--series-${property.series})`}
        unit={property.unit}
        label={`${property.label} trend`}
      />
      <p className="text-xs text-muted-foreground">{property.planNote}</p>
    </div>
  );
}

export function MudPropertiesCard() {
  return (
    <TrendCard
      title="Mud properties vs plan"
      subtitle="latest sample"
      version="v0.6"
    >
      {mudProperties.map((property) => (
        <MudPropertyRow key={property.label} property={property} />
      ))}
    </TrendCard>
  );
}
