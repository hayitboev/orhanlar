import Image from 'next/image';
import Link from 'next/link';
import { Phone, CheckCircle, Clock, Award, Palette } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ümraniye Boyacı | Profesyonel İç ve Dış Boya Hizmetleri',
  description: 'Ümraniye boyacı hizmetleri. Profesyonel iç ve dış boya, duvar boyama, tavan boyama. Kaliteli boyalar, uygun fiyat ve garanti ile hizmet veriyoruz.',
  keywords: 'Ümraniye boyacı, iç boya, dış boya, duvar boyama, tavan boyama, boya ustası, İstanbul boyacı',
};

export default function UmraniyeBoyaci() {
  const beforeAfterImages = [
    { 
      before: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      after: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg',
      title: 'Salon Boyama Projesi'
    },
    { 
      before: 'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg',
      after: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg',
      title: 'Yatak Odası Boyama'
    },
    { 
      before: 'https://images.pexels.com/photos/1571447/pexels-photo-1571447.jpeg',
      after: 'https://images.pexels.com/photos/1571448/pexels-photo-1571448.jpeg',
      title: 'Mutfak Boyama İşleri'
    }
  ];

  const services = [
    'İç Mekan Boyama (Salon, Yatak Odası, Mutfak)',
    'Dış Cephe Boyama',
    'Tavan Boyama',
    'Duvar Boyama',
    'Dekoratif Boya Uygulamaları',
    'Ahşap Boyama',
    'Metal Yüzey Boyama',
    'Alçı Boya Uygulamaları'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Bölümü */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 dark-gray-text leading-tight">
                <span className="gold-text">Ümraniye Boyacı</span><br />
                Profesyonel Boya Hizmetleri
              </h1>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                <strong>Ümraniye boyacı</strong> arıyorsanız doğru yerdesiniz! Orhanlar Dekorasyon olarak 
                <strong> 15 yıllık deneyimimiz</strong> ile Ümraniye ve çevresinde profesyonel <strong>iç ve dış boya</strong> 
                hizmetleri sunuyoruz. Kaliteli boyalar, uzman işçilik ve uygun fiyatlarla evinizin görünümünü yeniliyoruz. 
                <strong>Duvar boyama, tavan boyama</strong> ve dekoratif boya uygulamalarında uzmanız. 
                Zamanında teslim ve 2 yıl garanti ile hizmet veriyoruz.
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

              {/* Özellikler */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-[#c8a84e]" />
                  <span className="text-sm font-medium">Kaliteli Boyalar</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-[#c8a84e]" />
                  <span className="text-sm font-medium">Hızlı Teslimat</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-[#c8a84e]" />
                  <span className="text-sm font-medium">2 Yıl Garanti</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Palette className="w-5 h-5 text-[#c8a84e]" />
                  <span className="text-sm font-medium">Uzman Ekip</span>
                </div>
              </div>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg"
                alt="Ümraniye boyacı hizmetleri - profesyonel boya işleri"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hizmetlerimiz */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark-gray-text">
              Ümraniye <span className="gold-text">Boya Hizmetlerimiz</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              İç ve dış mekan boyama işlerinde profesyonel çözümler sunuyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 dark-gray-text">Boya Hizmetlerimiz</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#c8a84e] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-3 dark-gray-text">Kullandığımız Boya Markaları</h3>
                <p className="text-gray-700 mb-4">
                  Kaliteli ve uzun ömürlü sonuçlar için sadece güvenilir boya markalarını tercih ediyoruz:
                </p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Filli Boya</li>
                  <li>• Marshall Boya</li>
                  <li>• Akzo Nobel</li>
                  <li>• Jotun Boya</li>
                  <li>• Dyo Boya</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 dark-gray-text">Boya İşlemi Süreci</h3>
                <ol className="text-gray-700 space-y-2">
                  <li><strong>1.</strong> Ücretsiz keşif ve ölçüm</li>
                  <li><strong>2.</strong> Renk seçimi ve danışmanlık</li>
                  <li><strong>3.</strong> Yüzey hazırlama işlemleri</li>
                  <li><strong>4.</strong> Profesyonel boya uygulaması</li>
                  <li><strong>5.</strong> Kalite kontrolü ve teslim</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Önce/Sonra Galerisi */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark-gray-text">
              <span className="gold-text">Önce</span> / <span className="gold-text">Sonra</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ümraniye'de gerçekleştirdiğimiz boya işlerinden önce/sonra örnekleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beforeAfterImages.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative">
                  <div className="grid grid-cols-2">
                    <div className="relative h-48">
                      <Image
                        src={project.before}
                        alt={`${project.title} - öncesi`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded">
                        ÖNCE
                      </div>
                    </div>
                    <div className="relative h-48">
                      <Image
                        src={project.after}
                        alt={`${project.title} - sonrası`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs font-semibold rounded">
                        SONRA
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold dark-gray-text">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fiyat ve İletişim */}
      <section className="section-padding bg-[#c8a84e] text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ümraniye Boyacı Fiyatları için <span className="text-[#2b2b2b]">Ücretsiz Keşif</span>
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Profesyonel boya işleriniz için şeffaf fiyatlandırma ve ücretsiz keşif hizmeti. 
            Ümraniye'nin en uygun boyacı fiyatları burada!
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