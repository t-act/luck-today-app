"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

type DatePickerProps = {
  value?: Date | undefined
  onChange?: (date?: Date) => void
}

export function DatePicker({ value, onChange}: DatePickerProps) {
  const [open, setOpen] = React.useState(false)
  const [internalDate, setInternalDate] = React.useState<Date | undefined>(
    undefined
  )
  const selected = value !== undefined ? value : internalDate

  function handleSelect(date?: Date) {
    if (value === undefined) {
      setInternalDate(date)
    }
    onChange?.(date)
    setOpen(false)
  }

  return (
    <div className="flex gap-3">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="w-48 justify-between font-normal"
            title={selected ? selected.toISOString() : "No date selected"}
          >
            <span>
              {selected ? selected.toLocaleDateString() : "Select date"}
            </span>
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full overflow-hidden" align="start">
          <Calendar
            mode="single"
            selected={selected}
            captionLayout="dropdown"
            onSelect={(date) => {
              handleSelect(date)
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
