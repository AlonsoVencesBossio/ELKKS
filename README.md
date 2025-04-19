---
layout: default
---
<link rel="stylesheet" href="style.css">

# ¡Bienvenidos a la página de Pokémon!

Este es un ejemplo usando el tema **Cayman** de GitHub Pages con un buscador y secciones específicas.

## 🔍 Buscar en la página

<form action="#" method="get" id="search-form">
  <input type="text" id="search-input" placeholder="Buscar..." oninput="searchContent()" style="width: 100%; padding: 8px; font-size: 16px;">
</form>

## 📁 Secciones

- [GENERAL](#general)
- [ALOLA](#alola)
- [GALAR](#galar)
- [HISUI](#hisui)
- [PALDEA](#paldea)
- [CONVERGENTE](#convergente)
- [PARADOX FUTURO](#paradox-futuro)
- [PARADOX PASADO](#paradox-pasado)
- [REFERENCIAS](#referencias)

---

## GENERAL

Aquí va el contenido general sobre Pokémon.

## ALOLA

Contenido sobre la región de Alola.

## GALAR

Contenido sobre la región de Galar.

## HISUI

Contenido sobre la región de Hisui.

## PALDEA

Contenido sobre la región de Paldea.

## CONVERGENTE

Contenido sobre Pokémon convergentes.

## PARADOX FUTURO

Contenido sobre los Pokémon del Paradojo Futuro.

## PARADOX PASADO

Contenido sobre los Pokémon del Paradojo Pasado.

## REFERENCIAS

Aquí van las referencias.

---

<script>
  function searchContent() {
    const query = document.getElementById("search-input").value.toLowerCase();
    const allSections = document.querySelectorAll("h2, h3, p");

    allSections.forEach(section => {
      if (section.textContent.toLowerCase().includes(query)) {
        section.style.display = "block";
      } else {
        section.style.display = "none";
      }
    });
  }
</script>


