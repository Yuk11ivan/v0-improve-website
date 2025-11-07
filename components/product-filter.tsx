"use client"

import { useState } from "react"

interface FilterOption {
  id: string
  label: string
}

interface Filter {
  id: string
  name: string
  options: FilterOption[]
}

interface ProductFilterProps {
  filters: Filter[]
  onFilterChange: (filterId: string, selectedOptions: string[]) => void
}

export default function ProductFilter({ filters, onFilterChange }: ProductFilterProps) {
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({})
  const [expandedFilters, setExpandedFilters] = useState<Set<string>>(new Set(filters.map((f) => f.id)))

  const handleFilterToggle = (filterId: string, optionId: string) => {
    setSelectedFilters((prev) => {
      const current = prev[filterId] || []
      const updated = current.includes(optionId) ? current.filter((id) => id !== optionId) : [...current, optionId]

      const newSelected = { ...prev, [filterId]: updated }
      onFilterChange(filterId, updated)
      return newSelected
    })
  }

  const toggleFilterExpanded = (filterId: string) => {
    setExpandedFilters((prev) => {
      const next = new Set(prev)
      if (next.has(filterId)) {
        next.delete(filterId)
      } else {
        next.add(filterId)
      }
      return next
    })
  }

  const clearFilters = () => {
    setSelectedFilters({})
    filters.forEach((filter) => onFilterChange(filter.id, []))
  }

  const hasActiveFilters = Object.values(selectedFilters).some((options) => options.length > 0)

  return (
    <div className="bg-white rounded-lg p-6 h-fit sticky top-24">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold">筛选</h3>
        {hasActiveFilters && (
          <button onClick={clearFilters} className="text-sm text-primary hover:underline">
            清空筛选
          </button>
        )}
      </div>

      <div className="space-y-6">
        {filters.map((filter) => (
          <div key={filter.id} className="border-b border-gray-200 pb-4 last:border-b-0">
            <button
              onClick={() => toggleFilterExpanded(filter.id)}
              className="flex items-center justify-between w-full font-medium text-dark hover:text-primary transition-colors mb-3"
            >
              <span>{filter.name}</span>
              <span className="text-sm">{expandedFilters.has(filter.id) ? "−" : "+"}</span>
            </button>

            {expandedFilters.has(filter.id) && (
              <div className="space-y-2">
                {filter.options.map((option) => (
                  <label key={option.id} className="flex items-center cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={(selectedFilters[filter.id] || []).includes(option.id)}
                      onChange={() => handleFilterToggle(filter.id, option.id)}
                      className="w-4 h-4 rounded border-gray-300 text-primary cursor-pointer"
                    />
                    <span className="ml-2 text-sm text-gray-700 group-hover:text-dark">{option.label}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
