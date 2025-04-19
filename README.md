# ¡Bienvenidos a la página de Pokémon!

Este es un ejemplo usando el tema **Minimal** de GitHub Pages con un buscador y secciones específicas.

## Buscar en la página

<form action="#" method="get" id="search-form">
  <input type="text" id="search-input" placeholder="Buscar..." oninput="searchContent()">
</form>

## Secciones

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

<script>
  function searchContent() {
    const query = document.getElementById("search-input").value.toLowerCase();
    const sections = document.querySelectorAll("h2, h3, p");
    
    sections.forEach((section) => {
      const sectionText = section.textContent.toLowerCase();
      if (sectionText.includes(query)) {
        section.style.display = "block";
      } else {
        section.style.display = "none";
      }
    });
  }
</script>

<script src="search.js"></script>

