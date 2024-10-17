"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

export default function JobSeekerPage() {
  const [resume, setResume] = useState('')
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:8000/resumes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: resume }),
      })
      if (!response.ok) {
        throw new Error('Failed to submit resume')
      }
      toast({
        title: "Resume Submitted",
        description: "Our AI is analyzing your resume and matching you with suitable jobs.",
      })
    } catch (error) {
      console.error('Error submitting resume:', error)
      toast({
        title: "Error",
        description: "Failed to submit resume. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Job Seeker Portal</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="resume">Your Resume</Label>
          <Textarea
            id="resume"
            placeholder="Paste your resume here or write a brief description of your skills and experience"
            value={resume}
            onChange={(e) => setResume(e.target.value)}
            className="h-64"
          />
        </div>
        <Button type="submit">Submit Resume</Button>
      </form>
    </div>
  )
}