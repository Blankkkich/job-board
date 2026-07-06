export type JobStatus = 'open' | 'filled'

export interface Job {
  id: string
  docketNo: string
  title: string
  company: string
  location: string
  employment: string
  salary?: string
  status: JobStatus
  tags: string[]
  summary: string
  description: string[]
  applyUrl: string
  postedAt: string
}
