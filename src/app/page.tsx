import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center max-w-3xl">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
          ChessStudy
        </h1>
        <p className="text-2xl text-gray-600 mb-8">
          Plataforma Educativa de Ajedrez
        </p>
        <p className="text-lg text-gray-500 mb-12">
          Enseña y aprende ajedrez de forma organizada con integración a Lichess
        </p>

        <div className="flex gap-4 justify-center mb-16">
          <Link href="/register">
            <Button size="lg" className="text-lg px-8">
              Comenzar Ahora
            </Button>
          </Link>
          <Link href="/login">
            <Button size="lg" variant="outline" className="text-lg px-8">
              Iniciar Sesión
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Para Profesores</h3>
            <p className="text-gray-600 text-sm">
              Crea grupos, asigna planes de estudio, monitorea progreso y analiza el desempeño de tus estudiantes
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Para Estudiantes</h3>
            <p className="text-gray-600 text-sm">
              Sigue planes estructurados, resuelve puzzles, analiza partidas y mejora tu nivel de ajedrez
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-2">Integración Lichess</h3>
            <p className="text-gray-600 text-sm">
              Conecta con Lichess para sincronizar partidas, puzzles, estudios y torneos automáticamente
            </p>
          </div>
        </div>

        <div className="mt-12 text-sm text-gray-400">
          Fase 1: MVP en desarrollo
        </div>
      </div>
    </main>
  )
}
