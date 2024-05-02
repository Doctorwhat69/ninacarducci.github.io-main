$(document).ready(function () {
  if ($(".gallery").length > 0) {
    var galleryConfig = {
      columns: {
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 3,
      },
      lightBox: true,
      lightboxId: "myAwesomeLightbox",
      showTags: true,
      tagsPosition: "top",
    };

    try {
      $(".gallery").mauGallery(galleryConfig);
    } catch (e) {
      console.error("Echec de l'initialisation de la gallerie : ", e);
    }
  }
});
