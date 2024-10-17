import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import JobList from "@/components/JobList"
import ResumeUpload from "@/components/ResumeUpload"
import Auth from "@/components/Auth"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">AI-Powered Recruitment Agency Platform</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Job Seekers</CardTitle>
            <CardDescription>Find your dream job with AI assistance</CardDescription>
          </CardHeader>
          <CardContent>
            <ResumeUpload />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Employers</CardTitle>
            <CardDescription>Find the best candidates for your openings</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Post your job listings and let our AI find the most suitable candidates.</p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/employer">Post a Job</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Authentication</CardTitle>
          <CardDescription>Sign in or create an account</CardDescription>
        </CardHeader>
        <CardContent>
          <Auth />
        </CardContent>
      </Card>
      <h2 className="text-2xl font-bold mb-4">Latest Job Listings</h2>
      <JobList />
    </div>
  )
}