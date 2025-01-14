'use client'

import * as React from 'react'
import { Calendar as CalendarIcon } from 'lucide-react'
import dayjs from 'dayjs'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

import { Calendar } from './calendar'
import { TimePicker } from './timepicker'

export function DateTimePicker() {
  const [date, setDate] = React.useState<Date>()

  /**
   * carry over the current time when a user clicks a new day
   * instead of resetting to 00:00
   */
  const handleSelect = (newDay: Date | undefined) => {
    if (!newDay) {
      return
    }
    if (!date) {
      setDate(newDay)
      return
    }
    const diff = newDay.getTime() - date.getTime()
    const diffInDays = diff / (1000 * 60 * 60 * 24)
    const newDateFull = new Date(
      date.getTime() + diffInDays * (1000 * 60 * 60 * 24),
    )
    setDate(newDateFull)
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          className={cn(
            'w-[280px] justify-start text-left font-normal',
            !date && 'text-muted-foreground',
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? dayjs(date).format('PPP HH:mm:ss') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(d) => handleSelect(d)}
          initialFocus
        />
        <div className="border-t border-border p-3">
          <TimePicker setDate={setDate} date={date} />
        </div>
      </PopoverContent>
    </Popover>
  )
}
