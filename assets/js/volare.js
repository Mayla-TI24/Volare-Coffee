




(function () {
  'use strict';

  


  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.from((ctx || document).querySelectorAll(sel)); }

  var englishText = {
    'Caturtunggal, Depok, Sleman, Yogyakarta': 'Caturtunggal, Depok, Sleman, Yogyakarta',
    'Beranda': 'Home',
    'Tentang': 'About',
    'Cerita Kami': 'Our Story',
    'Tentang Kami': 'About Us',
    'Menu': 'Menu',
    'Galeri': 'Gallery',
    'Ulasan': 'Reviews',
    'Galeri & Ulasan': 'Gallery & Reviews',
    'Sorotan': 'Highlights',
    'Keunggulan, Galeri, dan Ulasan Volare Coffee': 'Highlights, Gallery, and Reviews at Volare Coffee',
    'Lihat suasana Volare Coffee dan cerita dari pengunjung kami.': 'Explore Volare Coffee and stories from our guests.',
    'Geser ke kiri untuk membaca ulasan lainnya': 'Swipe left to read more reviews.',
    'Ulasan bintang lima': 'Five-star reviews',
    'Lihat Review Selengkapnya': 'See More Reviews',
    'Lihat ulasan Volare Coffee lainnya di Google Maps': 'See more Volare Coffee reviews on Google Maps',
    'Reservasi & Kontak': 'Reservations & Contact',
    'Kami tidak sabar untuk bertemu denganmu dan kami senang melihat setiap momen yang kamu bagikan bersama Volare.': 'We can’t wait to meet you and love seeing every moment you share with Volare.',
    'Temukan minuman favoritmu, nikmati suasana yang nyaman, dan ciptakan momen menyenangkan bersama orang-orang tersayang.': 'Discover your favorite drink, enjoy our cozy atmosphere, and make lovely memories with the people you love.',
    'Jelajahi Menu': 'Explore the Menu',
    'Cerita di Balik': 'The Story Behind',
    'Didirikan di Yogyakarta, Volare Coffee hadir sebagai tempat bagi siapa saja yang ingin menikmati waktu dengan cara yang lebih menyenangkan. Berawal dari kecintaan terhadap kopi, matcha, dan kreasi minuman yang unik, Volare ingin menghadirkan pengalaman menikmati minuman yang bukan hanya tentang rasa, tetapi juga tentang suasana dan cerita di balik setiap kunjungan.': 'Founded in Yogyakarta, Volare Coffee is a place for everyone to enjoy their time in a more delightful way. Inspired by our love of coffee, matcha, and creative drinks, Volare offers an experience that goes beyond flavor to include the atmosphere and story behind every visit.',
    'Dengan perpaduan suasana yang nyaman, pilihan minuman yang menarik, serta sentuhan warna hijau dan ungu yang menjadi identitas kami, Volare Coffee menjadi tempat untuk beristirahat sejenak dari kesibukan, bertemu teman, menyelesaikan pekerjaan, atau sekadar menikmati waktu sendiri.': 'With a cozy atmosphere, an appealing drink selection, and signature touches of green and purple, Volare Coffee is a place to take a break, meet friends, get some work done, or simply enjoy a little time to yourself.',
    'Karena setiap momen sederhana layak ditemani dengan minuman yang istimewa.': 'Because every simple moment deserves an exceptional drink.',
    '"Selamat datang di Volare Coffee, tempat setiap tegukan mampu membangkitkan semangat harimu."': '"Welcome to Volare Coffee, where every sip can lift your day."',
    'Menu signature': 'Signature Menu',
    'Menu Signature': 'Signature Menu',
    'Menu Andalan': 'Our Signature',
    'Tiga racikan favorit dengan karakter rasa yang berbeda—dibuat untuk menemani harimu.': 'Three favorites with distinct flavor profiles, crafted to brighten your day.',
    'Ubi asli': 'Real purple yam',
    'Selai ubi buatan sendiri': 'House-made purple yam jam',
    'Tanpa perisa buatan': 'No artificial flavoring',
    'Sentuh untuk detail': 'Tap for details',
    'Sentuh untuk kembali': 'Tap to flip back',
    'Rasa matcha yang earthy berpadu dengan selai ubi buatan sendiri yang lembut dan manis alami.': 'Earthy matcha meets our smooth, naturally sweet house-made purple yam jam.',
    'Ube yang creamy berpadu dengan stroberi segar dan lapisan cloud yang ringan.': 'Creamy purple yam blends with fresh strawberries and a light, airy cloud topping.',
    'Latte lembut dengan selai ubi buatan sendiri dan rasa manis yang seimbang.': 'A smooth latte with house-made purple yam jam and a perfectly balanced sweetness.',
    'Lihat menu lainnya': 'Explore More Menu Items',
    'Kenapa Menu Ube Menjadi Highlight di Volare?': 'Why Is Ube a Highlight at Volare?',
    'Kami mengangkat produk olahan ube istimewa karena memberikan cita rasa autentik dan kelembutan khas yang sempurna saat dipadukan dengan matcha maupun kopi. Selai ube dibuat segar secara homemade tanpa bahan pengawet dan perisa buatan!': 'Our ube creations offer an authentic flavor and signature creaminess that pair beautifully with matcha and coffee. Our purple yam jam is made fresh in-house without preservatives or artificial flavoring!',
    'Reservasi Meja Sekarang': 'Book a Table',
    'Pesan via GoFood': 'Order on GoFood',
    'Pesan via GrabFood': 'Order on GrabFood',
    'Pesan via ShopeeFood': 'Order on ShopeeFood',
    'Pilihan Lainnya': 'More Choices',
    'Menu Tambahan': 'More from the Menu',
    'Dari espresso racikan barista, mocktail segar, aneka latte, matcha series, hingga smoothies bowl yang menyehatkan.': 'From barista-crafted espresso and refreshing mocktails to lattes, matcha drinks, and nourishing smoothie bowls.',
    'Signature': 'Signature',
    'Matcha Series': 'Matcha Series',
    'Daily Latte': 'Daily Latte',
    'Fruit & Flavoured': 'Fruit & Flavored',
    'Espresso Based': 'Espresso-Based',
    'Milkbased': 'Milk-Based',
    'Refresh Mocktail': 'Refreshing Mocktails',
    'Smoothies Bowl': 'Smoothie Bowls',
    'Tea & Other': 'Tea & More',
    'Racikan khas Volare untuk pengalaman minum yang berbeda.': 'Volare’s signature blends for a one-of-a-kind drinking experience.',
    'Pilihan matcha dengan paduan rasa yang lembut dan khas.': 'Matcha favorites with smooth, distinctive flavor combinations.',
    'Matcha berpadu manisnya pisang': 'Matcha blended with sweet banana.',
    'Matcha dengan aroma kelapa tropis': 'Matcha with a tropical coconut aroma.',
    'Matcha kaya rasa berpadu mangga segar': 'Rich matcha paired with fresh mango.',
    'Matcha berpadu asam manis buah raspberry': 'Matcha meets the sweet-tart taste of raspberries.',
    'Latte untuk menemani rutinitas harianmu.': 'Lattes to brighten your everyday routine.',
    'Latte andalan harian dengan creamy pas': 'An everyday favorite with just the right creaminess.',
    'Rasa buah dan latte berpadu dalam pilihan yang segar.': 'A refreshing blend of fruity flavors and creamy lattes.',
    'Kopi berbasis espresso, tersedia panas maupun dingin.': 'Espresso-based coffee, available hot or iced.',
    'Minuman creamy dengan pilihan rasa favorit.': 'Creamy drinks in all your favorite flavors.',
    'Minuman segar untuk dinikmati kapan saja.': 'Refreshing drinks to enjoy any time.',
    'Pilihan smoothies buah dengan topping yang beragam.': 'Fruit smoothie bowls with a variety of toppings.',
    'Teh artisan, add-on, dan pilihan pendamping lainnya.': 'Artisan tea, add-ons, and other favorites.',
    'Pilihan teh artisan hangat berkualitas': 'A comforting cup of quality artisan tea.',
    'Air mineral botol': 'Bottled mineral water.',
    'Tambahan shot kopi lebih mantap': 'Add an extra shot of coffee.',
    'Topping krim gurih lembut': 'A smooth, savory cream topping.',
    'Ingin Melihat Lembar Menu Fisik?': 'Want to See Our Printed Menu?',
    'Klik tombol di samping untuk melihat foto lembar menu cetak fisik Volare Coffee secara lengkap.': 'Select the button to view the complete photo of Volare Coffee’s printed menu.',
    'Lihat Foto Menu': 'View the Printed Menu',
    'Kenapa Memilih Kami': 'Why Choose Us',
    'Nilai & Keunggulan': 'What Makes Us Special',
    'Tiga pilar yang selalu kami jaga untuk memastikan setiap momen kunjunganmu terasa istimewa.': 'Three pillars we uphold to make every visit a special one.',
    'Kreasi Menu yang Unik': 'Unique Menu Creations',
    'Nikmati berbagai pilihan minuman dengan cita rasa khas, mulai dari Matcha Ube, Ube Latte, hingga Ube Berry Cloud yang siap menemani setiap momenmu.': 'Enjoy distinctive drinks, from Matcha Ube and Ube Latte to Ube Berry Cloud, made to brighten every moment.',
    'Suasana Nyaman dan Menarik': 'A Welcoming, Inviting Atmosphere',
    'Hadir dengan perpaduan nuansa hijau dan ungu yang memberikan kesan segar dan menenangkan. Tempat yang cocok untuk berkumpul, mengerjakan tugas, maupun menikmati waktu sendiri.': 'Our signature green and purple tones create a fresh, calming atmosphere—perfect for meeting friends, getting work done, or enjoying some time alone.',
    'Pelayanan Ramah dan Bersahabat': 'Warm and Friendly Service',
    'Kami berkomitmen memberikan pelayanan yang ramah dan menyenangkan agar setiap kunjungan terasa lebih berkesan. Senyum hangat barista siap menyambut harimu.': 'We are committed to friendly, thoughtful service that makes every visit memorable. Our baristas are ready to welcome you with a warm smile.',
    'Lebih dari Sekadar Menikmati Minuman': 'More Than Just a Great Drink',
    'Di Volare Coffee, kami percaya bahwa kebahagiaan bisa dimulai dari hal sederhana. Secangkir minuman favorit, suasana yang nyaman, dan kebersamaan yang menyenangkan menjadi bagian dari pengalaman yang ingin kami hadirkan.': 'At Volare Coffee, we believe happiness can begin with the simple things: a favorite drink, a cozy atmosphere, and good company. That is the experience we hope to share with you.',
    'Yuk, jadikan Volare bagian dari cerita menyenangkanmu hari ini.': 'Make Volare part of your happy moments today.',
    'Manajemen & Tim': 'Management & Team',
    'Struktur Organisasi': 'Our Team',
    'Setiap minuman didukung tim yang menjaga stok, keuangan, dan layanan di kafe.': 'Every drink is supported by a team that keeps our inventory, finances, and café service running smoothly.',
    'Kepemimpinan': 'Leadership',
    'Memimpin kegiatan operasional dan menentukan arah pengembangan Volare Coffee.': 'Leads daily operations and guides the growth of Volare Coffee.',
    'Tim operasional': 'Operations Team',
    'Staf Gudang': 'Inventory Staff',
    'Mengelola persediaan bahan baku, memeriksa stok, dan memastikan kebutuhan operasional tersedia.': 'Manages ingredients, checks stock, and ensures the café has everything it needs.',
    'Keuangan': 'Finance',
    'Mengelola pemasukan, pengeluaran, pencatatan transaksi, dan laporan keuangan.': 'Manages income, expenses, transaction records, and financial reports.',
    'Staf Barista': 'Barista',
    'Menyiapkan minuman, menjaga kualitas produk, dan melayani pelanggan.': 'Prepares drinks, maintains product quality, and serves our guests.',
    'Suasana Nyaman di': 'A Cozy Atmosphere at',
    'Ruang indoor yang sejuk dan tenang untuk fokus WFC/tugas, serta area outdoor santai bernuansa pastel modern di jantung Yogyakarta.': 'A cool, quiet indoor space for work or study, plus a relaxed outdoor area with modern pastel touches in the heart of Yogyakarta.',
    'Indoor Space: Sejuk, tenang & nyaman untuk tugas / WFC': 'Indoor space: cool, quiet, and comfortable for work or study.',
    'Espresso bar dengan ornamen burung ikonik': 'Espresso bar with an iconic bird detail.',
    'Outdoor & smoking area yang asik buat nongkrong': 'A laid-back outdoor and smoking area.',
    'Tampak malam: Neon sign Volare Coffee yang hangat': 'Night view: Volare Coffee’s inviting neon sign.',
    'Sudut bar utama dengan sentuhan warna hijau pastel': 'The main bar with soft pastel-green accents.',
    'Kreasi Menu, Suasana, & Pelayanan': 'Menu, Atmosphere, & Service',
    'Cerita Seru dari Volare': 'Stories from Volare',
    'Pengalaman Seru di': 'Good Times at',
    'Hal-hal kecil yang membuat setiap kunjungan terasa istimewa. Setiap kunjungan punya cerita, setiap tegukan punya kesan.': 'It is the little things that make every visit special. Every visit has a story, and every sip leaves a lasting impression.',
    '01. Suasana yang Bikin Betah': '01. A Place to Settle In',
    'Adem banget buat ngerjain tugas!': 'So cool and comfy for getting work done!',
    '"Awalnya tahu Volare dari rekomendasi teman book club, ternyata tempatnya senyaman itu! Matcha-nya enak, tersedia area smoking, dan bagian dalam kafenya adem banget buat ngerjain tugas. Toiletnya juga bersih dan wangi, jadi makin betah. Pasti bakal datang lagi!"': '"I first heard about Volare from my book club friends, and it turned out to be such a comfortable place! The matcha is delicious, there is a smoking area, and the café interior is wonderfully cool for getting work done. The restroom is clean and smells lovely too. I will definitely be back!"',
    'PENGALAMAN PENGUNJUNG': 'GUEST EXPERIENCE',
    '02. Rasa yang Selalu Juara': '02. Flavors That Never Miss',
    'Strawberry & Matcha Ube juaranya!': 'Strawberry & Matcha Ube are the best!',
    '"Semuanya enak! Strawberry Ube dan Matcha Ube-nya benar-benar rekomendasi banget. Nggak heran kalau Volare selalu ramai. Rasanya enak, harganya terjangkau, dan suasananya juga nyaman banget. Bikin betah dan pengen balik lagi!"': '"Everything is delicious! Strawberry Ube and Matcha Ube are absolute must-tries. No wonder Volare is always busy. The drinks taste great, the prices are reasonable, and the atmosphere is so cozy. It makes you want to stay and come back again!"',
    '03. Selalu Jadi Favorit': '03. A Lasting Favorite',
    'Matcha terbaik buat WFC!': 'The best matcha for working remotely!',
    '"Sudah berkali-kali beli dan nggak pernah mengecewakan! Matcha Volare jadi salah satu yang terbaik dari semua yang pernah aku coba. Tempatnya nyaman buat WFC, Wi-Fi lancar, musiknya nggak berisik, toiletnya bersih, dan pelayanannya ramah banget. Bakal terus jadi tempat favorit!"': '"I have ordered many times and it has never disappointed! Volare’s matcha is one of the best I have ever tried. It is a comfortable place to work remotely, with reliable Wi-Fi, quiet music, clean restrooms, and very friendly service. It will always be one of my favorite spots!"',
    'Sudah pernah berkunjung ke Volare?': 'Have you visited Volare?',
    'Jangan lupa bagikan pengalaman dan momen favoritmu bersama kami dengan mention': 'Share your experience and favorite moments with us by mentioning',
    'di Instagram & TikTok. Sampai bertemu di kunjungan berikutnya!': 'on Instagram & TikTok. We look forward to seeing you again!',
    'Reservasi Meja': 'Table Reservations',
    'Kotak Reservasi': 'Reservation Form',
    'Mau ngerjain tugas bareng teman, meeting santai, atau nongkrong seru? Amankan mejamu lebih dulu agar kunjunganmu makin nyaman!': 'Planning to study with friends, have a casual meeting, or just hang out? Reserve a table in advance for an even more comfortable visit!',
    'Nikmati Kenyamanan Terbaik di Volare': 'Enjoy a More Comfortable Visit at Volare',
    'Dengan melakukan reservasi terlebih dahulu, kami bisa menyiapkan meja terbaik sesuai kebutuhanmu, mulai dari stopkontak laptop yang memadai hingga spot duduk favorit.': 'By booking ahead, we can prepare the best table for your needs—from convenient laptop outlets to your favorite seating area.',
    'Koneksi Wi-Fi kencang & stabil untuk WFC': 'Fast, reliable Wi-Fi for working remotely',
    'Stopkontak listrik di banyak titik meja': 'Power outlets throughout the café',
    'Ruangan indoor ber-AC sejuk & harum': 'Cool, air-conditioned indoor seating',
    'Pilihan area outdoor & smoking yang nyaman': 'Comfortable outdoor and smoking areas',
    'Toilet wangi, bersih, dan higienis': 'Clean, fresh, and hygienic restrooms',
    'Konfirmasi reservasi akan langsung terhubung ke WhatsApp resmi Volare Coffee di': 'Your reservation confirmation will be sent directly to Volare Coffee’s official WhatsApp at',
    'Formulir Reservasi Meja': 'Table Reservation Form',
    'Isi formulir di bawah ini dan kami akan segera mengonfirmasi mejamu.': 'Fill out the form below and we will confirm your table shortly.',
    'Nama Lengkap': 'Full Name',
    'Nomor WhatsApp': 'WhatsApp Number',
    'Tanggal Kunjungan': 'Visit Date',
    'Jam Kunjungan': 'Visit Time',
    'Jumlah Orang (Pax)': 'Number of Guests',
    '1 Orang (Me-time / Focus WFC)': '1 guest (me-time / focused work)',
    '2 Orang': '2 guests',
    '3 - 4 Orang': '3–4 guests',
    '5 - 8 Orang': '5–8 guests',
    'Lebih dari 8 Orang (Group)': 'More than 8 guests (group)',
    'Pilihan Area Duduk': 'Seating Preference',
    'Indoor AC (Bebas Asap, Dekat Colokan)': 'Air-conditioned indoor (smoke-free, near outlets)',
    'Outdoor / Smoking Area': 'Outdoor / smoking area',
    'Bebas Mana Saja yang Tersedia': 'Any available area',
    'Catatan Khusus': 'Special Requests',
    '(opsional)': '(optional)',
    'Kirim Reservasi ke WhatsApp Volare': 'Send Reservation to Volare on WhatsApp',
    'Terima kasih telah menjadi bagian dari cerita Volare Coffee. Kami berharap setiap kunjungan dan setiap minuman yang kamu nikmati dapat memberikan kebahagiaan kecil untuk harimu.': 'Thank you for being part of the Volare Coffee story. We hope every visit and every drink brings a little joy to your day.',
    'Navigasi': 'Navigation',
    'Tentang Kami': 'About Us',
    'Menu Andalan': 'Signature Menu',
    'Menu Lengkap': 'Full Menu',
    'Keunggulan': 'Why Choose Us',
    'Galeri Suasana': 'Café Gallery',
    'Ulasan Pengunjung': 'Guest Reviews',
    'Reservasi Meja': 'Table Reservations',
    'Kontak & Pesan Antar': 'Contact & Delivery',
    'Hubungi': 'Contact Us',
    'Reservasi': 'Reserve',
    'Peta Lokasi': 'Location Map',
    'Peta lokasi Volare Coffee Yogyakarta': 'Volare Coffee location map in Yogyakarta',
    'Buka di Google Maps': 'Open in Google Maps',
    'Reservasi Disiapkan!': 'Reservation Ready!',
    'Data reservasi Anda telah diformat secara otomatis. Kami mengalihkan ke WhatsApp resmi Volare Coffee untuk konfirmasi instan.': 'Your reservation details are ready. We are opening Volare Coffee’s official WhatsApp for instant confirmation.',
    'Buka WhatsApp Sekarang': 'Open WhatsApp Now',
    'Tutup': 'Close',
    'Volare Coffee | Lift Your Day — Yogyakarta': 'Volare Coffee | Lift Your Day — Yogyakarta',
    'Informasi alamat kafe': 'Café address information',
    'Buka rute ke Volare Coffee di Google Maps': 'Get directions to Volare Coffee on Google Maps',
    'Buka lokasi Volare Coffee di Google Maps': 'Open Volare Coffee on Google Maps',
    'Volare Coffee — Halaman Utama': 'Volare Coffee — Home',
    'Navigasi utama': 'Main navigation',
    'Buka/tutup menu navigasi': 'Open/close navigation menu',
    'Tiga minuman signature Volare Coffee: Matcha, Strawberry, dan Ube': 'Three Volare Coffee signature drinks: Matcha, Strawberry, and Ube',
    'Filter kategori menu': 'Filter menu categories',
    'Daftar menu andalan': 'Signature menu',
    'Keunggulan produk': 'Product highlights',
    'Poster Resmi Launching New Menu Ube Series Volare Coffee': 'Official launch poster for Volare Coffee’s new Ube Series',
    'Struktur organisasi Volare Coffee': 'Volare Coffee organizational structure',
    'Fasilitas kafe': 'Café amenities',
    'Navigasi footer': 'Footer navigation',
    'Tutup dialog': 'Close dialog',
    'Tampilan gambar menu fisik': 'Printed menu image viewer',
    'Tutup tampilan gambar': 'Close image viewer',
    'Menu Fisik Volare Coffee': 'Volare Coffee printed menu',
    'Lembar menu fisik Volare Coffee': 'Volare Coffee printed menu',
    'Lembar menu cetak Volare Coffee': 'Volare Coffee printed menu',
    'Contoh: Sarah Nabila': 'e.g. Sarah Nabila',
    'Contoh: Butuh meja dekat stopkontak untuk ngerjain tugas skripsi / acara ulang tahun kecil': 'e.g. A table near an outlet for studying / a small birthday celebration',
    'Rating 5 dari 5 bintang': '5 out of 5 stars',
    'Logo Volare Coffee': 'Volare Coffee logo',
    'Minuman Matcha Ube dengan lapisan matcha dan ube': 'Matcha Ube drink layered with matcha and purple yam',
    'Minuman Ube Berry Cloud dengan stroberi segar': 'Ube Berry Cloud drink with fresh strawberries',
    'Minuman Ube Latte dengan lapisan kopi dan ube': 'Ube Latte drink layered with coffee and purple yam',
    'Foto suasana kafe': 'Café atmosphere photos',
    'Galeri foto kafe': 'Café photo gallery',
    'Pilihan kontak cepat': 'Quick contact options',
    'Ruang duduk indoor Volare Coffee yang nyaman dan adem': 'Cozy, cool indoor seating at Volare Coffee',
    'Area barista bar Volare Coffee': 'Volare Coffee barista counter',
    'Area duduk outdoor Volare Coffee': 'Volare Coffee outdoor seating',
    'Ruang duduk indoor Volare Coffee': 'Volare Coffee indoor seating',
    'Area outdoor Volare Coffee': 'Volare Coffee outdoor area',
    'Tampak depan Volare Coffee malam hari': 'Volare Coffee exterior at night',
    'Sudut bar utama Volare Coffee': 'Volare Coffee main bar',
    'Ruang duduk indoor — sejuk, tenang, dan nyaman untuk WFC': 'Indoor lounge — cool, quiet, and comfortable for working remotely',
    'Espresso bar modern dengan detail ornamen burung ikonik': 'Modern espresso bar featuring an iconic bird detail',
    'Area outdoor dan smoking area yang asik buat santai': 'Relaxing outdoor and smoking area',
    'Tampak depan Volare Coffee saat malam hari': 'Volare Coffee exterior at night',
    'Sudut bar utama dengan sentuhan warna hijau pastel': 'Main bar corner with pastel-green accents'
  };

  var currentLanguage = 'id';
  var languageToggle = $('#languageToggle');
  var languageToggleLabel = $('#languageToggleLabel');
  var originalText = new WeakMap();
  var originalAttributes = new WeakMap();

  function normalizeText(value) {
    return value.replace(/\s+/g, ' ').trim();
  }

  function applyLanguage(language) {
    currentLanguage = language;
    document.documentElement.lang = language;

    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var node;
    while ((node = walker.nextNode())) {
      if (!originalText.has(node)) originalText.set(node, node.nodeValue);
      var source = originalText.get(node);
      var normalized = normalizeText(source);
      var translation = englishText[normalized];
      if (language === 'en' && translation) {
        var leading = source.match(/^\s*/)[0];
        var trailing = source.match(/\s*$/)[0];
        node.nodeValue = leading + translation + trailing;
      } else {
        node.nodeValue = source;
      }
    }

    $$('[aria-label], [title], [alt], [placeholder], [data-caption]').forEach(function (element) {
      ['aria-label', 'title', 'alt', 'placeholder', 'data-caption'].forEach(function (attribute) {
        if (!element.hasAttribute(attribute)) return;
        if (!originalAttributes.has(element)) originalAttributes.set(element, {});
        var values = originalAttributes.get(element);
        if (!Object.prototype.hasOwnProperty.call(values, attribute)) {
          values[attribute] = element.getAttribute(attribute);
        }
        var source = values[attribute];
        var translation = englishText[source];
        if (language === 'en' && translation) {
          element.setAttribute(attribute, translation);
        } else if (language === 'en' && source.indexOf('Balik kartu untuk melihat detail ') === 0) {
          element.setAttribute(attribute, 'Flip card to view details for ' + source.slice('Balik kartu untuk melihat detail '.length));
        } else {
          element.setAttribute(attribute, source);
        }
      });
    });

    document.title = language === 'en' ? englishText['Volare Coffee | Lift Your Day — Yogyakarta'] : 'Volare Coffee | Lift Your Day — Yogyakarta';
    var description = $('meta[name="description"]');
    if (description) {
      description.content = language === 'en'
        ? 'Volare Coffee Yogyakarta — A café specializing in coffee, matcha, and creative Ube Series drinks made with homemade purple yam jam in Caturtunggal, Depok, Sleman, Yogyakarta.'
        : 'Volare Coffee Yogyakarta — Kafe spesialis kopi, matcha, dan aneka kreasi Ube Series berbahan Homemade Ube Jam alami di Caturtunggal, Depok, Sleman, Yogyakarta.';
    }
    if (languageToggleLabel) languageToggleLabel.textContent = language === 'en' ? 'ID' : 'EN';
    if (languageToggle) {
      var switchLabel = language === 'en' ? 'Switch language to Indonesian' : 'Ganti bahasa ke Inggris';
      languageToggle.setAttribute('aria-label', switchLabel);
      languageToggle.setAttribute('title', switchLabel);
    }
  }

  if (languageToggle) {
    languageToggle.addEventListener('click', function () {
      applyLanguage(currentLanguage === 'id' ? 'en' : 'id');
    });
  }


  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    
    const focusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (focusable) focusable.focus();
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  


  const navToggle = $('#navToggle');
  const navMenu = $('#navMenu');

  if (navToggle && navMenu) {
    function closeNavMenu() {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      $$('details', navMenu).forEach(function (details) {
        details.open = false;
      });
      const icon = navToggle.querySelector('i');
      if (icon) icon.className = 'bi bi-list';
    }

    navToggle.addEventListener('click', function () {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      const icon = navToggle.querySelector('i');
      if (icon) {
        icon.className = isOpen ? 'bi bi-x-lg' : 'bi bi-list';
      }
    });

    $$('a', navMenu).forEach(function (link) {
      link.addEventListener('click', closeNavMenu);
    });

    document.addEventListener('click', function (event) {
      if (navMenu.classList.contains('open') && !navMenu.contains(event.target) && !navToggle.contains(event.target)) {
        closeNavMenu();
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key !== 'Escape') return;
      var openDropdown = $('.nav-dropdown[open]', navMenu);
      if (openDropdown) {
        openDropdown.open = false;
        $('summary', openDropdown).focus();
        return;
      }
      if (navMenu.classList.contains('open')) {
        closeNavMenu();
        navToggle.focus();
      }
    });
  }

  


  var siteHeader = $('.site-header');
  var sections = $$('section[id], [data-nav-section]');
  var navDropdowns = navMenu ? $$('.nav-dropdown', navMenu) : [];
  navDropdowns.forEach(function (dropdown) {
    dropdown.addEventListener('toggle', function () {
      if (!dropdown.open) return;
      navDropdowns.forEach(function (otherDropdown) {
        if (otherDropdown !== dropdown) otherDropdown.open = false;
      });
    });
  });
  document.addEventListener('click', function (event) {
    var clickedDropdown = navDropdowns.find(function (dropdown) {
      return dropdown.contains(event.target);
    });
    navDropdowns.forEach(function (dropdown) {
      if (dropdown !== clickedDropdown) dropdown.open = false;
    });
  });
  var sectionObserver;
  var headerHeight = 0;
  var visibleSections = new Set();
  var fallbackScrollListenerAdded = false;

  function setActiveSection(section) {
    if (!section || !navMenu) return;
    var activeHref = section.id === 'galeri-section' ? '#keunggulan' : '#' + section.id;
    $$('a[href^="#"]', navMenu).forEach(function (link) {
      if (link.getAttribute('href') === activeHref) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
    navDropdowns.forEach(function (dropdown) {
      dropdown.classList.toggle('is-active', Boolean(dropdown.querySelector('a[href="' + activeHref + '"]')));
    });
  }

  function observeSections() {
    if (sectionObserver) sectionObserver.disconnect();
    visibleSections = new Set();
    if (!sections.length) return;

    if (!('IntersectionObserver' in window)) {
      function updateActiveSectionFallback() {
        var activationLine = headerHeight + 16;
        var visibleSection = sections.filter(function (section) {
          return section.getBoundingClientRect().top <= activationLine;
        }).pop();
        setActiveSection(visibleSection || sections[0]);
      }
      if (!fallbackScrollListenerAdded) {
        window.addEventListener('scroll', updateActiveSectionFallback, { passive: true });
        fallbackScrollListenerAdded = true;
      }
      updateActiveSectionFallback();
      return;
    }

    var rootHeaderHeight = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || headerHeight;
    var activationLine = rootHeaderHeight + 16;
    var bottomInset = Math.min(
      Math.floor(window.innerHeight * 0.2),
      Math.max(0, window.innerHeight - activationLine - 1)
    );

    sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          visibleSections.add(entry.target);
        } else {
          visibleSections.delete(entry.target);
        }
      });

      var activeSection = Array.from(visibleSections).sort(function (a, b) {
        return Math.abs(a.getBoundingClientRect().top - activationLine) -
          Math.abs(b.getBoundingClientRect().top - activationLine);
      })[0];
      setActiveSection(activeSection);
    }, {
      rootMargin: '-' + Math.ceil(activationLine) + 'px 0px -' + bottomInset + 'px 0px',
      threshold: 0
    });

    sections.forEach(function (section) {
      sectionObserver.observe(section);
    });
  }

  function updateHeaderHeight() {
    if (!siteHeader) return;
    var measuredHeight = siteHeader.getBoundingClientRect().height;
    document.documentElement.style.setProperty('--header-h', measuredHeight + 'px');
    if (Math.abs(measuredHeight - headerHeight) < 0.5) return;
    headerHeight = measuredHeight;
    observeSections();
  }

  if (siteHeader && 'ResizeObserver' in window) {
    var headerResizeObserver = new ResizeObserver(updateHeaderHeight);
    headerResizeObserver.observe(siteHeader);
  } else {
    window.addEventListener('resize', updateHeaderHeight, { passive: true });
  }
  updateHeaderHeight();
  window.addEventListener('resize', observeSections, { passive: true });

  var floatingMenu = $('.fab-menu');
  var protectedButtons = $$('.menu-action-row .btn');

  function updateFloatingMenuVisibility() {
    if (!floatingMenu || !protectedButtons.length) return;
    var floatingBounds = floatingMenu.getBoundingClientRect();
    var overlapsProtectedContent = protectedButtons.some(function (button) {
      var bounds = button.getBoundingClientRect();
      return bounds.left < floatingBounds.right &&
        bounds.right > floatingBounds.left &&
        bounds.top < floatingBounds.bottom &&
        bounds.bottom > floatingBounds.top;
    });
    floatingMenu.classList.toggle('is-obstructing-content', overlapsProtectedContent);
    if (overlapsProtectedContent && floatingMenu.open) floatingMenu.open = false;
  }

  window.addEventListener('scroll', updateFloatingMenuVisibility, { passive: true });
  window.addEventListener('resize', updateFloatingMenuVisibility, { passive: true });
  updateFloatingMenuVisibility();

  


  var filterBtns = $$('.menu-filter .filter-btn');
  var menuCats = $$('.menu-category');

  $$('.drink-card-toggle, .menu-item-toggle').forEach(function (card) {
    var suppressNextClick = false;

    function toggleCard() {
      var parentCard = card.closest('.menu-item') || card.closest('.drink-card');
      var isFlipped = parentCard.classList.toggle('is-flipped');
      card.setAttribute('aria-pressed', String(isFlipped));
    }

    card.addEventListener('pointerdown', function (event) {
      if (event.pointerType === 'touch') {
        toggleCard();
        suppressNextClick = true;
      }
    });

    card.addEventListener('pointercancel', function () {
      suppressNextClick = false;
    });

    card.addEventListener('click', function () {
      if (suppressNextClick) {
        suppressNextClick = false;
        return;
      }

      toggleCard();
    });

    card.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleCard();
      }
    });
  });

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = btn.getAttribute('data-filter');
      var isActive = btn.classList.contains('active');

      filterBtns.forEach(function (b) {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });

      menuCats.forEach(function (cat) {
        cat.hidden = isActive || cat.getAttribute('data-cat') !== filter;
      });

      if (!isActive) {
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
      }
    });
  });

  


  var fabMenu = $('.fab-menu');

  if (fabMenu) {
    var fabToggle = $('summary', fabMenu);

    document.addEventListener('click', function (event) {
      if (fabMenu.open && !fabMenu.contains(event.target)) {
        fabMenu.open = false;
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && fabMenu.open) {
        fabMenu.open = false;
        fabToggle.focus();
      }
    });

    $$('a', fabMenu).forEach(function (link) {
      link.addEventListener('click', function () {
        fabMenu.open = false;
      });
    });
  }

  


  var lightboxModal = $('#modalLightbox');
  var lightboxImg = $('#lightboxImg');
  var lightboxCaption = $('#lightboxCaption');

  function openLightbox(src, alt, caption) {
    if (!lightboxModal || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    if (lightboxCaption) lightboxCaption.textContent = caption || '';
    openModal(lightboxModal);
  }

  
  $$('.viewable').forEach(function (item) {
    item.style.cursor = 'pointer';
    item.setAttribute('role', 'button');
    item.setAttribute('tabindex', '0');

    function trigger() {
      var src = item.getAttribute('data-src');
      var caption = item.getAttribute('data-caption');
      var img = item.querySelector('img');
      var alt = img ? img.getAttribute('alt') : '';
      openLightbox(src || (img && img.src) || '', alt, caption);
    }

    item.addEventListener('click', trigger);
    item.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); trigger(); } });
  });

  
  var showPhysicalMenu = $('#showPhysicalMenu');
  if (showPhysicalMenu) {
    showPhysicalMenu.addEventListener('click', function () {
      openLightbox(
        'assets/img/volare/image13.jpeg',
        'Lembar menu fisik Volare Coffee',
        'Lembar menu cetak Volare Coffee'
      );
    });
  }

  


  $$('.modal-backdrop').forEach(function (backdrop) {
    
    backdrop.addEventListener('click', function (e) {
      if (e.target === backdrop) closeModal(backdrop);
    });
  });

  $$('.modal-close-trigger').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var modal = btn.closest('.modal-backdrop');
      if (modal) closeModal(modal);
    });
  });

  
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      $$('.modal-backdrop.open').forEach(closeModal);
    }
  });

  


  var resForm = $('#reservationForm');
  var modalRes = $('#modalReservasi');
  var modalSummary = $('#modalResSummary');
  var waLink = $('#waLink');
  var WA_NUMBER = '6282227177121';

  if (resForm) {
    resForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = $('#resName').value.trim();
      var phone = $('#resPhone').value.trim();
      var date = $('#resDate').value;
      var time = $('#resTime').value;
      var guests = $('#resGuests').value;
      var area = $('#resArea').value;
      var isEnglish = currentLanguage === 'en';
      var notes = $('#resNotes').value.trim() || (isEnglish ? 'No special requests' : 'Tidak ada catatan khusus');
      var guestLabel = $('#resGuests').options[$('#resGuests').selectedIndex].textContent;
      var areaLabel = $('#resArea').options[$('#resArea').selectedIndex].textContent;

      
      if (!name || !phone || !date || !time) {
        
        resForm.reportValidity();
        return;
      }

      
      var msg = isEnglish ? [
        'Hello Volare Coffee, I would like to reserve a table.',
        '',
        '*Name:* ' + name,
        '*WhatsApp number:* ' + phone,
        '*Date:* ' + date,
        '*Time:* ' + time,
        '*Guests:* ' + guestLabel,
        '*Seating preference:* ' + areaLabel,
        '*Special requests:* ' + notes,
        '',
        'Please confirm table availability. Thank you.'
      ].join('\n') : [
        'Halo Volare Coffee, saya ingin melakukan reservasi meja.',
        '',
        '*Nama:* ' + name,
        '*No. WhatsApp:* ' + phone,
        '*Tanggal:* ' + date,
        '*Pukul:* ' + time + ' WIB',
        '*Jumlah Tamu:* ' + guests + ' orang',
        '*Preferensi Area:* ' + area,
        '*Catatan:* ' + notes,
        '',
        'Mohon konfirmasi ketersediaan meja. Terima kasih.'
      ].join('\n');

      var waUrl = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg);

      
      if (modalSummary) {
        modalSummary.innerHTML = isEnglish
          ? '<strong>Name:</strong> ' + name + '<br>' +
            '<strong>Date:</strong> ' + date + ' at ' + time + '<br>' +
            '<strong>Guests:</strong> ' + guestLabel + '<br>' +
            '<strong>Area:</strong> ' + areaLabel
          : '<strong>Nama:</strong> ' + name + '<br>' +
            '<strong>Tanggal:</strong> ' + date + ' pukul ' + time + ' WIB<br>' +
            '<strong>Tamu:</strong> ' + guests + ' orang<br>' +
            '<strong>Area:</strong> ' + area;
      }
      if (waLink) waLink.href = waUrl;

      openModal(modalRes);

      
      setTimeout(function () {
        window.open(waUrl, '_blank');
      }, 800);
    });
  }

  


  $$('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.getElementById(anchor.getAttribute('href').slice(1));
      if (!target) return;
      e.preventDefault();
      setActiveSection(target);
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

}());
