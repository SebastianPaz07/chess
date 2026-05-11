# ChessStudy - Plataforma Educativa de Ajedrez

Aplicación web para grupos de estudio de ajedrez con roles profesor/estudiante e integración profunda con Lichess API.

## Características Principales

- **Gestión de Grupos:** Profesores crean grupos con códigos de invitación
- **Planes de Estudio:** Crear planes modulares con lecciones y tareas
- **Integración Lichess:** OAuth, partidas, puzzles, estudios, torneos
- **Análisis Automático:** Tracking de errores y detección de debilidades
- **Soporte para Libros:** Upload de PDFs con tracking de progreso
- **Gamificación:** Sistema de badges, logros y rachas

## Stack Tecnológico

- **Frontend:** Next.js 14, TypeScript, Tailwind CSS, Shadcn/ui
- **Backend:** Next.js API Routes, NextAuth.js
- **Database:** PostgreSQL + Prisma ORM
- **Integración:** Lichess API

## Instalación

```bash
# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con tus credenciales

# Setup base de datos
npx prisma generate
npx prisma migrate dev

# Ejecutar en desarrollo
npm run dev
```

## Variables de Entorno

Ver `.env.example` para la lista completa de variables necesarias.

Variables críticas:
- `DATABASE_URL`: Conexión a PostgreSQL
- `NEXTAUTH_SECRET`: Secret para NextAuth (generar con `openssl rand -base64 32`)
- `LICHESS_CLIENT_ID` y `LICHESS_CLIENT_SECRET`: OAuth de Lichess

## Scripts Disponibles

```bash
npm run dev          # Ejecutar en desarrollo
npm run build        # Build para producción
npm run start        # Ejecutar build de producción
npm run lint         # Ejecutar ESLint
npm run prisma:generate  # Generar cliente de Prisma
npm run prisma:migrate   # Ejecutar migraciones
npm run prisma:studio    # Abrir Prisma Studio
```

## Estructura del Proyecto

```
src/
├── app/              # Next.js App Router
├── components/       # Componentes React
├── lib/              # Utilities y configuración
├── services/         # Lógica de negocio
├── hooks/            # Custom hooks
├── stores/           # Zustand stores
└── types/            # TypeScript types

prisma/
└── schema.prisma     # Database schema
```

## Estado del Proyecto

**Fase Actual:** Fase 0 - Setup y Fundación ✅

### Completado
- ✅ Inicialización de Git
- ✅ Proyecto Next.js 14 con TypeScript
- ✅ Configuración de Tailwind CSS
- ✅ Schema completo de Prisma (24 entidades)
- ✅ NextAuth.js con credenciales
- ✅ Middleware de protección de rutas
- ✅ Variables de entorno configuradas

### Próximos Pasos
- [ ] Conectar a base de datos PostgreSQL
- [ ] Ejecutar migraciones de Prisma
- [ ] Implementar páginas de login/registro
- [ ] FASE 1: MVP - Gestión Básica

## Documentación

Plan completo de implementación: `.claude/plans/serialized-gliding-puzzle.md`

## Licencia

Private - Todos los derechos reservados
