"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
}

export default function JobList() {
  const [jobs, setJobs] = useState<Job[]>([])

  useEffect(() => {
    fetchJobs()
  }, [])

  const fetchJobs = async () => {
    try {
      const response = await fetch('http://localhost:8000/jobs')
      const data = await response.json()
      setJobs(data)
    } catch (error) {
      console.error('Error fetching jobs:', error)
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.map((job) => (
        <Card key={job.id}>
          <CardHeader>
            <CardTitle>{job.title}</CardTitle>
            <CardDescription>{job.company}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{job.location}</p>
            <Button className="mt-4">Apply</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}