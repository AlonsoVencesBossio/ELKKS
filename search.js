<script>
  function searchContent() {
    const query = document.getElementById("search-input").value.toLowerCase();
    const sections = document.querySelectorAll("h2, h3, p");
    
    sections.forEach((section) => {
      const sectionText = section.textContent.toLowerCase();
      if (sectionText.includes(query)) {
        section.style.display = "block"; // Mostrar la sección
      } else {
        section.style.display = "none"; // Ocultar la sección
      }
    });
  }
</script>
