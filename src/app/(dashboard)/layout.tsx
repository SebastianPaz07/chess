import { getCurrentUser } from "@/lib/session"
import { redirect } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/login")
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="border-b bg-white">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/dashboard" className="text-xl font-bold">
            ChessStudy
          </Link>

          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              {user.name}
            </span>
            <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
              {user.role === "PROFESSOR" ? "Profesor" : "Estudiante"}
            </span>
            <form action="/api/auth/signout" method="POST">
              <Button type="submit" variant="outline" size="sm">
                Salir
              </Button>
            </form>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  )
}
