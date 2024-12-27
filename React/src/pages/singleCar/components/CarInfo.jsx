import PropTypes from "prop-types";

const CarInfo = ({ carData }) => {
  return (
    <section>
      <div className="mt-6">
        <h2 className="text-2xl font-bold">Naslov</h2>
        <p className="text-primary mt-2">{carData.title}</p>
        <h2 className="text-2xl font-bold">Opis</h2>
        <p className="text-primary mt-2">{carData.description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="border p-4 rounded-md">
          <h3 className="text-xl font-semibold mb-4">Opšte informacije</h3>
          <ul className="space-y-2">
            <li>
              <strong>Marka:</strong> {carData.brand}
            </li>
            <li>
              <strong>Model:</strong> {carData.model}
            </li>
            <li>
              <strong>Godište:</strong> {carData.year}
            </li>
            <li>
              <strong>Karoserija:</strong> {carData.body_type}
            </li>
            <li>
              <strong>Gorivo:</strong> {carData.fuel}
            </li>
            <li>
              <strong>Kilometraža:</strong> {carData.mileage} km
            </li>
          </ul>
        </div>
        <div className="border p-4 rounded-md">
          <h3 className="text-xl font-semibold mb-4">Dodatne informacije</h3>
          <ul className="space-y-2">
            <li>
              <strong>Pogon:</strong> {carData.drivetrain}
            </li>
            <li>
              <strong>Menjač:</strong> {carData.transmission}
            </li>
            <li>
              <strong>Snaga:</strong> {carData.horsepowers} KS
            </li>
            <li>
              <strong>Emisiona klasa:</strong> {carData.emission_standard}
            </li>
            <li>
              <strong>Boja:</strong> {carData.color}
            </li>
            <li>
              <strong>Broj vrata:</strong> {carData.doors_number}
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 p-4 border rounded-md">
        <h3 className="text-xl font-semibold mb-2">Lokacija</h3>
        <p>
          {carData.location.city}, {carData.location.country}
        </p>
        <h3 className="text-xl font-semibold mt-4">Korisnik</h3>
        <p>
          {carData.user.first_name} {carData.user.last_name}
        </p>
        <p>Email: {carData.user.email}</p>
        <p>Telefon: {carData.user.phone_number}</p>
      </div>
    </section>
  );
};

CarInfo.propTypes = {
  carData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    body_type: PropTypes.string.isRequired,
    fuel: PropTypes.string.isRequired,
    mileage: PropTypes.number.isRequired,
    drivetrain: PropTypes.string.isRequired,
    transmission: PropTypes.string.isRequired,
    horsepowers: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    emission_standard: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    doors_number: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    location: PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    }).isRequired,
    user: PropTypes.shape({
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone_number: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default CarInfo;
