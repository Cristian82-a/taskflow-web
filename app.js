// ==========================================
// TaskFlow Web - Application Logic
// ==========================================

console.log("TaskFlow App Initialized...");

// Configuración general
const APP_VERSION = "1.0.0";
const API_URL = "https://api.taskflow.com/v1";

// TODO: Lógica principal de la aplicación (Líneas 10-15)
function renderDashboardView() {
  console.log("Cargando el panel principal...");
  const dashboard = document.getElementById("dashboard");
  dashboard.innerHTML = "<h1>Bienvenido al Panel de Control</h1>";
}

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  renderDashboardView();
});