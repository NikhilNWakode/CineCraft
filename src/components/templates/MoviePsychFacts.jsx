import React, { useState, useEffect } from 'react';

const MovieFact = () => {
  const [fact, setFact] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const movieFacts = [
    "Did you know? Watching movies can activate the same neural networks in your brain as if you're experiencing the events yourself.",
    "Psychology Fact: Horror movies can trigger adrenaline, giving you a natural rush even while you're safe at home.",
    "Fun Fact: Studies show watching sad movies can actually make you happier by increasing oxytocin, the 'bonding hormone.'",
    "Did you know? Nostalgic movies can boost your mood by reconnecting you with positive memories.",
    "Psychology Fact: Watching a movie in a group can synchronize your heartbeats, enhancing emotional connection.",
    "Research says movies with plot twists and complex storylines stimulate your brain, enhancing problem-solving skills.",
    "Watching comedies has been shown to release dopamine, making you feel happier and less stressed.",
    "Studies show that people often empathize more with movie characters than real people due to emotional storytelling.",
    "Psychology Fact: Watching thrillers can increase your mental alertness by triggering the brain's fear response.",
    "Did you know? Watching movies in a foreign language can improve memory and language skills.",
    "Movies with strong visuals and color palettes can evoke specific emotions, influencing your mood subconsciously.",
    "Psychology Fact: People tend to relate more to flawed characters as they seem more authentic and human.",
    "Watching your favorite childhood movies can activate parts of the brain associated with comfort and familiarity.",
    "Movies can help you process complex emotions, giving a safe space to explore feelings like sadness and loss.",
    "Psychology Tip: Rewatching your favorite movies can be a form of self-care, helping you relax and de-stress.",
    "Did you know? Watching intense scenes in action movies can elevate your heart rate, like a mini cardio workout!",
    "Did you know? Watching suspenseful scenes in movies can activate the brain's amygdala, which is responsible for processing fear and emotions.",
    "Psychology Fact: Animated movies can reduce stress by engaging parts of the brain associated with play and relaxation.",
    "Fun Fact: Watching characters overcome challenges in movies can increase your resilience by boosting serotonin and dopamine.",
    "Did you know? Biographical movies can inspire personal growth by activating parts of the brain linked to empathy and self-reflection.",
    "Psychology Fact: Watching familiar movies can trigger the release of dopamine, as your brain enjoys the predictability and comfort of a known story.",
    "Studies show that people tend to imitate the emotions of characters in movies, leading to an increase in empathy and compassion.",
    "Did you know? Romantic movies can influence real-life perceptions of relationships, impacting your views on love and attachment.",
    "Psychology Tip: Rewatching specific scenes or quotes can act like a mini-therapy session, especially when they relate to your current emotions.",
    "Watching visually immersive movies can trigger mirror neurons, which help you 'feel' the character’s emotions and actions.",
    "Research says movies with uplifting endings can increase optimism, as your brain enjoys the resolution and emotional payoff.",
  ];

  const getRandomFact = () => {
    let newFact;
    do {
      const randomIndex = Math.floor(Math.random() * movieFacts.length);
      newFact = movieFacts[randomIndex];
    } while (newFact === fact); // Ensure the new fact is different from the current fact

    setFact(newFact);
    setIsVisible(false); // Hide the fact before updating
    setTimeout(() => setIsVisible(true), 400); // Show it after a short delay
  };

  useEffect(() => {
    getRandomFact(); // Set initial fact
    const interval = setInterval(getRandomFact, 5000); // Update fact every 10 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="flex items-center justify-center h-[100vh] bg-gradient-to-br from-gray-900 to-zinc-800 p-4">
     <div>
     <p className='text-white text-4xl font-serif font-semibold text-center mb-2'>Fun<span className='text-red-500'>Fact</span> </p>
     <h1
  className={`
    duration-500 font-serif ease-in-out text-2xl md:text-3xl lg:text-4xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-  to-purple-500 cursor-pointer transition-all
    ${isVisible ? 'opacity-100 ' : 'opacity-0 '}
  `}
  onClick={getRandomFact}
>
  {fact}
</h1>
     </div>
    </div>
  );
};

export default MovieFact;
