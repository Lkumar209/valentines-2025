
import React, { useState } from 'react';
import FloatingPetals from '../components/FloatingPetals';
import HeartButton from '../components/HeartButton';
import PhotoFrame from '../components/PhotoFrame';
import TypewriterText from '../components/TypewriterText';
import AnswerButtons from '../components/AnswerButtons';
import ValentineCard from '../components/ValentineCard';
import { Heart } from 'lucide-react';

const Index = () => {
  const [showQuestion, setShowQuestion] = useState(false);
  const [answered, setAnswered] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 200 && !showQuestion) {
      setShowQuestion(true);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-valentine-50 to-white relative overflow-hidden">
      <FloatingPetals />
      
      {/* Background Hearts */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <Heart
            key={i}
            className={`absolute text-valentine-100 animate-drift-y`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              transform: `scale(${0.5 + Math.random()})`,
            }}
            size={32}
            fill="currentColor"
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center">
          <div className="space-y-6 animate-fade-in">
            <HeartButton />
            <h1 className="text-4xl md:text-6xl font-bold text-valentine-900 mt-8">
              <TypewriterText text="My Dearest..." />
            </h1>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <PhotoFrame
              src="/placeholder.svg"
              alt="Our first date"
              className="aspect-[4/5] animate-fade-up"
            />
            <PhotoFrame
              src="/placeholder.svg"
              alt="Sweet moments"
              className="aspect-[4/5] animate-fade-up delay-100"
            />
            <PhotoFrame
              src="/placeholder.svg"
              alt="Together forever"
              className="aspect-[4/5] animate-fade-up delay-200"
            />
            <PhotoFrame
              src="/placeholder.svg"
              alt="Our adventures"
              className="aspect-[4/5] animate-fade-up delay-300"
            />
          </div>
        </section>

        {/* Message Section */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center py-20">
          {showQuestion && !answered && (
            <div className="space-y-8 animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-bold text-valentine-600">
                Will you be my Valentine?
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Every moment with you makes my heart skip a beat. I can't imagine my life without your smile, your laugh, and your love.
              </p>
              <ValentineCard />
              <AnswerButtons onYesClick={() => setAnswered(true)} />
            </div>
          )}
          
          {answered && (
            <div className="animate-fade-in space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold text-valentine-500">
                I Love You! ❤️
              </h2>
              <p className="text-xl text-gray-600">
                Thank you for making me the happiest person alive!
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Index;
