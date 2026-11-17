import { OverviewCard } from "@/components/common/overview-card";
import { StatusBadge } from "@/components/common/status-badge";
import { productsUsed } from "@/app/dashboard/overview/_components/trends/trends-data";

const headerClass =
  "pb-3 pl-4 text-xs font-medium tracking-wide whitespace-nowrap text-muted-foreground uppercase";

export function ProductsUsedCard() {
  return (
    <OverviewCard
      title="Products used — last 24 h"
      meta={`All ${productsUsed.catalogueSize} products`}
      version="v0.4"
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[26rem] text-sm">
          <thead>
            <tr className="text-right">
              <th scope="col" className={`${headerClass} text-left`}>
                Product
              </th>
              <th scope="col" className={headerClass}>
                Used
              </th>
              <th scope="col" className={headerClass}>
                Stock after
              </th>
              <th scope="col" className={headerClass}>
                Cost
              </th>
            </tr>
          </thead>
          <tbody>
            {productsUsed.rows.map((product) => (
              <tr
                key={product.name}
                className="border-t text-right tabular-nums"
              >
                <th scope="row" className="py-3 text-left font-semibold">
                  <span className="flex items-center gap-2">
                    {product.name}
                    {product.low && (
                      <StatusBadge tone="warning">low</StatusBadge>
                    )}
                  </span>
                </th>
                <td className="py-3 pl-4 whitespace-nowrap">{product.used}</td>
                <td
                  className={`py-3 pl-4 ${product.low ? "font-semibold text-viz-bad" : ""}`}
                >
                  {product.stockAfter}
                </td>
                <td className="py-3 pl-4">{product.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </OverviewCard>
  );
}
