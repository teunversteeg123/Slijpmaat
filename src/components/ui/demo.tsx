"use client"

import PolaroidLineCarousel from "@/components/ui/polaroid-line-carousel"

// Real knife sharpening and culinary photography
export default function DemoPhotos() {
  return (
    <PolaroidLineCarousel
      slides={[
        {
          image: "/assets/werkwijze/03-slijpen.jpg",
          title: "Handmatig op waterstenen",
          caption: "Traditioneel Japans watersteen slijpambacht.",
        },
        {
          image: "/assets/resultaten/06-snede-bijl.jpeg",
          title: "Vlijmscherpe snede",
          caption: "Microscopische braam zorgvuldig verwijderd op soepel leer.",
        },
        {
          image: "/assets/resultaten/07-mes-met-slijpmaat-sticker.jpeg",
          title: "Mes met Slijpmaat sticker",
          caption: "Veilig en vlijmscherp retour naar jouw snijplank.",
        },
        {
          image: "/assets/werkwijze/01-beoordelen.jpg",
          title: "Lemmet beoordelen",
          caption: "Originele curve en dikte gerespecteerd.",
        },
        {
          image: "/assets/werkwijze/02-stenen-kiezen.jpg",
          title: "De juiste steenkeuze",
          caption: "Afgestemd op het type staal en gebruik.",
        },
        {
          image: "/assets/werkwijze/04-afwerken.jpg",
          title: "Afwerken op leer",
          caption: "Gepolijste apex voor langdurig scherptebehoud.",
        },
      ]}
    />
  )
}
