"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface Job {
  title: string;
  company: string;
  location: string;
  link: string;
}

export default function JobSearchPage() {
  const [keywords, setKeywords] = useState('')
  const [location, setLocation] = useState('Australia')
  const [jobs, setJobs] = useState<Job[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const response = await fetch(`http://localhost:8000/scrape-jobs?keywords=${encodeURIComponent(keywords)}&location=${encodeURIComponent(location)}`)
      if (!response.ok) {
        throw new Error('Failed to fetch jobs')
      }
      const data = await response.json()
      setJobs(data)
      toast({
        title: "Job Search Complete",
        description: `Found ${data.length} jobs matching your criteria.`,
      })
    } catch (error) {
      console.error('Error searching jobs:', error)
      toast({
        title: "Error",
        description: "Failed to search for jobs. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Job Search</h1>
      <form onSubmit={handleSearch} className="space-y-4 mb-8">
        <div>
          <Label htmlFor="keywords">Keywords (comma-separated)</Label>
          <Input
            id="keywords"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="e.g. software engineer, data scientist"
          />
        </div>
        <div>
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g. Sydney, Australia"
          />
        </div>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Searching...' : 'Search Jobs'}
        </Button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{job.title}</CardTitle>
              <CardDescription>{job.company}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-2">{job.location}</p>
              <a href={job.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                View Job
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}