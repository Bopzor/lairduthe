import Carte from "../../components/carte";

export default function CarteRestaurant() {
  return (
    <Carte
      page="carte-sur-place"
      pdf="/assets/images/carte/carte-sur-place.pdf"
      images={[
        "/assets/images/carte/carte-sur-place_p01.jpg",
        "/assets/images/carte/carte-sur-place_p02.jpg",
        "/assets/images/carte/carte-sur-place_p03.jpg",
        "/assets/images/carte/carte-sur-place_p04.jpg",
        "/assets/images/carte/carte-sur-place_p05.jpg",
        "/assets/images/carte/carte-sur-place_p06.jpg",
        "/assets/images/carte/carte-sur-place_p07.jpg",
      ]}
    />
  );
}
