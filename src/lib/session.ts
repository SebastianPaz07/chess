import { getServerSession } from "next-auth"
import { authOptions } from "./auth"

export async function getCurrentUser() {
  const session = await getServerSession(authOptions)
  return session?.user
}

export async function requireAuth() {
  const user = await getCurrentUser()
  if (!user) {
    throw new Error("No autenticado")
  }
  return user
}

export async function requireProfessor() {
  const user = await requireAuth()
  if (user.role !== "PROFESSOR") {
    throw new Error("Acceso denegado: se requiere rol de profesor")
  }
  return user
}
