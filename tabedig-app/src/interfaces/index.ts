// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number
  name: string
}

export type Review = {
  pal: string
  prf: string
  area: string
  rstid: string
  rstname: string
  rstrating: string
  rvwer: string
  rvwtype: string
  rating: string
  url: string
}

export type ReviewSummaryMap = {
  [rstid: string]: ReviewSummary
}

type ReviewSummary = {
  pal: string
  prf: string
  area: string
  rstid: string
  rstname: string
  rstrating: string
  count: number
  total: number
  average: number
  url: string
}

export type ChartColumn = {
  type: string
  role: string
  p: {
    html: boolean
  }
}

export type ChartData = (
  (string | ChartColumn)[] | (string | number)[]
)[]
