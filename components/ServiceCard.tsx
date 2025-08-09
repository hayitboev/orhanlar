import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  alt: string;
}

export default function ServiceCard({ title, description, image, href, alt }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover-scale">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 dark-gray-text">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        <Link
          href={href}
          className="inline-flex items-center space-x-2 text-[#c8a84e] hover:text-[#b8985e] font-medium transition-colors"
        >
          <span>Detayları Gör</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}