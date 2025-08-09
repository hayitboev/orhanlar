import Image from 'next/image';
import Link from 'next/link';
import { Phone, CheckCircle, Clock, Award, Home, Zap, Palette, Grid3X3 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Anahtar Teslim Tadilat Ümraniye | Komple Ev Tadilat Hizmetleri',
  description: 'Ümraniye anahtar teslim tadilat hizmetleri. Komple ev tadilat, banyo mutfak tadilat, boya badana işleri. Projeden teslime tek firmada çözüm.',
  keywords: 'Ümraniye tadilat, anahtar teslim tadilat, komple ev tadilat, banyo tadilat, mutfak tadilat, İstanbul tadilat',
};

export default function AnahtarTeslimTadilat() {
  const tadilatPackages = [
    {
      title: 'Ekonomik Tadilat Paketi',
      price: '15.000₺',
      description: 'Temel tadilat ihtiyaçlarınız için ekonomik çözümler',
      features: [
        'Boya badana işleri',
        'Elektrik tesisat kontrolü',
        'Su tesisat kontrol ve onarım',
        'Temel tadilat malzemeleri',
        'İşçilik garantisi'
      ],
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg'
    },
    {
      title: 'Standart Tadilat Paketi',
      price: '35.000₺',
      description: 'Kapsamlı tadilat hizmetleri ile evinizi yenileyin',
      features: [
        'Komple boya badana',
        'Banyo veya mutfak yenileme',
        'Elektrik tesisat yenileme',
        'Su tesisat yenileme',
        'Seramik döşeme işleri',
        '2 yıl işçilik garantisi'
      ],
      image: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg'
    },
    {
      title: 'Premium Tadilat Paketi',
      price: '60.000₺+',
      description: 'Lüks malzemeler ve özel tasarım ile komple tadilat',
      features: [
        'Komple ev tadilat',
        'Mutfak ve banyo yenileme',
        'Alçıpan asma tavan',
        'Premium malzemeler',
        'Özel tasarım hizmetleri',
        '3 yıl tam garanti'
      ],
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg'
    }
  ];

  const tadilatServices = [
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Komple Ev Tadilat',
      description: 'Evinizin tamamını baştan sona yenileme hizmetleri'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Boya Badana',
      description: 'İç ve dış mekan boya işleri ile evinize yeni görünüm'
    },
    {
      icon: <Grid3X3 className="w-8 h-8" />,
      title: 'Seramik İşleri',
      description: 'Banyo, mutfak ve salon seramik döşeme hizmetleri'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Elektrik Tesisat',
      description: 'Güvenli ve modern elektrik tesisatı kurulum ve onarım'
    }
  ];

  const workProcess = [
    { step: 1, title: 'Ücretsiz Keşif', description: 'Uzman ekibimiz evinizi inceleyerek detaylı keşif yapar' },
    { step: 2, title: 'Proje Planlaması', description: 'İhtiyaçlarınıza göre özel proje ve tasarım hazırlanır' },
    { step: 3, title: 'Fiyat Teklifi', description: 'Şeffaf ve detaylı fiyat teklifi sunulur' },
    { step: 4, title: 'Sözleşme', description: 'Karşılıklı anlaşma sağlandıktan sonra sözleşme imzalanır' },
    { step: 5, title: 'Uygulama', description: 'Profesyonel ekip tadilat işlerine başlar' },
    { step: 6, title: 'Teslim', description: 'Kalite kontrolü yapılarak eviniz teslim edilir' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Bölümü */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 dark-gray-text leading-tight">
                <span className="gold-text">Anahtar Teslim</span><br />
                Tadilat Hizmetleri
              </h1>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                <strong>Ümraniye anahtar teslim tadilat</strong> hizmetleri ile evinizi baştan sona yeniliyoruz! 
                Orhanlar Dekorasyon olarak <strong>komple ev tadilat, banyo tadilat, mutfak tadilat</strong> 
                ve boya badana işlerinde 15 yıllık deneyimimizle hizmet veriyoruz. Projeden teslime kadar 
                tüm işlemler tek firmada, zamanında teslim ve kalite garantisi ile. <strong>Tadilat</strong> 
                ihtiyaçlarınız için Ümraniye ve İstanbul genelinde güvenilir çözümler sunuyoruz.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="tel:+905555555555" 
                  className="btn-primary inline-flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Hemen Ara</span>
                </a>
                <Link href="/iletisim" className="btn-secondary">
                  Ücretsiz Keşif
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-[#c8a84e]" />
                  <span className="text-sm font-medium">Tek Firmada Çözüm</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-[#c8a84e]" />
                  <span className="text-sm font-medium">Zamanında Teslim</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-[#c8a84e]" />
                  <span className="text-sm font-medium">3 Yıl Garanti</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Home className="w-5 h-5 text-[#c8a84e]" />
                  <span className="text-sm font-medium">Komple Çözüm</span>
                </div>
              </div>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg"
                alt="Ümraniye anahtar teslim tadilat - komple ev tadilat hizmetleri"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tadilat Paketleri */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark-gray-text">
              <span className="gold-text">Tadilat</span> Paketlerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Bütçenize ve ihtiyacınıza uygun anahtar teslim tadilat paketleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tadilatPackages.map((pkg, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover-scale">
                <div className="relative h-48">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold dark-gray-text">{pkg.title}</h3>
                    <span className="text-2xl font-bold text-[#c8a84e]">{pkg.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-[#c8a84e] flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/iletisim" className="btn-primary w-full text-center">
                    Detaylı Bilgi Al
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tadilat Hizmetleri */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark-gray-text">
              <span className="gold-text">Tadilat</span> Hizmetlerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Anahtar teslim tadilat kapsamında sunduğumuz profesyonel hizmetler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tadilatServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover-scale">
                <div className="w-16 h-16 bg-[#c8a84e] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 dark-gray-text">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Çalışma Süreci */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark-gray-text">
              <span className="gold-text">Çalışma</span> Sürecimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Anahtar teslim tadilat projenizde izlediğimiz 6 aşamalı süreç
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workProcess.map((process, index) => (
              <div key={index} className="relative bg-gray-50 p-6 rounded-lg">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#c8a84e] rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-white">{process.step}</span>
                </div>
                <h3 className="text-lg font-semibold mb-3 dark-gray-text mt-4">{process.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Önce/Sonra Projeler */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark-gray-text">
              Tamamlanan <span className="gold-text">Projeler</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ümraniye'de gerçekleştirdiğimiz anahtar teslim tadilat projelerinden örnekler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="relative h-40">
                  <Image
                    src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
                    alt="Komple tadilat projesi - öncesi"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded">
                    ÖNCE
                  </div>
                </div>
                <div className="relative h-40">
                  <Image
                    src="https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg"
                    alt="Komple tadilat projesi - sonrası"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs font-semibold rounded">
                    SONRA
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold dark-gray-text mb-2">Komple Ev Tadilat - Ümraniye</h3>
                <p className="text-sm text-gray-600">3+1 Daire - 45 Gün - Premium Paket</p>
                <div className="flex items-center space-x-4 mt-2">
                  <span className="text-xs bg-[#c8a84e] text-white px-2 py-1 rounded">Boya Badana</span>
                  <span className="text-xs bg-[#c8a84e] text-white px-2 py-1 rounded">Mutfak</span>
                  <span className="text-xs bg-[#c8a84e] text-white px-2 py-1 rounded">Banyo</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="relative h-40">
                  <Image
                    src="https://images.pexels.com/photos/1571448/pexels-photo-1571448.jpeg"
                    alt="Banyo tadilat projesi - öncesi"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded">
                    ÖNCE
                  </div>
                </div>
                <div className="relative h-40">
                  <Image
                    src="https://images.pexels.com/photos/1571447/pexels-photo-1571447.jpeg"
                    alt="Banyo tadilat projesi - sonrası"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs font-semibold rounded">
                    SONRA
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold dark-gray-text mb-2">Banyo Tadilat - Ümraniye</h3>
                <p className="text-sm text-gray-600">Ana Banyo - 10 Gün - Standart Paket</p>
                <div className="flex items-center space-x-4 mt-2">
                  <span className="text-xs bg-[#c8a84e] text-white px-2 py-1 rounded">Seramik</span>
                  <span className="text-xs bg-[#c8a84e] text-white px-2 py-1 rounded">Tesisat</span>
                  <span className="text-xs bg-[#c8a84e] text-white px-2 py-1 rounded">Armatür</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fiyat ve İletişim */}
      <section className="section-padding bg-[#c8a84e] text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Anahtar Teslim Tadilat için <span className="text-[#2b2b2b]">Ücretsiz Keşif</span>
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Komple ev tadilat, banyo mutfak yenileme projeleriniz için uzman ekibimizden 
            ücretsiz keşif ve detaylı fiyat teklifi alın.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:+905555555555" 
              className="bg-white text-[#c8a84e] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg inline-flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>0555 555 55 55</span>
            </a>
            <Link 
              href="/iletisim" 
              className="bg-[#2b2b2b] text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-lg"
            >
              Online Teklif Al
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}