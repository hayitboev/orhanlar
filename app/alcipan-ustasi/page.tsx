import Image from 'next/image';
import Link from 'next/link';
import { Phone, CheckCircle, Clock, Award, Layers } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Alçıpan Ustası Ümraniye | Asma Tavan, Bölücü Duvar, Alçıpan İşleri',
  description: 'Ümraniye alçıpan ustası. Profesyonel alçıpan asma tavan, bölücü duvar, alçıpan dekorasyon hizmetleri. Kaliteli işçilik ve uygun fiyat garantisi.',
  keywords: 'Ümraniye alçıpan ustası, alçıpan asma tavan, alçıpan bölücü duvar, alçıpan işleri, İstanbul alçıpan',
};

export default function AlcipanUstasi() {
  const alcipanServices = [
    {
      title: 'Alçıpan Asma Tavan',
      description: 'Modern ve şık asma tavan sistemleri ile mekanlarınızı dönüştürün',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg',
      features: ['LED aydınlatma hazırlığı', 'Yalıtım imkanı', 'Hızlı montaj', 'Ekonomik çözüm']
    },
    {
      title: 'Alçıpan Bölücü Duvar',
      description: 'Mekan bölümlendirme için pratik ve estetik alçıpan duvar çözümleri',
      image: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg',
      features: ['Ses yalıtımı', 'Kolay demontaj', 'Kablo geçirme', 'Düzgün yüzey']
    },
    {
      title: 'Dekoratif Alçıpan',
      description: 'Özel tasarım alçıpan dekorasyon ve şekillendirme uygulamaları',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      features: ['Özel tasarım', 'Niş uygulamaları', 'Eğimli yüzeyler', 'Dekoratif şekiller']
    }
  ];

  const advantages = [
    'Yangına dayanıklı malzeme',
    'Su geçirmez özellik',
    'Kolay işlenebilir',
    'Hafif yapısı',
    'Ekonomik fiyat',
    'Hızlı uygulama',
    'Uzun ömürlü',
    'Çevre dostu'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Bölümü */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 dark-gray-text leading-tight">
                <span className="gold-text">Alçıpan Ustası</span><br />
                Ümraniye ve Çevresi
              </h1>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                <strong>Ümraniye alçıpan ustası</strong> arıyorsanız doğru adrestesiniz! Orhanlar Dekorasyon olarak 
                <strong>15 yıllık deneyimimiz</strong> ile <strong>alçıpan asma tavan, bölücü duvar</strong> ve 
                dekoratif alçıpan uygulamalarında uzmanız. Kaliteli malzemeler ve profesyonel işçilik ile 
                mekanlarınıza modern ve fonksiyonel çözümler sunuyoruz. <strong>Alçıpan işleri</strong> için 
                Ümraniye ve İstanbul genelinde hizmet veriyoruz.
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
                  <span className="text-sm font-medium">Kaliteli Malzeme</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-[#c8a84e]" />
                  <span className="text-sm font-medium">Hızlı Montaj</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-[#c8a84e]" />
                  <span className="text-sm font-medium">2 Yıl Garanti</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Layers className="w-5 h-5 text-[#c8a84e]" />
                  <span className="text-sm font-medium">Profesyonel Ekip</span>
                </div>
              </div>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg"
                alt="Ümraniye alçıpan ustası - alçıpan asma tavan ve duvar uygulamaları"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Alçıpan Hizmetleri */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark-gray-text">
              <span className="gold-text">Alçıpan</span> Hizmetlerimiz
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ümraniye'de profesyonel alçıpan uygulamaları ile mekanlarınızı modernleştiriyoruz
            </p>
          </div>

          <div className="space-y-16">
            {alcipanServices.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 dark-gray-text">{service.title}</h3>
                  <p className="text-lg text-gray-700 mb-6">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-[#c8a84e] flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/iletisim" className="btn-primary">
                    Fiyat Bilgisi Al
                  </Link>
                </div>

                <div className={`relative h-80 rounded-lg overflow-hidden shadow-lg ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alçıpan Avantajları */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg"
                alt="Alçıpan avantajları - modern ve fonksiyonel çözümler"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 dark-gray-text">
                Alçıpan <span className="gold-text">Avantajları</span>
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Alçıpan, modern inşaat sektöründe sıklıkla tercih edilen, pratik ve 
                ekonomik bir yapı malzemesidir. Birçok avantajı bulunmaktadır.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#c8a84e] flex-shrink-0" />
                    <span className="text-gray-700">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Montaj Süreci */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark-gray-text">
              Alçıpan <span className="gold-text">Montaj Süreci</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Profesyonel alçıpan montajı için izlediğimiz aşamalar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#c8a84e] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 dark-gray-text">Planlama</h3>
              <p className="text-gray-600 text-sm">Proje planlaması ve ölçüm işlemleri</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#c8a84e] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 dark-gray-text">Malzeme</h3>
              <p className="text-gray-600 text-sm">Kaliteli alçıpan malzemelerinin temini</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#c8a84e] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 dark-gray-text">Kurulum</h3>
              <p className="text-gray-600 text-sm">Metal konstrüksiyon ve iskelet kurulumu</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#c8a84e] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 dark-gray-text">Montaj</h3>
              <p className="text-gray-600 text-sm">Alçıpan levhaların montajı</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#c8a84e] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">5</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 dark-gray-text">Bitirme</h3>
              <p className="text-gray-600 text-sm">Derz dolgusu ve yüzey hazırlığı</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fiyat ve İletişim */}
      <section className="section-padding bg-[#c8a84e] text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ümraniye Alçıpan Fiyatları için <span className="text-[#2b2b2b]">Ücretsiz Keşif</span>
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Alçıpan asma tavan, bölücü duvar ve dekoratif alçıpan işleriniz için 
            şeffaf fiyatlandırma ve profesyonel hizmet.
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