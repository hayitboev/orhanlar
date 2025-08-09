import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageSquare, CheckCircle, Users, Clock, Award } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ümraniye Alçı Boya, Alçıpan, Seramik ve Anahtar Teslim Tadilat',
  description: 'Orhanlar Dekorasyon olarak Ümraniye ve İstanbul genelinde profesyonel alçı boya, alçıpan, seramik ve anahtar teslim tadilat hizmetleri sunuyoruz. Uygun fiyat, kaliteli işçilik ve zamanında teslim garantisi.',
  keywords: 'Ümraniye boyacı, alçı boya, alçıpan ustası, seramik ustası, tadilat, renovasyon, anahtar teslim, İstanbul',
};

export default function Home() {
  // Örnek proje görselleri (gerçek projede bu veriler API'den gelecek)
  const projectImages = [
    { src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg', alt: 'Ümraniye alçı boya örneği - salon boyama işleri', title: 'Salon Boyama' },
    { src: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg', alt: 'Alçıpan asma tavan uygulaması Ümraniye', title: 'Alçıpan Asma Tavan' },
    { src: 'https://images.pexels.com/photos/1571447/pexels-photo-1571447.jpeg', alt: 'Seramik fayans döşeme işleri İstanbul', title: 'Seramik Döşeme' },
    { src: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg', alt: 'Anahtar teslim tadilat projesi Ümraniye', title: 'Anahtar Teslim Tadilat' },
    { src: 'https://images.pexels.com/photos/1571448/pexels-photo-1571448.jpeg', alt: 'Banyo renovasyonu ve seramik işleri', title: 'Banyo Renovasyonu' },
    { src: 'https://images.pexels.com/photos/1571441/pexels-photo-1571441.jpeg', alt: 'Mutfak tadilat ve boyama işleri', title: 'Mutfak Tadilat' }
  ];

  const services = [
    {
      title: 'Ümraniye Boyacı',
      description: 'Profesyonel iç ve dış boya hizmetleri. Kaliteli boyalarla uzun ömürlü sonuçlar.',
      image: 'https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg',
      href: '/umraniye-boyaci',
      alt: 'Ümraniye boyacı hizmetleri'
    },
    {
      title: 'Alçı Boya',
      description: 'Alçı boya uygulamaları ile duvarlarınıza şık ve modern görünüm.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
      href: '/alci-boya',
      alt: 'Alçı boya uygulamaları'
    },
    {
      title: 'Alçıpan Ustası',
      description: 'Alçıpan asma tavan, bölücü duvar ve dekoratif uygulamalar.',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg',
      href: '/alcipan-ustasi',
      alt: 'Alçıpan ustası hizmetleri'
    },
    {
      title: 'Seramik Fayans',
      description: 'Banyo, mutfak ve diğer alanlarınız için seramik ve fayans döşeme.',
      image: 'https://images.pexels.com/photos/1571447/pexels-photo-1571447.jpeg',
      href: '/seramik-fayans',
      alt: 'Seramik fayans döşeme hizmetleri'
    },
    {
      title: 'Anahtar Teslim Tadilat',
      description: 'Komple ev tadilat hizmetleri. Projeden teslime kadar her şey bizden.',
      image: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg',
      href: '/anahtar-teslim-tadilat',
      alt: 'Anahtar teslim tadilat hizmetleri'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Bölümü */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 section-padding">
        <div className="container-max text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 dark-gray-text leading-tight">
            <span className="gold-text">Ümraniye</span> Alçı Boya, Alçıpan, Seramik ve <br className="hidden md:block" />
            Anahtar Teslim Tadilat — <span className="gold-text">Orhanlar Dekorasyon</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
            Orhanlar Dekorasyon olarak <strong>Ümraniye ve İstanbul genelinde</strong> profesyonel <strong>alçı boya, alçıpan, seramik</strong> ve 
            <strong> anahtar teslim tadilat</strong> hizmetleri sunuyoruz. <strong>15 yıllık deneyimimiz</strong> ile kaliteli işçilik, 
            uygun fiyat ve zamanında teslim garantisi veriyoruz. <strong>Ümraniye boyacı</strong> arıyorsanız, doğru adrestesiniz! 
            Müşteri memnuniyetini ön planda tutarak, evinizin değerini artıracak profesyonel çözümler sunuyoruz.
          </p>

          {/* CTA Butonları */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a 
              href="tel:+905555555555" 
              className="btn-primary inline-flex items-center justify-center space-x-2 text-lg"
            >
              <Phone className="w-5 h-5" />
              <span>Hemen Ara</span>
            </a>
            <a 
              href="https://wa.me/905555555555?text=Merhaba, tadilat hizmetleri hakkında bilgi almak istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 text-lg bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
            >
              <MessageSquare className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
            <Link href="/iletisim" className="btn-secondary text-lg">
              Teklif Al
            </Link>
          </div>

          {/* Özellikler */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 text-gray-700">
              <CheckCircle className="w-6 h-6 text-[#c8a84e]" />
              <span className="font-medium">Kaliteli İşçilik</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-700">
              <Clock className="w-6 h-6 text-[#c8a84e]" />
              <span className="font-medium">Zamanında Teslim</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-700">
              <Award className="w-6 h-6 text-[#c8a84e]" />
              <span className="font-medium">2 Yıl Garanti</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projeler Galerisi */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark-gray-text">
              Tamamladığımız <span className="gold-text">Projeler</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ümraniye ve çevresinde tamamladığımız alçı boya, alçıpan, seramik ve tadilat projelerimizden örnekler
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {projectImages.map((image, index) => (
              <div key={index} className="relative h-64 group overflow-hidden rounded-lg shadow-lg hover-scale">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-medium">{image.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/projeler" className="btn-primary">
              Tüm Projeleri Görüntüle
            </Link>
          </div>
        </div>
      </section>

      {/* Hizmetler */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark-gray-text">
              <span className="gold-text">Hizmetlerimiz</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ümraniye ve İstanbul genelinde sunduğumuz profesyonel tadilat ve dekorasyon hizmetleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Neden Biz Bölümü */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark-gray-text">
              Neden <span className="gold-text">Orhanlar Dekorasyon</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#c8a84e] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 dark-gray-text">15+ Yıl Deneyim</h3>
              <p className="text-gray-600">Sektörde uzun yılların verdiği deneyim ve uzmanlık</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#c8a84e] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 dark-gray-text">Kalite Garantisi</h3>
              <p className="text-gray-600">Tüm işlerimizde 2 yıl kalite ve işçilik garantisi</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#c8a84e] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 dark-gray-text">Zamanında Teslimat</h3>
              <p className="text-gray-600">Belirlenen süre içerisinde işin tamamlanması garantisi</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#c8a84e] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 dark-gray-text">Uygun Fiyat</h3>
              <p className="text-gray-600">Kaliteden ödün vermeden rekabetçi fiyat avantajı</p>
            </div>
          </div>
        </div>
      </section>

      {/* İletişim CTA */}
      <section className="section-padding bg-[#c8a84e] text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projeniz İçin Hemen <span className="text-[#2b2b2b]">Ücretsiz Keşif</span> Alın
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Ümraniye ve çevresinde tadilat, alçı boya, alçıpan ve seramik işleriniz için 
            uzman ekibimizden ücretsiz keşif ve fiyat teklifi alın.
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