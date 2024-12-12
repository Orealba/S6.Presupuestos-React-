# Calculadora de Presupuestos

Una aplicación web desarrollada con React + TypeScript que permite a los usuarios crear presupuestos personalizados.

## 🚀 Características

- Navegación entre dos páginas principales
- Calculadora interactiva de presupuestos
- Sistema de tarjetas para selección de servicios
- Formulario para datos del cliente
- Múltiples presupuestos guardables
- Popups informativos para mejor experiencia de usuario
- Cálculo dinámico del total usando Context

## 💻 Tecnologías Utilizadas que hay que instalar

- Vite
- React
- TypeScript
- Tailwind CSS
- Flowbite
- Context API de React

## 📋 Estructura de la Aplicación

### Página Principal

- Punto de entrada a la aplicación
- Navegación hacia la calculadora

### Página Calculadora

- Componentes múltiples para la interfaz:
  - Navbar: Barra de navegación
  - Cards: Tarjetas de servicios seleccionables
  - PrecioTotal: Muestra el total calculado
  - GenerarPresupuestoCard: Formulario para datos del cliente
  - DatosPresupuestoCard: Muestra los presupuestos generados

### Gestión de Estado

- Context API para manejar:
  - Total del presupuesto
  - Información de las tarjetas seleccionadas
  - Estado global de la aplicación

## 🔧 Características Adicionales

- Validación de formularios
- Popups informativos para mejor UX
- Capacidad de generar múltiples presupuestos

## 🎨 Estilos

- Implementado con Tailwind CSS
- Componentes de Flowbite para UI consistente
