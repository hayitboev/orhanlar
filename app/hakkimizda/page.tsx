import Image from 'next/image';
import Link from 'next/link';
import { Phone, Users, Award, Clock, CheckCircle, Star, Shield, Heart } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hakkımızda | Orhanlar Dekorasyon - 15 Yıllık Deneyim',
  description: 'Orhanlar Dekorasyon hakkında. Ümraniye\'de 15 yıllık deneyim ile alçı boya, alçıpan, seramik ve tadilat hizmetleri. Kaliteli işçilik ve müşteri memnuniyeti.',
  keywords: 'Orhanlar Dekorasyon, Ümraniye tadilat firması, deneyimli boyacı, güvenilir tadilat, İstanbul dekorasyon',
};

export default function Hakkimizda() {
  const companyValues = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Kaliteli İşçilik',
      description: 'Her projede en yüksek kalite standartlarını uyguluyoruz'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Zamanında Teslim',
      description: 'Belirlenen süre içerisinde işleri tamamlama garantisi'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Güvenilirlik',
      description: '15 yıllık deneyim ve binlerce memnun müşteri'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Müşteri Memnuniyeti',
      description: 'Müşteri mutluluğu bizim en büyük başarımız'
    }
  ];

  const teamMembers = [
    {
      name: 'Orhan Usta',
      role: 'Kurucu / Baş Usta',
      experience: '20 yıl deneyim',
      expertise: 'Alçı boya, genel koordinasyon',
      image: 'https://images.pexels.com/photos/1560932/pexels-photo-1560932.jpeg'
    },
    {
      name: 'Mehmet Usta',
      role: 'Alçıpan Uzmanı',
      experience: '12 yıl deneyim',
      expertise: 'Asma tavan, bölücü duvar',
      image: 'https://images.pexels.com/photos/1560942/pexels-photo-1560942.jpeg'
    },
    {
      name: 'Ali Usta',
      role: 'Seramik Ustası',
      experience: '15 yıl deneyim',
      expertise: 'Banyo, mutfak seramik',
      image: 'https://images.pexels.com/photos/1560952/pexels-photo-1560952.jpeg'
    }
  ];

  const achievements = [
    { number: '150+', label: 'Tamamlanan Proje' },
    { number: '15', label: 'Yıl Deneyim' },
    { number: '98%', label: 'Müşteri Memnuniyeti' },
    { number: '2', label: 'Yıl Garanti' }
  ];

  const services = [
    'Alçı Boya Uygulamaları',
    'Alçıpan Asma Tavan',
    'Seramik Fayans Döşeme',
    'İç ve Dış Boya İşleri',
    'Anahtar Teslim Tadilat',
    'Su Yalıtım İşleri',
    'Elektrik Tesisat',
    'Dekoratif Uygulamalar'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Bölümü */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 dark-gray-text leading-tight">
                <span className="gold-text">Orhanlar Dekorasyon</span><br />
                Hakkımızda
              </h1>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                2009 yılında kurulan <strong>Orhanlar Dekorasyon</strong>, Ümraniye ve İstanbul genelinde 
                <strong> alçı boya, alçıpan, seramik</strong> ve <strong>anahtar teslim tadilat</strong> 
                hizmetleri sunan köklü bir firmadır.
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                <strong>15 yıllık deneyimimiz</strong> ile 150'den fazla projeyi başarıyla tamamladık. 
                Kaliteli işçilik, zamanında teslim ve müşteri memnuniyeti ilkelerimizden ödün vermeden, 
                her projede en iyi sonuçları elde etmek için çalışıyoruz.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+905555555555" 
                  className="btn-primary inline-flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Hemen Ara</span>
                </a>
                <Link href="/iletisim" className="btn-secondary">
                  İletişime Geç
                </Link>
              </div>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.pexels.com/photos/1560932/pexels-photo-1560932.jpeg"
                alt="Orhanlar Dekorasyon ekibi - profesyonel tadilat hizmetleri"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Başarılar */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark-gray-text">
              <span className="gold-text">Başarılarımız</span> Rakamlarla
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              15 yılda elde ettiğimiz başarıları ve müşteri memnuniyetini gösteren rakamlar
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold gold-text mb-2">
                  {achievement.number}
                </div>
                <div className="text-lg font-semibold dark-gray-text">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Değerlerimiz */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark-gray-text">
              <span className="gold-text">Değerlerimiz</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              İş yaparken benimsediğimiz ve hiç taviz vermediğimiz temel değerlerimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover-scale">
                <div className="w-16 h-16 bg-[#c8a84e] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 dark-gray-text">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ekibimiz */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark-gray-text">
              Uzman <span className="gold-text">Ekibimiz</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Alanında uzman, deneyimli ustalarımız ile kaliteli hizmet sunuyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover-scale">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold dark-gray-text mb-1">{member.name}</h3>
                  <p className="text-[#c8a84e] font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-2">{member.experience}</p>
                  <p className="text-sm text-gray-700">{member.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hizmetlerimiz */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 dark-gray-text">
                Sunduğumuz <span className="gold-text">Hizmetler</span>
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Ümraniye ve çevresinde geniş hizmet yelpazesi ile müşterilerimizin 
                tüm tadilat ve dekorasyon ihtiyaçlarını karşılıyoruz.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#c8a84e] flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg"
                alt="Orhanlar Dekorasyon hizmetleri - kaliteli tadilat işleri"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Müşteri Yorumları */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark-gray-text">
              Müşteri <span className="gold-text">Yorumları</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Müşterilerimizin deneyimlerini ve memnuniyetlerini paylaştığı yorumlar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Evimizin komple tadilat işini Orhanlar Dekorasyon'a yaptırdık. Zamanında, 
                temiz ve kaliteli iş çıkardılar. Özellikle Orhan Usta'nın ilgisi çok güzeldi."
              </p>
              <div className="font-semibold dark-gray-text">Ayşe Hanım</div>
              <div className="text-sm text-gray-600">Ümraniye - Komple Tadilat</div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Banyo seramik işlerimizi yaptırdık. Çok titiz ve düzenli çalışıyorlar. 
                İşlerini gerçekten seviyorlar ve bu da ortaya çıkan işte belli oluyor."
              </p>
              <div className="font-semibold dark-gray-text">Mehmet Bey</div>
              <div className="text-sm text-gray-600">Ümraniye - Banyo Tadilat</div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Alçıpan asma tavan işimizi çok güzel yaptılar. LED aydınlatma sistemini de 
                dahil edip, salonumuz muhteşem oldu. Herkese tavsiye ederim."
              </p>
              <div className="font-semibold dark-gray-text">Fatma Hanım</div>
              <div className="text-sm text-gray-600">Ümraniye - Alçıpan İşleri</div>
            </div>
          </div>
        </div>
      </section>

      {/* Neden Bizi Seçmelisiniz */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark-gray-text">
              Neden <span className="gold-text">Orhanlar Dekorasyon</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#c8a84e] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold dark-gray-text mb-1">15 Yıllık Deneyim</h3>
                  <p className="text-gray-600">Sektörde uzun yıllara dayanan deneyim ve uzmanlık</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#c8a84e] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold dark-gray-text mb-1">Kalite Garantisi</h3>
                  <p className="text-gray-600">Tüm işlerimizde 2 yıl kalite ve işçilik garantisi</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#c8a84e] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold dark-gray-text mb-1">Şeffaf Fiyatlandırma</h3>
                  <p className="text-gray-600">Gizli maliyet yok, net ve anlaşılır fiyat politikası</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-[#c8a84e] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold dark-gray-text mb-1">Hızlı ve Temiz İş</h3>
                  <p className="text-gray-600">Zamanında teslim ve temiz çalışma ortamı</p>
                </div>
              </div>
            </div>

            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
                alt="Orhanlar Dekorasyon kaliteli işçilik"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bölümü */}
      <section className="section-padding bg-[#c8a84e] text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projenizi <span className="text-[#2b2b2b]">Güvenilir Ellere</span> Bırakın
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            15 yıllık deneyim, kaliteli işçilik ve müşteri memnuniyeti ile 
            tadilat projelerinizde yanınızdayız.
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
              İletişime Geç
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}