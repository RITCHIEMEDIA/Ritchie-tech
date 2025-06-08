import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="text-center space-y-6 max-w-md mx-auto px-4">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-slate-900 dark:text-white">404</h1>
          <h2 className="text-2xl font-semibold text-slate-700 dark:text-slate-300">Page Not Found</h2>
          <p className="text-slate-600 dark:text-slate-400">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
        </div>
        <Button asChild>
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  )
}
