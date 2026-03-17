# POC Slides: Development Lifecycle Automation

Presentación técnica modular sobre automatización del ciclo de desarrollo con agentes de IA.

## 🎯 Objetivo

Comunicar el valor del **Development Lifecycle Automation** a una audiencia técnica en ~15 minutos, reemplazando una presentación monolítica de 17K líneas de HTML con un sistema modular y mantenible.

## 🚀 Quick Start

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build producción
npm run build
```

## ⌨️ Controles

| Tecla | Acción |
|-------|--------|
| `→` / `Space` / `Click` | Siguiente slide |
| `←` | Slide anterior |
| `Home` | Primera slide |
| `End` | Última slide |
| `F` | Toggle fullscreen |
| `Esc` | Salir fullscreen |
| `1-9` | Ir a slide N |

## 📑 Estructura de Slides (19 total)

| # | Slide | Módulo |
|---|-------|--------|
| 00 | Hero - Problemas | Introducción |
| 01 | Agenda | Introducción |
| 02-04 | Context Window, Attention Decay, Compactación | El Problema |
| 05-06 | Chat vs Agente, Tools & MCP | Chat vs Agente |
| 07-08 | Skills/Sub-agentes, God Agent Problem | Evolución |
| 09-11 | Orquestador, SDD, Engram | La Solución |
| 12 | Hero - Nuestra Solución | Development Lifecycle |
| 13 | Flujo actual (manual) | Development Lifecycle |
| 14 | ¿Qué es un PRD? | Development Lifecycle |
| 15-17 | Pre-Dev, Dev+Post-Dev, Ciclo completo | Development Lifecycle |
| 18 | Próximos pasos | Cierre |

## 🏗️ Arquitectura

```
src/
├── slides/           # Una slide = un archivo .tsx
│   ├── 00-hero.tsx
│   ├── 01-agenda.tsx
│   └── ...
├── components/
│   ├── Slide.tsx           # Wrapper de slide
│   ├── Navigation.tsx      # Barra de navegación
│   ├── ProgressBar.tsx     # Indicador de progreso
│   └── diagrams/           # Componentes reutilizables
│       ├── FlowDiagram.tsx
│       ├── ComparisonCard.tsx
│       ├── FeatureBox.tsx
│       └── CodeBlock.tsx
├── hooks/
│   ├── useNavigation.ts    # Estado de navegación
│   ├── useKeyboard.ts      # Atajos de teclado
│   └── useFullscreen.ts    # API Fullscreen
└── lib/
    └── slides.ts           # Auto-discovery via import.meta.glob
```

## 🎨 Tech Stack

- **Vite** - Bundler con HMR rápido
- **React 18** - UI declarativa
- **TypeScript** - Type safety
- **Tailwind CSS** - Utilidades + tema Kanagawa
- **Framer Motion** - Animaciones y transiciones
- **Lucide React** - Iconos consistentes

## 📊 Métricas

| Métrica | Valor |
|---------|-------|
| Slides | 19 |
| Bundle (gzip) | ~114 KB |
| Tiempo agregar slide | < 5 min |
| Target presentación | 12-15 min |

## ➕ Agregar una nueva slide

1. Crear archivo en `src/slides/` con formato `XX-nombre.tsx`
2. Exportar `metadata` y componente `default`:

```tsx
import { Slide } from '@/components/Slide'
import type { SlideMetadata } from '@/types/slide'

export const metadata: SlideMetadata = {
  id: '20',
  module: 'Mi Módulo',
  title: 'Mi Nueva Slide',
}

export default function MiSlide() {
  return (
    <Slide module={metadata.module} title={metadata.title}>
      {/* Contenido */}
    </Slide>
  )
}
```

3. ¡Listo! El sistema detecta automáticamente la nueva slide.

## 🎨 Tema (Kanagawa)

```css
--bg-primary: #1a1b26
--bg-secondary: #24283b
--text-primary: #c0caf5
--accent-cyan: #7dcfff
--accent-green: #9ece6a
--accent-yellow: #e0af68
--accent-magenta: #bb9af7
--accent-red: #f7768e
```

## 📄 Licencia

MIT
