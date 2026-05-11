import { getCurrentUser } from "@/lib/session"
import { redirect } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default async function DashboardPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/login")
  }

  const isProfessor = user.role === "PROFESSOR"

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">
          Bienvenido, {user.name}
        </h1>
        <p className="text-muted-foreground mt-2">
          {isProfessor
            ? "Gestiona tus grupos y monitorea el progreso de tus estudiantes"
            : "Continúa tu aprendizaje y mejora tu nivel de ajedrez"}
        </p>
      </div>

      {/* Dashboard Professor */}
      {isProfessor && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Mis Grupos</CardTitle>
              <CardDescription>
                Crea y gestiona grupos de estudio
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold mb-2">0</div>
              <p className="text-sm text-muted-foreground mb-4">
                grupos creados
              </p>
              <Link href="/dashboard/groups">
                <Button className="w-full">Ver Grupos</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Estudiantes</CardTitle>
              <CardDescription>
                Total de estudiantes en tus grupos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold mb-2">0</div>
              <p className="text-sm text-muted-foreground mb-4">
                estudiantes registrados
              </p>
              <Button className="w-full" variant="outline" disabled>
                Ver Todos
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Planes de Estudio</CardTitle>
              <CardDescription>
                Planes asignados actualmente
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold mb-2">0</div>
              <p className="text-sm text-muted-foreground mb-4">
                planes activos
              </p>
              <Button className="w-full" variant="outline" disabled>
                Ver Planes
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Dashboard Student */}
      {!isProfessor && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Mis Grupos</CardTitle>
              <CardDescription>
                Grupos en los que estás inscrito
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold mb-2">0</div>
              <p className="text-sm text-muted-foreground mb-4">
                grupos
              </p>
              <Link href="/dashboard/groups">
                <Button className="w-full">Unirme a un Grupo</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Planes de Estudio</CardTitle>
              <CardDescription>
                Planes asignados por tus profesores
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold mb-2">0</div>
              <p className="text-sm text-muted-foreground mb-4">
                planes asignados
              </p>
              <Button className="w-full" variant="outline" disabled>
                Ver Mis Planes
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mi Progreso</CardTitle>
              <CardDescription>
                Progreso general en tus estudios
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold mb-2">0%</div>
              <p className="text-sm text-muted-foreground mb-4">
                completado
              </p>
              <Button className="w-full" variant="outline" disabled>
                Ver Estadísticas
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Acciones Rápidas</CardTitle>
          <CardDescription>
            {isProfessor
              ? "Comienza creando tu primer grupo de estudio"
              : "Únete a un grupo para comenzar tu aprendizaje"}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {isProfessor ? (
            <>
              <Link href="/dashboard/groups/new">
                <Button className="w-full">Crear Nuevo Grupo</Button>
              </Link>
              <Button className="w-full" variant="outline" disabled>
                Crear Plan de Estudio
              </Button>
            </>
          ) : (
            <>
              <Link href="/dashboard/groups">
                <Button className="w-full">Unirme a un Grupo</Button>
              </Link>
              <Button className="w-full" variant="outline" disabled>
                Ver Mis Tareas
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
