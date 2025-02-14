
import React, { useState } from 'react';
import FloatingPetals from '../components/FloatingPetals';
import HeartButton from '../components/HeartButton';
import PhotoFrame from '../components/PhotoFrame';
import TypewriterText from '../components/TypewriterText';
import AnswerButtons from '../components/AnswerButtons';

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          </div>
        </section>

        {/* Message Section */}
        <section className="min-h-screen flex flex-col items-center justify-center text-center py-20">
          {showQuestion && !answered && (
            <div className="space-y-8 animate-fade-in">
              <h2 className="text-3xl md:text-5xl font-bold text-valentine-600">
                Will you be my girlfriend?
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Every moment with you makes my heart skip a beat. I can't imagine my life without your smile, your laugh, and your love.
              </p>
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
