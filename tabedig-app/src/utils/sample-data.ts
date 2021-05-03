import { ChartColumn, ChartData, Review, ReviewSummaryMap, User } from '../interfaces';
import reviewsJson from './reviews.json';

/** Dummy user data. */
export const sampleUserData: User[] = [
  { id: 101, name: 'Alice' },
  { id: 102, name: 'Bob' },
  { id: 103, name: 'Caroline' },
  { id: 104, name: 'Dave' },
]

const reviews: Review[] = reviewsJson as Review[]

const reviewSummaryMap = reviews.reduce((sums, r) => {
  if (sums[r.rstid]) {
    // skip review without rating
    if (r.rating !== "-") {
      sums[r.rstid].count += 1
      sums[r.rstid].total += Number(r.rating)
      sums[r.rstid].average = (
        sums[r.rstid].total / sums[r.rstid].count
      )
    }
  } else {
    sums[r.rstid] = {
      ...r,
      count: 1,
      total: Number(r.rating),
      average: Number(r.rating)
    }
  }

  return sums;
}, {} as ReviewSummaryMap)

const reviewSummaries = Object.values(reviewSummaryMap)

const htmlTooltip: ChartColumn = {
  type: "string",
  role: "tooltip",
  p: { html: true }
}

export const reviewData: ChartData = [
  ["count", "rate", htmlTooltip],
  ...reviewSummaries.map(x => {
    const tip = (
      `${x.rstname}<br/>` +
      `${x.count}&#x1f4ac; ${x.rstrating}&#x2b50; ` +
      `<a href="${x.url}" target="_blank" rel="noopener noreferrer">詳細&#x1f50e;</a>`
    )
    return [x.count, Number(x.rstrating), tip]
  })
]
