import Card from "../components/Card";
import Carousel from "../components/Carousel";
import Nav from "../components/Nav";
const isiCard = [
  {
    image: "../components/image/foto 1.jpg",
    title: "Tanah Lot",
    caption:
      "Pura Tanah Lot adalah salah satu Pura (Tempat Ibadah Umat Hindu) yang sangat disucikan di Bali, Indonesia. Di sini ada dua pura yang terletak di atas batu besar. Satu terletak di atas bongkahan batu dan satunya terletak di atas tebing mirip dengan Pura Uluwatu. Pura Tanah Lot ini merupakan bagian dari pura Dang Kahyangan. Pura Tanah Lot merupakan pura laut tempat pemujaan dewa-dewa penjaga laut. Tanah Lot terkenal sebagai tempat yang indah untuk melihat matahari terbenam. ",
  },
  {
    image: "../components/image/foto 3.jpg",
    title: "Keindahan Pulau Padar, Surga dari NTT",
    caption:
      "Pulau Padar memiliki pemandangan alam yang mempesona. Di sini, Anda dapat menikmati alam dan menemukan gambar untuk dibagikan. Pulau Padar merupakan pulau terbesar ketiga di Taman Nasional Komodo, setelah Pulau Komodo dan Pulau Rinca.Lokasi Pulau Padar berada diantara Pulau Rinca dan Pulau Komodo Pulau ini lebih dekat ke Pulau Rinca dibandingkan ke Pulau Komodo, yang dipisahkan oleh Selat Lintah Nama Pulau Padar memang kurang sedikit dikenal di kalangan masyarakat karena pulau tersebut kalah bersaing dengan Pulau Komodo dan Pulau Rinca, namun keindahan Pulau Padar tidak kalah dengan kedua pulau tersebut. Yang paling populer di tempat ini adalah Gili Padar, karena disini anda akan berfoto dengan pulau-pulau cantik dan pantai sebagai latarnya",
  },
  {
    image: "../components/image/foto 2.jpg",
    title: "Pulau merah",
    caption:
      "Pulau Merah terletak di Desa Sumberagung Kecamatan Pesanggaran ini merupakan tempat terbaik untuk menikmati matahari terbenam aliassunset Teman Traveler bisa memburu momen tenggelamnya matahari di pantai sambil duduk di atas lembutnya pasir. Teman Traveler juga bisa menikmatinya sambil duduk di kursi pantai yang disewakan",
  },
  {
    image: "../components/image/foto 4.jpg",
    title: "Hutan De Djawatan Banyuwangi",
    caption:
      "Banyuwangi - Hutan De Djawatan merupakan destinasi populer di Banyuwangi. Namun di balik pesonanya itu, asal-usul hutan trembesi ini masih menjadi teka-teki.Liburan ke Banyuwangi memang belum lengkap bila tak mampir ke Hutan De Djawatan. Hutan ini menawarkan pemandangan nan hijau dan suasana sejuk. Suasananya tentu berbeda dengan destinasi lain yang didominasi pantai.Daya pikat utama dari Hutan De Djawatan adalah pepohonan trembesi berusia ratusan tahun yang masih kokoh berdiri. Adanya pepohonan ini sukses memberikan kesan seperti berada di negeri dongeng. Banyak juga wisatawan yang menyebutnya sebagai Hutan Lord of The Rings",
  },
];

function App() {
  return (
    <container>
      <Nav />
      <Carousel />
      <div className="row">
        {isiCard.map((agt, indeks) => (
          <div className="col-lg-3 col-md-4 col-sm-6">
            <Card image={agt.image} title={agt.title} caption={agt.caption} />
          </div>
        ))}
      </div>
    </container>
  );
}

export default App;
