import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">About Our AI-Powered Recruitment Platform</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>AI-Powered Matching</CardTitle>
            <CardDescription>How our technology works</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Our platform uses advanced AI algorithms to analyze job requirements and candidate profiles. We leverage natural language processing and machine learning to understand the nuances of both job descriptions and resumes, ensuring the most accurate matches possible.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Resume Enhancement</CardTitle>
            <CardDescription>Optimizing your application</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Our AI doesn't just match candidates with jobs; it also helps optimize resumes. By analyzing successful applications, our system can suggest improvements to your resume, increasing your chances of landing your dream job.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Automated Sourcing</CardTitle>
            <CardDescription>Finding hidden opportunities</CardDescription>
          </CardHeader>
          <CardContent>
            <p>We use AI to scrape and analyze job postings from various sources, including LinkedIn, to find opportunities that aren't widely advertised. This gives our users access to a broader range of potential positions.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Ethical AI</CardTitle>
            <CardDescription>Ensuring fairness and transparency</CardDescription>
          </CardHeader>
          <CardContent>
            <p>We are committed to using AI responsibly. Our algorithms are designed to be unbiased and transparent, ensuring fair opportunities for all candidates regardless of background.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}