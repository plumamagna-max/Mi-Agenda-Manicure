# ManiAgenda

Aplicacion web responsive para manicuristas en Nicaragua.

## Stack
- Frontend: React + Vite + Tailwind CSS
- Backend/Auth/DB: Supabase (PostgreSQL + Supabase Auth)
- Monedas: C$ y USD con tipo de cambio base `1 USD = C$36.6243`

## Funcionalidades incluidas en este MVP
- Login, registro y recuperacion de contrasena.
- Dashboard con:
  - citas de hoy,
  - ingresos del dia,
  - proximas citas,
  - pagos pendientes,
  - cantidad de clientas.
- Agenda con:
  - vista dia/semana/mes,
  - formulario completo de cita,
  - estado y metodo de pago,
  - recordatorio por WhatsApp.
- Clientas:
  - ficha con telefono, cumpleanos, alergias, observaciones,
  - foto de diseno (URL),
  - historial y total gastado.
- Servicios:
  - catalogo con precio en C$ y aproximado USD.
- Pagos e ingresos:
  - resumen diario/semanal/mensual,
  - pagos pendientes,
  - ingresos por servicio,
  - filtro por moneda.
- Configuracion:
  - negocio, telefono, logo,
  - rol, moneda principal, tipo de cambio,
  - horario y dias laborales.
- Planes:
  - Gratis, Pro y Premium.
  - estructura lista para integrar pasarela despues.

## Estructura del proyecto
```text
maniagenda/
  src/
    components/
      agenda/
      auth/
      clients/
      layout/
      services/
      ui/
    config/
    context/
    data/
    lib/
    pages/
      auth/
    utils/
  supabase/
    schema.sql
    seed.sql
  .env.example
  package.json
```

## Configuracion de Supabase
1. Crea un proyecto en Supabase.
2. En SQL Editor ejecuta:
   1. `supabase/schema.sql`
   2. `supabase/seed.sql`
3. Copia `.env.example` a `.env` y completa:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

## Ejecucion local
1. Instalar dependencias:
```bash
npm install
```
2. Ejecutar:
```bash
npm run dev
```
3. Abrir en navegador:
```text
http://localhost:5173
```

## Modo demo (sin Supabase)
Si no configuras `.env`, la app funciona en modo demo con almacenamiento local para que pruebes pantallas y flujos.

## Roles soportados
- `independent`: Manicurista independiente
- `owner`: Duena de salon
- `admin`: Administradora

## Notas para futuras mejoras
- Integrar almacenamiento de imagenes con Supabase Storage.
- Conectar todos los CRUD a Supabase (en este MVP quedan listos los esquemas y contexto base).
- Integrar pasarela de pago para activar Plan Pro/Premium.
- Notificaciones automaticas (WhatsApp API o proveedor de mensajeria).
