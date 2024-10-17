"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

export default function ResumeUpload() {
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
        description: "Your resume has been uploaded and is being analyzed.",
      })
      setResume('')
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <Textarea
        placeholder="Paste your resume here"
        value={resume}
        onChange={(e) => setResume(e.target.value)}
        className="h-64"
      />
      <Button type="submit">Upload Resume</Button>
    </form>
  )
}