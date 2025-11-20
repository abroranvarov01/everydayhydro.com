"use client"

import { Button } from "@/components/ui/button"

interface ProductFiltersProps {
  activeFilter: string
  onFilterChange: (filter: string) => void
}

export function ProductFilters({ activeFilter, onFilterChange }: ProductFiltersProps) {
  const filters = [
    { id: "all", label: "All Products" },
    { id: "insulated", label: "Insulated" },
    { id: "smart", label: "Smart Cap" },
    { id: "glass", label: "Glass" },
  ]

  return (
    <div className="mb-12">
      <div className="flex flex-wrap gap-3 justify-center">
        {filters.map((filter) => (
          <Button
            key={filter.id}
            variant={activeFilter === filter.id ? "default" : "outline"}
            onClick={() => onFilterChange(filter.id)}
            className={`
              transition-all duration-300
              ${
                activeFilter === filter.id
                  ? "bg-[#00A8FF] hover:bg-[#1ED3C6] text-white shadow-lg scale-105"
                  : "border-[#00A8FF]/30 text-[#031B2E] hover:border-[#00A8FF] hover:text-[#00A8FF]"
              }
            `}
          >
            {filter.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
