
# 🔗 Link Shortener

Una aplicación web simple para acortar enlaces, creada con HTML, TailwindCSS y un backend en Node.js + Express.  
Ideal como demostración educativa de cómo funcionan los sistemas de acortamiento de URLs.

## ✨ Características

- Interfaz minimalista con TailwindCSS.
- Backend ligero en Node.js usando Express.
- Almacenamiento en memoria (no persistente).
- Funciona localmente, sin base de datos ni configuración compleja.

---

## 📦 Requisitos

- [Node.js](https://nodejs.org/) (v14 o superior recomendado)
- Navegador moderno (Chrome, Firefox, etc.)

---

## 🚀 Instalación

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/tu-usuario/link-shortener.git
   cd link-shortener
   ```

2. **Instala las dependencias del backend:**

   ```bash
   npm install
   ```

---

## 🖥️ Uso

### 1. Inicia el servidor backend

```bash
node index.js
```

El backend estará corriendo en:  
`http://localhost:3000`

---

### 2. Abre el frontend

**Opción recomendada:** Usa un servidor local para evitar errores de CORS.

#### Usando `serve` (de Node.js):

```bash
npm install -g serve
serve public -l 5500
```

Abre tu navegador en:  
`http://localhost:5500`


## ⚠️ Limitaciones

- Los enlaces acortados se almacenan solo en memoria.
- Se eliminan automáticamente al reiniciar el servidor.
- No está pensado para producción, solo para fines educativos.

---

## 🧑‍💻 Autor

Made by **Luis Prendas**
