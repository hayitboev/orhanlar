'use client';

import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from 'lucide-react';
import { useState } from 'react';
import type { Metadata } from 'next';

const metadata: Metadata = {
  title: 'İletişim | Orhanlar Dekorasyon - Ücretsiz Keşif ve Fiyat Teklifi',
  description: 'Orhanlar Dekorasyon ile iletişime geçin. Ümraniye tadilat, alçı boya, alçıpan, seramik işleri için ücretsiz keşif. 0555 555 55 55',
  keywords: 'Ümraniye tadilat iletişim, boyacı telefon, alçıpan ustası iletişim, seramik fiyat teklifi, ücretsiz keşif',
};

export default function Iletisim() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const services = [
    'Alçı Boya',
    'Alçıpan İşleri',
    'Seramik Fayans',
    'İç Dış Boya',
    'Anahtar Teslim Tadilat',
    'Komple Ev Tadilat',
    'Banyo Tadilat',
    'Mutfak Tadilat',
    'Diğer'
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Telefon',
      details: ['0555 555 55 55', '0216 xxx xx xx'],
      action: 'tel:+905555555555'
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'WhatsApp',
      details: ['0555 555 55 55', '7/24 Mesaj Atabilirsiniz'],
      action: 'https://wa.me/905555555555'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'E-posta',
      details: ['info@orhanlardekorasyon.com', 'orhan@orhanlardekorasyon.com'],
      action: 'mailto:info@orhanlardekorasyon.com'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Adres',
      details: ['Ümraniye, İstanbul', 'Çevre ilçeler hizmet veriyoruz'],
      action: null
    }
  ];

  const workingHours = [
    { day: 'Pazartesi - Cuma', hours: '08:00 - 18:00' },
    { day: 'Cumartesi', hours: '09:00 - 16:00' },
    { day: 'Pazar', hours: 'Randevu ile' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Formspree ile form gönderimi
      const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage('Mesajınız başarıyla gönderildi! En kısa sürede dönüş yapacağız.');
        setFormData({
          name: '',
          phone: '',
          email: '',
          service: '',
          message: ''
        });
      } else {
        setSubmitMessage('Mesaj gönderilirken bir hata oluştu. Lütfen telefon ile iletişime geçin.');
      }
    } catch (error) {
      setSubmitMessage('Mesaj gönderilirken bir hata oluştu. Lütfen telefon ile iletişime geçin.');
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Bölümü */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 section-padding">
        <div className="container-max text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 dark-gray-text leading-tight">
            <span className="gold-text">İletişim</span> ve Ücretsiz Keşif
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
            <strong>Ümraniye ve İstanbul genelinde</strong> tadilat, <strong>alçı boya, alçıpan, seramik</strong> 
            işleriniz için ücretsiz keşif ve fiyat teklifi alın. Deneyimli ekibimiz 7/24 hizmetinizde!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
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
          </div>
        </div>
      </section>

      {/* İletişim Bilgileri ve Form */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* İletişim Bilgileri */}
            <div>
              <h2 className="text-3xl font-bold mb-8 dark-gray-text">
                İletişim <span className="gold-text">Bilgileri</span>
              </h2>

              <div className="space-y-6 mb-8">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-[#c8a84e] rounded-full flex items-center justify-center text-white flex-shrink-0">
                      {contact.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold dark-gray-text mb-1">{contact.title}</h3>
                      <div className="space-y-1">
                        {contact.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className={`${detailIndex === 0 ? 'font-semibold text-[#c8a84e]' : 'text-gray-600'} text-sm`}>
                            {contact.action && detailIndex === 0 ? (
                              <a 
                                href={contact.action}
                                target={contact.action.startsWith('http') ? '_blank' : undefined}
                                rel={contact.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="hover:underline"
                              >
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Çalışma Saatleri */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-[#c8a84e] mr-3" />
                  <h3 className="text-lg font-semibold dark-gray-text">Çalışma Saatleri</h3>
                </div>
                <div className="space-y-2">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-gray-700">{schedule.day}</span>
                      <span className="font-semibold text-[#c8a84e]">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* İletişim Formu */}
            <div>
              <h2 className="text-3xl font-bold mb-8 dark-gray-text">
                <span className="gold-text">Ücretsiz</span> Teklif Alın
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium dark-gray-text mb-2">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8a84e] focus:border-transparent"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium dark-gray-text mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8a84e] focus:border-transparent"
                      placeholder="0555 555 55 55"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium dark-gray-text mb-2">
                    E-posta
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8a84e] focus:border-transparent"
                    placeholder="ornek@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium dark-gray-text mb-2">
                    Hizmet Türü
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8a84e] focus:border-transparent"
                  >
                    <option value="">Hizmet seçiniz</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium dark-gray-text mb-2">
                    Mesajınız *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8a84e] focus:border-transparent resize-vertical"
                    placeholder="Projeniz hakkında detayları yazınız (metrekare, hangi odalar, beklentileriniz vb.)"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary inline-flex items-center justify-center space-x-2 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                  <span>{isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}</span>
                </button>

                {submitMessage && (
                  <div className={`p-4 rounded-lg ${submitMessage.includes('başarıyla') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Harita */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 dark-gray-text">
              <span className="gold-text">Konum</span>
            </h2>
            <p className="text-lg text-gray-600">
              Ümraniye merkezi ve çevre ilçelerde hizmet vermekteyiz
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96748.52651892953!2d29.029167462109378!3d41.01923799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac82d4e04f857%3A0x3b8b28a52e9e76d7!2s%C3%9Cmraniye%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1699123456789!5m2!1str!2str"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Orhanlar Dekorasyon Ümraniye Konum"
            />
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              <strong>Hizmet Verdiğimiz Bölgeler:</strong><br />
              Ümraniye, Üsküdar, Beykoz, Çekmeköy, Sancaktepe, Ataşehir, Kadıköy ve çevre ilçeler
            </p>
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 dark-gray-text">
              Sık Sorulan <span className="gold-text">Sorular</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold dark-gray-text mb-2">
                Keşif ücretsiz mi?
              </h3>
              <p className="text-gray-700">
                Evet, tüm keşif hizmetlerimiz tamamen ücretsizdir. Evinize gelip detaylı inceleme yaparak 
                size en uygun çözümü ve net fiyatı sunuyoruz.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold dark-gray-text mb-2">
                Garanti süreniz ne kadar?
              </h3>
              <p className="text-gray-700">
                Tüm işçilik garantimiz 2 yıldır. Kullandığımız malzemelerin garanti süreleri değişkenlik gösterebilir. 
                Garanti kapsamında her türlü destek sağlıyoruz.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold dark-gray-text mb-2">
                Ödeme seçenekleri nelerdir?
              </h3>
              <p className="text-gray-700">
                Nakit, havale/EFT ve kredi kartı ile ödeme kabul ediyoruz. Büyük projelerde taksitli ödeme 
                imkanı da sunuyoruz. Detaylar için görüşelim.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold dark-gray-text mb-2">
                Hangi bölgelerde hizmet veriyorsunuz?
              </h3>
              <p className="text-gray-700">
                Ana merkez Ümraniye olmak üzere, Üsküdar, Beykoz, Çekmeköy, Sancaktepe, Ataşehir, 
                Kadıköy ve çevre ilçelerde hizmet vermekteyiz.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}